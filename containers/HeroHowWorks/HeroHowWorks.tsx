// styled
import { Wrapper, Container, Heading, Description, SubHeading } from './HeroHowWorks.styles';

export function HeroHowWorks() {
  return (
    <Wrapper>
      <Container>
        <Heading>Tu sitio web en 5 días</Heading>
        <Description>
          Growly fue creado para que cada negocio pueda tener un sitio web
          económico, moderno, móvil y con altos estándares de experiencia de
          usuario (UX). Nos hemos enfocado en prestar un servicio
          semi-personalizado para que ningún usuario tenga que tocar una sola
          línea de código ó entenderse con terminología técnica; lo único que
          tendrás que hacer es enviarnos la información correspondiente y tu
          sitio estará listo en 5 días.
        </Description>
        <SubHeading>Así funciona Growly:</SubHeading>
      </Container>
    </Wrapper>
  );
}
