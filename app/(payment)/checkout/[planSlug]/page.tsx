import { PLANS } from "@/constants/plans";

import { getPlanDetail } from "@/services/getPlanDetails";
import { getBenefitsData } from "@/services/getBenefitsData";

import { WarrantyPolicy } from "@/components/WarrantyPolicy";

import { CardPaymentForm } from "./components/CardPaymentForm";
import { PlanInfo } from "./components/PlanInfo";
import { Header } from "./components/Header";

import "./checkout.scss";

export default async function Checkout(props) {
  const { params, searchParams } = props;
  const { planSlug } = params;
  const { type } = searchParams;

  // TODO: Improve layout for not existing plan
  if (!PLANS.includes(planSlug)) {
    return <h1>El plan {planSlug} no existe</h1>;
  }

  const [plan, planBenefits] = await Promise.all([
    getPlanDetail(planSlug),
    getBenefitsData(),
  ]);

  return (
    <main className="checkout">
      <div className="container-box">
        <Header />
        <div className="checkout-container">
          <PlanInfo
            plan={plan}
            benefits={planBenefits}
            planSlug={planSlug}
            type={type}
          />
          <CardPaymentForm plan={plan} type={type} />
        </div>
        <WarrantyPolicy />
      </div>
    </main>
  );
}
