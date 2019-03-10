import PropTypes from "prop-types"
import React from "react";
import Navbar from "./Navbar";


const Header = ({ siteTitle }) => (
  <header className="navContainer">
    <Navbar />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
