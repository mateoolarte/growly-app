import { HeadlineForm } from "../HeadlineForm";
import { Form } from "../Form";
import { Terms } from "../Terms";
import { ContactUs } from "../ContactUs";
import { PaymentDetails } from "../PaymentDetails";

import styles from "./Success.module.scss";

export function Success(props) {
  const { data } = props;

  return (
    <div className={styles.success}>
      <div className={styles["success-info"]}>
        <PaymentDetails data={data} />
      </div>
      <div className={styles["success-form"]}>
        <HeadlineForm />
        <Form />
        <Terms />
        <ContactUs />
      </div>
    </div>
  );
}
