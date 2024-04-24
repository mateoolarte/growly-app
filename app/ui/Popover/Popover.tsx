import classNames from "classnames";
import * as PopoverUI from "@radix-ui/react-popover";

import { Times } from "../icons/Times";

export function Popover(props) {
  const { children, isOpen, handlePopover, theme, className, classNameClose } =
    props;

  const classNamesContent = classNames(
    "popover-content",
    `${theme ? `popover-content--${theme}` : ""}`,
    className,
  );
  const classNamesClose = classNames("popover-close", classNameClose);

  return (
    <PopoverUI.Root open={isOpen} onOpenChange={handlePopover}>
      <PopoverUI.Anchor />
      <PopoverUI.Portal>
        <PopoverUI.Content className={classNamesContent}>
          {children}
          <PopoverUI.Close className={classNamesClose}>
            <Times />
          </PopoverUI.Close>
        </PopoverUI.Content>
      </PopoverUI.Portal>
    </PopoverUI.Root>
  );
}
