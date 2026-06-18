"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { InfinityGlyph } from "@/components/identity/KoomSymbol";
import { VoiceButton } from "@/components/site/VoiceButton";
import { brand } from "@/lib/brand";
import {
  type Answers,
  type Category,
  buildBrief,
  detectCategory,
  guidedQuestions,
} from "@/lib/okto";

type Msg = { from: "okto" | "user"; text: string };

const SUGGESTIONS = [
  "J'ai un restaurant et je veux plus de clients",
  "Je veux lancer ma marque",
  "Je veux un site pour mon commerce",
  "Je veux créer du contenu avec l'IA",
  "Je veux améliorer mon Instagram",
  "Je veux apparaître sur Google Maps",
];

export function OktoExperience({ compact = false }: { compact?: boolean }) {
  const [messages, setMessages] = useState<Msg[]>([
    {
      from: "okto",
      text:
        "Bonjour, je suis OKTO. Expliquez-moi votre besoin avec vos mots — même si c'est encore flou. Je vous aide à le structurer.",
    },
  ]);
  const [input, setInput] = useState("");
  const [phase, setPhase] = useState<"open" | "questions" | "done">("open");
  const [qIndex, setQIndex] = useState(0);
  const [category, setCategory] = useState<Category | null>(null);
  const [answers, setAnswers] = useState<Partial<Answers>>({});
  const [thinking, setThinking] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const push = (m: Msg) => setMessages((prev) => [...prev, m]);

  const oktoSay = (text: string, after?: () => void) => {
    setThinking(true);
    setTimeout(() => {
      setThinking(false);
      push({ from: "okto", text });
      after?.();
      requestAnimationFrame(() =>
        scrollRef.current?.scrollTo({ top: 999999, behavior: "smooth" })
      );
    }, 650);
  };

  const start = (text: string) => {
    const clean = text.trim();
    if (!clean) return;
    push({ from: "user", text: clean });
    setInput("");
    const cat = detectCategory(clean);
    setCategory(cat);
    setAnswers({ clientMessage: clean, category: cat });
    oktoSay(cat.intro, () => {
      setPhase("questions");
      setQIndex(0);
      setTimeout(() => oktoSay(guidedQuestions[0].q), 400);
    });
  };

  const answerQuestion = (value: string) => {
    const q = guidedQuestions[qIndex];
    push({ from: "user", text: value });
    setAnswers((prev) => ({ ...prev, [q.id]: value }));
    const next = qIndex + 1;
    if (next < guidedQuestions.length) {
      setQIndex(next);
      setTimeout(() => oktoSay(guidedQuestions[next].q), 350);
    } else {
      setPhase("done");
      setTimeout(
        () =>
          oktoSay(
            "Parfait. J'ai préparé un résumé clair de votre demande. Envoyez-le-nous sur Instagram, on revient vers vous."
          ),
        350
      );
    }
  };

  const brief =
    category
      ? buildBrief({
          clientMessage: answers.clientMessage || "",
          category,
          businessType: answers.businessType,
          goal: answers.goal,
          engagement: answers.engagement,
          deadline: answers.deadline,
        })
      : "";

  const sendInstagram = async () => {
    try {
      await navigator.clipboard.writeText(brief);
    } catch {
      /* clipboard indisponible */
    }
    window.open(brand.instagramUrl, "_blank", "noopener");
  };

  const reset = () => {
    setMessages([
      {
        from: "okto",
        text:
          "On reprend. Décrivez votre besoin — un mot, une phrase, ou tout ce qui vous passe par la tête.",
      },
    ]);
    setPhase("open");
    setQIndex(0);
    setCategory(null);
    setAnswers({});
    setInput("");
  };

  return (
    <div className="overflow-hidden rounded-3xl border border-gold/15 bg-gradient-to-b from-night/70 to-ink shadow-panel">
      {/* En-tête OKTO */}
      <div className="flex items-center gap-3 border-b border-gold/10 bg-ink/50 px-5 py-4">
        <OktoBadge />
        <div className="leading-tight">
          <p className="font-display text-sm font-semibold text-cream">OKTO</p>
          <p className="text-xs text-sand/70">Assistant KOOM/KOOM · vous guide</p>
        </div>
        <span className="ml-auto flex items-center gap-1.5 text-xs text-green">
          <span className="h-2 w-2 rounded-full bg-green" /> en ligne
        </span>
      </div>

      {/* Fil de discussion */}
      <div
        ref={scrollRef}
        className={`space-y-3 overflow-y-auto px-5 py-5 ${compact ? "max-h-[320px]" : "max-h-[440px]"}`}
      >
        <AnimatePresence initial={false}>
          {messages.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                  m.from === "user"
                    ? "rounded-br-sm bg-gold-grad text-ink"
                    : "rounded-bl-sm border border-gold/10 bg-panel/70 text-cream"
                }`}
              >
                {m.text}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {thinking && (
          <div className="flex justify-start">
            <div className="rounded-2xl rounded-bl-sm border border-gold/10 bg-panel/70 px-4 py-3">
              <span className="flex gap-1">
                <Dot /> <Dot delay={0.15} /> <Dot delay={0.3} />
              </span>
            </div>
          </div>
        )}

        {/* Options de questions guidées */}
        {phase === "questions" && !thinking && (
          <div className="flex flex-wrap gap-2 pt-1">
            {guidedQuestions[qIndex].options.map((opt) => (
              <button
                key={opt}
                onClick={() => answerQuestion(opt)}
                className="rounded-full border border-gold/30 bg-ink/40 px-3.5 py-1.5 text-xs text-cream transition-colors hover:border-gold hover:bg-gold/10"
              >
                {opt}
              </button>
            ))}
          </div>
        )}

        {/* Résumé final */}
        {phase === "done" && !thinking && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-2xl border border-gold/20 bg-ink/60 p-4"
          >
            <p className="mb-2 text-xs uppercase tracking-widest text-gold">Votre demande</p>
            <pre className="whitespace-pre-wrap font-sans text-sm leading-relaxed text-cream/90">
              {brief}
            </pre>
            <div className="mt-4 flex flex-wrap gap-2">
              <button
                onClick={sendInstagram}
                className="rounded-full bg-gold-grad px-5 py-2.5 text-sm font-semibold text-ink transition-transform hover:scale-[1.03]"
              >
                Envoyer ma demande sur Instagram
              </button>
              <button
                onClick={reset}
                className="rounded-full border border-gold/30 px-4 py-2.5 text-sm text-cream hover:border-gold"
              >
                Recommencer
              </button>
            </div>
            <p className="mt-2 text-xs text-sand/60">
              Votre demande est copiée : collez-la dans le message Instagram. Le mail et le
              téléphone y sont aussi disponibles.
            </p>
          </motion.div>
        )}
      </div>

      {/* Saisie */}
      {phase === "open" && (
        <div className="border-t border-gold/10 bg-ink/40 px-5 py-4">
          <div className="mb-3 flex flex-wrap gap-2">
            {SUGGESTIONS.slice(0, compact ? 3 : 6).map((s) => (
              <button
                key={s}
                onClick={() => start(s)}
                className="rounded-full border border-gold/15 bg-panel/50 px-3 py-1.5 text-xs text-sand transition-colors hover:border-gold/50 hover:text-cream"
              >
                {s}
              </button>
            ))}
          </div>
          <div className="flex items-end gap-2">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  start(input);
                }
              }}
              rows={2}
              placeholder="Expliquez votre besoin…"
              className="flex-1 resize-none rounded-2xl border border-gold/15 bg-ink/60 px-4 py-3 text-sm text-cream placeholder:text-sand/50 focus:border-gold/50 focus:outline-none"
            />
            <button
              onClick={() => start(input)}
              disabled={!input.trim()}
              className="rounded-2xl bg-gold-grad px-4 py-3 text-sm font-semibold text-ink disabled:opacity-40"
            >
              Envoyer
            </button>
          </div>
          <div className="mt-3">
            <VoiceButton onResult={(t) => start(t)} />
          </div>
        </div>
      )}
    </div>
  );
}

function OktoBadge() {
  return (
    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-night to-ink ring-1 ring-gold/30">
      <InfinityGlyph className="h-4 w-8" />
    </span>
  );
}

function Dot({ delay = 0 }: { delay?: number }) {
  return (
    <motion.span
      className="h-1.5 w-1.5 rounded-full bg-gold"
      animate={{ opacity: [0.3, 1, 0.3] }}
      transition={{ duration: 1, repeat: Infinity, delay }}
    />
  );
}
