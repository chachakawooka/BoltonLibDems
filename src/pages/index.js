import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"

import Triangle from "@liberaldemocrats/triangles"
import Manifesto from '../components/manifesto'

class IndexPage extends React.Component {
  render() {
    const issues = this.props.data.allManifesto.edges

    return (
      <Layout>
        <Triangle />
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
                fluid(fit: COVER, maxWidth: 600, maxHeight: 600) {
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
  }
}
`