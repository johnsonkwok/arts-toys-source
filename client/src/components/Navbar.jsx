import React from 'react';
import Search from './Search.jsx';

const Navbar = ({ changeView, updateSearch }) => (
  <nav className="navbar navbar-light navbar-expand-lg sticky-top shadow-sm">
    <button className="navbar-brand" type="button" onClick={() => changeView('all')}>Art Toys Source</button>
    <div className="collapse navbar-collapse">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <button className="nav-link" type="button" onClick={() => changeView('collection')}>My Collection</button>
        </li>
        <li className="nav-item">
          <button className="nav-link" type="button" onClick={() => changeView('wishlist')}>Wishlist</button>
        </li>
      </ul>
    </div>
    <Search updateSearch={updateSearch} changeView={changeView} />
  </nav>
);

export default Navbar;
