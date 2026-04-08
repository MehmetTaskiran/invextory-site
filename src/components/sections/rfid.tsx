"use client";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Heading } from "@/components/ui/typography";

export function RfidSection() {
  return (
    <Section className="pb-32"> {/* ⬅️ ALT BOŞLUK EKLENDİ */}
      <Container>
        <Heading>
           Neler Sunuyoruz 
        </Heading>

        <div className="mt-16 grid lg:grid-cols-2 gap-8">
          <Block title="Demirbaş Modülü" />
          <Block title="Zimmetleme Modülü" highlight />
          <Block title="Talep Yönetim Modülü" highlight />
          <Block title="Amortisman Yönetimi Modülü" highlight />
          <Block title="Detaylı Konum Modülü" highlight />
          <Block title="Dönemsel Raporlar" highlight />
        </div>
      </Container>
    </Section>
  );
}

function Block({ title, highlight }: any) {
  return (
    <div className={`p-6 rounded-2xl border mb-2 ${
      highlight ? "border-white/30 bg-white/10" : "border-white/10 bg-white/5"
    }`}>
      {title}
    </div>
  );
}