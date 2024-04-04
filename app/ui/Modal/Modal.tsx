import * as Dialog from "@radix-ui/react-dialog";

import { Times } from "../icons/Times";

import styles from "./Modal.module.scss";

export function Modal(props) {
  const { title, isOpen, handleModal, children } = props;

  return (
    <Dialog.Root open={isOpen} onOpenChange={handleModal}>
      <Dialog.Portal>
        <Dialog.Overlay className={styles["modal-overlay"]} />

        <Dialog.Content className={styles["modal-container"]}>
          {title && (
            <Dialog.Title className={styles["modal-title"]}>
              {title}
            </Dialog.Title>
          )}

          {children}

          <Dialog.Close asChild>
            <button className={styles["modal-close"]} aria-label="Cerrar">
              <Times />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
