import React from "react"

import Layout from "../components/layout"
import Name from '../components/Name';
import Terminal from "../components/Terminal";
import Projects from '../components/Projects';
import Contact from '../components/Contact';

import statements from '../content/about-me';
import projects from '../content/projects';
import contacts from '../content/contacts';

const IndexPage = () => (
  <Layout>
    <Name />
    <Terminal statements={statements}/>
    <Projects projects={projects}/>
    <Contact contacts={contacts}/>
  </Layout>
)

export default IndexPage
