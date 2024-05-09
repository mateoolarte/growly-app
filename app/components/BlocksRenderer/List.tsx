export function List(props) {
  const { data } = props;
  const { format, children } = data;

  if (format === "unordered") {
    return (
      <ul>
        {children.map((child, idxChild) => {
          const value = child.children.reduce((accum, currentValue) => {
            return (
              accum +
              `${
                currentValue.bold
                  ? `<strong>${currentValue.text}</strong>`
                  : currentValue.text
              }`
            );
          }, "");

          return (
            <li key={idxChild} dangerouslySetInnerHTML={{ __html: value }} />
          );
        })}
      </ul>
    );
  }
}
