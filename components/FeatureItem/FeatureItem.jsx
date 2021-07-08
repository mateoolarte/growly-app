// styled
import {
  Wrapper,
  ImageContainer,
  Image,
  Info,
  Title,
  Description,
} from './styled';

export function FeatureItem({ isAlt, title, image, description, bgText }) {
  return (
    <Wrapper isAlt={isAlt} bgText={bgText}>
      <ImageContainer isAlt={isAlt}>
        <Image src={image} alt={title} />
      </ImageContainer>
      <Info>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Info>
    </Wrapper>
  );
}
