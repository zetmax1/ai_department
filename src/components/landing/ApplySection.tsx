import { useState } from "react";
import { z } from "zod";
import { useLang } from "@/i18n/LanguageContext";
import { LANG_LABELS } from "@/i18n/translations";
import { Check, Loader2, Send } from "lucide-react";

const schema = z.object({
  full_name: z.string().trim().min(2).max(120),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  preferred_language: z.string().max(10).optional(),
  message: z.string().trim().max(2000).optional().or(z.literal("")),
  // honeypot
  website: z.string().max(0).optional(),
});

export default function ApplySection() {
  const { t, lang } = useLang();
  const [state, setState] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMsg("");
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries());
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      setErrorMsg(parsed.error.issues[0]?.message ?? "invalid input");
      setState("error");
      return;
    }
    if (parsed.data.website) {
      // honeypot triggered — silently succeed
      setState("success");
      return;
    }

    setState("sending");
    // Simulate form submission - just show success
    setTimeout(() => {
      setState("success");
      e.currentTarget.reset();
    }, 800);
  };

  return (
    <section id="apply" className="relative py-24 sm:py-32">
      <div aria-hidden className="absolute inset-0 -z-10 bg-mesh opacity-50" />
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-display text-3xl sm:text-4xl">
            <span className="text-gradient-brand">{t.apply.title}</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">{t.apply.intro}</p>
        </div>

        <div className="mt-10 rounded-3xl border border-border bg-card p-6 shadow-glow sm:p-10">
          {state === "success" ? (
            <div className="flex flex-col items-center py-10 text-center animate-fade-up">
              <div className="grid h-14 w-14 place-items-center rounded-full bg-accent/20 text-accent-foreground">
                <Check className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mt-5 font-display text-2xl">{t.apply.success}</h3>
              <p className="mt-2 max-w-md text-muted-foreground">{t.apply.successText}</p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="grid gap-4 sm:grid-cols-2">
              <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />

              <Field label={t.apply.name} name="full_name" required minLength={2} maxLength={120} />
              <Field label={t.apply.email} name="email" type="email" required maxLength={255} />
              <Field label={t.apply.phone} name="phone" type="tel" maxLength={40} />
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium text-muted-foreground">{t.apply.language}</label>
                <select
                  name="preferred_language"
                  defaultValue={lang}
                  className="h-11 rounded-lg border border-input bg-background px-3 text-sm outline-none transition-colors focus:border-primary"
                >
                  {(["uz", "en", "ru"] as const).map((l) => (
                    <option key={l} value={l}>
                      {LANG_LABELS[l]}
                    </option>
                  ))}
                </select>
              </div>

              <div className="sm:col-span-2 flex flex-col gap-1.5">
                <label className="text-xs font-medium text-muted-foreground">{t.apply.message}</label>
                <textarea
                  name="message"
                  rows={4}
                  maxLength={2000}
                  className="rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none transition-colors focus:border-primary"
                />
              </div>

              {state === "error" && (
                <p className="sm:col-span-2 text-sm text-destructive">{errorMsg || t.apply.error}</p>
              )}

              <p className="sm:col-span-2 text-xs text-muted-foreground">{t.apply.consent}</p>

              <div className="sm:col-span-2">
                <button
                  type="submit"
                  disabled={state === "sending"}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-glow transition-transform hover:scale-[1.01] disabled:opacity-70 sm:w-auto"
                >
                  {state === "sending" ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      {t.apply.sending}
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      {t.apply.submit}
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  minLength,
  maxLength,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-medium text-muted-foreground">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        minLength={minLength}
        maxLength={maxLength}
        className="h-11 rounded-lg border border-input bg-background px-3 text-sm outline-none transition-colors focus:border-primary"
      />
    </div>
  );
}
