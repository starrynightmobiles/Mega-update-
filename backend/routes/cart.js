const router = require("express").Router()

let cart = []

router.post("/add", (req, res) => {
  cart.push(req.body)
  res.json(cart)
})

router.get("/", (req, res) => {
  res.json(cart)
})

router.delete("/clear", (req, res) => {
  cart = []
  res.json({ message: "Cart cleared" })
})

module.exports = router
