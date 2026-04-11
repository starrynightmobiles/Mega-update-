const router = require("express").Router()

router.get("/stats", (req, res) => {
  res.json({ users: 10, orders: 5 })
})

module.exports = router
