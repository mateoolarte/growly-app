// components
import Button from "../ui/Button";

// styled
import { Wrapper, Icon, Title, Subtitle, Description } from "./styled";

// assets
import LayoutIcon from "../../assets/icons/layout.svg";

export default function CtaSingleTemplate() {
  function handleChat(e) {
    e.preventDefault();

    const chat = window.Tawk_API;

    if (chat.maximize) {
      chat.maximize();
    }
  }

  return (
    <Wrapper>
      <Icon>
        <LayoutIcon />
      </Icon>
      <Title>Estás muy cerca de tener tu sitio web</Title>
      <Subtitle>
        Una vez recibamos la confirmación del pago, uno de nuestros asesores te
        contactará para completar el proceso
      </Subtitle>
      <Description>
        Si tienes dudas, contacta a un asesor para mayor asesoría en el proceso
      </Description>
      <Button type="button" onClick={handleChat} white>
        Solicitar ayuda
      </Button>
    </Wrapper>
  );
}
