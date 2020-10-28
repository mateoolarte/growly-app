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
    infinite: true,
    speed: 500,
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
          <Heading>Haz tu negocio visible en internet</Heading>
          <Subtitle>Comienza con un sitio web</Subtitle>
          <Description>
            Growly es un servicio basado en plantillas para sitios web, que
            cumplen con todos los estándares de experiencia de usuario,
            adaptable a todos los dispositivos móviles y fácil posicionamiento
            en google.
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
