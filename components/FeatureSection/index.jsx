// styled
import {
  Wrapper,
  ImageContainer,
  Image,
  Info,
  Title,
  Description,
} from "./styled";

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
