import * as Toast from "@radix-ui/react-toast";

import styles from "./Alert.module.scss";
import classNames from "classnames";
import { Times } from "../icons/Times";

const oneDayDuration = 8640000000;

export function Alert(props) {
  const {
    direction = "right",
    isOpen,
    handleAlert,
    children,
    type,
    title,
    isShortDuration,
  } = props;
  const classNamesContainer = classNames(
    styles.alert,
    styles[`alert--${type}`],
  );

  return (
    <Toast.Provider
      swipeDirection={direction}
      duration={isShortDuration ? 5000 : oneDayDuration}
    >
      <Toast.Root
        open={isOpen}
        onOpenChange={handleAlert}
        className={classNamesContainer}
      >
        {title && (
          <Toast.Title className={styles["alert-title"]}>{title}</Toast.Title>
        )}
        <Toast.Description className={styles["alert-description"]}>
          {children}
        </Toast.Description>
        <Toast.Action
          className={styles["alert-action"]}
          asChild
          altText="Goto schedule to undo"
        >
          <button>
            <Times />
          </button>
        </Toast.Action>
      </Toast.Root>
      <Toast.Viewport className={styles["alert-viewport"]} />
    </Toast.Provider>
  );
}
