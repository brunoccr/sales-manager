"use client";

import { useDrawerOptions } from "@/app/contexts/DrawerOptionsContext";
import { useEffect } from "react";

export function OrdersMain({ children }: BaseComponent) {
  const [, setOptions] = useDrawerOptions();

  useEffect(() => {
    setOptions({ title: "Pedidos" });
  }, []);

  return <div>{children}</div>;
}
