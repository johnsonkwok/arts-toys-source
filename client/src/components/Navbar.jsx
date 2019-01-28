import React from 'react';
import Search from './Search.jsx';

const Navbar = () => (
  <nav className="navbar navbar-light navbar-expand-lg">
    <a className="navbar-brand" href="#">Art Toys Source</a>
    <div className="collapse navbar-collapse">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <a className="nav-link" href="#">My Collection</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Wishlist</a>
        </li>
      </ul>
    </div>
    <Search />
  </nav>
);

export default Navbar;
