import { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";

const BackgroundMusic = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    const handleFirstInteraction = () => {
      if (!hasInteracted && audioRef.current) {
        audioRef.current.volume = 0.15;
        audioRef.current.play().then(() => {
          setIsPlaying(true);
          setHasInteracted(true);
        }).catch(() => {});
      }
    };

    window.addEventListener("click", handleFirstInteraction, { once: true });
    window.addEventListener("touchstart", handleFirstInteraction, { once: true });

    return () => {
      window.removeEventListener("click", handleFirstInteraction);
      window.removeEventListener("touchstart", handleFirstInteraction);
    };
  }, [hasInteracted]);

  const toggleMusic = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.volume = 0.15;
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        loop
        preload="auto"
        src="https://cdn.pixabay.com/audio/2024/11/04/audio_4956b4edd1.mp3"
      />
      <button
        onClick={toggleMusic}
        className="fixed bottom-4 right-4 z-50 w-12 h-12 rounded-full bg-card/80 backdrop-blur-sm shadow-lg border border-border flex items-center justify-center text-primary hover:bg-card transition-colors"
        aria-label={isPlaying ? "Pausar música" : "Tocar música"}
      >
        {isPlaying ? <Volume2 size={20} /> : <VolumeX size={20} />}
      </button>
      {!hasInteracted && (
        <div className="fixed bottom-4 right-18 z-50 bg-card/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg border border-border animate-pulse">
          <span className="font-body text-xs text-muted-foreground">
            Toque para ouvir a música 🎵
          </span>
        </div>
      )}
    </>
  );
};

export default BackgroundMusic;
