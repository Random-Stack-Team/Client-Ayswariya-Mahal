import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import logoImg from "../assets/images/ayswariya-mahal-logo.webp";

export default function Maintenance() {
  return (
    <>
      <Helmet>
        <title>We&apos;ll be back — Ayswariya Mahal</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta name="description" content="Ayswariya Mahal — We'll be back shortly." />
      </Helmet>

      <main className="relative flex min-h-[100dvh] flex-col items-center justify-center overflow-hidden bg-[#fdfbf7] wedding-pattern-ivory px-5 py-10 sm:px-8">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(229,199,107,0.14),transparent_42%),radial-gradient(circle_at_92%_88%,rgba(90,17,28,0.06),transparent_32%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D4A843]/70 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#D4A843]/20 to-transparent" />

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex w-full max-w-[560px] flex-col items-center text-center"
        >
          <img
            src={logoImg}
            alt="Ayswariya Mahal"
            width={260}
            height={116}
            className="h-[56px] w-auto object-contain drop-shadow-[0_8px_20px_rgba(90,17,28,0.12)] sm:h-[68px] md:h-[74px]"
            loading="eager"
            decoding="async"
          />

          <div className="mt-7 flex w-full max-w-[280px] items-center gap-3">
            <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[#D4A843]/60 to-transparent" />
            <span className="h-2 w-2 rotate-45 border border-[#D4A843] bg-[#D4A843]/20" />
            <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[#D4A843]/60 to-transparent" />
          </div>

          <h1 className="mt-7 font-display text-[32px] font-bold leading-none tracking-[-0.02em] text-[#3F0C15] sm:text-[40px] md:text-[44px]">
            We&apos;ll be back
          </h1>
          <p className="mt-3 font-serif text-sm italic tracking-[0.08em] text-[#6A1724]/60">
            Ayswariya Mahal — Est. 2001
          </p>
        </motion.div>
      </main>
    </>
  );
}
