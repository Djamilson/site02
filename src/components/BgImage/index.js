import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { css } from '@emotion/core'
const BgImage = props => {
    const data = useStaticQuery(graphql`
        query {
            placeholderImage: file(relativePath: { eq: "03.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 1240, quality: 99) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)

    const { altText, title } = props
    const styles = {
        marginTop: 0,
        width: '100%',
        height: '275px',
    }

    return (
        <>
            <Img
                style={styles}
                fluid={data.placeholderImage.childImageSharp.fluid}
                alt={altText}
                title={title}
            />

           
        </>
    )
}

export default BgImage
