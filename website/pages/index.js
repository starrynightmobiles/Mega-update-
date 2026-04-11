import Link from "next/link"

export default function Home() {
  return (
    <div style={{ textAlign: "center", padding: 50 }}>
      <h1>Starry Nights ✨</h1>
      <Link href="/shop">
        <button>Shop Now</button>
      </Link>
    </div>
  )
}
