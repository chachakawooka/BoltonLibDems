import Card from "@liberaldemocrats/card"
import React from "react"
import Img from "gatsby-image"
import styles from './manifesto.module.scss'
import Carousel from 'nuka-carousel'

class Manifesto extends React.Component {

    render(){
        const issues = this.props.issues;

        let slides = 3;
        if(typeof window !== 'undefined'){
            slides = Math.floor(window.innerWidth / 300) 
        }
        
        return(
            <div className={styles.manifesto}>
                <h2>National Policies</h2>
                <Carousel  slidesToShow={slides}  cellSpacing={20} >
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
            </Carousel>
          </div>
        )
    }
}

export default Manifesto