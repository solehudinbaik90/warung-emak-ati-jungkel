import { createContext, useContext, useState } from "react";
import { STORE_NAME } from "../utils/constants.js";

const AppContext = createContext(null);

export function AppProvider({ children }) {
  const [storeName] = useState(STORE_NAME);
  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);

  const value = { storeName, cartDrawerOpen, setCartDrawerOpen };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useAppContext harus dipakai di dalam <AppProvider>");
  return ctx;
}
