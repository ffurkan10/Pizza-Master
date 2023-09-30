"use client";

import { Provider } from "react-redux";
import Store from "@/store/Store";

export function Providers({ children }) {
  return <Provider store={Store}>{children}</Provider>;
}
