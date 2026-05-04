import { useLang } from "@/i18n/LanguageContext";
import { LANG_LABELS, type Lang } from "@/i18n/translations";

export function LangSwitcher({ className = "" }: { className?: string }) {
  const { lang, setLang } = useLang();
  const langs: Lang[] = ["uz", "en", "ru"];
  return (
    <div
      className={`inline-flex items-center rounded-full border border-border bg-card/70 p-0.5 backdrop-blur ${className}`}
      role="group"
      aria-label="language"
    >
      {langs.map((l) => {
        const active = l === lang;
        return (
          <button
            key={l}
            onClick={() => setLang(l)}
            aria-pressed={active}
            title={LANG_LABELS[l]}
            className={`rounded-full px-3 py-1 text-xs font-medium uppercase tracking-wide transition-all ${
              active
                ? "bg-primary text-primary-foreground shadow-soft"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {l}
          </button>
        );
      })}
    </div>
  );
}
