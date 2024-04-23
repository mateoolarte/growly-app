import { ErrorComponent } from "./components/Error";
import { Success } from "./components/Success";

import "./checkout-status.scss";
import { getPaymentStatus } from "@/services/getPaymentStatus";

export default async function PaymentStatus(props) {
  const { params, searchParams } = props;

  const { paymentId } = params;
  const { type } = searchParams;

  const { data, error } = await getPaymentStatus({ id: paymentId, type });
  const { status } = data || {};

  const successfullStatuses = ["approved", "authorized"];
  const errorStatuses = ["rejected", "cancelled"];

  return (
    <main className="checkout-status container-box">
      {error && <h1>{error}</h1>}

      {successfullStatuses.includes(status) && (
        <Success data={{ ...data, type, paymentId }} />
      )}

      {errorStatuses.includes(status) && <ErrorComponent data={data} />}
    </main>
  );
}
