import React from 'react'
import { graphql } from 'gatsby'
import SEO from '../components/seo'
import PostItem from '../components/PostItem'
import TitlePage from '../components/TitlePage'
import LocalizedLink from '../components/LocalizedLink'
import useTranslations from '../components/useTranslations'
import BigImage from '../components/BgImage'
import Video from '../components/Video'

import TitlePagee from '../components/TitlePagee'
import * as Ss from '../components/ListWrapper/styled'

//limite de itens na home 4
//esta no fim da page

const Index = ({ data: { allMarkdownRemark } }) => {
    // useTranslations is aware of the global context (and therefore also "locale")
    // so it'll automatically give back the right translations
    const {
        hello,
        subline,
        category,
        latestPosts,
        allPosts,
    } = useTranslations()

    const postList = allMarkdownRemark.edges

    return (
        <>
            <Ss.ContainerBgImage>
                <BigImage
                    alText="Mons T. Cobblepot portrait"
                    title="Mons T. Cobblepot"
                />

                <TitlePagee text={'"Tudo vai da certo"'} />
            </Ss.ContainerBgImage>
            <Ss.Containermain>
                <Ss.VideoContainer>
                    <Video
                        videoSrcURL="https://www.youtube.com/embed/dQw4w9WgXcQ"
                        videoTitle="Official Music Video on YouTube"
                    />
                </Ss.VideoContainer>
                <br />
                <div className="homepage">
                    <SEO title="Home" />
                    <TitlePage text={hello} />
                    <p>{subline}</p>
                    <hr style={{ margin: `2rem 0` }} />
                    <h2>
                        <strong>{latestPosts}</strong>
                    </h2>
                    <br />
                    <Ss.ListWrapper>
                        {postList.map(
                            ({
                                node: {
                                    frontmatter: {
                                        background,
                                        category,
                                        date,
                                        description,
                                        title,
                                        image,
                                    },
                                    timeToRead,
                                    fields: { slug },
                                },
                            }) => (
                                <PostItem
                                    slug={`/blog/${slug}`}
                                    background={background}
                                    category={category}
                                    date={date}
                                    timeToRead={timeToRead}
                                    title={title}
                                    description={description}
                                    image={image}
                                />
                            )
                        )}
                    </Ss.ListWrapper>
                    <br />
                    <LocalizedLink to={`/blog/`}>
                        {' '}
                        &lt;&lt;{allPosts} &gt;&gt;
                    </LocalizedLink>
                </div>
            </Ss.Containermain>
        </>
    )
}

export default Index

//limite de itens na home 4

export const query = graphql`
      
    query Index($locale: String!, $dateFormat: String!, ) {

      allMarkdownRemark(
        filter: {
          fields: { locale: { eq: $locale } }
          fileAbsolutePath: {regex: "/(blog)\/.*\\.md$/"}
        }
        sort: { fields: [frontmatter___date], order: DESC }
        limit: 4
      ) {
        edges {
          node {
            frontmatter {
              title
              description
              category
              background
              image
              date(formatString: $dateFormat)
  
            }
            timeToRead
            fields {
              locale
              slug
            }
          }
        }      
    },
      
    
  }
`
