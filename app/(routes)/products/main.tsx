"use client";

import { useDrawerOptions } from "@/app/contexts/DrawerOptionsContext";
import { useEffect } from "react";

export function ProductsMain({ children }: BaseComponent) {
  const [, setOptions] = useDrawerOptions();

  useEffect(() => {
    setOptions({ title: "Produtos" });
  }, []);

  return <div>{children}</div>;
}
