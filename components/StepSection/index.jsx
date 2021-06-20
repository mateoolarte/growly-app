// styled
import {
  Wrapper,
  Image,
  Cover,
  Info,
  StepNum,
  Title,
  Description,
} from "./styled";

export default function StepSection({
  stepNum,
  title,
  description,
  image,
  isReverse,
}) {
  return (
    <Wrapper isReverse={isReverse}>
      <Image>
        <Cover src={image} alt="Cover image" />
      </Image>

      <Info>
        <StepNum>{stepNum}</StepNum>
        <Title>{title}</Title>
        <Description dangerouslySetInnerHTML={{ __html: description }} />
      </Info>
    </Wrapper>
  );
}
