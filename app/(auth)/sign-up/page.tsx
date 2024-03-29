import { Logo } from "@/ui/Logo";

import { Headline } from "../components/Headline";
import { Cta } from "../components/Cta";

import { Form } from "./components/Form";
import { Terms } from "./components/Terms";

import "./sign-up.scss";

const ctaProps = {
  text: "Ya tienes cuenta?",
  btn: {
    label: "Inicia sesión",
    url: "/sign-in",
  },
};

export default function Signup() {
  return (
    <main className="sign-up">
      <Logo className="sign-up-logo" />
      <Headline
        title="El futuro digital comienza aquí"
        description="Crea tu cuenta para comenzar"
      />
      <Form />
      <Terms />
      <Cta {...ctaProps} />
    </main>
  );
}
