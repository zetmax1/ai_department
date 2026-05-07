import { useEffect, useState } from "react";
import { useLang } from "@/i18n/LanguageContext";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

function getInitials(name: string) {
  return name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

const AVATAR_COLORS = [
  "from-blue-500 to-indigo-600",
  "from-emerald-500 to-teal-600",
  "from-violet-500 to-purple-600",
  "from-orange-500 to-amber-600",
  "from-cyan-500 to-blue-600",
  "from-rose-500 to-pink-600",
];

export default function TestimonialsSection() {
  const { t } = useLang();
  const items = t.testimonials.items;
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % items.length), 7000);
    return () => clearInterval(id);
  }, [items.length]);

  const current = items[i];

  return (
    <section className="relative py-24 sm:py-32">
      <div aria-hidden className="absolute inset-0 -z-10 bg-mesh opacity-40" />
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl sm:text-4xl">{t.testimonials.title}</h2>

        <div className="mt-10 overflow-hidden rounded-3xl border border-border bg-card shadow-glow">
          {/* Quote area */}
          <div className="p-8 sm:p-12">
            <Quote className="h-9 w-9 text-primary/30" />

            <div className="relative mt-6 min-h-[120px] sm:min-h-[96px]">
              {items.map((q, idx) => (
                <blockquote
                  key={idx}
                  className={`absolute inset-0 flex flex-col justify-center transition-all duration-700 ${
                    idx === i
                      ? "translate-y-0 opacity-100"
                      : "pointer-events-none translate-y-4 opacity-0"
                  }`}
                >
                  <p className="font-display text-xl leading-relaxed text-foreground sm:text-2xl">
                    "{q.quote}"
                  </p>
                </blockquote>
              ))}
            </div>

            {/* Person */}
            <div className="mt-8 flex items-center gap-4">
              <div
                className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${AVATAR_COLORS[i % AVATAR_COLORS.length]} text-sm font-bold text-white shadow-soft`}
              >
                {getInitials(current.name)}
              </div>
              <div>
                <p className="font-display text-base font-semibold text-foreground">
                  {current.name}
                </p>
                <p className="mt-0.5 text-sm text-muted-foreground">{current.role}</p>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between border-t border-border px-8 py-4 sm:px-12">
            <div className="flex gap-1.5">
              {items.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setI(idx)}
                  aria-label={`slide ${idx + 1}`}
                  className={`h-1.5 rounded-full transition-all ${
                    idx === i ? "w-8 bg-primary" : "w-3 bg-border hover:bg-muted-foreground/40"
                  }`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setI((v) => (v - 1 + items.length) % items.length)}
                className="grid h-9 w-9 place-items-center rounded-full border border-border transition-colors hover:bg-muted"
                aria-label="previous"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                onClick={() => setI((v) => (v + 1) % items.length)}
                className="grid h-9 w-9 place-items-center rounded-full border border-border transition-colors hover:bg-muted"
                aria-label="next"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
