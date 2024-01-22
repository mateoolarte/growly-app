import { getHeaderData } from "@/utils/getHeaderData";
import { Logo } from "@/ui/Logo";

import { Nav } from "./Nav";

import "./Header.scss";

export async function Header() {
  const data = await getHeaderData();
  const hasData = data && data.length > 0;

  return (
    <header className="header">
      <div className="container-box">
        <div className="header-container">
          <Logo className="header-logo" />

          {hasData && (
            <nav className="header-nav">
              <Nav data={data} />
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}
