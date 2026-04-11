const router = require("express").Router()

router.post("/login", (req, res) => {
  res.json({ token: "demo-token", user: { id: "1" } })
})

module.exports = router
