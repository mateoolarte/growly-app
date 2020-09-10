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
  background: linear-gradient(
    ${(props) => props && props.theme.colors.primary},
    ${(props) => props && props.theme.colors.secondary}
  );
  color: ${(props) => props && props.theme.colors.white};
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
  background: linear-gradient(
    ${(props) => props && props.theme.colors.primary},
    ${(props) => props && props.theme.colors.secondary}
  );
  color: ${(props) => props && props.theme.colors.white};
  font-weight: ${(props) => props && props.theme.fonts.bold};
  text-transform: uppercase;
  cursor: pointer;
`;

export default function Button(props: Props) {
  if (props.type === "link") {
    return (
      <Link {...props}>
        <ContainerLink>{props.children}</ContainerLink>
      </Link>
    );
  }

  return <ContainerBtn {...props}>{props.children}</ContainerBtn>;
}
