// vendors
import styled from 'styled-components';

// constants
import { MEDIA_QUERIES } from '../../utils/constants';

const Wrapper = styled.section`
  position: relative;
  width: 95%;
  max-width: ${(props) => props && props.theme.sizes.container};
  margin: 0 auto 4rem;
  text-align: center;
`;

const Icon = styled.span`
  display: block;
  margin-bottom: 1rem;
`;

const Title = styled.h3`
  margin: 0;
  font-size: 28px;

  ${MEDIA_QUERIES.desktop} {
    font-size: 48px;
  }
`;

const Subtitle = styled.p`
  margin-top: 0;
  margin-bottom: 1rem;
  font-weight: bold;

  ${MEDIA_QUERIES.desktop} {
    margin-bottom: 2rem;
    font-size: 1.2rem;
  }
`;

const Description = styled.p``;

export { Wrapper, Icon, Title, Subtitle, Description };
