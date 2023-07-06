import React from 'react';

import { ContainerBtn, ContainerLink } from './Button.styles';

export function Button(props) {
  if (props.type === 'link') {
    return (
      <ContainerLink href={props.href} white={props.white} target={props.target || ''}>
        {props.children}
      </ContainerLink>
    );
  }

  return <ContainerBtn {...props}>{props.children}</ContainerBtn>;
}
