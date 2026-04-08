"use client";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Heading } from "@/components/ui/typography";

export function HandheldSection() {
  return (
    <Section className="py-32">
      <Container>

        {/* HEAD */}
        <div className="text-center max-w-4xl mx-auto">
          <Heading className="text-5xl font-semibold leading-tight">
            INVEXMobile <span className="text-cyan-400">Sistemin sahadaki uzantısıdır.</span>
          </Heading>

          <p className="mt-6 text-neutral-400 text-lg">
            RFID okuyucu entegre el terminali ile tüm varlıklar sahada anında algılanır ve sisteme işlenir.
          </p>
        </div>

        {/* CONTENT */}
        <div className="mt-20 grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT - BLOCKS */}
          <div className="grid gap-10">

            <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
              <div className="text-sm text-neutral-500 mb-3">
                ALGILAMA
              </div>
              <div className="text-lg">
                RFID okuyucu ile varlıklar tek hareketle tespit edilir
              </div>
            </div>

            <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
              <div className="text-sm text-neutral-500 mb-3">
                AKTARIM
              </div>
              <div className="text-lg">
                Veri anında sisteme işlenir, sonradan giriş yapılmaz
              </div>
            </div>

            <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
              <div className="text-sm text-neutral-500 mb-3">
                SENKRON
              </div>
              <div className="text-lg">
                Saha ve merkez aynı veriyi paylaşır
              </div>
            </div>

          </div>

          {/* RIGHT - IMAGE */}
          <div className="relative flex items-center justify-center">

            {/* Glow (arkaya alındı) */}
            <div className="absolute w-[300px] h-[300px] bg-cyan-400/10 blur-[120px] rounded-full -z-10" />

            {/* IMAGE (öne alındı ve test için img kullanıldı) */}
            <img
              src="/images/handheld_trp_new.png"
              alt="RFID El Terminali"
              className="relative z-10 w-[420px] h-auto object-contain rounded-4xl"
            />

          </div>

        </div>

      </Container>
    </Section>
  );
}