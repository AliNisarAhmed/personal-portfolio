import React from "react";
import Img from "gatsby-image";
import { StaticQuery, graphql } from "gatsby";

export default function Image(props) {
  return (
    <StaticQuery
      query={graphql`
        query {
          images: allFile {
            edges {
              node {
                relativePath
                name
                childImageSharp {
                  sizes(maxWidth: 400) {
                    ...GatsbyImageSharpSizes
                  }
                }
              }
            }
          }
        }
      `}
      render={data => {
        const image = data.images.edges.find(n => {
          return n.node.relativePath.includes(props.filename);
        });
        if (!image) {
          return null;
        }
        const imageSizes = image.node.childImageSharp.sizes;
        return (
          <Img alt={props.alt} sizes={imageSizes} className="modal__image" />
        );
      }}
    />
  );
}
