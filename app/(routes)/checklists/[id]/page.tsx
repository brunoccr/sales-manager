import { formatDateString } from "@/components/utils/formats";
import { ChecklistsDetailMain } from "./main";

interface RouteParams {
  params: Promise<{ id: string }>;
}

export default async function ChecklistDetail({ params }: RouteParams) {
  const { id } = await params;

  const checklist: Checklist = {
    id: "asdasd",
    status: "Pendente",
    referenceDate: "2026-01-01T00:00:00.00Z",
  };

  return (
    <ChecklistsDetailMain
      recordId={id}
      recordName={formatDateString(checklist.referenceDate)}
    >
      <div>{id}</div>
    </ChecklistsDetailMain>
  );
}
