// vendors
import styled from "styled-components";

// constants
import { MEDIA_QUERIES } from "../../constants";

const Wrapper = styled.section`
  position: relative;
  width: 95%;
  max-width: ${(props) => props && props.theme.sizes.container};
  margin: 0 auto 4rem;
`;

const TabsContainer = styled.div``;

const Tabs = styled.ul`
  display: flex;
  margin-bottom: 2rem;
  padding: 0;
  list-style-type: none;
`;

const TabItem = styled.li``;

const TabButton = styled.button`
  padding: 0.8rem 2rem;
  border: 0;
  border-bottom: ${(props) =>
    props && props.isActive
      ? `3px solid ${props.theme.colors.secondary}`
      : "0"};
  background: none;
  color: ${(props) =>
    props && props.isActive
      ? props.theme.colors.secondary
      : props.theme.colors.grayDark};
  font-weight: bold;
  outline: none;
  cursor: pointer;

  ${MEDIA_QUERIES.tablet} {
    font-size: 1.2rem;
  }
`;

const TabContent = styled.div`
  display: ${(props) => (props && props.isActive ? "block" : "none")};
`;

export { Wrapper, TabsContainer, Tabs, TabItem, TabButton, TabContent };
