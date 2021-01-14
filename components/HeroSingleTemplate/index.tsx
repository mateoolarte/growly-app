// components
import Button from "../../components/ui/Button";

// styled
import {
  Wrapper,
  TopActions,
  Container,
  ImageContainer,
  InfoContainer,
} from "./styled";

export default function HeroSingleTemplate({ name }) {
  return (
    <Wrapper>
      <TopActions>
        <Button type="link" href="/plantillas" white>
          Volver
        </Button>
      </TopActions>
      <Container>
        <ImageContainer></ImageContainer>
        <InfoContainer></InfoContainer>
      </Container>
    </Wrapper>
  );
}
