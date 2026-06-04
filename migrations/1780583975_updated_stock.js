/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2154883211")

  // update collection data
  unmarshal({
    "indexes": [
      "CREATE UNIQUE INDEX `idx_3fgeqyq83c` ON `stocks` (`product`)"
    ],
    "name": "stocks"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2154883211")

  // update collection data
  unmarshal({
    "indexes": [
      "CREATE UNIQUE INDEX `idx_3fgeqyq83c` ON `stock` (`product`)"
    ],
    "name": "stock"
  }, collection)

  return app.save(collection)
})
