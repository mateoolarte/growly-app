// vendors
import Link from "next/link";
import { useState } from "react";
import styled from "styled-components";

// constants
import { MEDIA_QUERIES } from "../../constants";

// assets
import Logo from "../../assets/logo-growly.svg";
import User from "../../assets/user.svg";

// components
import Button from "../ui/Button";

const Container = styled.header`
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

const LogoContainer = styled.a`
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

const Navigation = styled.nav`
  width: 20%;

  ${MEDIA_QUERIES.landscape} {
    width: 80%;
  }
`;

const NavigationList = styled.ul`
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

const NavigationItem = styled.li`
  margin: ${(props) => props && props.theme.sizes.space2} 0;
  text-align: center;
  text-transform: uppercase;

  ${MEDIA_QUERIES.landscape} {
    margin: 0 ${(props) => props && props.theme.sizes.space2};
  }
`;

const NavigationLink = styled.a`
  color: ${(props) => props && props.theme.colors.terciary};
  font-size: ${(props) => props && props.theme.sizes.text};
  font-weight: ${(props) => props && props.theme.fonts.bold};
  text-decoration: none;
  cursor: pointer;
`;

const BtnSignInStyled = styled.a`
  display: inline-flex;
  align-items: center;
  color: ${(props) => props && props.theme.colors.primary};
  font-weight: ${(props) => props && props.theme.fonts.bold};
  cursor: pointer;
`;

const BtnSignInIcon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${(props) => props && props.theme.sizes.space8};
  height: ${(props) => props && props.theme.sizes.space8};
  margin-right: ${(props) => props && props.theme.sizes.space5};
  border-radius: ${(props) => props && props.theme.sizes.circle};
  background-color: ${(props) => props && props.theme.colors.primary};
`;

const HamburgerIconContainer = styled.button`
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
  box-sizing: border-box;

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

const HamburgerIconLine = styled.span`
  display: inline-block;
  position: absolute;
  left: 0;
  width: 100%;
  height: 4px;
  border-radius: ${(props) => props && props.theme.sizes.space1};
  transition: all 0.4s;
  background-color: ${(props) => props && props.theme.colors.secondary};
  box-sizing: border-box;

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

function BtnSignIn() {
  return (
    <Link href="/ingresar">
      <BtnSignInStyled>
        <BtnSignInIcon>
          <User />
        </BtnSignInIcon>
        Ingresar
      </BtnSignInStyled>
    </Link>
  );
}

export default function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);

  function handleToggleMenu(e) {
    e.preventDefault();

    setToggleMenu(!toggleMenu);
  }

  return (
    <Container isActive={toggleMenu} id="sticky-header">
      <Link href="/">
        <LogoContainer>
          <Logo />
        </LogoContainer>
      </Link>

      <Navigation>
        <HamburgerIconContainer
          onClick={handleToggleMenu}
          isActive={toggleMenu}
        >
          <HamburgerIconLine />
          <HamburgerIconLine />
          <HamburgerIconLine />
        </HamburgerIconContainer>

        <NavigationList isActive={toggleMenu}>
          <NavigationItem>
            <Button type="link" href="/plantillas">
              Comenzar
            </Button>
          </NavigationItem>

          <NavigationItem>
            <Link href="/plantillas">
              <NavigationLink>Plantillas</NavigationLink>
            </Link>
          </NavigationItem>

          <NavigationItem>
            <Link href="/como-funciona">
              <NavigationLink>Como funciona</NavigationLink>
            </Link>
          </NavigationItem>

          <NavigationItem>
            <Link href="/contacta-un-asesor">
              <NavigationLink>Contacta un asesor</NavigationLink>
            </Link>
          </NavigationItem>

          <NavigationItem>
            <BtnSignIn />
          </NavigationItem>
        </NavigationList>
      </Navigation>
    </Container>
  );
}
