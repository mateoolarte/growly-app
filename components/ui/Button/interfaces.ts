import React from "react";

type Options = "button" | "submit" | "link";

export interface Props {
  type: Options;
  children: React.ReactNode;
  onClick?: any; // Update this type
  href?: string;
  white: boolean;
}
