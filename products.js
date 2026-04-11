const router = require("express").Router()

router.get("/", (req, res) => {
  res.json([
    { _id: "1", name: "iPhone", price: 999, image: "https://via.placeholder.com/200" },
    { _id: "2", name: "Sneakers", price: 120, image: "https://via.placeholder.com/200" }
  ])
})

module.exports = router
