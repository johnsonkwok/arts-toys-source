import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
    };
  }

  render() {
    return (
      <div>
        <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-1" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-info my-2 my-sm-0" type="submit">&#187;</button>
        </form>
      </div>
    );
  }
}

export default Search;
