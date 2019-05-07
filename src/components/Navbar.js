import React, { Component } from "react";

export default class Navbar extends Component {
  componentDidMount() {
    this.navbar = React.createRef();
  }

  render() {
    return (
      <nav ref={this.navbar} className="nav">
        <div className="nav__item">
          <a href="#about">About</a>
        </div>
        <div className="nav__item">
          <a href="#projects">Projects</a>
        </div>
        <div className="nav__item">
          <a href="#contact">Contact</a>
        </div>
      </nav>
    );
  }
}
