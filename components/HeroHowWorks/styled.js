// vendors
import styled from "styled-components";

// constants
import { MEDIA_QUERIES } from "../../utils/constants";

// assets
const bgHowWorks = "/images/bg-how-works.jpg";

const Wrapper = styled.section`
  position: relative;
  padding-top: 120px;
  padding-bottom: 3rem;
  background-image: url("${bgHowWorks}");
  background-repeat: no-repeat;
  background-size: cover;

  ${MEDIA_QUERIES.tablet} {
    padding-top: 160px;
    padding-bottom: 4rem;
  }

  ${MEDIA_QUERIES.landscape} {
    padding-top: 200px;
    padding-bottom: 6rem;
  }

  ${MEDIA_QUERIES.landscape} {
    padding-top: 220px;
    padding-bottom: 8rem;
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

const SubHeading = styled.h3`
  font-size: 28px;
`;

export { Wrapper, Container, Heading, Description, SubHeading };
