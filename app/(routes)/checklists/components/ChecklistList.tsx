"use server";

import { getChecklists } from "@/actions/checklist";
import { Checklist } from "./Checklist";

export async function ChecklistList() {
  const checklists = await getChecklists();

  return (
    <div className="p-5">
      {checklists && checklists.map((c) => <Checklist key={c.id} data={c} />)}
    </div>
  );
}
