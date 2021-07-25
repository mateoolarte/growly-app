// vendors
import { GetServerSideProps } from 'next';

// containers
import { ApprovedPayment } from '../containers/ApprovedPayment';
import { DeclinedPayment } from '../containers/DeclinedPayment';

// data
import { howWorksData, IHowWorks } from '../data/howWorks';

const APPROVED = 'APPROVED';
const DECLINED = 'DECLINED';
const VOIDED = 'VOIDED';
const ERROR = 'ERROR';
const PENDING = 'PENDING';

enum PaymentStatus {
  APPROVED = 'APPROVED',
  DECLINED = 'DECLINED',
  VOIDED = 'VOIDED',
  ERROR = 'ERROR',
  PENDING = 'PENDING',
}

interface IFinishedPaymentProps {
  status: PaymentStatus;
  howWorks: IHowWorks;
}

export default function Finished({ status, howWorks }: IFinishedPaymentProps) {
  if (!status || status === DECLINED || status === VOIDED || status === ERROR) {
    return <DeclinedPayment />;
  }

  // TODO: Add a layout for pending results
  if (status === PENDING) {
    return <h1>Tu pago está siendo procesado</h1>;
  }

  if (status === APPROVED) {
    return <ApprovedPayment howWorks={howWorks} />;
  }
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const url = `https://${process.env.NEXT_PUBLIC_WOMPI_TRANSACTIONS_API_ENV}.wompi.co/v1/transactions/${query?.id}`;
  let status = '';

  try {
    const response = await fetch(url);
    const parsedResponse = await response.json();
    const data = parsedResponse?.data;

    status = data?.status || '';
  } catch (error) {
    throw new Error(`Something went wrong: ${error}`);
  }

  return {
    props: {
      status,
      howWorks: howWorksData,
    },
  };
};
