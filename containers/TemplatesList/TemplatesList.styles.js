// vendors
import styled from 'styled-components';

export const Wrapper = styled.section`
  width: 95%;
  max-width: ${(props) => props && props.theme.sizes.container};
  margin: 0 auto 4rem;
`;

export const Heading = styled.h3`
  margin-bottom: 4rem;
  font-size: 28px;
  text-align: center;
`;
