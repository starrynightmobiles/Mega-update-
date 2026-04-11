import Link from "next/link"

export default function Navbar() {
  return (
    <div style={{
      position: "fixed",
      top: 0,
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
      padding: "15px 30px",
      background: "rgba(0,0,0,0.5)",
      backdropFilter: "blur(10px)",
      zIndex: 10
    }}>
      <h2>✨ Starry</h2>

      <div>
        <Link href="/shop">Shop</Link>{" "}
        <Link href="/cart">Cart</Link>{" "}
        <Link href="/orders">Orders</Link>
      </div>
    </div>
  )
}
