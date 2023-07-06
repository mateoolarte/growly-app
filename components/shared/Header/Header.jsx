import { useState } from 'react';

import { LogoImg } from '../../../assets/Logo';
import { Button } from '../../ui/Button';
import {
  Container,
  LogoContainer,
  Navigation,
  NavigationList,
  NavigationItem,
  NavigationLink,
  HamburgerIconContainer,
  HamburgerIconLine,
} from './Header.styles';

export function Header() {
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
      <LogoContainer href="/">
        <LogoImg />
      </LogoContainer>

      <Navigation>
        <HamburgerIconContainer
          onClick={handleToggleMenu}
          isActive={toggleMenu}
          aria-label="hamburger-button"
        >
          <HamburgerIconLine />
          <HamburgerIconLine />
          <HamburgerIconLine />
        </HamburgerIconContainer>

        <NavigationList isActive={toggleMenu}>
          <NavigationItem>
            <NavigationLink href="/plantillas">Plantillas</NavigationLink>
          </NavigationItem>

          <NavigationItem>
            <NavigationLink href="/como-funciona">Como funciona</NavigationLink>
          </NavigationItem>

          <NavigationItem>
            <NavigationLink href="#" onClick={handleChat}>
              Contacta un asesor
            </NavigationLink>
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
