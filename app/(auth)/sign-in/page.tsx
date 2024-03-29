import { Isotype } from "@/ui/Isotype";

import { Headline } from "../components/Headline";
import { Cta } from "../components/Cta";

import { Form } from "./components/Form";

import "./sign-in.scss";

const ctaProps = {
  text: "¿Aún no tienes cuenta?",
  btn: {
    label: "Regístrate",
    url: "/sign-up",
  },
  theme: "dark",
};

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
        <Cta {...ctaProps} />
      </div>
    </main>
  );
}
