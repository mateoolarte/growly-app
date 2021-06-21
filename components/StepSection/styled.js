// vendors
import styled from "styled-components";

// constants
import { MEDIA_QUERIES } from "../../utils/constants";
export const Wrapper = styled.article`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 3rem;

  ${MEDIA_QUERIES.tablet} {
    flex-direction: ${(props) =>
      props && props.isReverse ? "row-reverse" : "row"};
    margin-bottom: 4rem;
  }

  ${MEDIA_QUERIES.desktopXL} {
    margin-bottom: 6rem;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  margin-bottom: 2rem;
  text-align: center;

  ${MEDIA_QUERIES.tablet} {
    width: 50%;
    padding: 0 1rem;
    margin-bottom: 0;
  }

  ${MEDIA_QUERIES.landscape} {
    width: 55%;
  }
`;

export const Cover = styled.img`
  max-width: 100%;
`;

export const Info = styled.div`
  width: 100%;
  text-align: center;

  ${MEDIA_QUERIES.tablet} {
    width: 50%;
    padding: 0 1rem;
    text-align: left;
  }

  ${MEDIA_QUERIES.landscape} {
    width: 45%;
  }
`;

export const StepNum = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  margin-bottom: 1rem;
  border-radius: 50%;
  background-color: ${(props) => props && props.theme.colors.primary};
  color: ${(props) => props && props.theme.colors.white};
  font-size: 2rem;
  font-weight: bold;
  line-height: 1;

  ${MEDIA_QUERIES.landscape} {
    width: 70px;
    height: 70px;
    font-size: 3rem;
  }

  ${MEDIA_QUERIES.desktopXL} {
    width: 90px;
    height: 90px;
    font-size: 4rem;
  }
`;

export const Title = styled.h2`
  margin-top: 0;
  margin-bottom: 0.5rem;
  font-size: 28px;
  line-height: 1;

  ${MEDIA_QUERIES.landscape} {
    font-size: 36px;
  }

  ${MEDIA_QUERIES.desktopXL} {
    font-size: 48px;
  }
`;

export const Description = styled.p`
  margin: 0;
`;
