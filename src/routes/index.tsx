import { Instagram, MapPin } from "lucide-react";

const MAPS_URL = "https://maps.app.goo.gl/tCZFuraYepnTMjWAA?g_st=aw";
const MAPS_EMBED =
  "https://www.google.com/maps?q=12.8999481,77.4878159&z=16&output=embed";
const INSTAGRAM_URL = "https://www.instagram.com/tray_of_tradition_?igsh=MXI2YjFlMWg2MzFtdw==&igsi=MXI2YjFlMWg2MzFtdw==";
const CHAT_LINK = "https://wa.me/919449342207";

export default Index;

function Ornament() {
  return (
    <div className="flex items-center justify-center gap-3" aria-hidden="true">
      <span className="gold-rule w-16 sm:w-24" />
      <span className="text-gold/80 text-sm">❦</span>
      <span className="gold-rule w-16 sm:w-24" />
    </div>
  );
}

function Index() {
  return (
    <div className="min-h-screen px-3 py-3 sm:px-6 sm:py-6">
      <div className="page-frame mx-auto max-w-5xl rounded-xl px-4 py-6 pb-10 sm:px-8 sm:py-10 sm:pb-14">
        <header className="pt-2 pb-3">
          <nav className="text-cream/80 flex items-center justify-center gap-4 text-[11px] tracking-[0.2em] uppercase sm:gap-6 sm:text-xs">
            <a href="#home" className="hover:text-gold transition-colors">
              Home
            </a>
            <span className="text-gold/40">|</span>
            <a href="#find-us" className="hover:text-gold transition-colors">
              Find Us
            </a>
            <span className="text-gold/40">|</span>
            <a href="#follow-us" className="hover:text-gold transition-colors">
              Follow Us
            </a>
          </nav>
        </header>

        <div className="gold-rule w-full opacity-50" />

        {/* Hero */}
        <section
          id="home"
          className="animate-fade-up flex flex-col items-center py-6 text-center sm:py-10"
        >
          <div
            className="logo-mark flex w-full max-w-[20rem] flex-col items-center px-4 py-3 sm:max-w-[26rem]"
            role="img"
            aria-label="Tray of Tradition — Decoration, Makeup, Photography"
          >
            <span className="font-display text-gold text-3xl leading-none sm:text-5xl">Tray of Tradition</span>
            <span className="text-cream/80 mt-3 text-[9px] tracking-[0.28em] uppercase sm:text-[11px]">
              Decoration • Makeup • Photography
            </span>
          </div>
          <h1 className="text-gold mt-5 max-w-lg font-display text-sm leading-relaxed tracking-[0.18em] uppercase sm:mt-6 sm:text-xl sm:tracking-[0.2em]">
            Celebrating Tradition, Beauty, and Memorable Moments
          </h1>
          <div className="mt-6 flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row">
            <GoldButton href={MAPS_URL}>
              <MapPin className="size-4" aria-hidden="true" />
              View Location
            </GoldButton>
            <GoldButton href={INSTAGRAM_URL}>
              <Instagram className="size-4" aria-hidden="true" />
              Follow Instagram
            </GoldButton>
          </div>
        </section>

        {/* Find Us */}
        <section id="find-us" className="scroll-mt-8 py-10 text-center sm:py-12">
          <h2 className="text-gold font-display text-2xl sm:text-3xl">Find Us</h2>
          <Ornament />
          <p className="text-cream/85 mx-auto mt-4 max-w-md text-sm sm:text-base">
            Come and be a part of the Tray of Tradition experience.
          </p>
          <div className="border-gold/45 mt-8 overflow-hidden rounded-xl border bg-card/40">
            <iframe
              title="Tray of Tradition location on Google Maps"
              src={MAPS_EMBED}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block h-64 w-full border-0 sm:h-80"
            />
          </div>
          <div className="mt-6 flex justify-center">
            <GoldButton href={MAPS_URL}>
              <MapPin className="size-4" aria-hidden="true" />
              View Location
            </GoldButton>
          </div>
        </section>

        {/* Follow Us */}
        <section id="follow-us" className="scroll-mt-8 py-10 text-center sm:py-12">
          <h2 className="text-gold font-display text-2xl sm:text-3xl">Follow Us</h2>
          <Ornament />
          <p className="text-cream/85 mx-auto mt-4 max-w-md text-sm sm:text-base">
            Follow Tray of Tradition on Instagram for updates and memorable moments.
          </p>
          <div className="border-gold/45 text-gold mx-auto mt-6 grid size-16 place-items-center rounded-full border">
            <Instagram className="size-7" aria-hidden="true" />
          </div>
          <div className="mt-6 flex justify-center">
            <GoldButton href={INSTAGRAM_URL}>
              <Instagram className="size-4" aria-hidden="true" />
              Follow on Instagram
            </GoldButton>
          </div>
        </section>

        {/* Thank You */}
        <section className="py-10 text-center sm:py-12">
          <h2 className="text-gold font-display text-2xl sm:text-3xl">Thank You</h2>
          <Ornament />
          <p className="text-cream/85 mx-auto mt-4 max-w-md text-sm sm:text-base">
            Thank you for being part of Tray of Tradition.
          </p>
        </section>

        <div className="gold-rule w-full opacity-50" />
        <footer className="text-cream/70 pt-6 pb-2 text-center text-xs tracking-[0.16em] sm:text-sm">
          Tray of Tradition © 2026
        </footer>
      </div>

      {/* Floating WhatsApp */}
      <a
        href={CHAT_LINK}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed right-4 bottom-4 z-50 grid size-12 place-items-center rounded-full border border-gold/60 bg-accent/90 shadow-lg shadow-black/40 transition-all duration-300 hover:border-gold hover:bg-accent sm:right-6 sm:bottom-6 sm:size-14"
      >
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-6 text-gold sm:size-7"
          aria-hidden="true"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.704-1.589-3.674-1.589-5.709.001-6.157 5.01-11.166 11.166-11.166 2.986 0 5.79 1.163 7.897 3.272 2.107 2.109 3.27 4.912 3.269 7.898 0 6.157-5.01 11.166-11.166 11.166-1.934 0-3.811-.501-5.467-1.446l-5.897 1.148zm6.24-3.97c1.55.87 3.24 1.32 5.03 1.32 5.52 0 10-4.48 10-10s-4.48-10-10-10-10 4.48-10 10c0 1.69.42 3.32 1.21 4.76l-.74 2.72 2.75-.8zm9.24-5.17c-.07-.12-.26-.19-.54-.33-.28-.14-1.66-.82-1.92-.91-.26-.1-.45-.14-.64.14-.19.28-.73.91-.89 1.1-.17.18-.33.2-.61.07-.28-.14-1.18-.43-2.25-1.38-.83-.74-1.39-1.66-1.55-1.94-.17-.28-.02-.43.13-.57.13-.13.28-.33.42-.5.14-.17.19-.28.28-.47.1-.19.05-.35-.02-.49-.07-.14-.64-1.54-.88-2.1-.23-.55-.46-.47-.64-.48-.17 0-.36-.03-.56-.03-.19 0-.5.07-.76.35-.26.28-1 1-1 2.46s1.03 2.86 1.17 3.06c.14.19 2.03 3.1 4.92 4.35.69.3 1.22.48 1.64.61.69.22 1.32.19 1.82.12.56-.08 1.66-.68 1.89-1.33.24-.66.24-1.22.17-1.33-.07-.12-.26-.19-.54-.33z" />
        </svg>
      </a>
    </div>
  );
}

function GoldButton({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="border-gold/60 text-cream hover:border-gold hover:text-gold inline-flex w-full items-center justify-center gap-2 rounded-full border bg-accent/70 px-6 py-3 text-xs tracking-[0.12em] uppercase transition-all duration-300 hover:bg-accent sm:w-auto sm:text-sm"
    >
      {children}
    </a>
  );
}
