import styled from 'styled-components'
import media from 'styled-media-query'
import Img from 'gatsby-image'

export const VideoContainer = styled.div`
    display: flex;
    flex-direction: center;
    justify-content: center;

    width: 100%;
    max-width: var(--width-container);
    margin: 0 auto;
    padding: calc(var(--space) * 1.3) var(--space);
    ${media.greaterThan('large')`
    padding: calc(var(--space)*1.3) var(--space-sm);
`}
`

export const Containermain = styled.div`
    width: 100%;
    max-width: var(--width-container);
    margin: 0 auto;
    padding: calc(var(--space) * 1.3) var(--space);
    ${media.greaterThan('large')`
    padding: calc(var(--space)*1.3) var(--space-sm);
  `}
`

export const ContainerBgImage = styled.div`
    width: 100%;
    margin: -20px auto;
`

export const ListWrapper = styled.section`
    margin-bottom: 20px;
    ${media.greaterThan('small')`
        display: grid;
        grid-gap: 20px;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    `}
    ${media.greaterThan('large')`
        grid-template-columns: repeat(auto-fit, minmax(250px, calc(50% - 10px)));
    `}
`

export const BgImg = styled(Img)`
    position: absolute;
    width: 100%;
    height: 100%;
    &::before {
        content: '';
        background: rgba(0, 0, 0, 0.25);
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        height: 100%;
        width: 100%;
        z-index: 1;
    }
`
