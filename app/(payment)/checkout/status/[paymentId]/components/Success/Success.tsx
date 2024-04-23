import { db } from "@/db";

import { HeadlineForm } from "../HeadlineForm";
import { Form } from "../Form";
import { Terms } from "../Terms";
import { ContactUs } from "../ContactUs";
import { PaymentDetails } from "../PaymentDetails";

import styles from "./Success.module.scss";

export async function Success(props) {
  const { data } = props;
  const { paymentId } = data;

  const payment = await db.query.customerPlan.findFirst({
    where: (customerPlan, { eq }) => eq(customerPlan.paymentId, paymentId),
  });

  if (payment) return <h1>Este pago ya ha sido usado</h1>;

  return (
    <div className={styles.success}>
      <div className={styles["success-info"]}>
        <PaymentDetails data={data} />
      </div>
      <div className={styles["success-form"]}>
        <HeadlineForm />
        <Form data={data} />
        <Terms />
        <ContactUs />
      </div>
    </div>
  );
}
