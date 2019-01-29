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
    this.handleView = this.handleView.bind(this);
  }

  componentDidMount() {
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

  handleView(view) {
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
        <Navbar handleView={this.handleView} />
        <main>
          {/* <Summary /> */}
          <ToyList toys={toysToDisplay} />
          {/* <TopTen /> */}
        </main>
      </div>
    );
  }
}

export default App;