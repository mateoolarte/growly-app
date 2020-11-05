// vendors
import { useRouter } from "next/router";

// utils
import { getCookie } from "../utils/cookies";
import { isBrowser } from "../utils/checkEnvironment";

export default function withAuth(Component) {
  return function WrappedComponent(props) {
    const router = useRouter();
    const isLogged = getCookie("currentUser");

    if (!isLogged && isBrowser()) {
      router.push("/ingresar");

      return null;
    }

    return <Component {...props} />;
  };

  async function getStaticProps(context) {
    const isLogged = getCookie("currentUser");

    if (context.res && !isLogged) {
      ctx.res.writeHead(302, { Location: "/ingresar" });
      ctx.res.end();
    }

    const componentProps =
      Component.getStaticProps && (await Component.getStaticProps(context));

    return {
      ...componentProps,
    };
  }
}
