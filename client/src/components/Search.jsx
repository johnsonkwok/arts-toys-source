import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toys: []
    };
  }

  render() {
    return (
      <div>
        <form>
          <input type="text" placeholder="Search" />
          <input type="submit" value="?" />
        </form>
      </div>
    );
  }
}

export default Search;
