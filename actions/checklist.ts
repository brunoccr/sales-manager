import { createServerClient } from "@/lib/pocketbase";

export async function getChecklists(): Promise<ChecklistSummary[] | undefined> {
  const pb = await createServerClient();

  try {
    return await pb.collection("summaryChecklists").getFullList();
  } catch {}
}
