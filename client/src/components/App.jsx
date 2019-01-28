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
    };
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

  render() {
    return (
      <div>
        <Navbar />
        <main>
          {/* <Summary /> */}
          <ToyList toys={this.state.toys} />
          {/* <TopTen /> */}
        </main>
      </div>
    );
  }
}

export default App;