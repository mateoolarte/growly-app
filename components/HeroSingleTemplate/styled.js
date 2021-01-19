// vendors
import styled from "styled-components";

const Wrapper = styled.section`
  position: relative;
  width: 95%;
  max-width: ${(props) => props && props.theme.sizes.container};
  margin: 0 auto 2rem;
  padding-top: 120px;
`;

const TopActions = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 1rem;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const ImageContainer = styled.div`
  width: 50%;
  margin-right: 2rem;
`;

const Image = styled.img`
  max-width: 100%;
`;

const InfoContainer = styled.div`
  width: 50%;
`;

const Description = styled.p``;

const SelectPlanTitle = styled.h3`
  margin: 0;
  margin-bottom: 1rem;
  font-size: 1rem;
  font-weight: normal;
`;

const SelectPlanContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

const SelectPlanItem = styled.button`
  position: relative;
  margin-bottom: 0.6rem;
  padding-left: 1.5rem;
  border: 0;
  background: none;
  text-align: left;
  font-size: 1rem;
  font-weight: bold;
  line-height: 1.4;
  outline: none;
  cursor: pointer;

  &::before {
    content: "";
    position: absolute;
    top: 3px;
    left: 0;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background: ${(props) =>
      props && props.isActive
        ? `
        linear-gradient(
          ${props.theme.colors.primary},
          ${props.theme.colors.secondary}
        );
        `
        : "gray"};
  }

  span {
    display: block;
    font-size: 0.7rem;
    font-weight: normal;
  }

  strong > div {
    display: inline-block;
  }
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  .waybox-button {
    display: inline-block;
    height: auto;
    margin-left: 0.5rem;
    padding: ${(props) => props && props.theme.sizes.space9};
    border: ${(props) =>
      props && props.white ? `1px solid ${props.theme.colors.secondary}` : 0};
    border-radius: ${(props) => props && props.theme.sizes.space1};
    background: ${(props) =>
      props && props.white
        ? `${props.theme.colors.white}`
        : `
        linear-gradient(
          ${props.theme.colors.primary},
          ${props.theme.colors.secondary}
        );
  `};
    color: ${(props) =>
      props && props.white
        ? `${props.theme.colors.secondary}`
        : `${props.theme.colors.white}`};
    font-weight: ${(props) => props && props.theme.fonts.bold};
    line-height: 1;
    text-transform: uppercase;
    cursor: pointer;
    outline: none;
  }
`;

const Price = styled.div`
  width: 40%;
`;

const Icon = styled.em`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1.2rem;
  height: 1.2rem;
  margin-left: 0.2rem;
  border-radius: 50%;
  background-color: ${(props) => props && props.theme.colors.blue};
  font-style: normal;

  svg {
    height: 0.7rem;
    fill: ${(props) => props && props.theme.colors.white};
  }
`;

export {
  Wrapper,
  TopActions,
  Container,
  ImageContainer,
  Image,
  InfoContainer,
  Description,
  SelectPlanTitle,
  SelectPlanContainer,
  SelectPlanItem,
  Actions,
  Price,
  Icon,
};
