import { useEffect, useState } from "react"

export default function HeroSmoke() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setTimeout(() => setVisible(true), 300)
  }, [])

  return (
    <div className="hero-container">

      {/* 🎬 Smoke Background */}
      <video autoPlay muted loop playsInline className="video-bg">
        <source src="/smoke.mp4" type="video/mp4" />
      </video>

      {/* 🌑 Overlay */}
      <div className="overlay" />

      {/* ✨ Glow Layer */}
      <div className="glow" />

      {/* 💎 Content */}
      <div className={`hero-content ${visible ? "show" : ""}`}>
        <h1 className="hero-title">Starry Nights ✨</h1>

        <p className="hero-sub">
          Experience the Future of Shopping
        </p>

        <a href="/shop" className="hero-btn">
          Enter Store 🛒
        </a>
      </div>
    </div>
  )
}