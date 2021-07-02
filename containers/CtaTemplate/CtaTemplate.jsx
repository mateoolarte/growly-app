// vendors
import Image from "next/image";

// components
import { Button } from "../../components/ui/Button";

// styled
import { Wrapper, Icon, Title, Subtitle, Description } from "./styled";

// assets
const layoutIcon = "/icons/layout.svg";

export function CtaTemplate() {
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
        <Image src={layoutIcon} alt="icono" width={80} height={80} />
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
