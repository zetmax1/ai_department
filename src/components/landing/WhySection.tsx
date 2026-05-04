import { useLang } from "@/i18n/LanguageContext";
import { HeartPulse, LineChart, GraduationCap, Car, Atom } from "lucide-react";

const ICONS = [HeartPulse, LineChart, GraduationCap, Car, Atom];

export default function WhySection() {
  const { t } = useLang();
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div aria-hidden className="absolute inset-0 -z-10 bg-mesh opacity-50" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl sm:text-4xl">{t.why.title}</h2>
          <p className="mt-4 text-muted-foreground">{t.why.intro}</p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {t.why.cards.map((c, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <div
                key={c.title}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-glow"
              >
                <div
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-1 bg-gradient-brand opacity-0 transition-opacity group-hover:opacity-100"
                />
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-display text-lg">{c.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{c.text}</p>
              </div>
            );
          })}
        </div>

        <p className="mt-12 max-w-2xl text-lg font-medium text-foreground/90">
          <span className="text-gradient-brand">{t.why.motto}</span>
        </p>
      </div>
    </section>
  );
}
