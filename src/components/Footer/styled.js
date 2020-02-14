import styled from 'styled-components'
import media from 'styled-media-query'

export const FooterWrapper = styled.div`
    margin-top: 3rem;
    border-top: 1px solid rgba(0, 0, 0, 0.1);

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
