import GlassCard from "./GlassCard"

export default function ProductCard({ product, onAdd }) {
  return (
    <GlassCard>
      <div style={{ position: "relative" }}>
        <img
          src={product.image}
          style={{
            width: "100%",
            height: "200px",
            objectFit: "cover",
            borderRadius: "12px"
          }}
        />

        {/* Floating button */}
        <button
          onClick={onAdd}
          style={{
            position: "absolute",
            bottom: 10,
            right: 10,
            background: "white",
            color: "black",
            borderRadius: "50%",
            width: "40px",
            height: "40px",
            border: "none"
          }}
        >
          +
        </button>
      </div>

      <h3>{product.name}</h3>
      <p>${product.price}</p>
    </GlassCard>
  )
}
