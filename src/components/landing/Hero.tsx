import { useLang } from "@/i18n/LanguageContext";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  const { t } = useLang();

  return (
    <section
      id="top"
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden pt-24"
    >

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-card/70 px-3 py-1 text-xs uppercase tracking-wider text-muted-foreground backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-accent" />
            {t.hero.eyebrow}
          </span>
          <h1 className="mt-6 font-display text-4xl leading-[1.05] sm:text-6xl lg:text-7xl">
            <span className="block text-foreground">{t.hero.title1}</span>
            <span className="mt-1 block text-gradient-brand">{t.hero.title2}</span>
          </h1>
          <p className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
            {t.hero.subtitle}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#about"
              className="group inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-5 py-3 text-sm font-medium text-foreground backdrop-blur transition-all hover:bg-card hover:shadow-soft"
            >
              {t.hero.learn}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#apply"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-glow transition-all hover:scale-[1.03]"
            >
              {t.hero.apply}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 left-1/2 h-72 w-[120%] -translate-x-1/2 rounded-[100%] bg-gradient-to-t from-background via-background/60 to-transparent"
      />
    </section>
  );
}
