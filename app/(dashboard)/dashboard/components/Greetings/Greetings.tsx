import { currentUser } from "@clerk/nextjs/server";

import styles from "./Greetings.module.scss";

export async function Greetings(props) {
  const { appInfo, hasCustomerPlan } = props;
  const { status } = appInfo;

  const user = await currentUser();

  const firstName = user?.firstName;
  const firstEmail = user?.emailAddresses[0]?.emailAddress;
  const username = firstName || firstEmail;

  const isInitialState = status === "initial";
  const initialStateDescription = "¿Como quieres que comencemos?";

  const isDefaultState = status === "default";
  const defaultStateDescription = "¿Qué quieres hacer hoy?";

  return (
    <div className={styles.greetings}>
      <h1 className={styles["greetings-title"]}>¡Hola {username}!</h1>
      {hasCustomerPlan && (
        <>
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
        </>
      )}
    </div>
  );
}
