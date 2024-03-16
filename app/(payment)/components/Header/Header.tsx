import { ArrowCircleLeft } from "@/assets/icons/ArrowCircleLeft";
import { ButtonLink } from "@/ui/Button";
import { Logo } from "@/ui/Logo";

import "./Header.scss";

export function Header() {
  return (
    <header className="checkout-header">
      <div className="checkout-headerContainer">
        <Logo className="checkout-headerLogo" />

        <ButtonLink url="/" style="secondary">
          <ArrowCircleLeft />
          Volver
        </ButtonLink>
      </div>
      <h1 className="checkout-headerTitle">
        Estás a un paso de ser parte de Growly
      </h1>
    </header>
  );
}
