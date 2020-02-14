import styled from 'styled-components';

import { Twitter } from 'styled-icons/boxicons-logos/Twitter'
import { FacebookCircle } from 'styled-icons/boxicons-logos/FacebookCircle'
import { Instagram } from 'styled-icons/boxicons-logos/Instagram'

export const SocialLinksList = styled.ul`
  display: flex;
  flex-direction: row;

  justify-content: center;
`;

export const SocialLinksItem = styled.li`
  display: block;
  margin-right: 1rem;
`;

export const SocialLinksLink = styled.a`
  display: block;
  width: 50px;
  color: var(--primary-color);
`;


export const WhiteTwitter = styled(Twitter)`
  color: #fff;
`

export const WhiteFacebookCircle = styled(FacebookCircle)`
  color: #fff;
`

export const WhiteInstagram = styled(Instagram)`
  color: #fff;
`
