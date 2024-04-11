import { ErrorComponent } from "./components/Error";
import { Success } from "./components/Success";

import "./checkout-status.scss";

export default function PaymentStatus({ params }) {
  const { paymentId } = params;

  return (
    <main className="checkout-status container-box">
      {true && <Success />}

      {false && <ErrorComponent />}
    </main>
  );
}
