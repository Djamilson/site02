import React from 'react'

import { Twitter } from 'styled-icons/boxicons-logos/Twitter'
import { FacebookCircle } from 'styled-icons/boxicons-logos/FacebookCircle'
import { Instagram } from 'styled-icons/boxicons-logos/Instagram'
import { Github } from 'styled-icons/boxicons-logos/Github'

import * as S from './styled'

const SocialLinks = () => {
    return (
        <S.SocialLinksList>
            <S.SocialLinksItem>
                <S.SocialLinksLink
                    href="https://github.com/djamilson/iceberg-gatsby-multilang"
                    title="Instagram"
                    target="_blank"
                >
                    <Instagram />
                </S.SocialLinksLink>
            </S.SocialLinksItem>
            <S.SocialLinksItem>
                <S.SocialLinksLink
                    href="https://twitter.com/_djamilson"
                    title="Twitter"
                    target="_blank"
                >
                    <Twitter />
                </S.SocialLinksLink>
            </S.SocialLinksItem>
            <S.SocialLinksItem>
                <S.SocialLinksLink
                    href="https://twitter.com/_djamilson"
                    title="Facebook"
                    target="_blank"
                >
                    <FacebookCircle />
                </S.SocialLinksLink>
            </S.SocialLinksItem>
        </S.SocialLinksList>
    )
}

export default SocialLinks
