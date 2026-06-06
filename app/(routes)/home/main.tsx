"use client";

import { useDrawerOptions } from "@/app/contexts/DrawerOptionsContext";
import { useEffect } from "react";

export function HomeMain({ children }: BaseComponent) {
  const [, setOptions] = useDrawerOptions();

  useEffect(() => {
    setOptions({ title: "Início" });
  }, []);

  return <div>{children}</div>;
}
