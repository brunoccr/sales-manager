"use client";

import { formatDateString } from "@/components/utils/formats";

export function Checklist({ data }: { data: ChecklistSummary }) {
  const handleClick = () => {
    window.history.pushState(
      { prevUrl: window.location.href },
      "",
      `/checklists/${data.id}`,
    );
    window.location.reload();
  };

  const statusColor = () => {
    if (data.status === "Pendente") {
      return "text-red-600";
    } else if (data.status === "Parcial") {
      return "text-yellow-600";
    } else {
      return "text-green-600";
    }
  };

  return (
    <div className="bg-[#1e2024] rounded-lg   p-2" onClick={handleClick}>
      <div className="font-bold text-2xl mb-2">
        {formatDateString(data.referenceDate)}
      </div>
      <div className="flex gap-1 text-sm">
        <span>Quantidade de Itens:</span>
        <span>{data.countItems}</span>
      </div>
      <div className="flex gap-1 text-sm">
        <span>Item(s) Pendentes:</span>
        <span>{data.countPendings}</span>
      </div>
      <hr className="mt-4 mb-1" />
      <div className="flex items-center gap-1.5">
        <span className={`${statusColor()} text-2xl`}>&bull;</span>
        <span className="text-sm">{data.status}</span>
      </div>
    </div>
  );
}
