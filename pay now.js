const Paynow = require("paynow")
require("dotenv").config()

const paynow = new Paynow(
  process.env.PAYNOW_INTEGRATION_ID,
  process.env.PAYNOW_INTEGRATION_KEY
)

paynow.resultUrl = process.env.PAYNOW_RESULT_URL
paynow.returnUrl = process.env.PAYNOW_RETURN_URL

exports.createPayment = (email, amount) => {
  const payment = paynow.createPayment("Order Payment", email)

  payment.add("Ecommerce Order", amount)

  return paynow.send(payment)
}
