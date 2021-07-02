// styled
import {
  Wrapper,
  ImageContainer,
  Cover,
  Info,
  StepNum,
  Title,
  Description,
} from "./styled";

export function StepItem({ stepNum, title, description, image, isReverse }) {
  return (
    <Wrapper isReverse={isReverse}>
      <ImageContainer>
        <Cover src={image} alt="Cover image" />
      </ImageContainer>

      <Info>
        <StepNum>{stepNum}</StepNum>
        <Title>{title}</Title>
        <Description dangerouslySetInnerHTML={{ __html: description }} />
      </Info>
    </Wrapper>
  );
}
