import React from 'react'
import useTranslations from '../useTranslations'
import SocialLinks from '../SocialLinks'

import WatsappPhone from '../WatsappPhone'

import * as S from './styled'

const Footer = () => {
    const {
        aboutProject,
        seeMorePWA,
        maintainedBy,
        contributeMessage,
    } = useTranslations()

    return (
        <S.FooterWrapper>
            <S.FooterContainer>
                <SocialLinks />
                <p>
                    {aboutProject}{' '}
                    <a
                        href="https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps"
                        target="_blank"
                    >
                        {seeMorePWA}
                    </a>
                    .
                </p>
                <p>
                    {maintainedBy}{' '}
                    <a
                        href="https://twitter.com/_djamilsonalves"
                        target="_blank"
                    >
                        @_djamilson
                    </a>
                    . {contributeMessage}{' '}
                    <a
                        href="https://github.com/Djamilson/site02.git"
                        target="_blank"
                    >
                        Github
                    </a>
                    .
                </p>
            </S.FooterContainer>

            <S.FooterContent>
                <S.FooterWatsapp>
                    <WatsappPhone />
                </S.FooterWatsapp>
                <S.FooterAddress>
                    <a
                        href="https://github.com/ryanwiemer/gatsby-starter-gcn"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        djamilson
                    </a>{' '}
                    by{' '}
                    <a
                        href="https://github.com/ryanwiemer"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        @ryanwiemer
                    </a>
                </S.FooterAddress>
            </S.FooterContent>
        </S.FooterWrapper>
    )
}

export default Footer
