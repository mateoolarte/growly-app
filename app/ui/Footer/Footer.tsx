import { Nav } from "./Nav";

import "./Footer.scss";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container-box">
        <Nav />

        <div className="footer-copyright">
          <Image
            src="/favicon.ico"
            alt="favicon growly"
            width="66"
            height="66"
          />
          <p className="footer-copyrightText">
            ©2024 Growly, todos los derechos reservados
          </p>
        </div>
      </div>
    </footer>
  );
}
