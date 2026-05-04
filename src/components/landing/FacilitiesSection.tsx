import { useEffect, useState } from "react";
import { useLang } from "@/i18n/LanguageContext";
import { X, Check } from "lucide-react";
import labAi from "@/assets/lab-ai.jpg";
import labRobotics from "@/assets/lab-robotics.jpg";
import labGpu from "@/assets/lab-gpu.jpg";
import labCollab from "@/assets/lab-collab.jpg";

const IMAGES = [labAi, labRobotics, labGpu, labCollab];

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
          {t.facilities.rooms.map((room, i) => (
            <button
              key={room.title}
              onClick={() => setOpen(i)}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card text-left shadow-soft transition-all hover:-translate-y-1 hover:shadow-glow"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={IMAGES[i]}
                  alt={room.title}
                  loading="lazy"
                  width={1280}
                  height={832}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-background/10 to-transparent" />
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg">{room.title}</h3>
                <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">{room.text}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {open !== null && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[60] grid place-items-center bg-background/80 p-4 backdrop-blur-md animate-fade-up"
          onClick={() => setOpen(null)}
        >
          <div
            className="relative w-full max-w-4xl overflow-hidden rounded-2xl border border-border bg-card shadow-glow"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setOpen(null)}
              aria-label="close"
              className="absolute right-3 top-3 z-10 grid h-9 w-9 place-items-center rounded-full bg-background/80 text-foreground backdrop-blur hover:bg-background"
            >
              <X className="h-4 w-4" />
            </button>
            <div className="grid md:grid-cols-2">
              <img
                src={IMAGES[open]}
                alt={t.facilities.rooms[open].title}
                width={1280}
                height={832}
                className="h-72 w-full object-cover md:h-full"
              />
              <div className="p-6 sm:p-8">
                <h3 className="font-display text-2xl">{t.facilities.rooms[open].title}</h3>
                <p className="mt-3 text-muted-foreground">{t.facilities.rooms[open].text}</p>
                <ul className="mt-5 space-y-2">
                  {t.facilities.rooms[open].equipment.map((e) => (
                    <li key={e} className="flex items-start gap-2 text-sm">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      <span>{e}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
