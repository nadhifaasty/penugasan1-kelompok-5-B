"use client";
 
import { useState, useRef, useCallback } from "react";
 
const CAT_MEMES = [
  {
    id: 1,
    name: "Whehehe Cat",
    videoUrl: "/videos/meme1.mp4",
    soundUrl: "/audio/meme1.mp3",
    caption: "MUEHEHEHEHEHHE",
    emoji: "💼",
  },
  {
    id: 2,
    name: "Grumpy Cat",
    videoUrl: "/videos/meme2.mp4",
    soundUrl: "/audio/meme2.mp3",
    caption: "HAHAHAHAHAHAH",
    emoji: "😾",
  },
  {
    id: 3,
    name: "Hah ? Cat",
    videoUrl: "/videos/meme3.mp4",
    soundUrl: "/audio/meme3.mp3",
    caption: "I'm confused....",
    emoji: "🤨",
  },
  {
    id: 4,
    name: "Dwang Cat",
    videoUrl: "/videos/meme4.mp4",
    soundUrl: "/audio/meme4.mp3",
    caption: "I iz watching u.",
    emoji: "👁️",
  },
  {
    id: 5,
    name: "Happy cat",
    videoUrl: "/videos/meme5.mp4",
    soundUrl: "/audio/meme5.mp3",
    caption: "dudududu",
    emoji: "🤔",
  },
  {
    id: 6,
    name: "uii cat",
    videoUrl: "/videos/meme6.mp4",
    soundUrl: "/audio/meme6.mp3",
    caption: "u ii a ii a ii u ii a i",
    emoji: "😸",
  },
];
 
export default function Home() {
  const [activeId, setActiveId] = useState<number | null>(null);
 
  // Simpan ref video per id
  const videoRefs = useRef<Record<number, HTMLVideoElement | null>>({});
  // Simpan audio yang sedang jalan
  const currentAudio = useRef<HTMLAudioElement | null>(null);
 
  const handleClick = useCallback((id: number, soundUrl: string) => {
    // Stop & reset audio sebelumnya
    if (currentAudio.current) {
      currentAudio.current.pause();
      currentAudio.current.currentTime = 0;
    }
 
    // Restart video dari awal
    const video = videoRefs.current[id];
    if (video) {
      video.currentTime = 0;
      video.play().catch((e) => console.warn("Video error:", e));
    }
 
    // Play audio baru
    const audio = new Audio(soundUrl);
    audio.play().catch((e) => console.warn("Audio error:", e));
    currentAudio.current = audio;
 
    // Tampilkan overlay MEOW
    setActiveId(id);
    setTimeout(() => setActiveId(null), 800);
  }, []);
 
  return (
    <main style={styles.main}>
      <header style={styles.header}>
        <h1 style={styles.title}>🐱 Cat Meme Gallery</h1>
        <p style={styles.subtitle}>Klik!</p>
      </header>
 
      <div style={styles.grid}>
        {CAT_MEMES.map((meme) => (
          <div
            key={meme.id}
            onClick={() => handleClick(meme.id, meme.soundUrl)}
            style={{
              ...styles.card,
              ...(activeId === meme.id ? styles.cardActive : {}),
            }}
          >
            <div style={styles.imageWrapper}>
              <video
                ref={(el) => { videoRefs.current[meme.id] = el; }}
                src={meme.videoUrl}
                style={styles.image}
                loop
                muted
                playsInline
                preload="auto"
              />
              {activeId === meme.id && (
                <div style={styles.overlay}>
                  <span style={styles.meowText}>! 🔊</span>
                </div>
              )}
            </div>
            <div style={styles.cardBody}>
              <span style={styles.emoji}>{meme.emoji}</span>
              <h2 style={styles.memeName}>{meme.name}</h2>
              <p style={styles.caption}>"{meme.caption}"</p>
            </div>
          </div>
        ))}
      </div>
 
      <footer style={styles.footer}>
        <p>Play with 🐾</p>
      </footer>
    </main>
  );
}
 
const styles: Record<string, React.CSSProperties> = {
  main: {
    minHeight: "100vh",
    backgroundColor: "#fdf6ec",
    fontFamily: "'Segoe UI', sans-serif",
    padding: "0 0 40px 0",
  },
  header: {
    textAlign: "center",
    padding: "40px 20px 20px",
    borderBottom: "2px dashed #e8c99a",
    marginBottom: "32px",
  },
  title: {
    fontSize: "2.4rem",
    margin: "0 0 8px 0",
    color: "#3d2c14",
    fontWeight: 800,
    letterSpacing: "-0.5px",
  },
  subtitle: {
    color: "#8a6a3b",
    fontSize: "1rem",
    margin: 0,
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
    gap: "24px",
    maxWidth: "960px",
    margin: "0 auto",
    padding: "0 20px",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: "12px",
    border: "2px solid #e8d5b7",
    overflow: "hidden",
    cursor: "pointer",
    transition: "transform 0.15s ease, box-shadow 0.15s ease",
    boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
    userSelect: "none",
  },
  cardActive: {
    transform: "scale(0.96)",
    boxShadow: "0 0 0 3px #f4a535",
  },
  imageWrapper: {
    position: "relative",
    width: "100%",
    height: "200px",
    backgroundColor: "#f5ede0",
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  },
  overlay: {
    position: "absolute",
    inset: 0,
    backgroundColor: "rgba(0,0,0,0.45)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  meowText: {
    color: "#fff",
    fontSize: "1.6rem",
    fontWeight: 800,
    letterSpacing: "1px",
    textShadow: "0 2px 6px rgba(0,0,0,0.5)",
  },
  cardBody: {
    padding: "14px 16px",
  },
  emoji: {
    fontSize: "1.2rem",
  },
  memeName: {
    fontSize: "1.05rem",
    fontWeight: 700,
    color: "#3d2c14",
    margin: "4px 0 6px",
  },
  caption: {
    fontSize: "0.85rem",
    color: "#7a5c30",
    margin: 0,
    fontStyle: "italic",
  },
  footer: {
    textAlign: "center",
    marginTop: "40px",
    color: "#b08858",
    fontSize: "0.85rem",
  },
};