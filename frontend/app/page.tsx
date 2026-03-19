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
  {
    id: 7,
    name: "yapapa cat",
    videoUrl: "/videos/meme7.mp4",
    soundUrl: "/audio/meme7.mp3",
    caption: "yapapa hmm yapapa punya papa hama",
    emoji: "😯",
  },
  {
    id: 8,
    name: "Nazi's cat",
    videoUrl: "/videos/meme8.mp4",
    soundUrl: "/audio/meme8.mp3",
    caption: "germany's cat",
    emoji: "✠︎",
  },
  {
    id: 9,
    name: "ojo ojo",
    videoUrl: "/videos/meme9.mp4",
    soundUrl: "/audio/meme9.mp3",
    caption: "ojo ojo ojo ojo ojo ojo ojo ojo ojo ojo ojo ojo ojo",
    emoji: "😡",
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
    <main className="min-h-screen bg-gradient-to-br from-purple-100 via-blue-50 to-indigo-100 font-sans p-4 pb-10">
      <header className="text-center py-12 px-6 border-b-4 border-dashed border-purple-300 mb-8">
        <h1 className="text-4xl md:text-5xl font-black text-purple-900 mb-2 tracking-tight drop-shadow-lg">
          🐱 Cat Meme Gallery
        </h1>
        <p className="text-lg text-purple-700 font-medium">Klik untuk memainkan meme!</p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
        {CAT_MEMES.map((meme) => (
          <div
            key={meme.id}
            onClick={() => handleClick(meme.id, meme.soundUrl)}
            className={`bg-white rounded-2xl border-4 border-purple-200 overflow-hidden cursor-pointer transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:border-purple-400 shadow-lg ${
              activeId === meme.id ? "scale-95 shadow-purple-500/50 border-purple-500" : ""
            }`}
          >
            <div className="relative w-full h-48 bg-gradient-to-br from-purple-50 to-blue-50 overflow-hidden">
              <video
                ref={(el) => { videoRefs.current[meme.id] = el; }}
                src={meme.videoUrl}
                className="w-full h-full object-cover"
                loop
                muted
                playsInline
                preload="metadata"
                title={`Video meme ${meme.name}`}
              />
              {activeId === meme.id && (
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center animate-pulse">
                  <span className="text-white text-2xl font-bold tracking-wider drop-shadow-2xl">🔊 MEOW!</span>
                </div>
              )}
            </div>
            <div className="p-4 bg-gradient-to-r from-white to-purple-50">
              <span className="text-2xl block mb-2">{meme.emoji}</span>
              <h2 className="text-lg font-bold text-purple-900 mb-1">{meme.name}</h2>
              <p className="text-sm text-purple-700 italic">"{meme.caption}"</p>
            </div>
          </div>
        ))}
      </div>

      <footer className="text-center mt-12 text-purple-600 font-medium animate-bounce">
        <p>Play with 🐾</p>
      </footer>
    </main>
  );
}