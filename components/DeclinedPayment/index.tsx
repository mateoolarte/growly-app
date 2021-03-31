// components
import Button from "../ui/Button";

// assets
import FaceIcon from "../../assets/icons/face-sad.svg";

// styled
import {
  Wrapper,
  IconContainer,
  Heading,
  SubHeading,
  Subtitle,
  Description,
  Actions,
} from "./styled";

export default function DeclinedPayment() {
  function handleChat(e) {
    e.preventDefault();

    const chat = window.Tawk_API;

    if (chat.maximize) {
      chat.maximize();
    }
  }

  return (
    <Wrapper>
      <IconContainer>
        <FaceIcon />
      </IconContainer>
      <Heading>Lo sentimos..</Heading>
      <SubHeading>Algo salió mal y no se pudo procesar tu pago</SubHeading>
      <Subtitle>
        La plataforma de pagos ha detectado alguna irregularidad dentro del
        proceso de compra y ha declinado el pago.
      </Subtitle>
      <Description>
        <strong>Posibles causas:</strong> Inconsistencia en la tarjeta de
        crédito, problemas con el banco, nombre o números que no coinciden. Te
        recomendamos que vuelvas a intentarlo en un instante, revisa bien los
        datos de tu tarjeta que si coincidan con los datos reales, si los
        problemas persisten, puedes contactarte con un asesor para que te guíe
        en el proceso.
      </Description>
      <Actions>
        <Button type="button" onClick={handleChat}>
          Solicitar ayuda
        </Button>
        <Button type="link" href="/" white>
          Volver al inicio
        </Button>
      </Actions>
    </Wrapper>
  );
}
