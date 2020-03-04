import React from 'react'
import { graphql } from 'gatsby'
import TitlePage from '../components/TitlePage'
import SEO from '../components/seo'

import * as S from '../components/Content/styled'
import * as Ss from '../components/ListWrapper/styled'

const Page = props => {
    const post = props.data.markdownRemark

    return (
        <>
            <Ss.Containermain>
                <SEO
                    title={post.frontmatter.title}
                    description={post.frontmatter.description}
                    image={post.frontmatter.image}
                />
                <TitlePage text={post.frontmatter.title} />
                <S.Content>
                    <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
                </S.Content>
            </Ss.Containermain>
        </>
    )
}

export const query = graphql`
    query Page($locale: String!, $title: String!) {
        markdownRemark(
            frontmatter: { title: { eq: $title } }
            fields: { locale: { eq: $locale } }
        ) {
            frontmatter {
                title
                description
                image
            }
            html
        }
    }
`

export default Page
