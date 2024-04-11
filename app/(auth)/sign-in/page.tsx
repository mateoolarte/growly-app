import { Isotype } from "@/ui/Isotype";

import { Headline } from "./components/Headline";
import { Form } from "./components/Form";

import "./sign-in.scss";

export default function Signin() {
  return (
    <main className="sign-in">
      <div className="sign-in-container">
        <Isotype className="sign-in-logo" />
        <Headline
          title="¡Hola de nuevo!"
          description="Inicia sesión en tu cuenta"
          theme="dark"
        />
        <Form />
      </div>
    </main>
  );
}
