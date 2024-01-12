import { v4 as uuid } from "uuid";

export async function sendPayment(data) {
  const id = uuid();
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Idempotency-Key": id,
    },
    body: JSON.stringify(data),
  };

  try {
    const res = await fetch("/api/process-payment", options);
    const json = await res.json();

    console.log({ json });
  } catch (error) {
    console.error({ error });
  }
}
