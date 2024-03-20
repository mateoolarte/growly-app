import { PAYMENT_API } from "@/constants/apis";
import { v4 as uuid } from "uuid";

export async function sendPayment(data) {
  try {
    const id = uuid();
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Idempotency-Key": id,
      },
      body: JSON.stringify(data),
    };

    const response = await fetch(PAYMENT_API, options);
    const result = await response.json();

    return result;
  } catch (error) {
    throw Error("ERROR Sending payment", { cause: error });
  }
}
