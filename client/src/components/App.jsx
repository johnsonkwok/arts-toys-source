import React from 'react';
import Navbar from './Navbar.jsx';
import Summary from './Summary.jsx';
import ToyList from './ToyList.jsx';
import TopTen from './TopTen.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toys: [],
      view: 'all',
      search: '',
    };
    this.updateEstValue = this.updateEstValue.bind(this);
    this.updateEstValuesInDb = this.updateEstValuesInDb.bind(this);
    this.updateToyList = this.updateToyList.bind(this);
    this.updateSearch = this.updateSearch.bind(this);
    this.changeView = this.changeView.bind(this);
    this.changeStatus = this.changeStatus.bind(this);
  }

  componentDidMount() {
    fetch('/toys')
      .then(res => res.json())
      .then((toys) => {
        this.setState({
          toys,
        });
        return toys;
      })
      .then((toys) => {
        const toyPromises = [];
        toys.forEach((toy) => {
          toyPromises.push(this.updateEstValue(toy));
        });
        return Promise.all(toyPromises);
      })
      .then(() => {
        const currentToys = this.state.toys;
        this.updateEstValuesInDb(currentToys);
      })
      .catch(err => console.error(err));
  }

  updateEstValue(toy) {
    let tags = '';
    if (toy.tags === 'regular') {
      tags += '-chase -keychain -flocked -gitd -metallic -diamond -10';
    } else {
      tags += toy.tags;
    }
    if (toy.exclusive_to === 'common') {
      tags += ` -exclusive -SDCC -NYCC -ECCC -convention -LE ${toy.item_num}`;
    }
    const keywords = `${toy.name.replace(/[()&]/g, '')} ${toy.company} ${toy.type.replace(/[!]/g, '')} ${toy.property} ${tags} -lot -set -oob -loose -damage -signed -autograph`;
    return fetch(`/toys/item?keywords=${keywords}`)
      .then(res => res.json())
      .then(body => body.findCompletedItemsResponse[0].searchResult[0].item)
      .then((searchResults) => {
        let sumOfValues = 0;
        if (searchResults) {
          console.log(`${toy.name}: `,  searchResults);
          searchResults.forEach((result) => {
            let shippingCost = result.shippingInfo[0].shippingServiceCost;
            shippingCost = shippingCost ? Number(shippingCost[0]['__value__']) : 0;
            sumOfValues += Number(result.sellingStatus[0].currentPrice[0]['__value__']) + shippingCost;
          });
          sumOfValues /= searchResults.length;
        } else {
          sumOfValues = toy.est_value;
        }
        return Math.round(sumOfValues);
      })
      .then((estValue) => {
        toy.est_value = estValue;
        const updatedToys = this.state.toys;
        updatedToys[toy.id - 1] = toy;
        this.setState({ toys: updatedToys });
      })
      .catch(err => console.error(err));
  }

  updateEstValuesInDb(toys) {
    fetch('/toys', {
      method: 'PUT',
      body: JSON.stringify(toys),
      headers:{
        'Content-Type': 'application/json',
      },
    }).catch(err => console.error('Network Error:', err));
  }

  updateToyList() {
    fetch('/toys')
      .then(res => res.json())
      .then((toys) => {
        this.setState({
          toys,
        });
      })
      .catch(err => console.error(err));
  }

  updateSearch(e) {
    this.setState({ search: e.target.value });
  }

  changeStatus(property, toy) {
    const body = {
      propToChange: property,
      toy: toy,
    };
    fetch('/toy', {
      method: 'PUT',
      body: JSON.stringify(body),
      headers:{
        'Content-Type': 'application/json',
      },
    }).then(() => this.updateToyList())
      .catch(err => console.error('Network Error:', err));
  }

  changeView(view) {
    this.setState({ view });
  }

  render() {
    let toysToDisplay = this.state.toys;
    const searchVal = this.state.search.toLowerCase();
    if (this.state.view === 'collection') {
      toysToDisplay = toysToDisplay.filter(toy => toy.own);
    } else if (this.state.view === 'wishlist') {
      toysToDisplay = toysToDisplay.filter(toy => toy.want);
    } else if (this.state.view === 'search') {
      toysToDisplay = toysToDisplay.filter(({name, company, type, category, property, exclusive_to, tags}) => {
        return (name.toLowerCase().includes(searchVal) || company.toLowerCase().includes(searchVal) || type.toLowerCase().includes(searchVal) ||
          category.toLowerCase().includes(searchVal) || property.toLowerCase().includes(searchVal) || exclusive_to.toLowerCase().includes(searchVal) ||
          tags.toLowerCase().includes(searchVal));
      });
    }
    return (
      <div>
        <Navbar changeView={this.changeView} updateSearch={this.updateSearch} />
        <main>
          {/* <Summary /> */}
          <ToyList changeStatus={this.changeStatus} toys={toysToDisplay} />
          {/* <TopTen /> */}
        </main>
      </div>
    );
  }
}

export default App;
