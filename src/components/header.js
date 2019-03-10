import PropTypes from "prop-types"
import React from "react";
import Navbar from "./Navbar";


const Header = ({ siteTitle }) => (
  <header>
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
