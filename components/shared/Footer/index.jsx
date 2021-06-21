// vendors
import Link from "next/link";

// assets
const LogoSmall = "/images/logo-small.png";

// styled
import {
  Wrapper,
  NavigationContainer,
  Navigation,
  NavigationItem,
  NavigationLink,
  CopyrightContainer,
  Logo,
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
                  <Link href={link} passHref>
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
        <Logo src={LogoSmall} alt="Logo small" width={78} height={78} />
        <Copyright>
          © 2020 - {new Date().getFullYear()} Growly, Todos los derechos
          reservados
        </Copyright>
      </CopyrightContainer>
    </Wrapper>
  );
}
