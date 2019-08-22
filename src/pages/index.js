import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"

import Triangle from "@liberaldemocrats/triangles"
import Logo from "@liberaldemocrats/logo"
import Manifesto from '../components/manifesto'

class IndexPage extends React.Component {
  render() {
    const issues = this.props.data.allManifesto.edges
    
    return (
      <Layout>
        <Triangle 
        background={
            <Img fluid={this.props.data.file.childImageSharp.fluid} />
        }
        bottom={<Logo strap="DEMAND BETTER" />}
        />
        <Manifesto issues={issues} />
      </Layout>
    )

  }
}

export default IndexPage

export const query = graphql`
query Manifesto {
  allManifesto {
    edges {
      node {
        id
        image
        title
        subTitle
        fields{
          localFile {
              childImageSharp {
                fluid(fit: COVER, maxWidth: 400, maxHeight: 300) {
                    src
                    srcSet
                    sizes
                    aspectRatio
                    base64
                }
            }
          } 
        }
      }
    }
  },

    file(relativePath: {eq: "bolton.jpeg"}) {
      childImageSharp {
        fluid(fit: COVER, maxWidth: 1200, maxHeight: 600) {
            src
            srcSet
            sizes
            aspectRatio
            base64
        }
      }
    }
  
}
`