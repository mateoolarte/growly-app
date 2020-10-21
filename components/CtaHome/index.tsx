// vendors
import styled from "styled-components";

// components
import Button from "../ui/Button";

// constants
import { MEDIA_QUERIES } from "../../constants";

// assets
import bg from "../../assets/cta-home-bg.jpg";

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column-reverse;
  max-width: ${(props) => props && props.theme.sizes.container};
  margin: 120px auto 3rem;
  background: ${(props) =>
    props &&
    `linear-gradient(
          ${props.theme.colors.primary},
          ${props.theme.colors.secondary}
        );`};
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.1);

  ${MEDIA_QUERIES.tablet} {
    flex-direction: row;
    height: 450px;
    margin-top: 0;
  }

  ${MEDIA_QUERIES.desktop} {
    border-radius: 6px;
  }
`;

const Info = styled.div`
  padding: 0rem 2.5rem 3rem;
  text-align: center;

  ${MEDIA_QUERIES.tablet} {
    width: 45%;
    padding: 2rem 3rem;
    text-align: left;
  }
`;

const Title = styled.h2`
  margin-top: 0;
  margin-bottom: 1rem;
  color: ${(props) => props && props.theme.colors.white};
  font-size: 32px;
  line-height: 1;

  ${MEDIA_QUERIES.landscape} {
    font-size: 48px;
  }
`;

const Subtitle = styled.p`
  margin-bottom: 2rem;
  color: ${(props) => props && props.theme.colors.white};
  font-size: 1rem;
  font-weight: bold;

  ${MEDIA_QUERIES.landscape} {
    font-size: 1.1rem;
  }
`;

const ImageBox = styled.div`
  position: relative;
  z-index: 1;
  top: -60px;
  width: 90%;
  height: 230px;

  ${MEDIA_QUERIES.tablet} {
    position: static;
    width: 55%;
    height: 450px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 6px;

  ${MEDIA_QUERIES.tablet} {
    border-radius: 0 6px 6px 0;
  }
`;

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
