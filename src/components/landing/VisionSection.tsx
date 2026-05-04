import { useLang } from "@/i18n/LanguageContext";

export default function VisionSection() {
  const { t } = useLang();
  return (
    <section id="vision" className="relative overflow-hidden py-28 sm:py-40">
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-brand opacity-[0.07]" />
        <div className="absolute -left-40 top-10 h-96 w-96 rounded-full bg-primary/15 blur-3xl animate-float-slow" />
        <div className="absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-accent/20 blur-3xl animate-float-slow" />
      </div>
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
        <h2 className="font-display text-3xl leading-tight sm:text-5xl">
          <span className="text-gradient-brand">{t.vision.title}</span>
        </h2>
        <div className="mx-auto mt-10 max-w-2xl space-y-4 text-base text-foreground/80 sm:text-lg">
          {t.vision.lines.map((line, i) => (
            <p key={i} className="animate-fade-up" style={{ animationDelay: `${i * 120}ms` }}>
              {line}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
