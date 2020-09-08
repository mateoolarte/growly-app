// vendors
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

// assets
import Logo from "../../assets/logo-growly.svg";

// components
import Button from "../ui/Button";

const Container = styled.header``;

const LogoContainer = styled.div``;

const Navigation = styled.nav``;

const NavigationList = styled.ul``;

const NavigationItem = styled.li``;

const NavigationLink = styled(Link)``;

export default function Header() {
  const router = useRouter();

  return (
    <Container>
      <LogoContainer>
        <Logo />
      </LogoContainer>

      <Navigation>
        <NavigationList>
          <NavigationItem>
            <Button type="link" href="/plantillas">
              Comenzar
            </Button>
          </NavigationItem>

          <NavigationItem>
            <NavigationLink href="/plantillas">Plantillas</NavigationLink>
          </NavigationItem>

          <NavigationItem>
            <NavigationLink href="/como-funciona">Como funciona</NavigationLink>
          </NavigationItem>

          <NavigationItem>
            <NavigationLink href="/contacta-un-asesor">
              Contacta un asesor
            </NavigationLink>
          </NavigationItem>

          <NavigationItem>
            <Button type="button" onClick={() => router.push("/ingresar")}>
              Ingresar
            </Button>
          </NavigationItem>
        </NavigationList>
      </Navigation>
    </Container>
  );
}
