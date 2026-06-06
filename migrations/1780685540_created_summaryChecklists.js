/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = new Collection({
    "createRule": null,
    "deleteRule": null,
    "fields": [
      {
        "autogeneratePattern": "",
        "help": "",
        "hidden": false,
        "id": "text3208210256",
        "max": 0,
        "min": 0,
        "name": "id",
        "pattern": "^[a-z0-9]+$",
        "presentable": false,
        "primaryKey": true,
        "required": true,
        "system": true,
        "type": "text"
      },
      {
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
      },
      {
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
      },
      {
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
      }
    ],
    "id": "pbc_2686819825",
    "indexes": [],
    "listRule": null,
    "name": "summaryChecklists",
    "system": false,
    "type": "view",
    "updateRule": null,
    "viewQuery": "SELECT \n    c.id, c.referenceDate, c.status,\n    COUNT(ci.id) as countItems\nFROM checklists c\nLEFT OUTER JOIN checklistItems ci ON ci.checklist = c.id\nGROUP BY c.id, c.referenceDate, c.status;",
    "viewRule": null
  });

  return app.save(collection);
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2686819825");

  return app.delete(collection);
})
