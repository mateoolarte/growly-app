// vendors
import styled from "styled-components";

// constants
import { MEDIA_QUERIES } from "../../../constants";

const Wrapper = styled.footer`
  max-width: ${(props) => props && props.theme.sizes.container};
  margin: 0 auto;
`;

const NavigationContainer = styled.div`
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

const Navigation = styled.ul`
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

const NavigationItem = styled.li`
  margin: 0.5rem 2rem;

  ${MEDIA_QUERIES.landscape} {
    margin: 1rem 2rem;
  }
`;

const NavigationLink = styled.a`
  color: ${(props) => props && props.theme.colors.terciary};
  font-size: 0.8rem;
  font-weight: bold;
  text-decoration: none;
  text-transform: uppercase;
  cursor: pointer;
`;

const SocialLinks = styled.ul`
  display: flex;
  align-items: center;
  margin-top: 0;
  margin-bottom: 0.8rem;
  padding: 0;
  list-style-type: none;
`;

const SocialLinksItem = styled.li`
  margin: 0.5rem;
`;

const SocialLinksIcon = styled.a`
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

const CopyrightContainer = styled.div`
  text-align: center;
`;

const Image = styled.img``;

const Copyright = styled.p`
  margin-top: 0;
  font-size: 0.8rem;
`;

export {
  Wrapper,
  NavigationContainer,
  Navigation,
  NavigationItem,
  NavigationLink,
  SocialLinks,
  SocialLinksItem,
  SocialLinksIcon,
  CopyrightContainer,
  Image,
  Copyright,
};
