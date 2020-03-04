import styled from 'styled-components'
import media from 'styled-media-query'
import LocalizedLink from '../LocalizedLink'

export const HeaderWrapper = styled.div`
    background-color: var(--bg-light);
    ${media.greaterThan('large')`
    margin-bottom: var(--space);
    
  `}
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    max-width: var(--width-container);
    margin: 0 auto;
    justify-content: flex-start;
    align-items: center;
    padding: calc(var(--space) * 1.3) var(--space);
    position: relative;
    ${media.greaterThan('medium')`
    flex-direction: row;
  `}
    ${media.greaterThan('large')`
    padding: calc(var(--space)*1.3) var(--space-sm);
  `}
`

export const LogoLink = styled(LocalizedLink)`
    display: inline-block;
    margin-right: 0.5rem;
    width: 170px;
`

export const NavMenu = styled.div`
    width: 100%;

    margin-bottom: 10px;
    ${media.greaterThan('912px')`
    display: flex;
    flex-direction: row;
    align-items: center;
  `}
    ${media.greaterThan('medium')`
    margin-left: auto;
    width: auto;
  `}
`

export const NavWatsappPhone = styled.div`
    display: flex;
    justify-content: center;

    width: 280px;
    background: #fff;
    height: 140px;
    border-radius: 5px;

    ${media.greaterThan('medium')`

    
    flex-direction: row;
    height: 120px;
    margin-left: 52px;
    width: 350px;
  `}
`
