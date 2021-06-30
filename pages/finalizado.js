// containers
import { ApprovedPayment } from "../containers/ApprovedPayment";
import { DeclinedPayment } from "../containers/DeclinedPayment";

// data
import { stepsData } from "../data/home";

const APPROVED = "APPROVED";
const DECLINED = "DECLINED";
const VOIDED = "VOIDED";
const ERROR = "ERROR";
const PENDING = "PENDING";

export default function Finished({ status, steps }) {
  if (!status || status === DECLINED || status === VOIDED || status === ERROR) {
    return <DeclinedPayment />;
  }

  // TODO: Add a layout for pending results
  if (status === PENDING) {
    return <h1>Tu pago está siendo procesado</h1>;
  }

  if (status === APPROVED) {
    return <ApprovedPayment steps={steps} />;
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
    throw new Error(`Something went wrong: ${error}`);
  }

  return {
    props: {
      status,
      steps: stepsData,
    },
  };
}
