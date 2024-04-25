import { SignUp, ClerkLoaded, ClerkLoading } from "@clerk/nextjs";

import styles from "./Form.module.scss";

export function Form() {
  return (
    <div className={styles.form}>
      <ClerkLoading>
        <h2>Cargando...</h2>
      </ClerkLoading>

      <ClerkLoaded>
        <SignUp routing="virtual" redirectUrl="/dashboard" />
      </ClerkLoaded>
    </div>
  );
}
