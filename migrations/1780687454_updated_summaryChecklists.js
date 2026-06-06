/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2686819825")

  // update collection data
  unmarshal({
    "viewQuery": "WITH sumChecklists AS (\n    SELECT \n    \tc.id, c.referenceDate,\n\t\t(SELECT count() FROM checklistItems WHERE checklist = c.id) AS countItems,\n    \t(SELECT count() FROM checklistItems WHERE checklist = c.id AND (confirmed = false AND notArrive = false)) AS countPendings\n    FROM checklists AS c\n)\n\nSELECT \n    id, referenceDate, countItems, countPendings,\n\t(CASE \n\t\tWHEN countItems > 0 AND countPendings = 0 THEN 'Finalizado' \n\t    WHEN countPendings > 0 AND countPendings < countItems THEN 'Parcial'\n\t\tELSE 'Pendente' \n\tEND) AS status\nFROM sumChecklists AS c"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2686819825")

  // update collection data
  unmarshal({
    "viewQuery": "WITH sumChecklists AS (\n    SELECT \n    \tc.id, c.referenceDate,\n\t\t(SELECT count() FROM checklistItems WHERE checklist = c.id) AS countItems,\n    \t(SELECT count() FROM checklistItems WHERE checklist = c.id AND (confirmed = true OR notArrive = true)) AS countPendings\n    FROM checklists AS c\n)\n\nSELECT \n    id, referenceDate, countItems, countPendings,\n\t(CASE \n\t\tWHEN countItems > 0 AND countPendings = 0 THEN 'Finalizado' \n\t    WHEN countPendings > 0 AND countPendings < countItems THEN 'Parcial'\n\t\tELSE 'Pendente' \n\tEND) AS status\nFROM sumChecklists AS c"
  }, collection)

  return app.save(collection)
})
