// vendors
import { useState } from "react";
import Slider from "react-slick";

// components
import Button from "../ui/Button";

// data
import images from "./data";

// styled
import {
  Wrapper,
  Container,
  Info,
  Heading,
  Subtitle,
  Description,
  Gallery,
  SlideContainer,
  SlideImage,
} from "./styled";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: (current, next) => setCurrentSlide(next),
  };

  return (
    <Wrapper
      style={{ backgroundImage: `url(${images[currentSlide].background})` }}
    >
      <Container>
        <Info>
          <Heading>La presencia digital de tu negocio</Heading>
          <Subtitle>Comienza con un sitio web</Subtitle>
          <Description>
            Growly es un servicio para crear sitios web profesionales, basados
            en plantillas prediseñadas que cumplen con altos estándares de
            experiencia de usuario, adaptable a todos los dispositivos móviles,
            fácil posicionamiento en google y personalizadas de acuerdo a la
            imagen de la marca.
          </Description>
          <Button type="link" href="/plantillas">
            Comenzar mi sitio web
          </Button>
        </Info>

        <Gallery>
          <Slider {...settings}>
            {images.map((image) => {
              return (
                <SlideContainer key={image.id}>
                  <SlideImage src={image.thumbnail} alt="Image" />
                </SlideContainer>
              );
            })}
          </Slider>
        </Gallery>
      </Container>
    </Wrapper>
  );
}
