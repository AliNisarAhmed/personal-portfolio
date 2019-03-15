/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react";
import PropTypes from "prop-types";

import '../styles/index.scss';

import Header from "./header"

const Layout = ({ children }) => (
  <div className="container" id="app">
    <Header></Header>
    { children }
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
