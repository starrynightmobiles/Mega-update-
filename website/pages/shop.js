import { useEffect, useState } from "react"
import ProductCard from "../components/ProductCard"
import Navbar from "../components/Navbar"

export default function Shop() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then(res => res.json())
      .then(setProducts)
  }, [])

  return (
    <>
      <Navbar />

      <div style={{
        marginTop: 80,
        padding: 20,
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill,minmax(250px,1fr))",
        gap: "20px"
      }}>
        {products.map(p => (
          <ProductCard
            key={p._id}
            product={p}
            onAdd={() => {
              fetch("http://localhost:5000/api/cart/add", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ product: p, quantity: 1 })
              })
            }}
          />
        ))}
      </div>
    </>
  )
}
