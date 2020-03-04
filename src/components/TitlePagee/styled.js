import styled from 'styled-components'
import media from 'styled-media-query'

export const TitleElement = styled.h1`
    z-index: 99;
    position: relative;   
    font-size: 2.6rem;
    font-weight: bold;
    color: #fff;
    background: rgba(0,0,0,0.1);
    box-shadow: '0.5rem 0 0 #f40, -0.5rem 0 0 #f40';
                  
    margin-bottom: var(--space-lg);
    margin-left: 120px;
    top: -180px ;

    padding: calc(var(--space) * 1.3) var(--space);
    ${media.greaterThan('large')`
    padding: calc(var(--space)*1.3) var(--space-sm);
  `}

    ${media.greaterThan('medium')`
    line-height: 1.1;
    font-size: 3.5rem;
  `}

    ${media.greaterThan('large')`
    line-height: 1.1;
    font-size: 4rem;
  `}
`
