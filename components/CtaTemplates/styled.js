// vendors
import styled from "styled-components";

// constants
import { MEDIA_QUERIES } from "../../constants";

const Wrapper = styled.section`
  width: 95%;
  max-width: ${(props) => props && props.theme.sizes.container};
  margin: 0 auto 3rem;
  text-align: center;

  ${MEDIA_QUERIES.landscape} {
    margin-bottom: 5rem;
  }
`;

const Title = styled.h3`
  margin-top: 0;
  margin-bottom: 0.5rem;
  font-size: 28px;

  ${MEDIA_QUERIES.tablet} {
    font-size: 36px;
  }

  ${MEDIA_QUERIES.desktopXL} {
    font-size: 48px;
  }
`;

const Description = styled.p`
  margin-top: 0;
  margin-bottom: 1rem;
  font-weight: bold;

  ${MEDIA_QUERIES.tablet} {
    font-size: 1.1rem;
  }

  ${MEDIA_QUERIES.desktopXL} {
    font-size: 1.2rem;
  }
`;

export { Wrapper, Title, Description };
