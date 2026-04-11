const express = require("express")
const cors = require("cors")
require("dotenv").config()

const app = express()

app.use(cors())
app.use(express.json())

app.use("/api/auth", require("./routes/auth"))
app.use("/api/products", require("./routes/products"))
app.use("/api/cart", require("./routes/cart"))
app.use("/api/orders", require("./routes/orders"))
app.use("/api/admin", require("./routes/admin"))

app.get("/", (req, res) => {
  res.send("🚀 API running")
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`🔥 Server running on ${PORT}`)
})
