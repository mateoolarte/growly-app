import { getPlanDetail } from "@/services/getPlanDetails";
import { getBenefitsData } from "@/services/getBenefitsData";

import { WarrantyPolicy } from "@/components/WarrantyPolicy";

import { CardPaymentForm } from "@/(payment)/components/CardPaymentForm";
import { PlanInfo } from "@/(payment)/components/PlanInfo";
import { Header } from "@/(payment)/components/Header";

import "./checkout.scss";

export default async function Checkout({ params }) {
  const { planSlug } = params;

  const plan = await getPlanDetail(planSlug);
  const planBenefits = await getBenefitsData();

  return (
    <main className="checkout container-box">
      <Header />
      <div className="checkout-container">
        <PlanInfo plan={plan} benefits={planBenefits} planSlug={planSlug} />
        <CardPaymentForm />
      </div>
      <WarrantyPolicy />
    </main>
  );
}
