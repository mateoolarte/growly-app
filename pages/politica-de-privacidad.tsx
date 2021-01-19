// vendors
import styled from "styled-components";

// components
import Layout from "../components/shared/Layout";

const Wrapper = styled.section`
  position: relative;
  width: 95%;
  max-width: ${(props) => props && props.theme.sizes.container};
  margin: 0 auto 2rem;
  padding-top: 120px;
`;

export default function Privacy() {
  return (
    <Layout title="Politicas de privacidad - Growly">
      <Wrapper>Something</Wrapper>
    </Layout>
  );
}
