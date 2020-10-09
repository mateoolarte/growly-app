// vendors
import React, { useState } from "react";
import styled from "styled-components";
import Slider from "react-slick";

// constants
import { MEDIA_QUERIES } from "../../constants";

// components
import Button from "../ui/Button";

// assets
import bg from "../../assets/bg.jpg";
import thumbnail from "../../assets/thumbnail.jpg";

const Wrapper = styled.section`
  min-height: 60vh;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  width: 95%;
  max-width: ${(props) => props && props.theme.sizes.container};
  margin: 0 auto;
  padding: 2rem 0;

  ${MEDIA_QUERIES.landscape} {
    flex-wrap: nowrap;
    padding: 3rem 0;
  }
`;

const Info = styled.div`
  width: 100%;
  margin-bottom: 3.5rem;
  text-align: center;

  ${MEDIA_QUERIES.landscape} {
    width: 50%;
    margin-right: 2rem;
    margin-bottom: 0;
    text-align: left;
  }
`;

const Heading = styled.h1`
  margin: 0;
  font-size: 36px;
  line-height: 1;

  ${MEDIA_QUERIES.tablet} {
    margin-bottom: 1rem;
    font-size: 52px;
  }

  ${MEDIA_QUERIES.landscape} {
    margin: 0;
  }

  ${MEDIA_QUERIES.desktopXL} {
    font-size: 72px;
  }
`;

const Subtitle = styled.h2`
  margin-top: 0;
  margin-bottom: 1rem;
  color: ${(props) => props && props.theme.colors.secondary};
  font-size: 24px;

  ${MEDIA_QUERIES.tablet} {
    font-size: 28px;
  }

  ${MEDIA_QUERIES.landscape} {
    margin: 0;
  }

  ${MEDIA_QUERIES.desktopXL} {
    font-size: 36px;
  }
`;

const Description = styled.p`
  display: none;
  margin-top: 0;
  margin-bottom: 2rem;
  line-height: 1.4;

  ${MEDIA_QUERIES.landscape} {
    display: block;
  }

  ${MEDIA_QUERIES.desktopXL} {
    font-size: 1.2rem;
  }
`;

const Gallery = styled.div`
  width: 100%;

  ${MEDIA_QUERIES.landscape} {
    width: 50%;
  }
`;

const SlideContainer = styled.div`
  text-align: center;
`;

const SlideImage = styled.img`
  max-width: 100%;
  margin: 0 auto;
`;

const images = [
  {
    id: 1,
    thumbnail: thumbnail,
    background: bg,
  },
  {
    id: 2,
    thumbnail: thumbnail,
    background: bg,
  },
  {
    id: 3,
    thumbnail: thumbnail,
    background: bg,
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
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
                <SlideContainer>
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
