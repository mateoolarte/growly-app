import { ISOTYPE } from "@/constants/assets";
import Image from "next/image";

export function Isotype(props) {
  const { className } = props;

  return (
    <Image
      src={ISOTYPE}
      alt="Growly logo"
      width="80"
      height="80"
      className={className ? className : ""}
    />
  );
}
