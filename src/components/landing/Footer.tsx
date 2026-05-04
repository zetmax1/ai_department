import { Sparkles } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import { LangSwitcher } from "./LangSwitcher";

export default function Footer() {
  const { t } = useLang();
  return (
    <footer className="relative border-t border-border bg-card/40">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div>
          <div className="flex items-center gap-2 font-display text-base font-semibold">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-brand text-primary-foreground">
              <Sparkles className="h-4 w-4" />
            </span>
            AI program
          </div>
          <p className="mt-3 max-w-xs text-sm text-muted-foreground">
            {t.hero.subtitle}
          </p>
        </div>
        <div>
          <h4 className="font-display text-sm uppercase tracking-wider text-muted-foreground">
            {t.footer.contact}
          </h4>
          <p className="mt-3 text-sm">admissions@ai-program.uz</p>
          <p className="mt-1 text-sm">+998 (71) 000-00-00</p>
        </div>
        <div>
          <h4 className="font-display text-sm uppercase tracking-wider text-muted-foreground">
            {t.footer.address}
          </h4>
          <p className="mt-3 text-sm">Toshkent shahri</p>
          <div className="mt-4">
            <LangSwitcher />
          </div>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-4 text-xs text-muted-foreground sm:flex-row sm:px-6 lg:px-8">
          <span>© {new Date().getFullYear()} AI program</span>
          <span>{t.footer.rights}</span>
        </div>
      </div>
    </footer>
  );
}
