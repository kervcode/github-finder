import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Navbar extends Component {
  static defaultProps = {
    title:"GitHub Finder",
    icon:"fab fa-github"  
  }
  
  static propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
  }
  
  
  
  render() {
    return (
      <div className="bg-primary">
        <h1>
        <div className= {this.props.icon}></div> {this.props.title}
        </h1>
      </div>
    )
  }
}

export default Navbar
