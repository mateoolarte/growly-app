"use client";

import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";

import { IS_BROWSER_ENV, POSTHOG_HOST, POSTHOG_KEY } from "./constants/envs";

if (IS_BROWSER_ENV) {
  posthog.init(POSTHOG_KEY, {
    api_host: POSTHOG_HOST,
  });
}

export function CSPostHogProvider({ children }) {
  return <PostHogProvider client={posthog}>{children}</PostHogProvider>;
}
