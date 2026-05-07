import { useEffect, useState } from "react";
import { useLang } from "@/i18n/LanguageContext";
import { X, Check, Cpu, Bot, Server, Users } from "lucide-react";

const ICONS = [Cpu, Bot, Server, Users];

const ACCENT_STYLES = [
  { bg: "bg-blue-500/10", text: "text-blue-500", bar: "bg-blue-500" },
  { bg: "bg-violet-500/10", text: "text-violet-500", bar: "bg-violet-500" },
  { bg: "bg-emerald-500/10", text: "text-emerald-500", bar: "bg-emerald-500" },
  { bg: "bg-amber-500/10", text: "text-amber-500", bar: "bg-amber-500" },
];

export default function FacilitiesSection() {
  const { t } = useLang();
  const [open, setOpen] = useState<number | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section id="facilities" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl sm:text-4xl">{t.facilities.title}</h2>
          <p className="mt-4 text-muted-foreground">{t.facilities.intro}</p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {t.facilities.rooms.map((room, i) => {
            const Icon = ICONS[i % ICONS.length];
            const accent = ACCENT_STYLES[i % ACCENT_STYLES.length];
            return (
              <button
                key={room.title}
                onClick={() => setOpen(i)}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 text-left shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-glow"
              >
                {/* Top accent bar */}
                <div
                  aria-hidden
                  className={`absolute inset-x-0 top-0 h-1 ${accent.bar} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                />

                {/* Icon */}
                <div className={`grid h-12 w-12 place-items-center rounded-xl ${accent.bg}`}>
                  <Icon className={`h-6 w-6 ${accent.text}`} />
                </div>

                <h3 className="mt-5 font-display text-lg leading-snug">{room.title}</h3>
                <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{room.text}</p>

                {/* Equipment count badge */}
                <div className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-muted px-2.5 py-1 text-xs text-muted-foreground">
                  <Check className="h-3 w-3" />
                  {room.equipment.length} {room.equipment.length === 1 ? "item" : "items"}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Modal */}
      {open !== null && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[60] grid place-items-center bg-background/80 p-4 backdrop-blur-md animate-fade-up"
          onClick={() => setOpen(null)}
        >
          <div
            className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-border bg-card shadow-glow"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setOpen(null)}
              aria-label="close"
              className="absolute right-3 top-3 z-10 grid h-9 w-9 place-items-center rounded-full bg-muted text-foreground hover:bg-muted/80"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="p-7 sm:p-9">
              {/* Icon header */}
              <div className={`grid h-14 w-14 place-items-center rounded-2xl ${ACCENT_STYLES[open % ACCENT_STYLES.length].bg}`}>
                {(() => {
                  const Icon = ICONS[open % ICONS.length];
                  return <Icon className={`h-7 w-7 ${ACCENT_STYLES[open % ACCENT_STYLES.length].text}`} />;
                })()}
              </div>

              <h3 className="mt-5 font-display text-2xl">{t.facilities.rooms[open].title}</h3>
              <p className="mt-3 text-muted-foreground">{t.facilities.rooms[open].text}</p>

              <ul className="mt-6 space-y-3">
                {t.facilities.rooms[open].equipment.map((e) => (
                  <li key={e} className="flex items-start gap-3">
                    <span className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full ${ACCENT_STYLES[open % ACCENT_STYLES.length].bg}`}>
                      <Check className={`h-3 w-3 ${ACCENT_STYLES[open % ACCENT_STYLES.length].text}`} />
                    </span>
                    <span className="text-sm">{e}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
