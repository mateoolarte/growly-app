import { useState } from "react";

import { getCookie, setCookie } from "../../utils/cookies";

import Button from "../ui/Button";

import { Wrapper, Container, Title, Description, Actions } from "./styled";

export default function CookiesModal() {
  const [isEnable, setIsEnable] = useState(getCookie("accept-cookies"));

  if (isEnable) {
    return null;
  }

  function handleAcceptCookies() {
    setCookie("accept-cookies", true, 180);
    setIsEnable(true);
  }

  return (
    <Wrapper>
      <Container>
        <Title>Aviso de cookies</Title>
        <Description>
          Este sitio web utiliza cookies para obtener datos estadísticos de
          navegación y mejorar su experiencia de usuario. Si continúas
          navegando, consideramos que aceptas su uso.
        </Description>
        <Actions>
          <Button type="button" onClick={handleAcceptCookies}>
            Aceptar
          </Button>
          <Button type="link" href="/politica-de-privacidad" white>
            Ver Política de privacidad
          </Button>
        </Actions>
      </Container>
    </Wrapper>
  );
}
