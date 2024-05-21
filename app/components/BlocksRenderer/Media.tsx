import Image from "next/image";

export function Media(props) {
  const { data } = props;
  const { image } = data;
  const { url, width, height, name } = image;

  return <Image src={url} width={width} height={height} alt={name} />;
}
