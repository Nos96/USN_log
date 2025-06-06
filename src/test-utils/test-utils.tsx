import React from "react";
import { render, RenderOptions } from "@testing-library/react";
import { LogProvider } from "../context/LogContext";
import userEvent from "@testing-library/user-event";

// Custom wrapper that includes providers
const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return <LogProvider>{children}</LogProvider>;
};

const customRender = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => {
  return {
    user: userEvent.setup(),
    ...render(ui, { wrapper: AllTheProviders, ...options }),
  };
};

// Re-export everything
export * from "@testing-library/react";

// Override render method
export { customRender as render };
