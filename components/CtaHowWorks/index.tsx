// styled
import {
  Wrapper,
  Container,
  Title,
  Description,
  Actions,
  Image,
} from "./styled";

// components
import Button from "../ui/Button";

// assets
import bgImg from "../../assets/bg-cta-how-works.png";

export default function CtaHowWorks() {
  function handleChat(e) {
    e.preventDefault();

    const chat = window.Tawk_API;

    if (chat.maximize) {
      chat.maximize();
    }
  }

  return (
    <Wrapper>
      <Container>
        <Title>Viste lo fácil que es</Title>
        <Description>
          Elige tu plan en Growly y comienza a crecer en el mundo digital
        </Description>
        <Actions>
          <Button type="button" onClick={handleChat} white>
            Contactar un asesor
          </Button>
          <Button type="link" href="/plantillas">
            Comenzar
          </Button>
        </Actions>
      </Container>
      <Image style={{ backgroundImage: `url(${bgImg})` }}></Image>
    </Wrapper>
  );
}
