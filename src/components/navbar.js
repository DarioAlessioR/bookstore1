import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Navbar = () => (
  <header className="headerbar">
    <nav className="nav">
      <div className="logo">
        <Link to="/">Bookstore CMS</Link>
      </div>
      <ul className="links">
        <li>
          <NavLink to="/books">Books</NavLink>
        </li>
        <li>
          <NavLink to="/categories">Categories</NavLink>
        </li>
      </ul>
      <div className="usericon">
        <i className="far fa-user" />
      </div>
    </nav>
  </header>
);

export default Navbar;

// <FontAwesomeIcon icon="far fa-user" />
