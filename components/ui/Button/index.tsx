// vendors
import Link from "next/link";
import React from "react";
import styled from "styled-components";

// interfaces
import { Props } from "./interfaces";

const Container = styled.button``;

export default function Button(props: Props) {
  if (props.type === "link") {
    return (
      <Container {...props} as={Link}>
        <a>{props.children}</a>
      </Container>
    );
  }

  return <Container {...props}>{props.children}</Container>;
}
