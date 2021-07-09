// vendors
import styled from 'styled-components';

// constants
import { MEDIA_QUERIES } from '../../../utils/constants';

export const Container = styled.header`
  display: flex;
  align-items: center;
  position: fixed;
  z-index: 2;
  left: 50%;
  width: 100%;
  max-width: ${(props) => props && props.theme.sizes.container};
  margin: 0 auto;
  padding: 1rem;
  transform: translateX(-50%);
  transition: height 0.25s ease-out, background 0.25s ease-in-out;

  &.active {
    border-radius: 0 0 4px 4px;
    background-color: ${(props) => props && props.theme.colors.white};
    box-shadow: 0 2px 6px ${(props) => props && props.theme.colors.grayDark};
  }
`;

export const LogoContainer = styled.a`
  display: block;
  width: 80%;
  text-decoration: none;
  cursor: pointer;

  ${MEDIA_QUERIES.landscape} {
    width: 20%;
  }

  svg {
    height: 50px;
  }
`;

export const Navigation = styled.nav`
  width: 20%;

  ${MEDIA_QUERIES.landscape} {
    width: 80%;
  }
`;

export const NavigationList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: fixed;
  z-index: 3;
  top: 0;
  left: 0;
  width: 100%;
  height: 105vh;
  margin: 0;
  padding: 0;
  transform-origin: 0% 0%;
  transform: translate(-100%, 0);
  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
  background-color: ${(props) => props && props.theme.colors.white};
  list-style-type: none;

  ${(props) =>
    props &&
    props.isActive &&
    `
    transform: none;
  `}

  ${MEDIA_QUERIES.landscape} {
    position: static;
    justify-content: flex-end;
    flex-direction: row;
    width: auto;
    height: auto;
    transform: none;
    background: none;
  }
`;

export const NavigationItem = styled.li`
  margin: ${(props) => props && props.theme.sizes.space2} 0;
  text-align: center;
  text-transform: uppercase;

  ${MEDIA_QUERIES.landscape} {
    margin: 0 ${(props) => props && props.theme.sizes.space2};
  }
`;

export const NavigationLink = styled.a`
  color: ${(props) => props && props.theme.colors.black};
  font-size: ${(props) => props && props.theme.sizes.textNormal};
  font-weight: ${(props) => props && props.theme.fonts.medium};
  text-decoration: none;
  cursor: pointer;

  ${MEDIA_QUERIES.tablet} {
    font-size: ${(props) => props && props.theme.sizes.textBig};
  }

  ${MEDIA_QUERIES.landscape} {
    font-size: ${(props) => props && props.theme.sizes.text};
  }
`;

export const BtnSignInStyled = styled.a`
  display: inline-flex;
  align-items: center;
  color: ${(props) => props && props.theme.colors.primary};
  font-weight: ${(props) => props && props.theme.fonts.medium};
  cursor: pointer;
`;

export const BtnSignInIcon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${(props) => props && props.theme.sizes.space8};
  height: ${(props) => props && props.theme.sizes.space8};
  margin-right: ${(props) => props && props.theme.sizes.space5};
  border-radius: ${(props) => props && props.theme.sizes.circle};
  background-color: ${(props) => props && props.theme.colors.primary};
`;

export const HamburgerIconContainer = styled.button`
  display: inline-block;
  position: absolute;
  z-index: 4;
  top: 2rem;
  right: 3rem;
  width: 40px;
  height: 24px;
  border: 0;
  transition: all 0.4s;
  background: none;

  ${MEDIA_QUERIES.landscape} {
    display: none;
  }

  ${(props) =>
    props &&
    props.isActive &&
    `
      transform: rotate(360deg);

      > span:nth-of-type(1) {
        transform: translateY(11px) rotate(-45deg);
      }
      > span:nth-of-type(2) {
        transform: translateY(0) rotate(45deg);
      }
      > span:nth-of-type(3) {
        opacity: 0;
      }
  `}
`;

export const HamburgerIconLine = styled.span`
  display: inline-block;
  position: absolute;
  left: 0;
  width: 100%;
  height: 4px;
  border-radius: ${(props) => props && props.theme.sizes.space1};
  transition: all 0.4s;
  background-color: ${(props) => props && props.theme.colors.secondary};

  &:nth-of-type(1) {
    top: 0;
  }
  &:nth-of-type(2) {
    top: 10px;
  }
  &:nth-of-type(3) {
    bottom: 0;
  }
`;
