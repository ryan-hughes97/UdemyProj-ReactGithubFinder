import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// Link tags keep Home state in tact. An <a> tag would refresh home page upon return


const Navbar = ({ icon, title}) => {
  return (
    <div className="navbar bg-primary">
      <h1>
        <i className={icon}></i> {title}
      </h1>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
      </ul>
    </div>
  )
}

Navbar.defaultProps = {
  title: 'Github Finder',
  icon: 'fab fa-github'
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
}

// Application still works if it doesn't meet requirements, but will give a warning and let developer know what data type is intended

export default Navbar
