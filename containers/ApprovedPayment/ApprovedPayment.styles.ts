import Link from 'next/link';
import styled from 'styled-components';

import { MEDIA_QUERIES } from '../../utils/constants';

const bgImg = '/images/hero-confirmacion-growly.jpg';

export const Wrapper = styled.main`
  ${MEDIA_QUERIES.landscape} {
    position: relative;
    background-image: url('${bgImg}');
    background-repeat: no-repeat;
    background-position: top center;
    background-size: 100%;
  }

  &::before {
    content: '';

    ${MEDIA_QUERIES.landscape} {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        ${(props) => props && props.theme.colors.lightGradient},
        ${(props) => props && props.theme.colors.white}
      );
    }
  }
`;

export const Container = styled.section`
  position: relative;
  width: 95%;
  max-width: ${(props) => props && props.theme.sizes.container};
  margin: 0 auto 2rem;
  padding-top: 1rem;
`;

export const LogoContainer = styled(Link)`
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
  svg {
    width: 75px;
    height: 75px;
  }
`;

export const Heading = styled.h2`
  margin: 0;
  font-size: 36px;

  ${MEDIA_QUERIES.tablet} {
    font-size: 56px;
  }
`;

export const SubHeading = styled.h1`
  margin: 0 0 2rem;
  color: ${(props) => props && props.theme.colors.secondary};
  font-size: 32px;

  ${MEDIA_QUERIES.tablet} {
    font-size: 48px;
  }
`;

export const Description = styled.p`
  margin-bottom: 4rem;
  line-height: 1.6;

  ${MEDIA_QUERIES.tablet} {
    font-size: 1.1.rem;
  }
`;

export const Actions = styled.div`
  text-align: center;
`;
