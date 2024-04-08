import classNames from "classnames";
import * as PopoverUI from "@radix-ui/react-popover";

import { Times } from "../icons/Times";

export function Popover(props) {
  const { children, isOpen, handlePopover, theme } = props;

  const classNamesContent = classNames(
    "popover-content",
    `popover-content--${theme}`,
  );

  return (
    <PopoverUI.Root open={isOpen} onOpenChange={handlePopover}>
      <PopoverUI.Anchor />
      <PopoverUI.Portal>
        <PopoverUI.Content className={classNamesContent}>
          {children}
          <PopoverUI.Close className="popover-close">
            <Times />
          </PopoverUI.Close>
        </PopoverUI.Content>
      </PopoverUI.Portal>
    </PopoverUI.Root>
  );
}
