"use client";

import * as TabsUI from "@radix-ui/react-tabs";

import styles from "./Tabs.module.scss";

export function Tabs(props) {
  const { children, defaultTab, tabs } = props;

  if (!tabs && !children) return null;

  return (
    <TabsUI.Root className={styles.tabs} defaultValue={defaultTab}>
      <TabsUI.List className={styles["tabs-items"]}>
        {tabs.map((tab) => (
          <TabsUI.Trigger
            key={tab.id}
            className={styles["tabs-item"]}
            value={tab.value}
          >
            {tab.content()}
          </TabsUI.Trigger>
        ))}
      </TabsUI.List>
      {children}
    </TabsUI.Root>
  );
}

export const TabContent = TabsUI.Content;
