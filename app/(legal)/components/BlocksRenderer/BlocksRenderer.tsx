import { Heading } from "./Heading";
import { List } from "./List";
import { Paragraph } from "./Paragraph";

export function BlocksRenderer(props) {
  const { data } = props;

  if (!data || data.length === 0) return null;

  return data.map((block, index) => {
    const { type } = block;

    if (type === "paragraph") return <Paragraph key={index} data={block} />;

    if (type === "heading") return <Heading key={index} data={block} />;

    if (type === "list") return <List key={index} data={block} />;

    return <h1 key={index}>Block</h1>;
  });
}
