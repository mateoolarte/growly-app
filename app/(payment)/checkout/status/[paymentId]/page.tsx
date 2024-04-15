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

  return (
    <main className="checkout-status container-box">
      {error && <h1>{error}</h1>}

      {(status === "approved" || status === "authorized") && (
        <Success data={data} />
      )}

      {status === "rejected" && <ErrorComponent data={data} />}
    </main>
  );
}
