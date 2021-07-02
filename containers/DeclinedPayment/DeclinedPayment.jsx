// vendors
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

// assets
import { LogoImg } from "../../assets/Logo";
const faceSadIcon = "/icons/face-sad.svg";

// styles
import {
  Container,
  LogoContainer,
  Content,
  IconContainer,
  Heading,
  SubHeading,
  Subtitle,
  Description,
  Actions,
} from "./styled";

// components
import { Button } from "../../components/ui/Button";

export function DeclinedPayment() {
  function handleChat(e) {
    e.preventDefault();

    const chat = window.Tawk_API;

    if (chat.maximize) {
      chat.maximize();
    }
  }

  return (
    <>
      <Head>
        <title>Pago rechazado | Growly</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Link href="/" passHref>
          <LogoContainer>
            <LogoImg />
          </LogoContainer>
        </Link>
        <Content>
          <IconContainer>
            <Image src={faceSadIcon} alt="icono" width={76} height={76} />
          </IconContainer>
          <Heading>Lo sentimos..</Heading>
          <SubHeading>Algo salió mal y no se pudo procesar tu pago</SubHeading>
          <Subtitle>
            La plataforma de pagos ha detectado alguna irregularidad dentro del
            proceso de compra y ha declinado el pago.
          </Subtitle>
          <Description>
            <strong>Posibles causas:</strong> Inconsistencia en la tarjeta de
            crédito, problemas con el banco, nombre o números que no coinciden.
            Te recomendamos que vuelvas a intentarlo en un instante, revisa bien
            los datos de tu tarjeta que si coincidan con los datos reales, si
            los problemas persisten, puedes contactarte con un asesor para que
            te guíe en el proceso.
          </Description>
          <Actions>
            <Button type="button" onClick={handleChat}>
              Solicitar ayuda
            </Button>
            <Button type="link" href="/" white>
              Volver al inicio
            </Button>
          </Actions>
        </Content>
      </Container>
    </>
  );
}
