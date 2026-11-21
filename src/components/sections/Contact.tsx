import { useEffect, useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  CalendarDays,
  CheckCircle2,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from "lucide-react";
import { SITE_CONFIG } from "@/data/site";
import { useApp } from "@/context/AppContext";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";
import { Button } from "@/components/ui/button";
import { Input, Select, Textarea } from "@/components/ui/field";

type FormState = {
  name: string;
  phone: string;
  vehicle: string;
  service: string;
  date: string;
  notes: string;
};

const emptyForm: FormState = {
  name: "",
  phone: "",
  vehicle: "",
  service: "",
  date: "",
  notes: "",
};

export function Contact() {
  const { t, lang, preselectedService, showNotice } = useApp();
  const [form, setForm] = useState<FormState>(emptyForm);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>(
    {},
  );
  const [success, setSuccess] = useState(false);
  const today = new Date().toISOString().split("T")[0];

  useEffect(() => {
    if (!preselectedService) return;
    const allowed = t.contact.serviceOptions.includes(preselectedService);
    setForm((current) => ({
      ...current,
      service: allowed ? preselectedService : "",
    }));
  }, [preselectedService, t.contact.serviceOptions]);

  useEffect(() => {
    if (!success) return;
    const timer = window.setTimeout(() => setSuccess(false), 7000);
    return () => window.clearTimeout(timer);
  }, [success]);

  const update = (field: keyof FormState, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  };

  const validate = () => {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (form.name.trim().length < 2) next.name = t.contact.errors.name;
    const digits = form.phone.replace(/\D/g, "");
    if (digits.length < 7 || digits.length > 15)
      next.phone = t.contact.errors.phone;
    if (!form.vehicle) next.vehicle = t.contact.errors.vehicle;
    if (!form.service) next.service = t.contact.errors.service;
    if (!form.date) next.date = t.contact.errors.date;
    return next;
  };

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setSuccess(false);
      return;
    }
    setSuccess(true);
    setForm(emptyForm);
  };

  const whatsapp = () => {
    if (!SITE_CONFIG.whatsappNumber) {
      showNotice(t.contact.whatsappNotice);
      return;
    }
    window.open(
      `https://wa.me/${SITE_CONFIG.whatsappNumber}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  const details = [
    { icon: Phone, label: t.contact.phoneLabel, value: t.contact.phoneValue },
    { icon: Mail, label: t.contact.emailLabel, value: t.contact.emailValue },
    {
      icon: MapPin,
      label: t.contact.addressLabel,
      value: t.contact.addressValue,
    },
    { icon: Clock3, label: t.contact.hoursLabel, value: t.contact.hoursValue },
  ];

  return (
    <section id="contact" className="section-y relative overflow-hidden bg-navy-900">
      <div className="absolute -start-40 top-1/3 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[140px]" />
      <div className="absolute inset-0 bg-grid-cyan bg-[size:64px_64px] opacity-[0.06]" />

      <div className="container-x relative">
        <SectionHeading
          eyebrow={t.contact.eyebrow}
          title={t.contact.title}
          subtitle={t.contact.description}
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8">
          <Reveal>
            <form
              onSubmit={submit}
              noValidate
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl sm:p-9"
            >
              <AnimatePresence>
                {success && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mb-6 flex items-start gap-3 rounded-2xl border border-cyan-400/40 bg-cyan-400/10 p-4"
                    role="status"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan-400" />
                    <div>
                      <div className="text-sm font-bold text-white">
                        {t.contact.successTitle}
                      </div>
                      <div className="mt-1 text-xs leading-relaxed text-white/60">
                        {t.contact.successText}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <h3 className="heading-md text-white">{t.contact.formTitle}</h3>

              <div className="mt-7 grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="field-label" htmlFor="booking-name">
                    {t.contact.fields.name}
                  </label>
                  <Input
                    id="booking-name"
                    value={form.name}
                    onChange={(event) => update("name", event.target.value)}
                    placeholder={t.contact.placeholders.name}
                    aria-invalid={Boolean(errors.name)}
                  />
                  {errors.name && <p className="field-error">{errors.name}</p>}
                </div>

                <div>
                  <label className="field-label" htmlFor="booking-phone">
                    {t.contact.fields.phone}
                  </label>
                  <Input
                    id="booking-phone"
                    type="tel"
                    dir="ltr"
                    value={form.phone}
                    onChange={(event) => update("phone", event.target.value)}
                    placeholder={t.contact.placeholders.phone}
                    aria-invalid={Boolean(errors.phone)}
                  />
                  {errors.phone && <p className="field-error">{errors.phone}</p>}
                </div>

                <div>
                  <label className="field-label" htmlFor="booking-vehicle">
                    {t.contact.fields.vehicle}
                  </label>
                  <Select
                    id="booking-vehicle"
                    value={form.vehicle}
                    onChange={(event) => update("vehicle", event.target.value)}
                    aria-invalid={Boolean(errors.vehicle)}
                  >
                    <option value="">{t.contact.placeholders.vehicle}</option>
                    {t.contact.vehicleOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </Select>
                  {errors.vehicle && (
                    <p className="field-error">{errors.vehicle}</p>
                  )}
                </div>

                <div>
                  <label className="field-label" htmlFor="booking-service">
                    {t.contact.fields.service}
                  </label>
                  <Select
                    id="booking-service"
                    value={form.service}
                    onChange={(event) => update("service", event.target.value)}
                    aria-invalid={Boolean(errors.service)}
                  >
                    <option value="">{t.contact.placeholders.service}</option>
                    {t.contact.serviceOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </Select>
                  {errors.service && (
                    <p className="field-error">{errors.service}</p>
                  )}
                </div>

                <div className="sm:col-span-2">
                  <label className="field-label" htmlFor="booking-date">
                    {t.contact.fields.date}
                  </label>
                  <div className="relative">
                    <Input
                      id="booking-date"
                      type="date"
                      min={today}
                      lang={lang}
                      value={form.date}
                      onChange={(event) => update("date", event.target.value)}
                      aria-invalid={Boolean(errors.date)}
                      className="pe-11"
                    />
                    <CalendarDays className="pointer-events-none absolute end-4 top-1/2 h-4 w-4 -translate-y-1/2 text-cyan-400" />
                  </div>
                  {errors.date && <p className="field-error">{errors.date}</p>}
                </div>

                <div className="sm:col-span-2">
                  <label className="field-label" htmlFor="booking-notes">
                    {t.contact.fields.notes}
                  </label>
                  <Textarea
                    id="booking-notes"
                    rows={4}
                    value={form.notes}
                    onChange={(event) => update("notes", event.target.value)}
                    placeholder={t.contact.placeholders.notes}
                  />
                </div>
              </div>

              <Button type="submit" className="mt-8 w-full sm:w-auto">
                {t.contact.submit}
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="flex h-full flex-col overflow-hidden rounded-3xl border border-cyan-400/20 bg-gradient-to-b from-cyan-500/10 via-navy-900 to-navy-900 p-7 sm:p-9">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500 text-navy-900">
                <MessageCircle className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-2xl font-extrabold text-white">
                {t.contact.infoTitle}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/55">
                {t.contact.infoText}
              </p>

              <div className="mt-8 space-y-5">
                {details.map((detail) => (
                  <div key={detail.label} className="flex gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-cyan-400">
                      <detail.icon className="h-4 w-4" />
                    </span>
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/35">
                        {detail.label}
                      </div>
                      <div className="mt-1 text-sm text-white/80" dir="auto">
                        {detail.value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <Button
                variant="outline"
                className="mt-9 w-full justify-center border-cyan-400/40 text-cyan-400 hover:bg-cyan-400/10 hover:text-cyan-300"
                onClick={whatsapp}
              >
                <MessageCircle className="h-4 w-4" />
                {t.contact.whatsapp}
              </Button>

              <div className="mt-auto pt-10 text-[11px] leading-relaxed text-white/30">
                {t.ui.demoNoticeTitle}: {t.contact.phoneValue} ·{" "}
                {t.contact.addressValue}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
