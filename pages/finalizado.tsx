// vendors
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import useSWR from "swr";
import styled from "styled-components";

// constants
import { MEDIA_QUERIES } from "../constants";

// components
import ApprovedPayment from "../components/ApprovedPayment";
import DeclinedPayment from "../components/DeclinedPayment";

// assets
import Logo from "../assets/logo-growly.svg";

const APPROVED = "APPROVED";

const Wrapper = styled.main``;

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

const fetcher = (url) =>
  fetch(url)
    .then((r) => r.json())
    .then((r) => r.data);

export default function Finished() {
  const router = useRouter();
  const { id } = router?.query;

  const { data, error } = useSWR(
    `https://${process.env.NEXT_PUBLIC_WOMPI_TRANSACTIONS_API_ENV}.wompi.co/v1/transactions/${id}`,
    fetcher
  );

  console.log(data);

  if (data?.status === APPROVED) {
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

  if (data?.status !== APPROVED) {
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
