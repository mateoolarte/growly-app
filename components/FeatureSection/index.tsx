// vendors
import styled from "styled-components";

// constants
import { MEDIA_QUERIES } from "../../constants";

const Wrapper = styled.div`
  position: relative;
  margin-bottom: 3rem;
  overflow: hidden;

  ${MEDIA_QUERIES.tablet} {
    display: flex;
    align-items: center;
    margin-bottom: 10rem;
    ${(props) => (props && props.alt ? "flex-direction: row-reverse" : "")};
    overflow: unset;
  }

  ${(props) =>
    props &&
    `
    &::after {
      content: '${props.bgText}';
      position: absolute;
      z-index: -1;
      bottom: 25%;
      left: 50%;
      transform: translateX(-50%);
      font-size: 110px;
      font-weight: bold;
      text-transform: uppercase;
      opacity: 0.05;

      ${MEDIA_QUERIES.tablet} {
        bottom: -3rem;
        font-size: 72px;
      }

      ${MEDIA_QUERIES.landscape} {
        bottom: -5rem;
        font-size: 110px;
      }

      ${MEDIA_QUERIES.desktopXL} {
        font-size: 128px;
      }
    }
  `}
`;

const ImageContainer = styled.div`
  margin-bottom: 1rem;

  ${MEDIA_QUERIES.tablet} {
    width: 55%;
    ${(props) =>
      props && props.alt ? "margin-left: 2rem;" : "margin-right: 2rem;"};
    margin-bottom: 0;
    text-align: center;
  }
`;

const Image = styled.img`
  max-width: 100%;
`;

const Info = styled.div`
  ${MEDIA_QUERIES.tablet} {
    width: 45%;
  }
`;

const Title = styled.h3`
  margin-top: 0;
  margin-bottom: 0.8rem;
  font-size: 28px;
  line-height: 1;

  ${MEDIA_QUERIES.landscape} {
    font-size: 42px;
  }

  ${MEDIA_QUERIES.desktopXL} {
    font-size: 56px;
  }
`;

const Description = styled.p`
  margin: 0;
`;

export default function FeatureSection({
  isAlt,
  title,
  image,
  description,
  bgText,
}) {
  return (
    <Wrapper alt={isAlt} bgText={bgText}>
      <ImageContainer alt={isAlt}>
        <Image src={image} alt={title} />
      </ImageContainer>
      <Info>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Info>
    </Wrapper>
  );
}
