import type { MessageConfig, MessageParagraph } from "@/lib/messages/types";
import ScrollReveal from "./ScrollReveal";
import PhotoGallery from "./PhotoGallery";
import VideoSection from "./VideoSection";

type Props = { config: MessageConfig };

function Paragraph({ item }: { item: MessageParagraph }) {
  if (item.type === "divider") {
    return (
      <div className="group/divider my-10 flex items-center gap-3 sm:my-12">
        <span className="ornament-line h-px flex-1 transition-all duration-500 group-hover/divider:flex-[1.15] group-hover/divider:bg-gradient-to-r group-hover/divider:from-transparent group-hover/divider:via-gold-400 group-hover/divider:to-transparent" />
        <span className="text-gold-400/90 transition-all duration-500 group-hover/divider:rotate-180 group-hover/divider:scale-125 group-hover/divider:text-gold-300 group-hover/divider:drop-shadow-[0_0_8px_rgba(212,175,55,0.7)]">
          ✦
        </span>
        <span className="ornament-line h-px flex-1 transition-all duration-500 group-hover/divider:flex-[1.15] group-hover/divider:bg-gradient-to-l group-hover/divider:from-transparent group-hover/divider:via-gold-400 group-hover/divider:to-transparent" />
      </div>
    );
  }

  if (item.type === "highlight") {
    return (
      <div className="group/hl relative my-10 px-2 text-center sm:my-12">
        {/* Glow keemasan di belakang kutipan */}
        <div className="pointer-events-none absolute inset-0 -z-10 mx-auto h-full w-full rounded-2xl bg-gradient-to-r from-gold-500/0 via-gold-500/15 to-gold-500/0 opacity-0 blur-2xl transition-all duration-700 group-hover/hl:opacity-100" />
        
        <p className="font-display text-[1.35rem] italic leading-relaxed text-cream-200 transition-all duration-500 group-hover/hl:text-gold-200 group-hover/hl:tracking-wide group-hover/hl:drop-shadow-[0_0_12px_rgba(212,175,55,0.3)] sm:text-2xl md:text-[1.65rem]">
          <span className="inline-block transition-transform duration-500 group-hover/hl:-translate-x-1 group-hover/hl:text-gold-400">
            “
          </span>
          {item.text}
          <span className="inline-block transition-transform duration-500 group-hover/hl:translate-x-1 group-hover/hl:text-gold-400">
            ”
          </span>
        </p>
      </div>
    );
  }

  return (
    <p className="group/para mt-5 text-[1rem] leading-[1.9] text-cream-200/85 transition-all duration-500 hover:text-cream-100 hover:[text-shadow:0_0_20px_rgba(212,175,55,0.15)] sm:text-[1.02rem] sm:leading-[1.95] md:text-[1.06rem]">
      <span className="mr-1 inline-block h-1.5 w-1.5 rounded-full bg-gold-500/0 align-middle transition-all duration-500 group-hover/para:bg-gold-400 group-hover/para:shadow-[0_0_8px_rgba(212,175,55,0.8)]" />
      {item.text}
    </p>
  );
}

