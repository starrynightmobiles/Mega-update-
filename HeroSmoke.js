export default function HeroSmoke() {
  return (
    <div style={{ position: "relative", height: "100vh" }}>

      <video autoPlay muted loop playsInline
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          objectFit: "cover"
        }}>
        <source src="/smoke.mp4" type="video/mp4" />
      </video>

      <div style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        background: "linear-gradient(to top, black, transparent)"
      }} />

      <div style={{
        position: "relative",
        zIndex: 2,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        animation: "fadeIn 1.5s ease-in"
      }}>
        <h1 style={{
          fontSize: "3rem",
          textShadow: "0 0 20px white"
        }}>
          Starry Nights ✨
        </h1>

        <p>Luxury Shopping Experience</p>

        <a href="/shop">
          <button style={{
            marginTop: 20,
            padding: "12px 24px",
            borderRadius: "12px",
            background: "white",
            color: "black"
          }}>
            Enter Store
          </button>
        </a>
      </div>
    </div>
  )
}
