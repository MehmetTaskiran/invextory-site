"use client";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Heading, Subheading } from "@/components/ui/typography";

export function CapabilitiesSection() {
  return (
    <Section>
      <Container>
        {/* HEADER */}
        <div className="max-w-2xl">
          <Heading>
            Operasyonlarınızı tek sistemde yönetin
          </Heading>
          <Subheading>
            Demirbaş yönetimi artık parçalı süreçler değil, tek bir akış.
          </Subheading>
        </div>

        {/* LIST */}
        <div className="mt-16 space-y-10">
          <Capability
            title="Tüm varlıkları tek ekranda görün"
            description="Lokasyon, zimmet ve durum bilgileri anlık güncellenir."
          />

          <Capability
            title="Toplu sayım saniyeler içinde"
            description="RFID ile yüzlerce varlık aynı anda okunur."
          />

          <Capability
            title="Zimmet ve hareket takibi"
            description="Kimde, nerede, ne zaman — hepsi kayıt altında."
          />

          <Capability
            title="Anlık ve güvenilir raporlama"
            description="Veriyle karar alın, tahminle değil."
          />

          <Capability
            title="Barkoddan RFID’ye geçiş"
            description="Mevcut sisteminizle başlayın, sorunsuz geçiş yapın."
          />
        </div>
      </Container>
    </Section>
  );
}

function Capability({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="border-b border-white/10 pb-6">
      <h3 className="text-lg font-semibold text-white">
        {title}
      </h3>
      <p className="mt-2 text-neutral-400">
        {description}
      </p>
    </div>
  );
}