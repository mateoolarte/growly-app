// vendors
import Link from "next/link";

// assets
import LogoSmall from "../../../assets/logo-small.png";

// styled
import {
  Wrapper,
  NavigationContainer,
  Navigation,
  NavigationItem,
  NavigationLink,
  CopyrightContainer,
  Image,
  Copyright,
} from "./styled";

// data
import { navigationItems } from "./data";

export default function Footer() {
  function handleChat(e) {
    e.preventDefault();

    const chat = window.Tawk_API;

    if (chat.maximize) {
      chat.maximize();
    }
  }

  return (
    <Wrapper>
      <NavigationContainer>
        <Navigation>
          {navigationItems.map(({ id, title, link, hasOnClick }) => {
            let linkOptions = null;

            if (hasOnClick) {
              return (
                <NavigationItem key={id}>
                  <Link href={link}>
                    <NavigationLink {...linkOptions} onClick={handleChat}>
                      {title}
                    </NavigationLink>
                  </Link>
                </NavigationItem>
              );
            }

            return (
              <NavigationItem key={id}>
                <Link href={link} passHref>
                  <NavigationLink {...linkOptions}>{title}</NavigationLink>
                </Link>
              </NavigationItem>
            );
          })}
        </Navigation>
      </NavigationContainer>

      <CopyrightContainer>
        <Image src={LogoSmall} alt="Logo small" />
        <Copyright>© 2020 Growly, Todos los derechos reservados</Copyright>
      </CopyrightContainer>
    </Wrapper>
  );
}
