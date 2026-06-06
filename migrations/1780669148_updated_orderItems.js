/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3468410069")

  // add field
  collection.fields.addAt(2, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_4211943342",
    "help": "",
    "hidden": false,
    "id": "relation3794728720",
    "maxSelect": 0,
    "minSelect": 0,
    "name": "pricebookEntry",
    "presentable": false,
    "required": true,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3468410069")

  // remove field
  collection.fields.removeById("relation3794728720")

  return app.save(collection)
})
