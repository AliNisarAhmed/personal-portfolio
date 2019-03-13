import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

export default function Projects({ data, projects }) {
  return (
    <section className="projects" id="projects">
      <h2 className="projects__heading">Projects</h2>
      <div className="projects__container">
        {projects.map(project => (
          <div className="projects__card">
            <Img fixed={data.zilch.childImageSharp.fixed} />
          </div>
        ))}
      </div>
    </section>
  )
}


export const query = graphql`
  query {
    zilch: file(relativePath: { eq: "zilch.jpg" }) {
      childImageSharp {
        fixed(width: 250, height: 250) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`