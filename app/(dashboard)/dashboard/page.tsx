import { currentUser } from "@clerk/nextjs/server";

import { db } from "@/db";
import { customer, app, customerPlan } from "@/db/schema";

import { Actions } from "./components/Actions";
import { CardsInfo } from "./components/CardsInfo";
import { Footer } from "./components/Footer";
import { Greetings } from "./components/Greetings";
import { Header } from "./components/Header";

import "./dashboard.scss";

export default async function Dashboard(props) {
  const { searchParams } = props;
  const { paymentId, planName, installments } = searchParams;

  const user = await currentUser();
  const userId = user?.id || "";

  let customerInfo = await db.query.customer.findFirst({
    where: (customer, { eq }) => eq(customer.userId, userId),
    with: {
      plans: true,
    },
  });

  if (!customerInfo) {
    const payloadCustomer = {
      userId,
    };
    await db.insert(customer).values(payloadCustomer);
    customerInfo = await db.query.customer.findFirst({
      where: (customer, { eq }) => eq(customer.userId, userId),
      with: {
        plans: true,
      },
    });
    await db.insert(app).values({
      customerId: customerInfo?.id,
    });
  }

  if (paymentId && planName && installments) {
    const payment = await db.query.customerPlan.findFirst({
      where: (customerPlan, { eq }) => eq(customerPlan.paymentId, paymentId),
    });

    if (!payment) {
      const planInfo = await db.query.plan.findFirst({
        where: (plan, { eq, and }) =>
          and(eq(plan.name, planName), eq(plan.installments, installments)),
      });

      if (!planInfo) {
        throw new Error("Plan not found");
      }

      await db.insert(customerPlan).values({
        customerId: customerInfo && (customerInfo?.id || customerInfo[0].id),
        planId: planInfo.id,
        paymentId,
      });

      customerInfo = await db.query.customer.findFirst({
        where: (customer, { eq }) => eq(customer.userId, userId),
        with: {
          plans: true,
        },
      });
    }
  }

  const customerId = customerInfo?.id;

  const appInfo = await db.query.app.findFirst({
    where: (app, { eq }) => eq(app.customerId, customerId),
  });

  const customerPlans = customerInfo?.plans;
  let planInfo = {};
  let customerPlanCreatedAt = "";

  if (customerPlans && customerPlans.length > 0) {
    const customerPlanInfo = customerPlans && customerPlans[0];
    const customerPlanId = customerPlanInfo?.planId;
    customerPlanCreatedAt = customerPlanInfo?.createdAt;

    planInfo = await db.query.plan.findFirst({
      where: (plan, { eq }) => eq(plan.id, customerPlanId),
    });
  }

  return (
    <main className="dashboard">
      <div className="container-box">
        <Header appInfo={appInfo} />
        <Greetings appInfo={appInfo} />

        {customerPlans && customerPlans.length > 0 && (
          <>
            <CardsInfo appInfo={appInfo} />
            <Actions
              planInfo={{ ...planInfo, createdAt: customerPlanCreatedAt }}
            />
          </>
        )}
        <Footer />
      </div>
    </main>
  );
}
