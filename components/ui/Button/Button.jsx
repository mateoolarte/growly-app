// vendors
import Link from "next/link";
import React from "react";

// styles
import { ContainerBtn, ContainerLink } from "./styled";

export function Button(props) {
  if (props.type === "link") {
    return (
      <Link href={props.href} passHref>
        <ContainerLink white={props.white} target={props.target || ""}>
          {props.children}
        </ContainerLink>
      </Link>
    );
  }

  return <ContainerBtn {...props}>{props.children}</ContainerBtn>;
}
