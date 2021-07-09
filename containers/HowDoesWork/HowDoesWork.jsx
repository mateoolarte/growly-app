// vendors
import Image from 'next/image';

// components
import { Button } from '../../components/ui/Button';

// assets
const arrowIcon = '/icons/arrow-right.svg';

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
} from './HowDoesWork.styles';

export function HowDoesWork({ howWorks }) {
  const { numbers, content } = howWorks;

  return (
    <Wrapper>
      <Title>Un sitio web listo en 5 días</Title>
      <Description>
        Olvídate de plataformas, tecnicismos y parámetros difíciles de entender.
        No tendrás que tocar una sola línea de código ó entenderte con
        terminología técnica, nuestro equipo se encargará de crear tu sitio web.
      </Description>

      <StepsContainer>
        {numbers.map((step) => (
          <StepItem key={step}>
            <Step>{step}</Step>
          </StepItem>
        ))}
      </StepsContainer>

      <StepsContent>
        {content.map(({ id, icon, title }) => (
          <StepContentItem key={id}>
            {icon && <Image src={icon} alt="icono" width={80} height={80} />}
            {title && <StepContentTitle>{title}</StepContentTitle>}
            {id !== content.length && (
              <StepArrow>
                <Image src={arrowIcon} alt="icono" width={70} height={20} />
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
