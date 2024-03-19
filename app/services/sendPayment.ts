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

    const res = await fetch("/api/process-payment", options);
    const json = await res.json();

    return json;
  } catch (error) {
    throw Error("ERROR Sending payment", { cause: error });
  }
}
