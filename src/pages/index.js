import React from "react"

import Layout from "../components/layout"
import Name from '../components/Name';
import Terminal from "../components/Terminal";

import statements from '../content/about-me';

const IndexPage = () => (
  <Layout>
    <Name />
    <Terminal statements={statements}/>
  </Layout>
)

export default IndexPage
