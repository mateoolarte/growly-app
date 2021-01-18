// vendors
import styled from "styled-components";

const Wrapper = styled.section`
  position: relative;
  width: 95%;
  max-width: ${(props) => props && props.theme.sizes.container};
  margin: 0 auto 4rem;
`;

const TabsContainer = styled.div``;

const Tabs = styled.ul`
  display: flex;
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
  font-size: 1.2rem;
  font-weight: bold;
  outline: none;
  cursor: pointer;
`;

const TabContent = styled.div`
  display: ${(props) => (props && props.isActive ? "block" : "none")};
`;

export { Wrapper, TabsContainer, Tabs, TabItem, TabButton, TabContent };
