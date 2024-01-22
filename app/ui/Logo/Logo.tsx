import Image from "next/image";

import { LOGO } from "@/constants/assets";

export function Logo(props) {
  const { className } = props;

  return (
    <Image
      src={LOGO}
      alt="Growly logo"
      width="226"
      height="60"
      className={className ? className : ""}
    />
  );
}
