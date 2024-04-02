"use client";

import * as AccordionUI from "@radix-ui/react-accordion";
import classNames from "classnames";

import { Plus } from "@/assets/icons/Plus";

import styles from "./Accordion.module.scss";

export function Accordion(props) {
  const { data, collapsed, hasHTMLContent, className } = props;

  if (!data || data.length === 0) return null;

  const classNamesRoot = classNames(styles.accordion, className);

  return (
    <AccordionUI.Root
      type="single"
      collapsible
      defaultValue={!collapsed ? "item-1" : undefined}
      className={classNamesRoot}
    >
      {data.map((item) => {
        const { id, title, content } = item;

        return (
          <AccordionUI.Item
            key={id}
            value={`item-${id}`}
            className={styles["accordion-item"]}
          >
            <AccordionUI.Trigger className={styles["accordion-trigger"]}>
              {title}
              <Plus className={styles["accordion-icon"]} />
            </AccordionUI.Trigger>
            <AccordionUI.Content className={styles["accordion-content"]}>
              {hasHTMLContent && (
                <div dangerouslySetInnerHTML={{ __html: content }} />
              )}

              {!hasHTMLContent && content}
            </AccordionUI.Content>
          </AccordionUI.Item>
        );
      })}
    </AccordionUI.Root>
  );
}
