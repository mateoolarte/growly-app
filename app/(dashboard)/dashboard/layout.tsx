import { ReactNode } from "react";

import { CSPostHogProvider } from "@/providers";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return <CSPostHogProvider>{children}</CSPostHogProvider>;
}
