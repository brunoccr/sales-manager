"use client";

import { useDrawerOptions } from "@/app/contexts/DrawerOptionsContext";
import { useConfirmation } from "@/components/hooks/useConfirmation";
import { useLoading } from "@/components/hooks/useLoading";
import { ButtonMenu, ButtonMenuItem } from "@/components/ui/ButtonMenu";
import { useEffect, useMemo } from "react";

type ChecklistsDetailMainProps = BaseComponent & {
  recordId: string;
  recordName: string;
};

export function ChecklistsDetailMain({
  recordId,
  recordName,
  children,
}: ChecklistsDetailMainProps) {
  const [, setOptions] = useDrawerOptions();
  const [loading, showLoading] = useLoading();
  const [confirm, showConfirmation] = useConfirmation();

  const handleDelete = async () => {
    const result = await showConfirmation("Confirma a exclusão do checklist?");

    if (result) {
      showLoading("Processando", async () => {
        //await ((ms) => new Promise((resolve) => setTimeout(resolve, ms)))(5000);
      });
    }
  };

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
        <ButtonMenuItem label="Excluir" onClick={handleDelete} />
        <ButtonMenuItem label="Importar" onClick={() => {}} />
      </ButtonMenu>
    ),
    [recordId],
  );

  useEffect(() => {
    setOptions({
      title: "Checklist",
      subtitle: recordName,
      showAsSubpage: true,
      menu,
    });
  }, []);

  return (
    <div>
      {loading}
      {confirm}
      {children}
    </div>
  );
}
