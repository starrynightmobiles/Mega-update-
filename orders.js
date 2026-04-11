const router = require("express").Router()

let orders = []

router.post("/", (req, res) => {
  orders.push(req.body)
  res.json({ message: "Order placed" })
})

router.get("/", (req, res) => {
  res.json(orders)
})

module.exports = router
