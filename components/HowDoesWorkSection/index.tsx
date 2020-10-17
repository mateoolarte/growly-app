// vendors
import styled from "styled-components";

// constants
import { MEDIA_QUERIES } from "../../constants";

// components
import Button from "../ui/Button";

// assets
import FirstIconStep from "../../assets/computer-icon.svg";
import ArrowIcon from "../../assets/arrow-right-icon.svg";

const Wrapper = styled.section`
  width: 95%;
  max-width: ${(props) => props && props.theme.sizes.container};
  margin: 0 auto 3rem;
  text-align: center;

  ${MEDIA_QUERIES.tablet} {
    margin-bottom: 4rem;
  }
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
  margin-bottom: 1.5rem;
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
  background: linear-gradient(
    ${(props) => props && props.theme.colors.primary},
    ${(props) => props && props.theme.colors.secondary}
  );
  color: ${(props) => props && props.theme.colors.white};
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
`;

const StepsContent = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;

  ${MEDIA_QUERIES.tablet} {
    margin-bottom: 3rem;
  }
`;

const StepContentItem = styled.div`
  position: relative;
  width: calc(100% / 4 - 1rem);
  margin: 0 0.5rem;

  svg {
    width: 100%;

    ${MEDIA_QUERIES.tablet} {
      width: auto;
    }
  }
`;

const StepContentTitle = styled.h3`
  margin-top: 0;
  font-size: 0.8rem;

  ${MEDIA_QUERIES.tablet} {
    font-size: 1.1rem;
  }
`;

const StepArrow = styled.span`
  display: none;

  ${MEDIA_QUERIES.landscape} {
    display: inline-block;
    position: absolute;
    top: 20%;
    right: -2.5rem;
  }
`;

export default function HowDoesWorkSection() {
  const stepsNumbers = [1, 2, 3, 4];
  const stepsContent = [
    {
      id: 1,
      Icon: FirstIconStep,
      title: "Selecciona una plantilla",
    },
    {
      id: 2,
      Icon: FirstIconStep,
      title: "Elige un plan y método de pago",
    },
    {
      id: 3,
      Icon: FirstIconStep,
      title: "Nos envías tu información",
    },
    {
      id: 4,
      Icon: FirstIconStep,
      title: "Tienes tu sitio web al aire",
    },
  ];

  return (
    <Wrapper>
      <Title>Un sitio web listo en 3 días</Title>
      <Description>
        Olvídate de plataformas, tecnicismos y parametros difíciles de entender.
        Selecciona una plantilla, nos envías la información correspondiente y
        nosotros nos encargamos del resto.
      </Description>

      <StepsContainer>
        {stepsNumbers.map((step) => (
          <StepItem key={step}>
            <Step>{step}</Step>
          </StepItem>
        ))}
      </StepsContainer>

      <StepsContent>
        {stepsContent.map(({ id, Icon, title }, index) => (
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
