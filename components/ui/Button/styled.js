// vendors
import styled from "styled-components";

export const ContainerBtn = styled.button`
  display: inline-block;
  padding: ${(props) => props && props.theme.sizes.space4}
    ${(props) => props && props.theme.sizes.space1};
  border: ${(props) =>
    props && props.white ? `1px solid ${props.theme.colors.secondary}` : 0};
  border-radius: ${(props) => props && props.theme.sizes.space1};
  background: ${(props) =>
    props && props.white
      ? `${props.theme.colors.white}`
      : `
        linear-gradient(
          ${props.theme.colors.primary},
          ${props.theme.colors.secondary}
        );
  `};
  color: ${(props) =>
    props && props.white
      ? `${props.theme.colors.secondary}`
      : `${props.theme.colors.white}`};
  font-size: 1rem;
  font-weight: ${(props) => props && props.theme.fonts.medium};
  line-height: 1.2;
  text-transform: uppercase;
  cursor: pointer;
  outline: none;
`;

export const ContainerLink = styled.a`
  display: inline-block;
  padding: ${(props) => props && props.theme.sizes.space4}
    ${(props) => props && props.theme.sizes.space1};
  border: ${(props) =>
    props && props.white ? `1px solid ${props.theme.colors.secondary}` : 0};
  border-radius: ${(props) => props && props.theme.sizes.space1};
  background: ${(props) =>
    props && props.white
      ? `${props.theme.colors.white}`
      : `
        linear-gradient(
          ${props.theme.colors.primary},
          ${props.theme.colors.secondary}
        );
  `};
  color: ${(props) =>
    props && props.white
      ? `${props.theme.colors.secondary}`
      : `${props.theme.colors.white}`};
  font-size: 1rem;
  font-weight: ${(props) => props && props.theme.fonts.medium};
  line-height: 1.2;
  text-transform: uppercase;
  cursor: pointer;
  outline: none;
  text-decoration: none;
`;
