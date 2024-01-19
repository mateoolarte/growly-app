import { Logo } from "@/ui/Logo";

import "./Header.scss";

export function Header() {
  return (
    <header className="header">
      <div className="container-box">
        <Logo />
      </div>
    </header>
  );
}
