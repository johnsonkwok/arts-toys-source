import React from 'react';
import Toolbar from './Toolbar.jsx';
import Summary from './Summary.jsx';
import ToyList from './ToyList.jsx';
import TopTen from './TopTen.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Toolbar />
        <Summary />
        <ToyList />
        <TopTen />
      </div>
    );
  }
}

export default App;