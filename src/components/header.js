import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react";
import Navbar from "./Navbar";


const Header = ({ siteTitle }) => (
  <header>
    <Navbar />
    <p>Header Here</p>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
