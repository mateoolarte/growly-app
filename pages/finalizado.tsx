// vendors
import { useRouter } from "next/router";
import useSWR from "swr";
import styled from "styled-components";

// components
import Layout from "../components/shared/Layout";
import ApprovedPayment from "../components/ApprovedPayment";
import DeclinedPayment from "../components/DeclinedPayment";

const APPROVED = "APPROVED";

const Wrapper = styled.section`
  position: relative;
  width: 95%;
  max-width: ${(props) => props && props.theme.sizes.container};
  margin: 0 auto 2rem;
  padding-top: 120px;
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
      <Layout title="Confirmación de compra - Growly">
        <Wrapper>
          <ApprovedPayment />
        </Wrapper>
      </Layout>
    );
  }

  if (data?.status !== APPROVED) {
    return (
      <Layout title="Pago rechazado - Growly">
        <Wrapper>
          <DeclinedPayment />
        </Wrapper>
      </Layout>
    );
  }
}
