/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2686819825")

  // update collection data
  unmarshal({
    "viewQuery": "SELECT \n    c.id, c.referenceDate,\n\t(CASE \n\t\tWHEN COUNT(ci.id) > 0 AND COUNT(cip.id) = 0 THEN 'Finalizado' \n\t    WHEN COUNT(cip.id) > 0 AND COUNT(cip.id) < COUNT(ci.id) THEN 'Parcial'\n\t\tELSE 'Pendente' \n\tEND) AS status,\n    COUNT(ci.id) AS countItems,\n    COUNT(cip.id) AS countPendings\nFROM checklists c\nLEFT OUTER JOIN checklistItems ci ON ci.checklist = c.id\nLEFT OUTER JOIN checklistItems cip ON cip.checklist = c.id AND cip.confirmed = false\nGROUP BY c.id, c.referenceDate;"
  }, collection)

  // remove field
  collection.fields.removeById("_clone_dOXx")

  // add field
  collection.fields.addAt(1, new Field({
    "help": "",
    "hidden": false,
    "id": "_clone_BBz4",
    "max": "",
    "min": "",
    "name": "referenceDate",
    "presentable": false,
    "required": true,
    "system": false,
    "type": "date"
  }))

  // add field
  collection.fields.addAt(2, new Field({
    "help": "",
    "hidden": false,
    "id": "json2063623452",
    "maxSize": 1,
    "name": "status",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "json"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2686819825")

  // update collection data
  unmarshal({
    "viewQuery": "SELECT \n    c.id, c.referenceDate,\n    COUNT(ci.id) as countItems,\n    COUNT(cip.id) as countPendings\nFROM checklists c\nLEFT OUTER JOIN checklistItems ci ON ci.checklist = c.id\nLEFT OUTER JOIN checklistItems cip ON cip.checklist = c.id AND cip.confirmed = false\nGROUP BY c.id, c.referenceDate;"
  }, collection)

  // add field
  collection.fields.addAt(1, new Field({
    "help": "",
    "hidden": false,
    "id": "_clone_dOXx",
    "max": "",
    "min": "",
    "name": "referenceDate",
    "presentable": false,
    "required": true,
    "system": false,
    "type": "date"
  }))

  // remove field
  collection.fields.removeById("_clone_BBz4")

  // remove field
  collection.fields.removeById("json2063623452")

  return app.save(collection)
})
