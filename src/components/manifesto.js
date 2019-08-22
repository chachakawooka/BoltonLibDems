import Card from "@liberaldemocrats/card"
import React from "react"
import Img from "gatsby-image"
import styles from './manifesto.module.scss'

class Manifesto extends React.Component {

    render(){
        const issues = this.props.issues;
        return(
            <div className={styles.manifesto}>
            {issues.map(({ node }) => (
              <Card
                img={
                  <Img
                  fluid={node.fields.localFile.childImageSharp.fluid} 
                  />
                }
                onClick={function () { alert('clicked') }}
                hovertext={node.subTitle}
                linktext={node.title} />
            ))}
          </div>
        )
    }
}

export default Manifesto