import styled from "styled-components";

// constants
import { MEDIA_QUERIES } from "../../constants";

export const Wrapper = styled.div`
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
