import PropTypes from "prop-types"
import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"

import styles from './blogs.module.scss'

class Blogs extends React.Component {

    goto(url) {
        if(typeof window !== 'undefined'){
            window.location = url
        }
        
    }
    render() {

        return (
            <section className={styles.blogSection}>
                <h2>Latest News</h2>
                <div className={styles.blogs}>
                    {this.props.blogs.map(({ node }) => (
                        <article onClick={() => { this.goto(node.link) }}>
                            <div className={styles.postImage}>
                                <div className={styles.imageWrapper}>
                                    <Img
                                        fluid={node.featured_media.localFile.childImageSharp.fluid}
                                    />
                                </div>
                            </div>
                            <div className={styles.postDetails}>
                                <h1>{node.title}</h1>
                                <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
                            </div>

                        </article>
                    ))}
                </div>
            </section>
        )
    }
}


export default Blogs
