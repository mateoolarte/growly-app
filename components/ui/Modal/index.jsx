// styled
import { Wrapper, Container, BtnClose } from "./styled";

export default function Modal({ isActive, handleClose, children }) {
  return (
    <Wrapper isActive={isActive}>
      <Container>
        <BtnClose type="button" onClick={() => handleClose(false)}>
          X
        </BtnClose>
        {children}
      </Container>
    </Wrapper>
  );
}
