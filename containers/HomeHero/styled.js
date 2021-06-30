// vendors
import styled from "styled-components";

// constants
import { MEDIA_QUERIES } from "../../utils/constants";

const Wrapper = styled.section`
  position: relative;
  padding-top: 90px;
  margin-bottom: 4rem;
  transition: all 0.45s ease-in-out;
  background-repeat: no-repeat;
  background-size: cover;

  ${MEDIA_QUERIES.landscape} {
    margin-bottom: 0;
  }

  ${MEDIA_QUERIES.desktop} {
    min-height: 600px;
    margin-bottom: 4rem;
  }

  &:before {
    content: "";
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
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  position: relative;
  z-index: 1;
  width: 95%;
  max-width: ${(props) => props && props.theme.sizes.container};
  margin: 0 auto;
  padding: 2rem 0;

  ${MEDIA_QUERIES.landscape} {
    flex-wrap: nowrap;
    padding: 3rem 0;
  }
`;

const Info = styled.div`
  width: 100%;
  margin-bottom: 3.5rem;
  text-align: center;

  ${MEDIA_QUERIES.landscape} {
    width: 50%;
    margin-right: 2rem;
    margin-bottom: 0;
    text-align: left;
  }
`;

const Heading = styled.h1`
  margin: 0;
  font-size: 36px;
  line-height: 1;

  ${MEDIA_QUERIES.tablet} {
    margin-bottom: 1rem;
    font-size: 52px;
  }

  ${MEDIA_QUERIES.landscape} {
    margin: 0;
  }

  ${MEDIA_QUERIES.desktopXL} {
    font-size: 72px;
  }
`;

const Subtitle = styled.h2`
  margin-top: 0;
  margin-bottom: 1rem;
  color: ${(props) => props && props.theme.colors.secondary};
  font-size: 24px;

  ${MEDIA_QUERIES.tablet} {
    font-size: 28px;
  }

  ${MEDIA_QUERIES.landscape} {
    margin: 0;
  }

  ${MEDIA_QUERIES.desktopXL} {
    font-size: 36px;
  }
`;

const Description = styled.p`
  display: none;
  margin-top: 0;
  margin-bottom: 2rem;
  line-height: 1.4;

  ${MEDIA_QUERIES.landscape} {
    display: block;
  }

  ${MEDIA_QUERIES.desktopXL} {
    font-size: 1.2rem;
  }
`;

const Gallery = styled.div`
  width: 100%;

  .slick-dots li button:before {
    color: ${(props) => props && props.theme.colors.terciary};
    font-size: 1.2rem;
    opacity: 0.45;
  }

  .slick-dots li.slick-active button:before {
    opacity: 1;
  }

  ${MEDIA_QUERIES.landscape} {
    width: 50%;
  }
`;

const SlideContainer = styled.div`
  text-align: center;
`;

const SlideImage = styled.img`
  max-width: 100%;
  margin: 0 auto;
`;

export {
  Wrapper,
  Container,
  Info,
  Heading,
  Subtitle,
  Description,
  Gallery,
  SlideContainer,
  SlideImage,
};
