import styled from 'styled-components'
import media from 'styled-media-query'

export const WatsappPhone = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 350px;    
    margin-left: var(--space);
    ${media.greaterThan('medium')`
    flex-direction: row;
  `}
`

export const NavWatsappPhone = styled.div`
    strong {
        font-size: 22px;
        font-weight: bold;
    }

    h1 {
        font-size: 13.5px;
        font-weight: normal;
    }

    h2 {
        font-size: 20px;
        font-weight: bold;
    }
`

export const ImageWatsapp = styled.img`
    height: 56px;
    width: 56px;
    border-radius: 50%;
    border: none;
    margin-right: 15px;
`
