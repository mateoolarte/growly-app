// styled
import {
  Wrapper,
  Container,
  Title,
  Description,
  Actions,
  BgImage,
} from './CtaHowWorks.styles';

// components
import { Button } from '../../components/ui/Button';

// assets
const bgImg = '/images/bg-cta-how-works.png';

export function CtaHowWorks() {
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
          Elige tu plantilla en Growly y comienza a crecer en el mundo digital
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
      <BgImage style={{ backgroundImage: `url(${bgImg})` }} />
    </Wrapper>
  );
}
