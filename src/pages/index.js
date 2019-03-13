import React from "react"

import Layout from "../components/layout"
import Name from '../components/Name';
import Terminal from "../components/Terminal";
import Projects from '../components/Projects';

import statements from '../content/about-me';
import projects from '../content/projects';

const IndexPage = () => (
  <Layout>
    <Name />
    <Terminal statements={statements}/>
    <Projects projects={projects}/>
  </Layout>
)

export default IndexPage
