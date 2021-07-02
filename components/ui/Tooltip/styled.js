// vendors
import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  cursor: pointer;
`;

export const Box = styled.div`
  display: ${({ isActive }) => (isActive ? "block" : "none")};
  position: absolute;
  z-index: 1;
  top: -3.2rem;
  left: 50%;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transform: translateX(-50%);
  background-color: ${(props) => props && props.theme.colors.gray};
  font-size: 0.9rem;
`;
