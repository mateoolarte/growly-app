// vendors
import Link from 'next/link';
import { useState } from 'react';

// assets
import { LogoImg } from '../../../assets/Logo';

// components
import { Button } from '../../ui/Button';

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
} from './styled';

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
      <Link href="/" passHref>
        <LogoContainer>
          <LogoImg />
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
            <Link href="/plantillas" passHref>
              <NavigationLink>Plantillas</NavigationLink>
            </Link>
          </NavigationItem>

          <NavigationItem>
            <Link href="/como-funciona" passHref>
              <NavigationLink>Como funciona</NavigationLink>
            </Link>
          </NavigationItem>

          <NavigationItem>
            <Link href="#" passHref>
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
