"use client";

import { initMercadoPago } from "@mercadopago/sdk-react";

import { MERCADO_PAGO_PUBLIC_KEY } from "@/constants/envs";

export function MercadoPagoWrapper({ children }) {
  if (!MERCADO_PAGO_PUBLIC_KEY) return null;

  initMercadoPago(MERCADO_PAGO_PUBLIC_KEY);

  return children;
}
