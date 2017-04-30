import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props) => {

  return (
    <section className="navbar">
      <Link to='/list'>My List</Link>
      <Link to='/search'>Search</Link>
      <Link to='/logout'>Log out</Link>
    </section>
  )
}

export default Navbar;
