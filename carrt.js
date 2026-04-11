import { useEffect, useState } from "react"

export default function Cart() {
  const [cart, setCart] = useState([])

  useEffect(() => {
    fetch("http://localhost:5000/api/cart")
      .then(res => res.json())
      .then(setCart)
  }, [])

  return (
    <div>
      <h1>Cart</h1>
      {cart.map((item, i) => (
        <div key={i}>{item.product?.name}</div>
      ))}
    </div>
  )
}
