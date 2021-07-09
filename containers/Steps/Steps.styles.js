// vendors
import styled from 'styled-components';

// constants
import { MEDIA_QUERIES } from '../../utils/constants';

export const Wrapper = styled.div`
  width: 95%;
  max-width: ${(props) => props && props.theme.sizes.container};
  margin: 0 auto 3rem;

  ${MEDIA_QUERIES.tablet} {
    margin-bottom: 6rem;
  }
`;
