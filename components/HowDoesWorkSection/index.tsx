// vendors
import styled from "styled-components";

// constants
import { MEDIA_QUERIES } from "../../constants";

// components
import Button from "../ui/Button";

const Wrapper = styled.section`
  width: 95%;
  max-width: ${(props) => props && props.theme.sizes.container};
  margin: 0 auto 3rem;
  text-align: center;
`;

const Title = styled.h2`
  margin-top: 0;
  margin-bottom: 0.5rem;
  font-size: 28px;

  ${MEDIA_QUERIES.tablet} {
    font-size: 42px;
  }

  ${MEDIA_QUERIES.desktopXL} {
    font-size: 56px;
  }
`;

const Description = styled.p`
  margin: 0 auto 2rem;
  font-size: 0.9rem;

  ${MEDIA_QUERIES.tablet} {
    width: 80%;
    font-size: 1rem;
  }

  ${MEDIA_QUERIES.desktopXL} {
    font-size: 1.1rem;
  }
`;

const StepsContainer = styled.ul`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
  padding: 0;
  list-style-type: none;
`;

const StepItem = styled.li`
  width: calc(100% / 4 - 1rem);
  margin: 0 0.5rem;

  ${MEDIA_QUERIES.tablet} {
    width: calc(100% / 4 - 2rem);
  margin: 0 1rem;
  }
`;

const Step = styled.button`
  width: 3.2rem;
  height: 3.2rem;
  border: 0;
  border-radius: 50%;
  color: ${(props) => props && props.theme.colors.white};
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
`;

export default function HowDoesWorkSection() {
  return (
    <Wrapper>
      <Title>Un sitio web listo en 3 días</Title>
      <Description>
        Olvídate de plataformas, tecnicismos y parametros difíciles de entender.
        Selecciona una plantilla, nos envías la información correspondiente y
        nosotros nos encargamos del resto.
      </Description>
      <StepsContainer>
        <StepItem>
          <Step>1</Step>
        </StepItem>
        <StepItem>
          <Step>2</Step>
        </StepItem>
        <StepItem>
          <Step>3</Step>
        </StepItem>
        <StepItem>
          <Step>4</Step>
        </StepItem>
      </StepsContainer>
      <Button type="link" href="/como-funciona">
        Ver como funciona
      </Button>
    </Wrapper>
  );
}
