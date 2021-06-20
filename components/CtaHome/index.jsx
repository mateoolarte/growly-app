// components
import Button from "../ui/Button";

// assets
const bg = "/images/cta-home-bg.jpg";

// styled
import { Wrapper, Info, Title, Subtitle, ImageBox, Image } from "./styled";

export default function CtaHome() {
  return (
    <Wrapper>
      <Info>
        <Title>Dale a tu negocio el privilegio que merece</Title>
        <Subtitle>
          Elige tu plan en Growly y comienza a crecer en el mundo digital
        </Subtitle>
        <Button type="link" href="/plantillas" white>
          Comenzar
        </Button>
      </Info>
      <ImageBox>
        <Image src={bg} alt="Cta home" />
      </ImageBox>
    </Wrapper>
  );
}
