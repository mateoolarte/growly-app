import { createRef, forwardRef, useEffect } from "react";

const PaymentButton = forwardRef((props, ref) => <form ref={ref}></form>);

function generateScriptTag() {
  const scriptTag = document.createElement("script");
  scriptTag.setAttribute("type", "text/javascript");
  scriptTag.setAttribute("src", "https://checkout.wompi.co/widget.js");
  scriptTag.setAttribute("data-public-key", process.env.WOMPI_PUBLIC_KEY);
  scriptTag.setAttribute("data-currency", "COP");
  scriptTag.setAttribute("data-amount-in-cents", "4950000");
  scriptTag.setAttribute("data-reference", `somethingToTest-${Math.random()}`);
  scriptTag.setAttribute("data-render", "button");
  scriptTag.setAttribute("data-redirect-url", "http://localhost:3000/pago");

  return scriptTag;
}

export default function CheckoutContainer() {
  const ref = createRef();

  useEffect(() => {
    const scriptTag = generateScriptTag();

    ref.current.appendChild(scriptTag);
  }, []);

  return <PaymentButton ref={ref} />;
}
