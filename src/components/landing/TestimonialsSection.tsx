import { useEffect, useState } from "react";
import { useLang } from "@/i18n/LanguageContext";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

export default function TestimonialsSection() {
  const { t } = useLang();
  const items = t.testimonials.items;
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % items.length), 6000);
    return () => clearInterval(id);
  }, [items.length]);

  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl sm:text-4xl">{t.testimonials.title}</h2>

        <div className="mt-10 overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-soft sm:p-12">
          <Quote className="h-8 w-8 text-primary/40" />
          <div className="relative mt-4 min-h-[140px]">
            {items.map((q, idx) => (
              <blockquote
                key={idx}
                className={`absolute inset-0 transition-all duration-500 ${
                  idx === i ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
                }`}
              >
                <p className="font-display text-xl leading-snug sm:text-2xl">"{q.quote}"</p>
                <footer className="mt-5 text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">{q.name}</span> · {q.role}
                </footer>
              </blockquote>
            ))}
          </div>

          <div className="mt-6 flex items-center justify-between">
            <div className="flex gap-1.5">
              {items.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setI(idx)}
                  aria-label={`slide ${idx + 1}`}
                  className={`h-1.5 rounded-full transition-all ${
                    idx === i ? "w-8 bg-primary" : "w-3 bg-border"
                  }`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setI((v) => (v - 1 + items.length) % items.length)}
                className="grid h-9 w-9 place-items-center rounded-full border border-border hover:bg-muted"
                aria-label="previous"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                onClick={() => setI((v) => (v + 1) % items.length)}
                className="grid h-9 w-9 place-items-center rounded-full border border-border hover:bg-muted"
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
