import { useLang } from "@/i18n/LanguageContext";

export default function CurriculumSection() {
  const { t } = useLang();
  return (
    <section className="relative py-24 sm:py-32">
      <div aria-hidden className="absolute inset-0 -z-10 bg-mesh opacity-40" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl sm:text-4xl">{t.curriculum.title}</h2>
          <p className="mt-4 text-muted-foreground">{t.curriculum.intro}</p>
        </div>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {t.curriculum.items.map((c, i) => (
            <div
              key={c.title}
              className="group rounded-xl border border-border bg-card p-5 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-soft"
            >
              <div className="flex items-baseline gap-3">
                <span className="font-display text-sm text-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-base">{c.title}</h3>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
