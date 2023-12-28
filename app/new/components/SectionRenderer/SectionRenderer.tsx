import { SECTIONS_MAPPER } from "@/new/constants";

export function SectionRenderer({ data }) {
  if (!data || data.length <= 0) return null;

  return data.map((section) => {
    const componentName = section["__component"];
    const Component = SECTIONS_MAPPER[componentName];

    if (!Component) return null;

    return <Component key={componentName} {...section} />;
  });
}
