/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2686819825")

  // update collection data
  unmarshal({
    "viewQuery": "SELECT \n    c.id, c.referenceDate, c.status,\n    COUNT(ci.id) as countItems,\n    COUNT(ci.id) as countPendings\nFROM checklists c\nLEFT OUTER JOIN checklistItems ci ON ci.checklist = c.id\nLEFT OUTER JOIN checklistItems cip ON cip.checklist = c.id AND cip.confirmed = false\nGROUP BY c.id, c.referenceDate, c.status;"
  }, collection)

  // remove field
  collection.fields.removeById("_clone_FaCC")

  // remove field
  collection.fields.removeById("_clone_5e1V")

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

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2686819825")

  // update collection data
  unmarshal({
    "viewQuery": "SELECT \n    c.id, c.referenceDate, c.status,\n    COUNT(ci.id) as countItems\nFROM checklists c\nLEFT OUTER JOIN checklistItems ci ON ci.checklist = c.id\nGROUP BY c.id, c.referenceDate, c.status;"
  }, collection)

  // add field
  collection.fields.addAt(1, new Field({
    "help": "",
    "hidden": false,
    "id": "_clone_FaCC",
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
    "id": "_clone_5e1V",
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
  collection.fields.removeById("_clone_XuoD")

  // remove field
  collection.fields.removeById("_clone_vF46")

  // remove field
  collection.fields.removeById("number1051522982")

  return app.save(collection)
})
