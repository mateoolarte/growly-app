import { currentUser } from "@clerk/nextjs/server";

import { HeadlineForm } from "../HeadlineForm";
import { Form } from "../Form";
import { Terms } from "../Terms";
import { ContactUs } from "../ContactUs";
import { PaymentDetails } from "../PaymentDetails";
import { Cta } from "../Cta";

import styles from "./Success.module.scss";

export async function Success(props) {
  const { data } = props;

  const user = await currentUser();

  return (
    <div className={styles.success}>
      <div className={styles["success-info"]}>
        <PaymentDetails data={data} />
      </div>
      <div className={styles["success-form"]}>
        <HeadlineForm />

        {user && <Cta />}

        {!user && (
          <>
            <Form data={data} />
            <Terms />
            <ContactUs />
          </>
        )}
      </div>
    </div>
  );
}
