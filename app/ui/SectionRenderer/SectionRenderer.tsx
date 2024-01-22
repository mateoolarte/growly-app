export function SectionRenderer(props) {
  const { data, components } = props;

  if (!data || data.length <= 0) return null;

  return data.map((section) => {
    const componentName = section["__component"];
    const Component = components[componentName];

    if (!Component) return null;

    return <Component key={componentName} {...section} />;
  });
}
