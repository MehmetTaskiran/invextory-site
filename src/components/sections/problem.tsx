"use client";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Heading, Subheading } from "@/components/ui/typography";

export function ProblemSection() {
  return (
    <Section>
      <Container>
        <div className="max-w-2xl">
          <Heading>
            Demirbaş yönetimi hala manuel mi ilerliyor?
          </Heading>
          <Subheading>
            Excel ve manuel süreçler operasyonu yavaşlatır ve hataları artırır.
          </Subheading>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Card title="Sayım saatler sürüyor" />
          <Card title="Varlıklar kayboluyor" />
          <Card title="Hatalar kaçınılmaz" />
          <Card title="Veriler dağınık" />
        </div>
      </Container>
    </Section>
  );
}

function Card({ title }: { title: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <h3 className="text-white">{title}</h3>
    </div>
  );
}