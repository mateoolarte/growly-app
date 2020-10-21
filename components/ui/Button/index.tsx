// vendors
import Link from "next/link";
import React from "react";
import styled from "styled-components";

// interfaces
import { Props } from "./interfaces";

const ContainerBtn = styled.button`
  display: inline-block;
  padding: ${(props) => props && props.theme.sizes.space4}
    ${(props) => props && props.theme.sizes.space1};
  border: 0;
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
  font-weight: ${(props) => props && props.theme.fonts.bold};
  text-transform: uppercase;
  cursor: pointer;
`;

const ContainerLink = styled.a`
  display: inline-block;
  padding: ${(props) => props && props.theme.sizes.space4}
    ${(props) => props && props.theme.sizes.space1};
  border: 0;
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
  font-weight: ${(props) => props && props.theme.fonts.bold};
  text-transform: uppercase;
  cursor: pointer;
`;

export default function Button(props: Props) {
  if (props.type === "link") {
    return (
      <Link href={props.href}>
        <ContainerLink white={props.white}>{props.children}</ContainerLink>
      </Link>
    );
  }

  return <ContainerBtn {...props}>{props.children}</ContainerBtn>;
}
