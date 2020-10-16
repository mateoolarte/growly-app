// vendors
import { useState } from "react";
import styled from "styled-components";
import Slider from "react-slick";

// constants
import { MEDIA_QUERIES } from "../../constants";

// components
import Button from "../ui/Button";

// assets
import afairHero from "../../assets/afair-hero.jpg";
import afairMockup from "../../assets/afair-mockup.png";
import dealiaHero from "../../assets/dealia-hero.jpg";
import dealiaMockup from "../../assets/dealia-mockup.png";
import strikHero from "../../assets/strik-hero.jpg";
import strikMockup from "../../assets/strik-mockup.png";
import zalepHero from "../../assets/zalep-hero.jpg";
import zalepMockup from "../../assets/zalep-mockup.png";

const Wrapper = styled.section`
  position: relative;
  padding-top: 90px;
  margin-bottom: 4rem;
  background-repeat: no-repeat;
  background-size: cover;

  ${MEDIA_QUERIES.landscape} {
    margin-bottom: 0;
  }

  ${MEDIA_QUERIES.desktop} {
    min-height: 600px;
    margin-bottom: 4rem;
  }

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(255, 255, 255, 0.4), #fff);
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  position: relative;
  z-index: 1;
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

  .slick-dots li button:before {
    color: ${(props) => props && props.theme.colors.terciary};
    font-size: 1.2rem;
    opacity: 0.45;
  }

  .slick-dots li.slick-active button:before {
    opacity: 1;
  }

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
    thumbnail: afairMockup,
    background: afairHero,
  },
  {
    id: 2,
    thumbnail: dealiaMockup,
    background: dealiaHero,
  },
  {
    id: 3,
    thumbnail: strikMockup,
    background: strikHero,
  },
  {
    id: 4,
    thumbnail: zalepMockup,
    background: zalepHero,
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
