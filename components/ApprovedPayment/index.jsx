// components
import Button from "../ui/Button";

// data
import { stepsData } from "../../data/home";

// assets
import CheckIcon from "../../assets/icons/check.svg";
import ArrowIcon from "../../assets/icons/arrow-right.svg";

// styles
import {
  Wrapper,
  IconContainer,
  Heading,
  SubHeading,
  Description,
  Actions,
} from "./styled";

import {
  StepsContainer,
  StepItem,
  Step,
  StepsContent,
  StepContentItem,
  StepContentTitle,
  StepArrow,
} from "../../containers/HowDoesWork/styled";

export default function ApprovedPayment() {
  const { numbers, content } = stepsData;

  return (
    <Wrapper>
      <IconContainer>
        <CheckIcon />
      </IconContainer>
      <Heading>¡Felicitaciones!</Heading>
      <SubHeading>Tú sitio web, está en camino</SubHeading>

      <StepsContainer>
        {numbers.map((number) => (
          <StepItem key={number} disabled={number > 2}>
            <Step>{number}</Step>
          </StepItem>
        ))}
      </StepsContainer>

      <StepsContent>
        {content.map(({ id, Icon, title }) => (
          <StepContentItem key={id} disabled={id > 2}>
            <Icon />
            <StepContentTitle>{title}</StepContentTitle>
            {id !== content.length && (
              <StepArrow>
                <ArrowIcon />
              </StepArrow>
            )}
          </StepContentItem>
        ))}
      </StepsContent>

      <Description>
        Nuestro equipo ha comenzado a preparar la creación de tu sitio web y en
        breve te estaremos contactando para darte los pasos a seguir. Recuerda
        que tu sitio web estará al aire <strong>5 días hábiles</strong> luego de
        que hayas enviado la información requerida por nuestro equipo.
      </Description>

      <Actions>
        <Button type="link" href="/">
          Volver al inicio
        </Button>
      </Actions>
    </Wrapper>
  );
}
