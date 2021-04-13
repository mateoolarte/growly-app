// vendors
import styled from "styled-components";

// constants
import { MEDIA_QUERIES } from "../../constants";

export const Wrapper = styled.div``;

export const Title = styled.h3`
  margin-top: 0;
  text-align: center;
`;

export const Description = styled.p``;

export const Actions = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;

  ${MEDIA_QUERIES.tablet} {
    justify-content: center;
    flex-direction: row;
  }

  > * {
    margin: 0.5rem 0;

    ${MEDIA_QUERIES.tablet} {
      margin: 0 0.5rem;
    }
  }
`;
