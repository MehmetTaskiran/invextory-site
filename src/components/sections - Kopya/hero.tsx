"use client";

import { useEffect, useRef, useState } from "react";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { LogoAnimation } from "@/components/sections/IntroAnimation";

/* ---------------- HERO ---------------- */

export function HeroSection() {

  return (
    <Section className="relative overflow-hidden min-h-screen flex items-center">

      <Navbar />

      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div className="max-w-xl">

            <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
              RFID Teknolojisiyle <span className="text-cyan-400">Hızlı ve doğru Yönetim</span>
            </h1>

            <p className="mt-6 text-red-400">
              Varlıklarınızı yönetmenin en teknolojik yolu
            </p>

            <p className="mt-3 text-white-500 text-sm">
              Siz veri girmazsiniz sistem kendisi okur
            </p>

            <div className="mt-10 flex gap-4">
              <Button variant="primary">Demo Talep Et</Button>
            </div>

          </div>

          <HeroVisual mode={"default"} />

        </div>
      </Container>
    </Section>
  );
}

/* ---------------- NAVBAR ---------------- */

function Navbar() {
  const states = [
    { type: "dynamic", text: "NTORY" },
    { type: "dynamic", text: "STMENT" },
    { type: "dynamic", text: "NTION" },
    { type: "full", text: "INVEXTORY" },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const current = states[index];

    const duration = current.type === "full" ? 4200 : 2000;

    const timeout = setTimeout(() => {
      setIndex((prev) => (prev + 1) % states.length);
    }, duration);

    return () => clearTimeout(timeout);
  }, [index]);

  return (
    <div className="absolute top-0 left-0 right-0 z-30 px-6 py-5 flex justify-between">
      <div className="flex items-center gap-3">
            
          <span className="text-white">    </span>
        <div className="text-3xl font-bold tracking-tight flex items-center">

          {states[index].type === "dynamic" ? (
            <>
              <span className="text-white">INVE</span>
              <span className="text-cyan-400 transition-all duration-500">
                {states[index].text}
              </span>
            </>
          ) : (
            <span className="text-white transition-all duration-700">
              INVEXTORY
            </span>
          )}

        </div>
      </div>
    </div>
  );
}

/* ---------------- VISUAL ---------------- */

function HeroVisual({ mode }: { mode: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [radius, setRadius] = useState(0);
  const [size, setSize] = useState({ width: 0, height: 0 });
  const [detected, setDetected] = useState(false);
  const [tagPositions, setTagPositions] = useState<any[][]>([]);

  const boxes = [
    { top: 15, left: 20, loc: "Toplantı Odası" },
    { top: 30, left: 70, loc: "Ofis" },
    { top: 80, left: 90, loc: "Saha" },
    { top: 60, left: 20, loc: "Muhasebe" },
    { top: 75, left: 60, loc: "Resepsiyon" },
    { top: 90, left: 30, loc: "Ortak Alan" },
  ];

  useEffect(() => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setSize({ width: rect.width, height: rect.height });

    const positions = boxes.map(() => {
      return new Array(4).fill(0).map(() => ({
        top: Math.random() * 70 + 10,
        left: Math.random() * 70 + 10,
      }));
    });

    setTagPositions(positions);

  }, []);

  useEffect(() => {
    if (!size.width) return;

    const maxRadius = Math.max(size.width, size.height) * 0.60;

    const interval = setInterval(() => {
      setRadius((r) => {
        const next = r + 5;

        if (next >= maxRadius * 0.20 && !detected) {
          setDetected(true);
        }

        if (next >= maxRadius ) {
          setDetected(false);
          return 0;
        }

        return next;
      });
    }, 80);

    return () => clearInterval(interval);
  }, [size, detected]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[380px] rounded-xl border border-white/10 p-6 overflow-visible"
    >
      {[0, 120, 260].map((o, i) => (
        <div
          key={i}
          className="absolute rounded-full border border-cyan-400/40"
          style={{
            width: (radius + o) * 2,
            height: (radius + o) * 2,
            top: `calc(50% - ${radius + o}px)`,
            left: `calc(50% - ${radius + o}px)`,
            opacity: 0.25 - i * 0.08,
            boxShadow: "0 0 60px #22d3ee",
          }}
        />
      ))}

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="w-8 h-8 bg-cyan-400 rounded-full shadow-[0_0_30px_#22d3ee]" />
      </div>

      {boxes.map((box, i) => (
        <div
          key={i}
          className="absolute flex flex-col items-center gap-2"
          style={{
            top: `${box.top}%`,
            left: `${box.left}%`,
            transform: "translate(-50%, -50%)",
          }}
        >
          <div className="text-[10px] px-2 py-[2px] rounded bg-white/20 text-white">
            {box.loc}
          </div>

          <div className="relative w-24 h-16">
            {tagPositions[i]?.map((pos, j) => (
              <span
                key={j}
                className={`absolute px-1 rounded text-[9px] transition-all ${
                  detected
                    ? "bg-cyan-400 text-black"
                    : "bg-black/40 text-white"
                }`}
                style={{
                  top: `${pos.top}%`,
                  left: `${pos.left}%`,
                  transform: "translate(-50%, -50%)",
                }}
              >
                tag
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}