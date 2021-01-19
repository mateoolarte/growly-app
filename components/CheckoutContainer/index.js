// vendors
import { createRef, forwardRef, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const PaymentButton = forwardRef((props, ref) => <form ref={ref}></form>);

function generateScriptTag(price, template, type) {
  const scriptTag = document.createElement("script");
  scriptTag.setAttribute("type", "text/javascript");
  scriptTag.setAttribute("src", "https://checkout.wompi.co/widget.js");
  scriptTag.setAttribute(
    "data-public-key",
    process.env.NEXT_PUBLIC_WOMPI_PUBLIC_KEY
  );
  scriptTag.setAttribute("data-currency", "COP");
  scriptTag.setAttribute("data-amount-in-cents", price);
  scriptTag.setAttribute("data-reference", `${template}-${type}-${uuidv4()}`);
  scriptTag.setAttribute("data-render", "button");
  scriptTag.setAttribute(
    "data-redirect-url",
    "http://localhost:3000/finalizado"
  );

  return scriptTag;
}

export default function CheckoutContainer({ price, template, type }) {
  const ref = createRef();

  useEffect(() => {
    const oldScriptTag = ref.current.querySelector(
      "script[data-amount-in-cents]"
    );
    const hasPrice = oldScriptTag?.getAttribute("data-amount-in-cents");

    if (price) {
      const scriptTag = generateScriptTag(price, template, type);

      ref.current.appendChild(scriptTag);

      if (hasPrice !== "undefined") {
        const btn = ref.current.querySelector(".waybox-button");
        const preloader = document.querySelector(".waybox-backdrop");
        const modal = document.querySelector(".waybox-modal");
        btn?.remove();
        preloader?.remove();
        modal?.remove();
        oldScriptTag?.remove();
      }
    }
  }, [price]);

  return <PaymentButton ref={ref} />;
}
