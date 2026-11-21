import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { useApp } from "@/context/AppContext";
import { SharkLogo } from "@/components/shared/SharkLogo";

const socials = [
  { name: "Instagram", icon: Instagram, key: "instagram" as const },
  { name: "Facebook", icon: Facebook, key: "facebook" as const },
  { name: "X", icon: Twitter, key: "x" as const },
  { name: "LinkedIn", icon: Linkedin, key: "linkedin" as const },
];

export function Footer() {
  const { t, scrollToSection, openBooking, showNotice } = useApp();

  return (
    <footer className="border-t border-white/5 bg-navy-950 pb-10 pt-16">
      <div className="container-x">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <SharkLogo />
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-white/50">
              {t.footer.description}
            </p>
            <div className="mt-6 flex items-center gap-2">
              {socials.map(({ name, icon: Icon, key }) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => showNotice(t.footer.socialNotice)}
                  aria-label={name}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/60 transition-all hover:border-cyan-400/50 hover:text-cyan-400"
                >
                  <Icon className="h-4 w-4" />
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-black uppercase tracking-[0.22em] text-white">
              {t.footer.navigation}
            </h3>
            <ul className="mt-5 space-y-3">
              {t.nav.map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => scrollToSection(item.id)}
                    className="text-sm text-white/50 transition-colors hover:text-cyan-400"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-black uppercase tracking-[0.22em] text-white">
              {t.footer.services}
            </h3>
            <ul className="mt-5 space-y-3">
              {t.services.items.map((service) => (
                <li key={service.id}>
                  <button
                    type="button"
                    onClick={() => openBooking(service.id)}
                    className="text-sm text-white/50 transition-colors hover:text-cyan-400"
                  >
                    {service.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-black uppercase tracking-[0.22em] text-white">
              {t.footer.contact}
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-white/50">
              <li>{t.contact.phoneValue}</li>
              <li dir="ltr" className="text-start">
                {t.contact.emailValue}
              </li>
              <li>{t.contact.addressValue}</li>
            </ul>
            <h4 className="mt-6 text-xs font-black uppercase tracking-[0.22em] text-white">
              {t.footer.hours}
            </h4>
            <p className="mt-3 text-sm text-white/50">{t.contact.hoursValue}</p>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/5 pt-7 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} SHARK CLEAN. {t.footer.rights}
          </p>
          <p>{t.footer.note}</p>
        </div>
      </div>
    </footer>
  );
}
