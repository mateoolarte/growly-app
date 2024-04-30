import { Warning } from "@/ui/icons/Warning";

import { ContactUs } from "../ContactUs";

import styles from "./PaymentUsed.module.scss";
import { ButtonLink } from "@/ui/Button";

export function PaymentUsed() {
  return (
    <div className={styles["payment-used"]}>
      <span className={styles["payment-used-icon"]}>
        <Warning />
      </span>
      <h1 className={styles["payment-used-title"]}>Este enlace ha caducado</h1>
      <p className={styles["payment-used-description"]}>
        Hemos detectado que ya tus datos están registrados en nuestra base de
        datos. <br /> Ingresa a la plataforma con tu usuario y contraseña.
        <br /> Si tienes problemas problemas para ingresar contacta nuestro
        equipo de soporte.
      </p>
      <ButtonLink href="/sign-in" className={styles["payment-used-cta"]}>
        Iniciar sesión
      </ButtonLink>
      <ContactUs message="¿Problemas técnicos?" />
    </div>
  );
}
