import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";

// utils
import { getCookie } from "../../../utils/cookies";

export default function User() {
  const router = useRouter();

  const isLogged = getCookie("currentUser");

  useEffect(() => {
    if (!isLogged) {
      router.push("/ingresar");
    }
  }, [isLogged]);

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>Usuario</main>

      <footer></footer>
    </div>
  );
}
