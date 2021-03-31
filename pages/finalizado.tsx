// vendors
import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";

// constants
import { MEDIA_QUERIES } from "../constants";

// components
import ApprovedPayment from "../components/ApprovedPayment";
import DeclinedPayment from "../components/DeclinedPayment";

// assets
import Logo from "../assets/logo-growly.svg";
import bgImg from "../assets/hero-confirmacion-growly.jpeg";

const APPROVED = "APPROVED";

const Wrapper = styled.main`
  ${MEDIA_QUERIES.landscape} {
    position: relative;
    background-image: url(${bgImg});
    background-repeat: no-repeat;
    background-position: top center;
    background-size: 100%;
  }

  &::before {
    content: "";

    ${MEDIA_QUERIES.landscape} {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(rgba(255, 255, 255, 0.4), #fff);
    }
  }
`;

const Container = styled.section`
  position: relative;
  width: 95%;
  max-width: ${(props) => props && props.theme.sizes.container};
  margin: 0 auto 2rem;
  padding-top: 1rem;
`;

const LogoContainer = styled.a`
  display: block;
  width: 80%;
  margin-bottom: 2rem;
  text-decoration: none;
  cursor: pointer;

  ${MEDIA_QUERIES.landscape} {
    width: 20%;
  }

  svg {
    height: 50px;
  }
`;

export default function Finished({ status }) {
  if (status === APPROVED) {
    return (
      <Wrapper>
        <Head>
          <title>Confirmación de compra - Growly</title>
          <link rel="icon" href="/favicon.ico" />
          <link
            href="https://fonts.googleapis.com/css2?family=Hind+Madurai:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
          ></link>
        </Head>
        <Container>
          <Link href="/">
            <LogoContainer>
              <Logo />
            </LogoContainer>
          </Link>
          <ApprovedPayment />
        </Container>
      </Wrapper>
    );
  }

  if (status !== APPROVED) {
    return (
      <>
        <Head>
          <title>Pago rechazado - Growly</title>
          <link rel="icon" href="/favicon.ico" />
          <link
            href="https://fonts.googleapis.com/css2?family=Hind+Madurai:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
          ></link>
        </Head>
        <Container>
          <Link href="/">
            <LogoContainer>
              <Logo />
            </LogoContainer>
          </Link>
          <DeclinedPayment />
        </Container>
      </>
    );
  }
}

export async function getServerSideProps({ query }) {
  const url = `https://${process.env.NEXT_PUBLIC_WOMPI_TRANSACTIONS_API_ENV}.wompi.co/v1/transactions/${query?.id}`;
  let status = "";

  try {
    const response = await fetch(url);
    const parsedResponse = await response.json();
    const data = parsedResponse?.data;

    status = data?.status || "";
  } catch (error) {
    console.log("Something went wrong", error);
  }

  return {
    props: {
      status,
    },
  };
}
