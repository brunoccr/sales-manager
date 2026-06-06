"use client";

import { useDrawerOptions } from "@/app/contexts/DrawerOptionsContext";
import { ButtonMenu, ButtonMenuItem } from "@/components/ui/ButtonMenu";
import { useEffect, useMemo } from "react";

export function ChecklistsMain({ children }: BaseComponent) {
  const [, setOptions] = useDrawerOptions();

  const menu = useMemo(
    () => (
      <ButtonMenu
        content={
          <div className="flex flex-col justify-center items-center w-8 h-8 space-y-1 focus:outline-none relative">
            <span className="block w-0.5 h-0.5 bg-white rounded"></span>
            <span className="block w-0.5 h-0.5 bg-white rounded"></span>
            <span className="block w-0.5 h-0.5 bg-white rounded"></span>
          </div>
        }
      >
        <ButtonMenuItem label="Criar" onClick={() => {}} />
      </ButtonMenu>
    ),
    [],
  );

  useEffect(() => {
    setOptions({ title: "Checklists", menu });
  }, []);

  return <div>{children}</div>;
}
