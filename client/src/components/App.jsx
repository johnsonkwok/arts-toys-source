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
    };
    this.updateToyList = this.updateToyList.bind(this);
    this.changeView = this.changeView.bind(this);
    this.changeStatus = this.changeStatus.bind(this);
  }

  updateToyList() {
    fetch('/toys')
      .then(res => res.json())
      .then((toys) => {
        this.setState({
          toys,
        });
      }).catch((err) => {
        console.error(err);
      });
  }

  componentDidMount() {
    this.updateToyList();
  }

  changeStatus(property, toy) {
    const body = {
      propToChange: property,
      toy: toy,
    };
    fetch('/toys', {
      method: 'PUT',
      body: JSON.stringify(body),
      headers:{
        'Content-Type': 'application/json',
      },
    }).then(() => this.updateToyList())
      .catch(error => console.error('Network Error:', error));
  }

  changeView(view) {
    this.setState({ view });
  }

  render() {
    let toysToDisplay = this.state.toys;
    if (this.state.view === 'collection') {
      toysToDisplay = toysToDisplay.filter(toy => toy.own);
    } else if (this.state.view === 'wishlist') {
      toysToDisplay = toysToDisplay.filter(toy => toy.want);
    }
    return (
      <div>
        <Navbar changeView={this.changeView} />
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
