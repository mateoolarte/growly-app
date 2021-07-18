// styled
import {
  Wrapper,
  ImageContainer,
  Cover,
  Info,
  StepNum,
  Title,
  Description,
} from './StepItem.styles';

export function StepItem({ stepNum, title, description, image, isReverse }) {
  if (!title && !description) {
    return null;
  }

  return (
    <Wrapper isReverse={isReverse} data-testid={isReverse ? 'reverse' : ''}>
      {image && (
        <ImageContainer>
          <Cover src={image} alt="Cover image" />
        </ImageContainer>
      )}

      <Info>
        {stepNum && <StepNum>{stepNum}</StepNum>}
        {title && <Title>{title}</Title>}
        {description && (
          <Description dangerouslySetInnerHTML={{ __html: description }} />
        )}
      </Info>
    </Wrapper>
  );
}
