import React from 'react';
import PropTypes from 'prop-types';

const Navbar = ({ title, icon }) =>  {
 
    return (
      <div className="bg-primary">
        <h1>
        <i className= {icon} /> {title}
        </h1>
      </div>
    )
}


Navbar.defaultProps = {
  title:"GitHub Finder",
  icon:"fab fa-github"  
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
}


export default Navbar
