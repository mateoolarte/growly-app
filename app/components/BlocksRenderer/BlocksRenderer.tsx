import classNames from "classnames";
import { Heading } from "./Heading";
import { List } from "./List";
import { Paragraph } from "./Paragraph";

import styles from "./BlocksRenderer.module.scss";

export function BlocksRenderer(props) {
  const { data, className } = props;

  if (!data || data.length === 0) return null;

  const classNamesContainer = classNames(styles["blocks-renderer"], className);

  return (
    <section className={classNamesContainer}>
      {data.map((block, index) => {
        const { type } = block;

        if (type === "paragraph") return <Paragraph key={index} data={block} />;

        if (type === "heading") return <Heading key={index} data={block} />;

        if (type === "list") return <List key={index} data={block} />;

        return <h2 key={index}>Block</h2>;
      })}
    </section>
  );
}
