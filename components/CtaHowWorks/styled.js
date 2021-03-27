// vendors
import styled from "styled-components";

// constants
import { MEDIA_QUERIES } from "../../constants";

const Wrapper = styled.section``;

const Container = styled.div`
  width: 95%;
  max-width: ${(props) => props && props.theme.sizes.container};
  margin: 0 auto;
  text-align: center;
`;

const Title = styled.h2`
  margin-top: 0;
  margin-bottom: 0.5rem;
  font-size: 28px;
  line-height: 1;

  ${MEDIA_QUERIES.tablet} {
    font-size: 36px;
  }

  ${MEDIA_QUERIES.desktopXL} {
    font-size: 48px;
  }
`;

const Description = styled.p`
  margin-top: 0;
  margin-bottom: 1.5rem;
  font-size: 0.9rem;
  font-weight: bold;

  ${MEDIA_QUERIES.tablet} {
    font-size: 1rem;
  }
`;

const Actions = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  margin: 0 auto;

  button {
    margin-bottom: 1rem;
  }
`;

const Image = styled.div`
  position: relative;
  height: 350px;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;

  ${MEDIA_QUERIES.desktop} {
    height: 450px;
  }

  ${MEDIA_QUERIES.desktopXL} {
    height: 600px;
  }

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(#fff, rgba(255, 255, 255, 0.4));
  }
`;

export { Wrapper, Container, Title, Description, Actions, Image };
