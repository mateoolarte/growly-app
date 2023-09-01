import { Logo } from "@/components/Logo";
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
