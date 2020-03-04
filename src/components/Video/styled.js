import Img from 'gatsby-image'

import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.section`
    display: flex;   
    justify-content: center;
    margin: -5% 0;
    margin-bottom: 30px;
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

export const Title = styled.h1`
    z-index: 2;
    font-size: 3em;
    text-transform: capitalize;
    font-weight: 600;
    position: absolute;
    width: 100%;
    max-width: ${props => props.theme.sizes.maxWidthCentered};
    padding: 0 1rem;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    color: white;
`

export const FooterWrapper = styled.div`
    margin-top: 3rem;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    background: linear-gradient(-90deg, #7159c1, #ab59c1);
    color: #fff;
    padding: calc(var(--space) * 1.3) var(--space);
`

export const FooterContainer = styled.div`
    width: 100%;
    max-width: var(--width-container);
    margin: 0 auto;
    padding: calc(var(--space) * 1.3) var(--space);

    ${media.greaterThan('large')`
    padding: calc(var(--space)*1.3) var(--space-sm);
  `}

    p {
        margin: 1rem 0;
    }
`

export const FooterContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: auto;

    ${media.greaterThan('medium')`
    flex-direction: row;
    justify-content: space-around;
    display: flex;   
    align-items: center;
  `}
`

export const FooterWatsapp = styled.div`
    display: flex;
`

export const FooterAddress = styled.div`
    display: flex;
    color: #999;
`
