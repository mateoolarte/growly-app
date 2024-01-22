import { Logo } from "@/ui/Logo";

import { Nav } from "./Nav";

import "./Header.scss";

export function Header() {
  return (
    <header className="header">
      <div className="container-box">
        <div className="header-container">
          <Logo className="header-logo" />

          <Nav />
        </div>
      </div>
    </header>
  );
}
