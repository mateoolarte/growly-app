import Head from 'next/head';
import Image from 'next/image';

import { LogoImg } from '../../assets/Logo';
const arrowIcon = '/icons/arrow-right.svg';
const checkIcon = '/icons/check.svg';
import {
  Wrapper,
  Container,
  LogoContainer,
  Content,
  IconContainer,
  Heading,
  SubHeading,
  Description,
  Actions,
} from './ApprovedPayment.styles';
import {
  StepsContainer,
  StepItem,
  Step,
  StepsContent,
  StepContentItem,
  StepContentTitle,
  StepArrow,
} from '../HowDoesWork/HowDoesWork.styles';
import { Button } from '../../components/ui/Button';
import { IHowWorks } from '../../data/howWorks';

interface IApprovePaymentProps {
  howWorks: IHowWorks;
}

export function ApprovedPayment({ howWorks }: IApprovePaymentProps) {
  const { numbers, content } = howWorks;

  return (
    <Wrapper>
      <Head>
        <title>Confirmación de compra | Growly</title>
      </Head>
      <Container>
        <LogoContainer href="/">
          <LogoImg />
        </LogoContainer>
        <Content>
          <IconContainer>
            <Image src={checkIcon} alt="icono" width={76} height={76} />
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
            {content.map(({ id, icon, title }) => (
              <StepContentItem key={id} disabled={id > 2}>
                {icon && (
                  <Image src={icon} alt="icono" width={80} height={80} />
                )}
                <StepContentTitle>{title}</StepContentTitle>
                {id !== content.length && (
                  <StepArrow>
                    <Image src={arrowIcon} alt="icono" width={70} height={20} />
                  </StepArrow>
                )}
              </StepContentItem>
            ))}
          </StepsContent>

          <Description>
            Nuestro equipo ha comenzado a preparar la creación de tu sitio web y
            en breve te estaremos contactando para darte los pasos a seguir.
            Recuerda que tu sitio web estará al aire{' '}
            <strong>5 días hábiles</strong> luego de que hayas enviado la
            información requerida por nuestro equipo.
          </Description>

          <Actions>
            <Button type="link" href="/">
              Volver al inicio
            </Button>
          </Actions>
        </Content>
      </Container>
    </Wrapper>
  );
}
