// vendors
import styled from 'styled-components';
import Image from 'next/image';

// constants
import { MEDIA_QUERIES } from '../../../utils/constants';

// assets
const bgPattern = '/images/bg-pattern.png';

export const Wrapper = styled.footer`
  max-width: ${(props) => props && props.theme.sizes.container};
  margin: 0 auto;
  padding-bottom: 2rem;

  ${MEDIA_QUERIES.tablet} {
    background-image: url('${bgPattern}');
    background-position: center 15%;
    background-size: 100%;
    background-repeat: no-repeat;
  }
`;

export const NavigationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  margin-bottom: 1rem;
  border-bottom: 1px solid ${(props) => props && props.theme.colors.secondary};

  ${MEDIA_QUERIES.landscape} {
    flex-direction: row;
  }
`;

export const Navigation = styled.ul`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 0;
  margin-bottom: 0.8rem;
  padding: 0;
  list-style-type: none;

  ${MEDIA_QUERIES.tablet} {
    flex-direction: row;
  }
`;

export const NavigationItem = styled.li`
  margin: 0.5rem 2rem;

  ${MEDIA_QUERIES.landscape} {
    margin: 1rem 2rem;
  }
`;

export const NavigationLink = styled.a`
  color: ${(props) => props && props.theme.colors.terciary};
  font-size: 0.8rem;
  font-weight: bold;
  text-decoration: none;
  text-transform: uppercase;
  cursor: pointer;
`;

export const SocialLinks = styled.ul`
  display: flex;
  align-items: center;
  margin-top: 0;
  margin-bottom: 0.8rem;
  padding: 0;
  list-style-type: none;
`;

export const SocialLinksItem = styled.li`
  margin: 0.5rem;
`;

export const SocialLinksIcon = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background: ${(props) =>
    props &&
    `linear-gradient(
          ${props.theme.colors.primary},
          ${props.theme.colors.secondary}
        );`};
  cursor: pointer;
`;

export const CopyrightContainer = styled.div`
  text-align: center;
`;

export const Logo = styled(Image)``;

export const Copyright = styled.p`
  margin: 0;
  font-size: 0.8rem;
`;
