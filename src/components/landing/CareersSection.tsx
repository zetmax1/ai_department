import { useLang } from "@/i18n/LanguageContext";
import { Cpu, Database, Brain, Bot, Eye, MessageSquareText } from "lucide-react";
import { useState } from "react";

const ICONS = [Cpu, Database, Brain, Bot, Eye, MessageSquareText];

export default function CareersSection() {
  const { t } = useLang();
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="careers" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl sm:text-4xl">{t.careers.title}</h2>
          <p className="mt-4 text-muted-foreground">{t.careers.intro}</p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.careers.roles.map((r, i) => {
            const Icon = ICONS[i % ICONS.length];
            const isActive = active === i;
            return (
              <button
                key={r.title}
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
                onClick={() => setActive(isActive ? null : i)}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow"
              >
                <div
                  aria-hidden
                  className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-brand opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-30"
                />
                <div className="flex items-start justify-between">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-accent/15 text-accent-foreground">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-xs uppercase tracking-wider text-muted-foreground">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-xl">{r.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{r.short}</p>

                <div
                  className={`grid transition-all duration-500 ease-out ${
                    isActive ? "mt-4 grid-rows-[1fr] opacity-100" : "mt-0 grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-sm text-foreground/80">{r.details}</p>
                    <p className="mt-3 text-xs uppercase tracking-wider text-primary">
                      {r.tools}
                    </p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
