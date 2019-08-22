import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"

import Triangle from "@liberaldemocrats/triangles"
import Logo from "@liberaldemocrats/logo"
import Manifesto from '../components/manifesto'
import Blogs from '../components/blogs'

class IndexPage extends React.Component {
  render() {
    const issues = this.props.data.allManifesto.edges
    const blogs = this.props.data.allWordpressPost.edges
    
    return (
      <Layout>
        <Triangle 
        background={
            <Img fluid={this.props.data.file.childImageSharp.fluid} />
        }
        bottom={<Logo strap="DEMAND BETTER" />}
        />
        <Blogs blogs={blogs} />
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
  },

  allWordpressPost(limit: 4) {
    edges {
      node {
        id
        featured_media {
          id
          localFile {
            childImageSharp {
              fluid(fit: COVER, maxWidth: 400, maxHeight: 200) {
                  src
                  srcSet
                  sizes
                  aspectRatio
                  base64
              }
            }
          }
        }
        excerpt
        title
        link
      }
    }
  }
  
}
`