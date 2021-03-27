// components
import Button from "../ui/Button";

// data
import { stepsNumbers, stepsContent } from "./data";

// assets
import ArrowIcon from "../../assets/icons/arrow-right.svg";

// styled
import {
  Wrapper,
  Title,
  Description,
  StepsContainer,
  StepItem,
  Step,
  StepsContent,
  StepContentItem,
  StepContentTitle,
  StepArrow,
} from "./styled";

export default function HowDoesWorkSection() {
  return (
    <Wrapper>
      <Title>Un sitio web listo en 5 días</Title>
      <Description>
        Olvídate de plataformas, tecnicismos y parámetros difíciles de entender.
        No tendrás que tocar una sola línea de código ó entenderte con
        terminología técnica, nuestro equipo se encargará de crear tu sitio web.
      </Description>

      <StepsContainer>
        {stepsNumbers.map((step) => (
          <StepItem key={step}>
            <Step>{step}</Step>
          </StepItem>
        ))}
      </StepsContainer>

      <StepsContent>
        {stepsContent.map(({ id, Icon, title }) => (
          <StepContentItem key={id}>
            <Icon />
            <StepContentTitle>{title}</StepContentTitle>
            {id !== stepsContent.length && (
              <StepArrow>
                <ArrowIcon />
              </StepArrow>
            )}
          </StepContentItem>
        ))}
      </StepsContent>

      <Button type="link" href="/como-funciona">
        Ver como funciona
      </Button>
    </Wrapper>
  );
}
