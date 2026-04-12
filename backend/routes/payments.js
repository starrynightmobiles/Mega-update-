const router = require("express").Router()
const { createPayment } = require("../services/paynow")
const Order = require("../models/Order")

// START PAYMENT
router.post("/pay", async (req, res) => {
  try {
      const { email, amount, orderId } = req.body

          const response = await createPayment(email, amount)

              if (!response.success) {
                    return res.status(400).json({ error: "Payment failed" })
                        }

                            // Save pollUrl to order
                                await Order.findByIdAndUpdate(orderId, {
                                      paymentPollUrl: response.pollUrl,
                                            paymentStatus: "pending"
                                                })

                                                    res.json({
                                                          redirectUrl: response.redirectUrl,
                                                                pollUrl: response.pollUrl
                                                                    })
                                                                      } catch (err) {
                                                                          res.status(500).json({ error: err.message })
                                                                            }
                                                                            })


                                                                            // PAYMENT CALLBACK (AUTO UPDATE ORDER)
                                                                            router.post("/callback", async (req, res) => {
                                                                              try {
                                                                                  const { pollUrl } = req.body

                                                                                      const order = await Order.findOne({ paymentPollUrl: pollUrl })

                                                                                          if (!order) return res.sendStatus(404)

                                                                                              order.paymentStatus = "paid"
                                                                                                  order.orderStatus = "processing"
                                                                                                      order.paidAt = new Date()

                                                                                                          await order.save()

                                                                                                              console.log("✅ Payment confirmed:", order._id)

                                                                                                                  res.sendStatus(200)
                                                                                                                    } catch (err) {
                                                                                                                        console.log(err)
                                                                                                                            res.sendStatus(500)
                                                                                                                              }
                                                                                                                              })

                                                                                                                              module.exports = router