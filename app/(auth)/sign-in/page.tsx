import { SignIn } from "@clerk/nextjs";

import "./sign-in.scss";

export default function Signin() {
  return (
    <main className="sign-up">
      <SignIn redirectUrl="/dashboard" signUpUrl="/sign-up" routing="virtual" />
    </main>
  );
}
