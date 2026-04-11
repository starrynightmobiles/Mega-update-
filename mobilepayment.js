const handleCheckout = async () => {
  const res = await fetch("http://localhost:5000/api/payments/pay", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: "customer@email.com",
      amount: total
    })
  })

  const data = await res.json()

  if (data.redirectUrl) {
    window.location.href = data.redirectUrl
  }
}
