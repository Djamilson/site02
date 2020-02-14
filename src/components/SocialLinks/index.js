import React from 'react'

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
                    <S.WhiteInstagram />                    
                </S.SocialLinksLink>
            </S.SocialLinksItem>
            <S.SocialLinksItem>
                <S.SocialLinksLink
                    href="https://twitter.com/_djamilson"
                    title="Twitter"
                    target="_blank"
                >
                    <S.WhiteTwitter />
                </S.SocialLinksLink>
            </S.SocialLinksItem>
            <S.SocialLinksItem>
                <S.SocialLinksLink
                    href="https://twitter.com/_djamilson"
                    title="Facebook"
                    target="_blank"
                >
                    <S.WhiteFacebookCircle />
                </S.SocialLinksLink>
            </S.SocialLinksItem>
        </S.SocialLinksList>
    )
}

export default SocialLinks
