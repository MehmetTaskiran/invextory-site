"use client";

import { Section } from "@/components/layout/section";
import { Container } from "@/components/layout/container";

export function SolutionSection() {
  return (
    <Section className="py-32">
      <Container>

        {/* HEADLINE */}
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-5xl font-semibold leading-tight">
            Demirbaş Yönetimi <span className="text-cyan-400">Otomatik  hale gelir.</span>
          </h2>

          <p className="mt-6 text-lg text-white-400">
            RFID Teknlojisi ile Sayım bir sorun olmaktan çıkar hızlı ve doğru yapılır.
          </p>
        </div>

        {/* GRID */}
        <div className="mt-24 grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">

          {/* GROUP 1 */}
          <div className="space-y-5">
            <div className="text-sm text-red-500 uppercase tracking-wide">
              Klasik Demirbaş Yönetimi
            </div>

            <div className="text-lg">Sayım yapılmaz</div>
            <div className="text-lg">Veri girilmez</div>
            <div className="text-lg">Varlık aranmaz</div>
          </div>

          {/* GROUP 2 */}
          <div className="space-y-5">
            <div className="text-sm text-red-500 font-bold uppercase tracking-wide">
              INVEXTORY ile 
            </div>

            <div className="text-lg">Dönemsel sayımlar ile tespit edilir</div>
            <div className="text-lg">Lokasyon sürekli güncellenir</div>
            <div className="text-lg">Durum otomatik raporlanır</div>
          </div>

          {/* GROUP 3 */}
          <div className="space-y-5">
            <div className="text-sm text-red-500 uppercase tracking-wide">
              Siz Kazanırsınız
            </div>

            <div className="text-lg">Hata oluşmaz</div>
            <div className="text-lg">Süreç gecikmez</div>
            <div className="text-lg">Kontrol gerekmez</div>
          </div>

        </div>

      </Container>
    </Section>
  );
}