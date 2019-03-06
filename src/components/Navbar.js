import React, { Component } from 'react'

export default class Navbar extends Component {
  componentDidMount() {
    this.navbar = React.createRef();
    console.log(this.navbar);
  }
  
  render() {
    return (
      <div>
        <nav ref={this.navbar}>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    )
  }
}
