/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2686819825")

  // update collection data
  unmarshal({
    "viewQuery": "SELECT \n    c.id, c.referenceDate, c.status,\n    COUNT(ci.id) as countItems,\n    COUNT(cip.id) as countPendings\nFROM checklists c\nLEFT OUTER JOIN checklistItems ci ON ci.checklist = c.id\nLEFT OUTER JOIN checklistItems cip ON cip.checklist = c.id AND cip.confirmed = false\nGROUP BY c.id, c.referenceDate, c.status;"
  }, collection)

  // remove field
  collection.fields.removeById("_clone_XuoD")

  // remove field
  collection.fields.removeById("_clone_vF46")

  // add field
  collection.fields.addAt(1, new Field({
    "help": "",
    "hidden": false,
    "id": "_clone_nBhf",
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
    "id": "_clone_nrwY",
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

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2686819825")

  // update collection data
  unmarshal({
    "viewQuery": "SELECT \n    c.id, c.referenceDate, c.status,\n    COUNT(ci.id) as countItems,\n    COUNT(ci.id) as countPendings\nFROM checklists c\nLEFT OUTER JOIN checklistItems ci ON ci.checklist = c.id\nLEFT OUTER JOIN checklistItems cip ON cip.checklist = c.id AND cip.confirmed = false\nGROUP BY c.id, c.referenceDate, c.status;"
  }, collection)

  // add field
  collection.fields.addAt(1, new Field({
    "help": "",
    "hidden": false,
    "id": "_clone_XuoD",
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
    "id": "_clone_vF46",
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
  collection.fields.removeById("_clone_nBhf")

  // remove field
  collection.fields.removeById("_clone_nrwY")

  return app.save(collection)
})
