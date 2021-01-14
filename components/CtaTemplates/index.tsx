// styled
import { Wrapper, Title, Description } from "./styled";

// components
import Button from "../ui/Button";

export default function CtaTemplates() {
  function handleChat(e) {
    e.preventDefault();

    const chat = window.Tawk_API;

    if (chat.maximize) {
      chat.maximize();
    }
  }

  return (
    <Wrapper>
      <Title>¿Tienes dudas?</Title>
      <Description>
        Si te gustó alguna de las plantillas pero quieres una asesoría
        personalizada, podemos ayudarte.
      </Description>
      <Button type="button" onClick={handleChat}>
        Contactar un asesor
      </Button>
    </Wrapper>
  );
}
