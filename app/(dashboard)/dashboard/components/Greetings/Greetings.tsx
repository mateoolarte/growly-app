import { currentUser } from "@clerk/nextjs/server";

import styles from "./Greetings.module.scss";

export async function Greetings() {
  const user = await currentUser();

  const firstName = user?.firstName;
  const firstEmail = user?.emailAddresses[0]?.emailAddress;
  const username = firstName || firstEmail;

  return (
    <div className={styles.greetings}>
      <h1 className={styles["greetings-title"]}>¡Hola {username}!</h1>
      <h2 className={styles["greetings-description"]}>
        ¿Como quieres que comencemos?
      </h2>
    </div>
  );
}
