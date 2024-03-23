import { SignUp } from "@clerk/nextjs";

import "./sign-up.scss";

export default function Signup() {
  return (
    <main className="sign-up">
      <SignUp redirectUrl="/dashboard" signInUrl="/sign-in" routing="virtual" />
    </main>
  );
}
