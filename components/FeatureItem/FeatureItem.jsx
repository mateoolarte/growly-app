// styled
import {
  Wrapper,
  ImageContainer,
  Image,
  Info,
  Title,
  Description,
} from './FeatureItem.styles';

export function FeatureItem({ isAlt, title, image, description, bgText }) {
  if (!title && !description) {
    return null;
  }

  return (
    <Wrapper isAlt={isAlt} bgText={bgText}>
      {image && (
        <ImageContainer isAlt={isAlt}>
          <Image src={image} alt={title} />
        </ImageContainer>
      )}
      <Info>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Info>
    </Wrapper>
  );
}
