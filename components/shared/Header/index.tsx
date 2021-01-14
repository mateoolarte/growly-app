// vendors
import Link from "next/link";
import { useState } from "react";

// assets
import Logo from "../../../assets/logo-growly.svg";
import User from "../../../assets/user.svg";

// components
import Button from "../../ui/Button";

// styled
import {
  Container,
  LogoContainer,
  Navigation,
  NavigationList,
  NavigationItem,
  NavigationLink,
  HamburgerIconContainer,
  HamburgerIconLine,
} from "./styled";
declare global {
  interface Window {
    Tawk_API: {
      maximize: () => void;
    };
  }
}

export default function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);

  function handleToggleMenu(e) {
    e.preventDefault();

    setToggleMenu(!toggleMenu);
  }

  function handleChat(e) {
    e.preventDefault();

    const chat = window.Tawk_API;

    if (chat.maximize) {
      chat.maximize();
    }
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
            <Link href="#">
              <NavigationLink onClick={handleChat}>
                Contacta un asesor
              </NavigationLink>
            </Link>
          </NavigationItem>

          <NavigationItem>
            <Button type="link" href="/plantillas">
              Comenzar
            </Button>
          </NavigationItem>
        </NavigationList>
      </Navigation>
    </Container>
  );
}
