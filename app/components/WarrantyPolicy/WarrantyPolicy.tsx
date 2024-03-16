import { ICONS_MAPPER } from "@/constants/iconMapper";

import "./WarrantyPolicy.scss";

const SealWarningIcon = ICONS_MAPPER.sealWarning;

export function WarrantyPolicy() {
  return (
    <div className="warranty-policy">
      <SealWarningIcon />
      <p>Si no cumplimos tus expectativas, te devolvemos el dinero.</p>
      <a href="">Conoce nuestra política de garantía</a>
    </div>
  );
}
