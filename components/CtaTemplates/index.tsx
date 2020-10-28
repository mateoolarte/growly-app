// styled
import { Wrapper, Title, Description } from "./styled";

// components
import Button from "../ui/Button";

export default function CtaTemplates() {
  return (
    <Wrapper>
      <Title>¿Tienes dudas?</Title>
      <Description>
        Elige tu plan en Growly y comienza a crecer en el mundo digital
      </Description>
      <Button type="link" href="#">
        Comprar
      </Button>
    </Wrapper>
  );
}