export default function MessagePage({ config }: Props) {
  const { content, photoSection, video } = config;

  return (
    <main className="relative mx-auto max-w-3xl px-5 pb-24 pt-16 sm:px-6 sm:pb-32 sm:pt-20 md:pt-28">
      {/* Header */}
      <ScrollReveal>
        <header className="group/header relative text-center">
          {/* Glow halus di belakang header saat hover */}
          <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 mx-auto h-40 w-40 rounded-full bg-gold-500/0 blur-3xl transition-all duration-1000 group-hover/header:bg-gold-500/10" />

          <div className="ornament-line mx-auto h-px w-12 transition-all duration-500 group-hover/header:w-24 group-hover/header:bg-gradient-to-r group-hover/header:from-transparent group-hover/header:via-gold-400 group-hover/header:to-transparent" />
          
          <p className="mt-6 font-hand text-xl text-gold-400 transition-all duration-500 group-hover/header:tracking-[0.3em] group-hover/header:text-gold-300 group-hover/header:drop-shadow-[0_0_10px_rgba(212,175,55,0.5)] sm:text-2xl">
            untuk
          </p>
          
          <h1 className="mt-1 font-display text-[2.75rem] leading-[1.05] text-cream-100 transition-all duration-700 group-hover/header:text-gold-100 group-hover/header:tracking-wide group-hover/header:drop-shadow-[0_0_25px_rgba(212,175,55,0.35)] sm:text-5xl md:text-6xl">
            {config.recipientName}
          </h1>
          
          <p className="mt-3 text-[0.65rem] uppercase tracking-[0.35em] text-gold-500/90 transition-all duration-500 group-hover/header:tracking-[0.5em] group-hover/header:text-gold-400 sm:mt-4 sm:text-xs">
            sebuah surat personal
          </p>
        </header>
      </ScrollReveal>

      {/* Badan surat */}
      <ScrollReveal delay={120}>
        <section className="group/card night-card relative mx-auto mt-12 max-w-2xl overflow-hidden px-6 py-10 transition-all duration-700 hover:-translate-y-1 hover:shadow-[0_30px_80px_-20px_rgba(0,0,0,0.9),0_0_50px_rgba(212,175,55,0.15)] sm:mt-14 sm:px-8 sm:py-12 md:px-12 md:py-16">
          
          {/* Efek kilau kaca (glare) menyapu saat hover */}
          <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/5 to-transparent transition-transform duration-[1500ms] ease-out group-hover/card:translate-x-full" />
          
          {/* Garis emas atas muncul saat hover */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px scale-x-0 bg-gradient-to-r from-transparent via-gold-400/70 to-transparent transition-transform duration-700 group-hover/card:scale-x-100" />

          <p className="font-hand text-2xl text-cream-200 transition-all duration-500 group-hover/card:text-gold-200 sm:text-3xl">
            {content.greeting}
          </p>

          <div className="mt-5 sm:mt-6">
            {content.paragraphs.map((item, i) => (
              <ScrollReveal key={i} delay={i === 0 ? 0 : 80}>
                <Paragraph item={item} />
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={100}>
            <div className="group/sign mt-12 text-right sm:mt-14">
              <p className="font-body text-sm text-cream-200/70 transition-all duration-500 group-hover/sign:text-cream-200/90 group-hover/sign:tracking-wider">
                {content.signature.line}
              </p>
              <p className="mt-2 inline-block font-hand text-2xl text-gold-300 transition-all duration-700 group-hover/sign:scale-105 group-hover/sign:text-gold-200 group-hover/sign:tracking-wider group-hover/sign:drop-shadow-[0_0_15px_rgba(212,175,55,0.5)] sm:text-3xl">
                {content.signature.name}
              </p>
            </div>
          </ScrollReveal>
        </section>
      </ScrollReveal>

      <PhotoGallery
        title={photoSection.title}
        subtitle={photoSection.subtitle}
        items={photoSection.items}
      />

      {video && <VideoSection {...video} />}

      <ScrollReveal>
        <footer className="group/footer mt-24 text-center sm:mt-32">
          <div className="ornament-line mx-auto h-px w-12 transition-all duration-700 group-hover/footer:w-32 group-hover/footer:bg-gradient-to-r group-hover/footer:from-transparent group-hover/footer:via-gold-400 group-hover/footer:to-transparent" />
          
          <p className="mt-6 font-hand text-xl text-gold-400/90 transition-all duration-500 group-hover/footer:tracking-[0.25em] group-hover/footer:text-gold-300 group-hover/footer:drop-shadow-[0_0_12px_rgba(212,175,55,0.6)] sm:text-2xl">
            dengan sepenuh hati
          </p>
        </footer>
      </ScrollReveal>
    </main>
  );
}