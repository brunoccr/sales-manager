/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2686819825")

  // update collection data
  unmarshal({
    "listRule": "@request.auth.id != null",
    "viewRule": "@request.auth.id != null"
  }, collection)

  // remove field
  collection.fields.removeById("_clone_nBhf")

  // remove field
  collection.fields.removeById("_clone_nrwY")

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

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2686819825")

  // update collection data
  unmarshal({
    "listRule": null,
    "viewRule": null
  }, collection)

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

  // remove field
  collection.fields.removeById("_clone_foN9")

  // remove field
  collection.fields.removeById("_clone_R6Tr")

  return app.save(collection)
})
