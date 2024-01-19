"use client";

import * as AccordionUI from "@radix-ui/react-accordion";

import { Plus } from "@/assets/icons/Plus";

import "./Accordion.scss";

export function Accordion(props) {
  const { data } = props;

  if (!data || data.length === 0) return null;

  return (
    <AccordionUI.Root
      type="single"
      collapsible
      defaultValue="item-1"
      className="accordion"
    >
      {data.map((item) => {
        const { id, question, answer } = item;

        return (
          <AccordionUI.Item
            key={id}
            value={`item-${id}`}
            className="accordion-item"
          >
            <AccordionUI.Trigger className="accordion-trigger">
              {question}
              <Plus className="accordion-icon" />
            </AccordionUI.Trigger>
            <AccordionUI.Content className="accordion-content">
              {answer}
            </AccordionUI.Content>
          </AccordionUI.Item>
        );
      })}
    </AccordionUI.Root>
  );
}
