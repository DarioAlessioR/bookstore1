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
          <NavLink to="/books">BOOKS</NavLink>
        </li>
        <li>
          <NavLink to="/categories">CATEGORIES</NavLink>
        </li>
      </ul>
      <div className="usericon">
        <i className="fa-solid fa-circle-user" />
      </div>
    </nav>
  </header>
);

export default Navbar;
