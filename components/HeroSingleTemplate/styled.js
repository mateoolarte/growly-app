// vendors
import styled from "styled-components";

const Wrapper = styled.section`
  position: relative;
  width: 95%;
  max-width: ${(props) => props && props.theme.sizes.container};
  margin: 0 auto 4rem;
  padding-top: 120px;
`;

const TopActions = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Container = styled.div``;

const ImageContainer = styled.div``;

const InfoContainer = styled.div``;

export { Wrapper, TopActions, Container, ImageContainer, InfoContainer };
