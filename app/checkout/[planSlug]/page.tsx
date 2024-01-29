//import { initMercadoPago } from "@mercadopago/sdk-react";
//import { MERCADO_PAGO_PUBLIC_KEY } from "@/constants/envs";
//import CardPaymentForm from "../components/CardPaymentForm/CardPaymentForm";
import './checkout.scss'
import { SelectedPlan } from "../components/SelectedPlan";
import { getPlanDetail } from "@/utils/getPlanDetails";

export default async function Checkout({ params }) {
  const { planSlug } = params
  const plan = await getPlanDetail(planSlug);

  /*   if (!MERCADO_PAGO_PUBLIC_KEY) {
      return null;
    }

    initMercadoPago(MERCADO_PAGO_PUBLIC_KEY); */



  return (
    <div className="checkout">
      <h1 className="checkout-title">Estás a un paso de ser parte de Growly</h1>
      <div className="checkout-container">
        <div>
          <h3 className="checkout-title--left">Resumen de tu compra</h3>
          <SelectedPlan plan={plan} />
        </div>
        {/*         <CardPaymentForm />
 */}        {/*    </div>
      {!paymentError && paymentId ?
        <PaymentStatus paymentId={paymentId} /> :
        <CardPaymentForm onSubmit={onSubmit} />
      }
      {paymentError && (
        <div>
          Ha ocurrido un problema ! intenta de nuevo más tarde
          <button>
            intentar de nuevo
          </button>
        </div>
      )} */}
      </div>
      <p>Si no cumplimos tus expectativas, te devolvemos el dinero. Conoce nuestra política de garantía </p>
    </div>
  );
}
