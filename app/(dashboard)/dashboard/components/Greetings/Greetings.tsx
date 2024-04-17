import { currentUser } from "@clerk/nextjs/server";

import styles from "./Greetings.module.scss";

export async function Greetings() {
  const user = await currentUser();

  const firstName = user?.firstName;
  const firstEmail = user?.emailAddresses[0]?.emailAddress;
  const username = firstName || firstEmail;

  const isInitialState = false;
  const initialStateDescription = "¿Como quieres que comencemos?";

  const isDefaultState = true;
  const defaultStateDescription = "¿Qué quieres hacer hoy?";

  return (
    <div className={styles.greetings}>
      <h1 className={styles["greetings-title"]}>¡Hola {username}!</h1>
      {isInitialState && (
        <h2 className={styles["greetings-description"]}>
          {initialStateDescription}
        </h2>
      )}

      {isDefaultState && (
        <h2 className={styles["greetings-description"]}>
          {defaultStateDescription}
        </h2>
      )}
    </div>
  );
}
