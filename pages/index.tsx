import Head from "next/head";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <button type="button" onClick={() => router.push("/ingresar")}>
          Go to Login
        </button>
      </main>

      <footer></footer>
    </div>
  );
}
