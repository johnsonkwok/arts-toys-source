import React from 'react';

const Search = ({ updateSearch, changeView }) => (
  <div>
    <div className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-1" type="search" placeholder="Search" onChange={updateSearch} />
      <button className="btn btn-outline-info my-2 my-sm-0" type="button" onClick={() => changeView('search')}>&#187;</button>
    </div>
  </div>
);

export default Search;
