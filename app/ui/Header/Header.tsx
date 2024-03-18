import Link from "next/link";

import { Logo } from "@/ui/Logo";

import { Nav } from "./Nav";

import "./Header.scss";

export function Header() {
  return (
    <header className="header">
      <div className="container-box">
        <div className="header-container">
          <Link href="/">
            <Logo className="header-logo" />
          </Link>

          <Nav />
        </div>
      </div>
    </header>
  );
}
