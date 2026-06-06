"use client";

import { createContext, useContext, useState } from "react";

type DrawerOptions = {
  title: string | null;
  subtitle?: string | null;
  showAsSubpage?: boolean;
  menu?: React.ReactNode | null;
};

type DrawerContextValue = [
  DrawerOptions,
  React.Dispatch<React.SetStateAction<DrawerOptions>>,
];

const DrawerOptionsContext = createContext<DrawerContextValue | undefined>(
  undefined,
);

export function DrawerOptionsProvider({
  children,
}: {
  children: React.ReactNode | React.ReactNode[];
}) {
  const [options, setOptions] = useState<DrawerOptions>({
    title: null,
    subtitle: null,
    showAsSubpage: false,
    menu: null,
  });

  return (
    <DrawerOptionsContext value={[options, setOptions]}>
      {children}
    </DrawerOptionsContext>
  );
}

export function useDrawerOptions(): DrawerContextValue {
  const context = useContext(DrawerOptionsContext);
  if (!context) {
    throw new Error(
      "useDrawerOptions deve ser usado dentro de um DrawerOptionsProvider",
    );
  }
  return context as DrawerContextValue;
}
