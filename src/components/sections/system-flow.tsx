"use client";

import { useEffect, useState } from "react";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";

/* ---------------- DATA ---------------- */

const steps = [
  {
    title: "Algılama",
    desc: "RFID sinyali ile tüm varlıklar otomatik olarak tespit edilir.",
  },
  {
    title: "Konum & Zimmet",
    desc: "Her varlık bulunduğu lokasyon ve kullanıcı ile eşleşir.",
  },
  {
    title: "Sistem",
    desc: "Veri işlenir, geçmiş ve hareketler kaydedilir.",
  },
  {
    title: "Finans",
    desc: "Amortisman ve değer değişimi otomatik hesaplanır.",
  },
];

/* ---------------- SECTION ---------------- */

export function SystemFlowSection() {
  const [active, setActive] = useState(0);

  return (
    <Section id="system" className="py-32">
      <Container>

        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold text-white">
            Sistem nasıl çalışır
          </h2>
          <p className="mt-3 text-neutral-400">
            Fiziksel varlıklarınız otomatik olarak dijital bir sisteme dönüşür.
          </p>
        </div>

        <div className="mt-20 grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <div className="space-y-10">
            {steps.map((step, i) => (
              <div
                key={i}
                onMouseEnter={() => setActive(i)}
                className={`cursor-pointer transition-all ${
                  active === i ? "opacity-100" : "opacity-40"
                }`}
              >
                <h3 className="text-2xl font-semibold text-white">
                  {step.title}
                </h3>
                <p className="text-neutral-400 mt-2">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          {/* RIGHT */}
          <div className="relative h-[400px] overflow-hidden">
            {active === 0 && <AlgilamaAnimasyonu />}
            {active === 1 && <KonumAnimasyonu />}
            {active === 2 && <SistemAnimasyonu />}
            {active === 3 && <FinansAnimasyonu />}
          </div>

        </div>

      </Container>
    </Section>
  );
}

/* ---------------- 1. ALGILAMA ---------------- */

function AlgilamaAnimasyonu() {
  const [radius, setRadius] = useState(0);

  useEffect(() => {
    const i = setInterval(() => {
      setRadius((r) => (r > 400 ? 0 : r + 18));
    }, 80);
    return () => clearInterval(i);
  }, []);

  const tags = [
    { x: 20, y: 30 },
    { x: 75, y: 40 },
    { x: 45, y: 75 },
  ];

  const detected = (t: any) => {
    const dx = t.x - 50;
    const dy = t.y - 50;
    return Math.sqrt(dx * dx + dy * dy) * 6 < radius;
  };

  return (
    <div className="relative w-full h-full">

      {[0, 120, 240].map((o, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            width: radius + o,
            height: radius + o,
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            border: "2px solid rgba(34,211,238,0.6)",
            boxShadow: "0 0 50px #22d3ee",
            opacity: 0.5 - i * 0.12,
          }}
        />
      ))}

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="w-6 h-6 bg-cyan-400 rounded-full shadow-[0_0_25px_#22d3ee]" />
      </div>

      {tags.map((t, i) => {
        const active = detected(t);

        return (
          <div
            key={i}
            className={`absolute px-2 py-1 text-xs rounded transition-all ${
              active
                ? "bg-cyan-400 text-black scale-110 shadow-[0_0_20px_#22d3ee]"
                : "bg-white/20"
            }`}
            style={{
              top: `${t.y}%`,
              left: `${t.x}%`,
              transform: "translate(-50%, -50%)",
            }}
          >
            {active ? "Detected" : "Tag"}
          </div>
        );
      })}
    </div>
  );
}

/* ---------------- 2. KONUM ---------------- */

function KonumAnimasyonu() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const i = setInterval(() => {
      setActive((a) => (a + 1) % 3);
    }, 1500);
    return () => clearInterval(i);
  }, []);

  const assets = [
    { name: "Laptop", y: 30 },
    { name: "Tablet", y: 50 },
    { name: "Kamera", y: 70 },
  ];

  const users = ["Ali", "Ayşe", "Mehmet"];
  const locations = ["Ofis", "Depo", "Saha"];

  return (
    <div className="relative w-full h-full">
      {users.map((u, i) => (
        <div key={i} className="absolute left-[10%] text-xs px-2 py-1 rounded bg-white/10 text-white" style={{ top: `${30 + i * 20}%` }}>
          {u}
        </div>
      ))}

      {assets.map((a, i) => (
        <div key={i} className="absolute left-1/2 -translate-x-1/2 text-xs px-2 py-1 rounded bg-white/20" style={{ top: `${a.y}%` }}>
          {a.name}
        </div>
      ))}

      {locations.map((l, i) => (
        <div key={i} className="absolute right-[10%] text-xs px-2 py-1 rounded bg-white/10 text-white" style={{ top: `${30 + i * 20}%` }}>
          {l}
        </div>
      ))}
    </div>
  );
}

/* ---------------- 3. SİSTEM (UPDATED) ---------------- */

function SistemAnimasyonu() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const i = setInterval(() => {
      setStep((s) => (s + 1) % 6);
    }, 1600);
    return () => clearInterval(i);
  }, []);

  const stages = [
    { label: "Satın Al", icon: "📦" },
    { label: "Fatura", icon: "🧾" },
    { label: "Entegrasyon", icon: "🔗" },
    { label: "Demirbaş", icon: "🏷" },
    { label: "Zimmet", icon: "👤" },
    { label: "Sayım", icon: "📡" },
  ];

  const radius = 120;

  return (
    <div className="relative w-full h-full flex items-center justify-center">

      {/* CENTER */}
      <div className="absolute w-14 h-14 bg-cyan-400 rounded-full shadow-[0_0_30px_#22d3ee]" />

      {/* CIRCLE NODES */}
      {stages.map((s, i) => {
        const angle = (i / stages.length) * 2 * Math.PI;

        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;

        const isActive = i === step;

        return (
          <div
            key={i}
            className="absolute flex flex-col items-center"
            style={{
              left: "50%",
              top: "50%",
              transform: `translate(${x}px, ${y}px) translate(-50%, -50%)`,
            }}
          >
            <div
              className={`text-2xl transition-all ${
                isActive
                  ? "scale-125 drop-shadow-[0_0_10px_#22d3ee]"
                  : "opacity-40"
              }`}
            >
              {s.icon}
            </div>

            <span
              className={`mt-2 text-sm ${
                isActive ? "text-cyan-400" : "text-neutral-500"
              }`}
            >
              {s.label}
            </span>
          </div>
        );
      })}
    </div>
  );
}

/* ---------------- 4. FİNANS ---------------- */

function FinansAnimasyonu() {
  const [value, setValue] = useState(100);

  useEffect(() => {
    const i = setInterval(() => {
      setValue((v) => (v <= 20 ? 100 : v - 1));
    }, 80);
    return () => clearInterval(i);
  }, []);

  const opacity = value / 100;

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center">

      <div className="flex items-center gap-6 text-3xl">
        <span style={{ opacity }}>{`🏷`}</span>
        <span className="text-neutral-500">→</span>
        <span style={{ opacity }}>{`💰`}</span>
      </div>

      <div className="mt-6 text-4xl font-bold text-cyan-400">
        ₺{value * 10}
      </div>
    </div>
  );
}