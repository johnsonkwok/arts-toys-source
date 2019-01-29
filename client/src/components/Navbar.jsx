import React from 'react';
import Search from './Search.jsx';

const Navbar = ({ handleView }) => (
  <nav className="navbar navbar-light navbar-expand-lg">
    <button className="navbar-brand" type="button" onClick={() => handleView('all')}>Art Toys Source</button>
    <div className="collapse navbar-collapse">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <button className="nav-link" type="button" onClick={() => handleView('collection')}>My Collection</button>
        </li>
        <li className="nav-item">
          <button className="nav-link" type="button" onClick={() => handleView('wishlist')}>Wishlist</button>
        </li>
      </ul>
    </div>
    <Search />
  </nav>
);

export default Navbar;
