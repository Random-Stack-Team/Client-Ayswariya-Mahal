import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Clock, Mail, MapPin, Phone, Sparkles } from "lucide-react";
import siteConfig from "../config/site";
import logoImg from "../assets/images/ayswariya-mahal-logo.webp";
import sowbhagyaLogo from "../assets/images/sowbhagya-mahal-logo.webp";

export default function Maintenance() {
  const encodedAddress = encodeURIComponent(siteConfig.contact.address);

  return (
    <>
      <Helmet>
        <title>Under Construction — Ayswariya Mahal</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta
          name="description"
          content="Ayswariya Mahal is currently under maintenance. We're crafting something exquisite — we'll be back shortly."
        />
      </Helmet>

      <main className="relative flex min-h-[100dvh] flex-col overflow-hidden bg-[#fdfbf7] wedding-pattern-ivory">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(229,199,107,0.14),transparent_42%),radial-gradient(circle_at_92%_88%,rgba(90,17,28,0.06),transparent_32%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D4A843]/70 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#D4A843]/20 to-transparent" />

        {/* soft top glow */}
        <div className="pointer-events-none absolute -top-28 left-1/2 h-[420px] w-[min(860px,92vw)] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(229,199,107,0.16),transparent_68%)] blur-[1px]" />

        <div className="relative flex flex-1 flex-col items-center justify-center px-5 py-10 sm:px-8 md:px-10 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex w-full max-w-[760px] flex-col items-center text-center"
          >
            {/* Logos */}
            <div className="flex items-center justify-center gap-3 sm:gap-5">
              <img
                src={logoImg}
                alt="Ayswariya Mahal"
                width={220}
                height={98}
                className="h-[42px] w-auto object-contain drop-shadow-[0_8px_20px_rgba(90,17,28,0.12)] sm:h-[52px] md:h-[58px]"
                loading="eager"
                decoding="async"
              />
              <span className="h-7 w-px shrink-0 bg-[#D4A843]/40 sm:h-8" aria-hidden="true" />
              <img
                src={sowbhagyaLogo}
                alt="Sowbhagya Mahal"
                width={220}
                height={98}
                className="h-[42px] w-auto object-contain opacity-90 drop-shadow-[0_8px_20px_rgba(90,17,28,0.10)] sm:h-[52px] md:h-[58px]"
                loading="eager"
                decoding="async"
              />
            </div>

            {/* Eyebrow */}
            <p className="mt-8 font-body text-[11px] font-semibold uppercase tracking-[0.22em] text-[#8c6419] sm:text-xs">
              We&apos;ll be right back
            </p>

            {/* Divider */}
            <div className="mt-3 flex w-full max-w-[320px] items-center gap-3">
              <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[#D4A843]/60 to-transparent" />
              <span className="grid h-7 w-7 place-items-center rotate-45 border border-[#D4A843]/50 bg-[#D4A843]/10">
                <Sparkles className="-rotate-45 h-3.5 w-3.5 text-[#8c6419]" aria-hidden="true" />
              </span>
              <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[#D4A843]/60 to-transparent" />
            </div>

            {/* Icon badge */}
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.18, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="mt-7 grid h-[72px] w-[72px] place-items-center rounded-full border border-[#D4A843]/25 bg-white shadow-[0_16px_40px_rgba(90,17,28,0.12),inset_0_1px_0_rgba(255,255,255,0.9)] sm:h-[84px] sm:w-[84px]"
            >
              <span className="grid h-[56px] w-[56px] place-items-center rounded-full bg-gradient-to-br from-[#fdfaf3] to-[#f5ead9] ring-1 ring-[#D4A843]/20 sm:h-[64px] sm:w-[64px]">
                <span className="relative">
                  <span className="absolute -right-1 -top-1 h-2 w-2 animate-ping rounded-full bg-[#D4A843]/70" />
                  <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-[#D4A843]" />
                  <Sparkles className="h-7 w-7 text-[#6A1724] sm:h-8 sm:w-8" aria-hidden="true" />
                </span>
              </span>
            </motion.div>

            {/* Heading */}
            <h1 className="mt-6 font-display text-[34px] font-bold leading-[0.95] tracking-[-0.02em] text-[#3F0C15] sm:text-[44px] md:text-[52px]">
              Under
              <span className="font-serif font-semibold italic tracking-[-0.015em] text-[#6A1724]"> Construction</span>
            </h1>

            <p className="mt-3 max-w-[560px] font-serif text-[17px] italic leading-7 text-[#6A1724]/70 sm:text-[19px]">
              Crafting something exquisite for your celebrations
            </p>

            <p className="mt-5 max-w-[600px] font-body text-[15px] leading-7 text-[#554241] sm:text-base sm:leading-8">
              Our website is taking a brief pause for enhancements. We&apos;re
              refining every detail to bring you an even more elegant digital
              experience — just like the weddings we host.
            </p>

            {/* Animated progress */}
            <div className="mt-7 w-full max-w-[420px]">
              <div className="flex items-center justify-between font-sans text-[10px] uppercase tracking-[0.16em] text-[#8c6419]/60">
                <span>Refining</span>
                <span className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#D4A843]" />
                  In progress
                </span>
              </div>
              <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-[#3F0C15]/8 p-1">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-[#D4A843] via-[#E5C76B] to-[#B8860B]"
                  initial={{ width: "18%" }}
                  animate={{ width: ["18%", "78%", "52%", "86%"] }}
                  transition={{ duration: 3.2, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
                />
              </div>
            </div>

            {/* Contact card */}
            <div className="mt-8 w-full max-w-[640px] rounded-[20px] border border-[#D4A843]/18 bg-white/80 p-5 text-left shadow-[0_18px_48px_rgba(90,17,28,0.10)] backdrop-blur-[6px] sm:p-7">
              <p className="text-center font-sans text-[11px] font-medium uppercase tracking-[0.16em] text-[#8c6419]">
                Need to reach us? We&apos;re still here for you
              </p>

              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <a
                  href={`tel:${siteConfig.contact.phoneMobile}`}
                  className="group flex items-center gap-3 rounded-2xl border border-[#D4A843]/14 bg-[#fdfbf7] px-4 py-3.5 transition hover:border-[#D4A843]/30 hover:bg-white"
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#3F0C15] text-[#E5C76B] shadow-[0_8px_18px_rgba(63,12,21,0.18)]">
                    <Phone className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <span className="min-w-0">
                    <span className="block font-sans text-[11px] uppercase tracking-[0.12em] text-[#8c6419]/70">Call us</span>
                    <span className="block truncate font-body text-[15px] font-medium leading-6 text-[#3F0C15]">+91 {siteConfig.contact.phoneMobile}</span>
                  </span>
                </a>

                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="group flex items-center gap-3 rounded-2xl border border-[#D4A843]/14 bg-[#fdfbf7] px-4 py-3.5 transition hover:border-[#D4A843]/30 hover:bg-white"
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white text-[#6A1724] ring-1 ring-[#D4A843]/20">
                    <Mail className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <span className="min-w-0">
                    <span className="block font-sans text-[11px] uppercase tracking-[0.12em] text-[#8c6419]/70">Email</span>
                    <span className="block truncate font-body text-[14px] font-medium leading-6 text-[#3F0C15]">{siteConfig.contact.email}</span>
                  </span>
                </a>
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-[1.15fr_0.85fr]">
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex gap-3 rounded-2xl px-2 py-2 text-left transition hover:bg-[#fdfbf7]"
                >
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#D4A843]" aria-hidden="true" />
                  <span className="font-body text-[13.5px] leading-6 text-[#554241]">{siteConfig.contact.address}</span>
                </a>
                <span className="flex items-center gap-2 self-start rounded-2xl bg-[#3F0C15]/5 px-3 py-3 sm:justify-center">
                  <Clock className="h-4 w-4 shrink-0 text-[#6A1724]/60" aria-hidden="true" />
                  <span className="font-body text-[13px] leading-6 text-[#554241]">{siteConfig.contact.officeHours}</span>
                </span>
              </div>

              <div className="mt-5 flex flex-wrap items-center justify-center gap-2 border-t border-[#D4A843]/12 pt-5">
                <a
                  href={`tel:${siteConfig.contact.phonePrimary.replace(/\s/g, "")}`}
                  className="font-body text-sm text-[#6A1724] underline decoration-[#D4A843]/30 underline-offset-4 hover:decoration-[#D4A843]"
                >
                  {siteConfig.contact.phonePrimary}
                </a>
                <span className="text-[#D4A843]/40">·</span>
                <a
                  href={`tel:${siteConfig.contact.phoneSecondary.replace(/\s/g, "")}`}
                  className="font-body text-sm text-[#6A1724] underline decoration-[#D4A843]/30 underline-offset-4 hover:decoration-[#D4A843]"
                >
                  {siteConfig.contact.phoneSecondary}
                </a>
              </div>
            </div>

            {/* Socials */}
            <div className="mt-7 flex items-center gap-2">
              <a
                href={siteConfig.socials.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="grid h-11 w-11 place-items-center rounded-full border border-[#D4A843]/20 bg-white text-[#6A1724]/70 shadow-sm transition hover:border-[#D4A843]/40 hover:text-[#6A1724]"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current"><path d="M14.2 8.3V6.9c0-.7.5-.9.9-.9h2.2V2.2L14.2 2C10.8 2 10 4.5 10 6.1v2.2H7.6v4H10V22h4.4v-9.7h3l.5-4h-3.7Z" /></svg>
              </a>
              <a
                href={siteConfig.socials.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="grid h-11 w-11 place-items-center rounded-full border border-[#D4A843]/20 bg-white text-[#6A1724]/70 shadow-sm transition hover:border-[#D4A843]/40 hover:text-[#6A1724]"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current"><path d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2Zm0 2A3.8 3.8 0 0 0 4 7.8v8.4A3.8 3.8 0 0 0 7.8 20h8.4a3.8 3.8 0 0 0 3.8-3.8V7.8A3.8 3.8 0 0 0 16.2 4H7.8Zm8.7 2.1a1.4 1.4 0 1 1 0 2.8 1.4 1.4 0 0 1 0-2.8ZM12 7.2a4.8 4.8 0 1 1 0 9.6 4.8 4.8 0 0 1 0-9.6Zm0 2a2.8 2.8 0 1 0 0 5.6 2.8 2.8 0 0 0 0-5.6Z" /></svg>
              </a>
              <a
                href={siteConfig.socials.youtube}
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="grid h-11 w-11 place-items-center rounded-full border border-[#D4A843]/20 bg-white text-[#6A1724]/70 shadow-sm transition hover:border-[#D4A843]/40 hover:text-[#6A1724]"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current"><path d="M21.6 7.1a3 3 0 0 0-2.1-2.1C17.7 4.5 12 4.5 12 4.5s-5.7 0-7.5.5a3 3 0 0 0-2.1 2.1A31 31 0 0 0 2 12a31 31 0 0 0 .4 4.9A3 3 0 0 0 4.5 19c1.8.5 7.5.5 7.5.5s5.7 0 7.5-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 22 12a31 31 0 0 0-.4-4.9ZM10 15.4V8.6l5.8 3.4L10 15.4Z" /></svg>
              </a>
            </div>

            <p className="mt-8 font-serif text-xs italic tracking-[0.08em] text-[#8c6419]/60">
              Ayswariya Mahal — Est. 2001 · Arumbakkam, Chennai
            </p>
          </motion.div>
        </div>

        {/* bottom heritage bar */}
        <div className="relative border-t border-[#D4A843]/12 bg-[#3F0C15]/[0.02] px-5 py-4 text-center backdrop-blur-[2px] sm:px-8">
          <p className="mx-auto max-w-[760px] font-body text-[12.5px] leading-6 text-[#6A1724]/55">
            Thank you for your patience. For urgent bookings &amp; availability, please call us directly — we&apos;re happy to assist.
          </p>
        </div>
      </main>
    </>
  );
}
