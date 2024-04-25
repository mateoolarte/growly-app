import { SignIn, ClerkLoaded, ClerkLoading } from "@clerk/nextjs";

import styles from "./Form.module.scss";

export function Form() {
  return (
    <div className={styles.form}>
      <ClerkLoading>
        <h2 style={{ color: "white" }}>Cargando...</h2>
      </ClerkLoading>

      <ClerkLoaded>
        <SignIn routing="virtual" redirectUrl="/dashboard" />
      </ClerkLoaded>
    </div>
  );
}
