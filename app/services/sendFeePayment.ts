import { PAYMENT_FEE_API } from "@/constants/apis";

export async function sendFeePayment(data) {
  try {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    const response = await fetch(PAYMENT_FEE_API, options);
    const result = await response.json();

    return result;
  } catch (error) {
    throw Error("ERROR Sending fee payment", { cause: error });
  }
}
