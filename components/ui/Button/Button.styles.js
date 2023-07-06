import Link from 'next/link';
import styled from 'styled-components';

function styles(props) {
  return `
    display: inline-block;
    padding: ${props.theme.sizes.space4} ${props.theme.sizes.space1};
    border: ${props.white ? `1px solid ${props.theme.colors.secondary}` : 0};
    border-radius: ${props.theme.sizes.space1};
    background: ${
      props.white
        ? `${props.theme.colors.white}`
        : `
          linear-gradient(
            ${props.theme.colors.primary},
            ${props.theme.colors.secondary}
          );
          `
    };
    color: ${
      props.white
        ? `${props.theme.colors.secondary}`
        : `${props.theme.colors.white}`
    };
    font-size: 1rem;
    font-weight: ${props.theme.fonts.medium};
    line-height: 1.2;
    text-transform: uppercase;
    cursor: pointer;
    outline: none;
  `;
}

export const ContainerBtn = styled.button`
  ${(props) => styles(props)}
`;

export const ContainerLink = styled(Link)`
  ${(props) => styles(props)}
  text-decoration: none;
`;
