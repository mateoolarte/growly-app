// vendors
import styled from 'styled-components';

// constants
import { MEDIA_QUERIES } from '../../utils/constants';

export const Container = styled.section`
  position: relative;
  width: 95%;
  max-width: ${(props) => props && props.theme.sizes.container};
  margin: 0 auto 2rem;
  padding-top: 1rem;
`;

export const LogoContainer = styled.a`
  display: block;
  width: 80%;
  margin-bottom: 2rem;
  text-decoration: none;
  cursor: pointer;

  ${MEDIA_QUERIES.landscape} {
    width: 20%;
  }

  svg {
    height: 50px;
  }
`;

export const Content = styled.div`
  text-align: center;
`;

export const IconContainer = styled.span`
  display: inline-block;
  margin-bottom: 1rem;

  ${MEDIA_QUERIES.tablet} {
    margin-bottom: 1.5rem;
  }

  svg {
    fill: ${(props) => props && props.theme.colors.yellow};
  }
`;

export const Heading = styled.h1`
  margin: 0;
  font-size: 36px;

  ${MEDIA_QUERIES.tablet} {
    font-size: 56px;
  }
`;

export const SubHeading = styled.h2`
  margin: 0;
  font-size: 20px;
  line-height: 1.2;

  ${MEDIA_QUERIES.tablet} {
    font-size: 28px;
  }
`;

export const Subtitle = styled.p`
  ${MEDIA_QUERIES.tablet} {
    font-size: 1.1.rem;
  }
`;

export const Description = styled.p`
  margin-bottom: 2rem;
  text-align: left;

  ${MEDIA_QUERIES.tablet} {
    font-size: 1.1.rem;
  }
`;

export const Actions = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  margin: 0 auto 6rem;

  ${MEDIA_QUERIES.tablet} {
    margin-bottom: 0;
  }

  button {
    margin-bottom: 1rem;
  }
`;
