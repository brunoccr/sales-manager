/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2686819825")

  // update collection data
  unmarshal({
    "viewQuery": "WITH sumChecklists AS (\n    SELECT \n    \tc.id, c.referenceDate,\n\t\t(SELECT count() FROM checklistItems WHERE checklist = c.id) AS countItems,\n    \t(SELECT count() FROM checklistItems WHERE checklist = c.id AND (confirmed = true OR notArrive = true)) AS countPendings\n    FROM checklists AS c\n)\n\nSELECT \n    id, referenceDate, countItems, countPendings,\n\t(CASE \n\t\tWHEN countItems > 0 AND countPendings = 0 THEN 'Finalizado' \n\t    WHEN countPendings > 0 AND countPendings < countItems THEN 'Parcial'\n\t\tELSE 'Pendente' \n\tEND) AS status\nFROM sumChecklists AS c"
  }, collection)

  // remove field
  collection.fields.removeById("_clone_BBz4")

  // remove field
  collection.fields.removeById("number334974911")

  // remove field
  collection.fields.removeById("number1051522982")

  // add field
  collection.fields.addAt(1, new Field({
    "help": "",
    "hidden": false,
    "id": "json2198845375",
    "maxSize": 1,
    "name": "referenceDate",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "json"
  }))

  // add field
  collection.fields.addAt(2, new Field({
    "help": "",
    "hidden": false,
    "id": "json334974911",
    "maxSize": 1,
    "name": "countItems",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "json"
  }))

  // add field
  collection.fields.addAt(3, new Field({
    "help": "",
    "hidden": false,
    "id": "json1051522982",
    "maxSize": 1,
    "name": "countPendings",
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
    "viewQuery": "SELECT \n    c.id, c.referenceDate,\n\t(CASE \n\t\tWHEN COUNT(ci.id) > 0 AND COUNT(cip.id) = 0 THEN 'Finalizado' \n\t    WHEN COUNT(cip.id) > 0 AND COUNT(cip.id) < COUNT(ci.id) THEN 'Parcial'\n\t\tELSE 'Pendente' \n\tEND) AS status,\n    COUNT(ci.id) AS countItems,\n    COUNT(cip.id) AS countPendings\nFROM checklists c\nLEFT OUTER JOIN checklistItems ci ON ci.checklist = c.id\nLEFT OUTER JOIN checklistItems cip ON cip.checklist = c.id AND cip.confirmed = false\nGROUP BY c.id, c.referenceDate;"
  }, collection)

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
  collection.fields.addAt(3, new Field({
    "help": "",
    "hidden": false,
    "id": "number334974911",
    "max": null,
    "min": null,
    "name": "countItems",
    "onlyInt": true,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // add field
  collection.fields.addAt(4, new Field({
    "help": "",
    "hidden": false,
    "id": "number1051522982",
    "max": null,
    "min": null,
    "name": "countPendings",
    "onlyInt": true,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // remove field
  collection.fields.removeById("json2198845375")

  // remove field
  collection.fields.removeById("json334974911")

  // remove field
  collection.fields.removeById("json1051522982")

  return app.save(collection)
})
