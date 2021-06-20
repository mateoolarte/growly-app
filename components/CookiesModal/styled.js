// vendors
import styled from "styled-components";

// constants
import { MEDIA_QUERIES } from "../../utils/constants";

export const Wrapper = styled.div`
  position: fixed;
  z-index: 9999999999; /* To overlap tawk chat */
  bottom: 0;
  left: 50%;
  width: 100%;
  transform: translateX(-50%);
  background-color: ${(props) => props && props.theme.colors.white};
  box-shadow: 0 -6px 10px rgba(0, 0, 0, 0.1);
`;

export const Container = styled.div`
  max-width: 620px;
  margin: 0 auto;
  padding: 1rem;
`;

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
