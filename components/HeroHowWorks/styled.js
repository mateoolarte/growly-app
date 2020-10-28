// vendors
import styled from "styled-components";

// constants
import { MEDIA_QUERIES } from "../../constants";

const Wrapper = styled.section`
  position: relative;
  padding-top: 120px;
  margin-bottom: 3rem;
  background-image: url(${require("../../assets/bg-how-works.jpg")});
  background-repeat: no-repeat;
  background-size: cover;

  ${MEDIA_QUERIES.tablet} {
    display: flex;
    align-items: center;
    height: 400px;
    padding: 0;
    margin-bottom: 4rem;
  }

  ${MEDIA_QUERIES.landscape} {
    height: 500px;
  }

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(255, 255, 255, 0.4), #fff);
  }
`;

const Container = styled.div`
  position: relative;
  z-index: 1;
  width: 95%;
  max-width: ${(props) => props && props.theme.sizes.container};
  margin: 0 auto;
  text-align: center;
`;

const Heading = styled.h1`
  margin: 0;
  margin-bottom: 0.5rem;
  font-size: 36px;
  line-height: 1;

  ${MEDIA_QUERIES.tablet} {
    font-size: 56px;
  }

  ${MEDIA_QUERIES.desktopXL} {
    font-size: 72px;
  }
`;

const Description = styled.p`
  ${MEDIA_QUERIES.tablet} {
    width: 80%;
    margin: 0 auto;
  }
`;

export { Wrapper, Container, Heading, Description };
