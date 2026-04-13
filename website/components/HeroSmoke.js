import { useEffect, useState } from "react"

export default function HeroSmoke() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    setTimeout(() => setShow(true), 300)
  }, [])

  return (
    <div className="hero">

      {/* 🎬 FULLSCREEN VIDEO */}
      <video autoPlay muted loop playsInline className="video">
        <source src="/smoke.mp4" type="video/mp4" />
      </video>

      {/* 🌫️ SOFT DARK BLEND */}
      <div className="blend-overlay" />

      {/* ✨ TEXT INSIDE SMOKE */}
      <div className={`content ${show ? "show" : ""}`}>
        <h1 className="title">Starry Nights</h1>
        <p className="subtitle">Luxury Shopping Experience</p>

        <a href="/shop" className="btn">
          Enter Store
        </a>
      </div>
    </div>
  )
}