// vendors
import styled from "styled-components";

// constants
import { MEDIA_QUERIES } from "../../utils/constants";

export const Wrapper = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column-reverse;
  max-width: ${(props) => props && props.theme.sizes.container};
  margin: 120px auto 3rem;
  background: ${(props) =>
    props &&
    `linear-gradient(
          ${props.theme.colors.primary},
          ${props.theme.colors.secondary}
        );`};
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.1);

  ${MEDIA_QUERIES.tablet} {
    flex-direction: row;
    height: 450px;
    margin-top: 0;
  }

  ${MEDIA_QUERIES.desktop} {
    border-radius: 6px;
  }
`;

export const Info = styled.div`
  padding: 0rem 2.5rem 3rem;
  text-align: center;

  ${MEDIA_QUERIES.tablet} {
    width: 45%;
    padding: 2rem 3rem;
    text-align: left;
  }
`;

export const Title = styled.h2`
  margin-top: 0;
  margin-bottom: 1rem;
  color: ${(props) => props && props.theme.colors.white};
  font-size: 32px;
  line-height: 1;

  ${MEDIA_QUERIES.landscape} {
    font-size: 48px;
  }
`;

export const Subtitle = styled.p`
  margin-bottom: 2rem;
  color: ${(props) => props && props.theme.colors.white};
  font-size: 1rem;
  font-weight: bold;

  ${MEDIA_QUERIES.landscape} {
    font-size: 1.1rem;
  }
`;

export const ImageBox = styled.div`
  position: relative;
  z-index: 1;
  top: -60px;
  width: 90%;
  height: 230px;

  ${MEDIA_QUERIES.tablet} {
    position: static;
    width: 55%;
    height: 450px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 6px;

  ${MEDIA_QUERIES.tablet} {
    border-radius: 0 6px 6px 0;
  }
`;
