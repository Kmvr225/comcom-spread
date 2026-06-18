"use client";

import { useEffect, useRef, useState } from "react";

/**
 * VoiceButton — « Parler à OKTO ».
 * Utilise l'API Web Speech (SpeechRecognition) si le navigateur la supporte.
 * Sinon, l'interface reste présente avec un message « bientôt disponible ».
 */
export function VoiceButton({
  onResult,
  className = "",
}: {
  onResult: (text: string) => void;
  className?: string;
}) {
  const [supported, setSupported] = useState(false);
  const [listening, setListening] = useState(false);
  const [hint, setHint] = useState("");
  const recognitionRef = useRef<any>(null);

  useEffect(() => {
    const SR =
      typeof window !== "undefined" &&
      ((window as any).SpeechRecognition || (window as any).webkitSpeechRecognition);
    if (SR) {
      setSupported(true);
      const rec = new SR();
      rec.lang = "fr-FR";
      rec.interimResults = false;
      rec.continuous = false;
      rec.onresult = (e: any) => {
        const text = e.results[0][0].transcript as string;
        onResult(text);
      };
      rec.onerror = () => {
        setListening(false);
        setHint("Je n'ai pas bien entendu. Réessayez ?");
      };
      rec.onend = () => setListening(false);
      recognitionRef.current = rec;
    }
  }, [onResult]);

  const toggle = () => {
    if (!supported) {
      setHint("Dictée vocale bientôt disponible sur votre appareil. Écrivez votre besoin en attendant.");
      return;
    }
    const rec = recognitionRef.current;
    if (!rec) return;
    if (listening) {
      rec.stop();
      setListening(false);
    } else {
      setHint("");
      try {
        rec.start();
        setListening(true);
      } catch {
        /* déjà démarré */
      }
    }
  };

  return (
    <div className={className}>
      <button
        type="button"
        onClick={toggle}
        aria-pressed={listening}
        className={`group inline-flex items-center gap-3 rounded-full border px-5 py-3 text-sm font-medium transition-all ${
          listening
            ? "border-gold bg-gold/15 text-gold"
            : "border-gold/30 bg-panel/60 text-cream hover:border-gold/60"
        }`}
      >
        <span className="relative flex h-5 w-5 items-center justify-center">
          <MicIcon className="h-5 w-5" />
          {listening && (
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold/40" />
          )}
        </span>
        {listening ? "OKTO vous écoute…" : "Parler à OKTO"}
      </button>
      {hint && <p className="mt-2 text-xs text-sand/70">{hint}</p>}
    </div>
  );
}

function MicIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="9" y="3" width="6" height="11" rx="3" />
      <path d="M5 11a7 7 0 0 0 14 0" strokeLinecap="round" />
      <path d="M12 18v3" strokeLinecap="round" />
    </svg>
  );
}
