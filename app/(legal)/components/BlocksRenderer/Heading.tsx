export function Heading(props) {
  const { data } = props;
  const { level, children } = data;

  if (level === 1) {
    return children.map((child, idxChild) => {
      return <h1 key={idxChild}>{child.text}</h1>;
    });
  }

  if (level === 2) {
    return children.map((child, idxChild) => {
      return <h2 key={idxChild}>{child.text}</h2>;
    });
  }

  if (level === 3) {
    return children.map((child, idxChild) => {
      return <h3 key={idxChild}>{child.text}</h3>;
    });
  }
}
