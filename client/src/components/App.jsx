import React from 'react';
import Toolbar from './Toolbar.jsx';
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
        <Toolbar />
        {/* <Summary /> */}
        <ToyList toys={this.state.toys} />
        {/* <TopTen /> */}
      </div>
    );
  }
}

export default App;