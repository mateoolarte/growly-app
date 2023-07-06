import {
  Wrapper,
  NavigationContainer,
  Navigation,
  NavigationItem,
  NavigationLink,
  CopyrightContainer,
  Logo,
  Copyright,
} from './Footer.styles';
import { secondaryNavItems } from '../../../data/secondaryNavItems';

const LogoSmall = '/images/logo-small.png';

export function Footer() {
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
          {secondaryNavItems.map(({ id, title, link, hasOnClick }) => {
            let linkOptions = null;

            if (hasOnClick) {
              return (
                <NavigationItem key={id}>
                  <NavigationLink href={link} {...linkOptions} onClick={handleChat}>
                    {title}
                  </NavigationLink>
                </NavigationItem>
              );
            }

            return (
              <NavigationItem key={id}>
                <NavigationLink href={link} {...linkOptions}>{title}</NavigationLink>
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
