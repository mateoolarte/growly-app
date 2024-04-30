import { db } from "@/db";

import { getPaymentStatus } from "@/services/getPaymentStatus";

import { ErrorComponent } from "./components/Error";
import { Success } from "./components/Success";
import { PaymentUsed } from "./components/PaymentUsed";

import "./checkout-status.scss";

export default async function PaymentStatus(props) {
  const { params, searchParams } = props;

  const { paymentId } = params;
  const { type } = searchParams;

  const { data, error } = await getPaymentStatus({ id: paymentId, type });
  const payment = await db.query.customerPlan.findFirst({
    where: (customerPlan, { eq }) => eq(customerPlan.paymentId, paymentId),
  });

  const { status } = data || {};

  const successfullStatuses = ["approved", "authorized"];
  const errorStatuses = ["rejected", "cancelled"];

  if (payment) return <PaymentUsed />;

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
