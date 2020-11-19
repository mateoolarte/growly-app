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
  SocialLinks,
  SocialLinksItem,
  SocialLinksIcon,
  CopyrightContainer,
  Image,
  Copyright,
} from "./styled";

// data
import { navigationItems, socialLinks } from "./data";

export default function Footer() {
  return (
    <Wrapper>
      <NavigationContainer>
        <Navigation>
          {navigationItems.map(({ id, title, link, isExternal }) => {
            let linkOptions = null;

            if (isExternal) {
              linkOptions = {
                target: "_blank",
                rel: "noreferrer noopener",
              };
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

        <SocialLinks>
          {socialLinks.map(({ id, Icon, link }) => {
            return (
              <SocialLinksItem key={id}>
                <Link href={link} passHref>
                  <SocialLinksIcon>
                    <Icon />
                  </SocialLinksIcon>
                </Link>
              </SocialLinksItem>
            );
          })}
        </SocialLinks>
      </NavigationContainer>

      <CopyrightContainer>
        <Image src={LogoSmall} alt="Logo small" />
        <Copyright>© 2020 Growly, Todos los derechos reservados</Copyright>
      </CopyrightContainer>
    </Wrapper>
  );
}
