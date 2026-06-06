import { ChecklistList } from "./components/ChecklistList";
import { ChecklistsMain } from "./main";

export default async function Checklists() {
  return (
    <ChecklistsMain>
      <ChecklistList />
    </ChecklistsMain>
  );
}
