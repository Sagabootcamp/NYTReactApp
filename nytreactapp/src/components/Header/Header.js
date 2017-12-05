import React, { Component } from 'react';
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <div className="Head">
          <div className = "jumbotron">
              <h1>New York Times Article Scrubber</h1>
              <h2>Search for and annotate articles of interest!</h2>
          </div>
      </div> 
    );
  }
}

export default Header;