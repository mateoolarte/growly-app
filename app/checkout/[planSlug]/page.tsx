import { CardPaymentForm } from "../components/CardPaymentForm";
import { SelectedPlan } from "../components/SelectedPlan";
import { getPlanDetail } from "@/utils/getPlanDetails";
import './checkout.scss';
import { getPlanBenefits } from "@/utils/getPlanBenefits";
import { ICONS_MAPPER } from "@/constants/iconMapper";

export default async function Checkout({ params }) {
  const { planSlug } = params
  const plan = await getPlanDetail(planSlug);
  const planBenefits = await getPlanBenefits(planSlug);
  const SealWarningIcon = ICONS_MAPPER.sealWarning;

  return (
    <div className="checkout">
      <h1 className="checkout-title">Estás a un paso de ser parte de Growly</h1>
      <div className="checkout-container">
        <div>
          <h3 className="checkout-title--left">Resumen de tu compra</h3>
          <SelectedPlan plan={plan} planBenefits={planBenefits} />
        </div>
        <CardPaymentForm />
      </div>
      <div className="checkout-disclaimerContainer">
        <SealWarningIcon className="" />
        <p className="checkout-disclaimer">Si no cumplimos tus expectativas, te devolvemos el dinero.</p>
        <a href="">Conoce nuestra política de garantía</a>
      </div>
    </div>
  );
}
