/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2686819825")

  // update collection data
  unmarshal({
    "viewQuery": "SELECT \n    c.id, c.referenceDate,\n    COUNT(ci.id) as countItems,\n    COUNT(cip.id) as countPendings\nFROM checklists c\nLEFT OUTER JOIN checklistItems ci ON ci.checklist = c.id\nLEFT OUTER JOIN checklistItems cip ON cip.checklist = c.id AND cip.confirmed = false\nGROUP BY c.id, c.referenceDate;"
  }, collection)

  // remove field
  collection.fields.removeById("_clone_foN9")

  // remove field
  collection.fields.removeById("_clone_R6Tr")

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

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2686819825")

  // update collection data
  unmarshal({
    "viewQuery": "SELECT \n    c.id, c.referenceDate, c.status,\n    COUNT(ci.id) as countItems,\n    COUNT(cip.id) as countPendings\nFROM checklists c\nLEFT OUTER JOIN checklistItems ci ON ci.checklist = c.id\nLEFT OUTER JOIN checklistItems cip ON cip.checklist = c.id AND cip.confirmed = false\nGROUP BY c.id, c.referenceDate, c.status;"
  }, collection)

  // add field
  collection.fields.addAt(1, new Field({
    "help": "",
    "hidden": false,
    "id": "_clone_foN9",
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
    "id": "_clone_R6Tr",
    "maxSelect": 0,
    "name": "status",
    "presentable": false,
    "required": true,
    "system": false,
    "type": "select",
    "values": [
      "Pendente",
      "Parcial",
      "Finalizado"
    ]
  }))

  // remove field
  collection.fields.removeById("_clone_dOXx")

  return app.save(collection)
})
