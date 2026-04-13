import Head from "next/head"
import HeroSmoke from "../components/HeroSmoke"

export default function Home() {
  return (
    <>
      <Head>
        <title>Starry Nights</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* 🎬 FULLSCREEN SMOKE HERO ONLY */}
      <HeroSmoke />
    </>
  )
}