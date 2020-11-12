// vendors
import Link from "next/link";

// assets
import FacebookIcon from "../../../assets/icons/facebook.svg";
import InstagramIcon from "../../../assets/icons/instagram.svg";
import TwitterIcon from "../../../assets/icons/twitter.svg";
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
import navigationItems from "./data";

export default function Footer() {
  return (
    <Wrapper>
      <NavigationContainer>
        <Navigation>
          {navigationItems.map(({ id, title, link }) => {
            return (
              <NavigationItem key={id}>
                <Link href={link}>
                  <NavigationLink>{title}</NavigationLink>
                </Link>
              </NavigationItem>
            );
          })}
        </Navigation>
        <SocialLinks>
          <SocialLinksItem>
            <Link href="#">
              <SocialLinksIcon>
                <FacebookIcon />
              </SocialLinksIcon>
            </Link>
          </SocialLinksItem>
          <SocialLinksItem>
            <Link href="#">
              <SocialLinksIcon>
                <InstagramIcon />
              </SocialLinksIcon>
            </Link>
          </SocialLinksItem>
          <SocialLinksItem>
            <Link href="#">
              <SocialLinksIcon>
                <TwitterIcon />
              </SocialLinksIcon>
            </Link>
          </SocialLinksItem>
        </SocialLinks>
      </NavigationContainer>

      <CopyrightContainer>
        <Image src={LogoSmall} alt="Logo small" />
        <Copyright>© 2020 Growly, Todos los derechos reservados</Copyright>
      </CopyrightContainer>
    </Wrapper>
  );
}
