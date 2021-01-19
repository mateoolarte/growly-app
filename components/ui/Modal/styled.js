// vendors
import styled from "styled-components";

const Wrapper = styled.div`
  position: fixed;
  z-index: 3;
  top: 0;
  left: 0;
  display: ${(props) => (props && props.isActive ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
`;

const Container = styled.div`
  position: relative;
  width: 80%;
  max-width: 560px;
  padding: 2.5rem 1.5rem 1.5rem;
  border-radius: 5px;
  background-color: ${(props) => props && props.theme.colors.white};
`;

const BtnClose = styled.button`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  border: 0;
  background: none;
  font-size: 1.2rem;
  outline: none;
  cursor: pointer;
`;

export { Wrapper, Container, BtnClose };
