export function Paragraph(props) {
  const { data } = props;
  const { children } = data;

  const value = children.reduce((accum, currentValue) => {
    return (
      accum +
      `${
        currentValue.bold
          ? `<strong>${currentValue.text}</strong>`
          : currentValue.type === "link" && currentValue.url
            ? `<a href="${currentValue.url}">${currentValue.children.map(
                (child) => child.text,
              )}</a>`
            : currentValue.text
      }`
    );
  }, "");

  return <p dangerouslySetInnerHTML={{ __html: value }} />;
}
