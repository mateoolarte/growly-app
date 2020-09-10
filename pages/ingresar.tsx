import Head from "next/head";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

// utils
import { setCookie, getCookie } from "../utils/cookies";

// firebase
import firebase from "../firebase/clientApp";

// constants
const LOGIN = "login";
const REGISTER = "register";

function setUser(userAuth) {
  const { user } = userAuth;
  const { uid } = user;

  setCookie("currentUser", uid, 1);

  return { uid };
}

export default function Login() {
  const router = useRouter();

  const isLogged = getCookie("currentUser");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [currentTab, setCurrentTab] = useState(LOGIN);

  useEffect(() => {
    if (isLogged) {
      router.push("/usuario/[id]", `/usuario/${isLogged}`);
    }
  }, [isLogged]);

  function handleTab(type) {
    setCurrentTab(type);
  }

  function handleEmail(e) {
    setEmail(e.target.value);
  }

  function handlePassword(e) {
    setPassword(e.target.value);
  }

  async function handleAuth(e) {
    e.preventDefault();

    const auth = firebase.auth();

    try {
      if (currentTab === LOGIN) {
        const userAuth = await auth.signInWithEmailAndPassword(email, password);

        const { uid } = setUser(userAuth);
        router.push("/usuario/[id]", `/usuario/${uid}`);
      } else if (currentTab === REGISTER) {
        const userAuth = await auth.createUserWithEmailAndPassword(
          email,
          password
        );

        const { uid } = setUser(userAuth);
        router.push("/usuario/[id]", `/usuario/${uid}`);
      }
    } catch (error) {
      console.log(error);
    }
  }

  function handleAuthGoogle() {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    const auth = firebase.auth();

    auth
      .signInWithPopup(googleProvider)
      .then(function (result) {
        // The signed-in user info.
        var user = result.user;
        const { uid } = user;
        setCookie("currentUser", uid, 1);
        router.push("/usuario/[id]", `/usuario/${uid}`);
      })
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
  }

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <form onSubmit={handleAuth}>
          <div>
            <ul>
              <li>
                <button
                  type="button"
                  onClick={() => handleTab(LOGIN)}
                  className={`${currentTab === LOGIN ? "active" : ""}`}
                >
                  Ingresar
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleTab(REGISTER)}
                  className={`${currentTab === REGISTER ? "active" : ""}`}
                >
                  Registrarse
                </button>
              </li>
            </ul>
          </div>

          <div>
            <label>Correo electrónico</label>
            <input type="email" value={email} onChange={handleEmail} />

            <label>Contraseña</label>
            <input type="password" value={password} onChange={handlePassword} />

            <button type="submit">
              {currentTab === LOGIN ? "Ingresar" : "Registrarse"}
            </button>

            <button type="button" onClick={handleAuthGoogle}>
              {currentTab === LOGIN ? "Ingresar" : "Registrarse"} con Google
            </button>
          </div>
        </form>
      </main>

      <footer></footer>
    </div>
  );
}
