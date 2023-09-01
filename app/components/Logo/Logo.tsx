import Image from "next/image";

import { LOGO } from "@/constants";

export function Logo() {
  return <Image src={LOGO} alt="Growly logo" width="236" height="70" />;
}
