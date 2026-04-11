const router = require("express").Router()
const { createPayment } = require("../services/paynow")

// Start payment
router.post("/pay", async (req, res) => {
  const { email, amount } = req.body

  try {
    const response = await createPayment(email, amount)

    if (response.success) {
      res.json({
        redirectUrl: response.redirectUrl,
        pollUrl: response.pollUrl
      })
    } else {
      res.status(400).json({ error: "Payment failed" })
    }
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

// Paynow callback
router.post("/callback", (req, res) => {
  console.log("Payment update:", req.body)

  // Here you update order status to PAID
  res.sendStatus(200)
})

module.exports = router
