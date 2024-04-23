import { SignUp, ClerkLoaded, ClerkLoading } from "@clerk/nextjs";

import styles from "./Form.module.scss";

export function Form(props) {
  const { data } = props;
  const { id, metadata, type } = data;
  const { plan } = metadata;
  const installments = type ? 3 : 1;
  const redirectUrl = `/dashboard?paymentId=${id}&planName=${plan}&installments=${installments}`;

  return (
    <div className={styles.form}>
      <ClerkLoading>
        <h2>Cargando...</h2>
      </ClerkLoading>

      <ClerkLoaded>
        <SignUp
          redirectUrl={redirectUrl}
          signInUrl="/sign-in"
          routing="virtual"
        />
      </ClerkLoaded>
    </div>
  );
}
