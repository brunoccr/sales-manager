"use client";

import { useDrawerOptions } from "@/app/contexts/DrawerOptionsContext";
import { useEffect } from "react";

export function CustomersMain({ children }: BaseComponent) {
  const [, setOptions] = useDrawerOptions();

  useEffect(() => {
    setOptions({ title: "Clientes" });
  }, []);

  return <div>{children}</div>;
}
