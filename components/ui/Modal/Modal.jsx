// styled
import { Wrapper, Container, BtnClose } from "./styled";

export function Modal({ isActive, handleClose, children }) {
  return (
    <Wrapper isActive={isActive} data-testid={isActive ? "active" : "inactive"}>
      <Container>
        <BtnClose type="button" onClick={() => handleClose(false)}>
          X
        </BtnClose>
        {children}
      </Container>
    </Wrapper>
  );
}
