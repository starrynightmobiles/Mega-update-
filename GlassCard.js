export default function GlassCard({ children }) {
  return (
    <div style={{
      backdropFilter: "blur(12px)",
      background: "rgba(255,255,255,0.05)",
      borderRadius: "16px",
      padding: "20px",
      border: "1px solid rgba(255,255,255,0.1)"
    }}>
      {children}
    </div>
  )
}
