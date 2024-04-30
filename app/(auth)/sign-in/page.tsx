import Link from "next/link";

import { Isotype } from "@/ui/Isotype";

import { Headline } from "./components/Headline";
import { Form } from "./components/Form";
import { GoHome } from "./components/GoHome";

import "./sign-in.scss";

export default function Signin() {
  return (
    <main className="sign-in">
      <div className="sign-in-container">
        <Link href="/">
          <Isotype className="sign-in-logo" />
        </Link>
        <Headline
          title="¡Hola de nuevo!"
          description="Inicia sesión en tu cuenta"
          theme="dark"
        />
        <Form />
        <GoHome />
      </div>
    </main>
  );
}
