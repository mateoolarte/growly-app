// vendors
import { useRouter } from "next/router";

// components
import CheckoutContainer from "../components/CheckoutContainer";

// hocs
import withAuth from "../hocs/withAuth";

// utils
import { isBrowser } from "../utils/checkEnvironment";

function Checkout() {
  const router = useRouter();
  const { query } = router;
  const planType = query && query.type;

  if (planType === undefined && isBrowser()) {
    router.back();

    return null;
  }

  return <CheckoutContainer />;
}

export default withAuth(Checkout);
