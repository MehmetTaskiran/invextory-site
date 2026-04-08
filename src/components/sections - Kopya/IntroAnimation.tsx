"use client";

import { useEffect, useState } from "react";

export function IntroAnimation({ onFinish }: { onFinish: () => void }) {
  const [radius, setRadius] = useState(0);
  const [hide, setHide] = useState(false);

  const center = { x: 50, y: 50 };

  const tags = [
    { top: 10, left: 20 },
    { top: 20, left: 80 },
    { top: 70, left: 15 },
    { top: 80, left: 75 },
    { top: 30, left: 10 },
    { top: 60, left: 85 },
    { top: 15, left: 60 },
    { top: 75, left: 40 },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setRadius((r) => (r > 600 ? 0 : r + 22));
    }, 80);

    const t1 = setTimeout(() => setHide(true), 3500);
    const t2 = setTimeout(() => onFinish(), 4200);

    return () => {
      clearInterval(interval);
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [onFinish]);

  const isDetected = (tag: { top: number; left: number }) => {
    const dx = tag.left - center.x;
    const dy = tag.top - center.y;
    const dist = Math.sqrt(dx * dx + dy * dy);
    return dist * 6 < radius;
  };

  return (
    <div
      className={`fixed inset-0 z-[999] flex items-center justify-center bg-[#0B1220] transition-opacity duration-700 ${
        hide ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* 🔥 STRONG WAVES */}
      {[0, 120, 240].map((offset, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            width: radius + offset,
            height: radius + offset,
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            border: "2px solid rgba(34,211,238,0.6)",
            boxShadow: "0 0 40px #22d3ee, inset 0 0 20px #22d3ee",
            opacity: 0.5 - i * 0.12,
          }}
        />
      ))}

      {/* TAGS */}
      {tags.map((tag, i) => {
        const detected = isDetected(tag);

        return (
          <div
            key={i}
            className={`absolute px-2 py-2 rounded-md text-[10px] transition-all duration-200 ${
              detected
                ? "bg-cyan-400 text-black scale-110 shadow-[0_0_20px_#22d3ee]"
                : "bg-white text-black opacity-30"
            }`}
            style={{
              top: `${tag.top}%`,
              left: `${tag.left}%`,
              transform: "translate(-50%, -50%)",
            }}
          >
            Tag
          </div>
        );
      })}

      {/* CENTER */}
      <div className="relative z-10">
        <LogoAnimation size={180} />
      </div>
    </div>
  );
}

/* ---------------- LOGO ---------------- */

export function LogoAnimation({ size = 120 }: { size?: number }) {
  const nodes = [
    { x: 30, y: 34 },
    { x: 48, y: 30 },
    { x: 62, y: 38 },
    { x: 36, y: 48 },
    { x: 54, y: 52 },
    { x: 68, y: 50 },
    { x: 32, y: 60 },
    { x: 46, y: 66 },
    { x: 60, y: 64 },
    { x: 40, y: 74 },
  ];

  return (
    <svg width={size} height={size} viewBox="0 0 100 100">
      <defs>
        <linearGradient id="boxGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1A237E" />
          <stop offset="100%" stopColor="#00B0FF" />
        </linearGradient>

        <linearGradient id="cellGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#22d3ee" />
          <stop offset="100%" stopColor="#0ea5e9" />
        </linearGradient>
      </defs>

      {/* OUTER */}
      <path
        d="M20 30 L50 15 L80 30 L80 70 L50 85 L20 70 Z"
        fill="none"
        stroke="url(#boxGrad)"
        strokeWidth="3"
      />

      {/* INNER */}
      <path
        d="M20 30 L50 45 L80 30 M50 45 L50 85"
        fill="none"
        stroke="#00B0FF"
        strokeWidth="2"
        opacity="0.6"
      />

      {/* NODES */}
      {nodes.map((n, i) => (
        <rect
          key={i}
          x={n.x}
          y={n.y}
          width="5"
          height="5"
          rx="1"
          fill="url(#cellGrad)"
          opacity="0.2"
        >
          <animate
            attributeName="opacity"
            values="0.1;0.9;0.1"
            dur={`${1.2 + i * 0.2}s`}
            repeatCount="indefinite"
          />
        </rect>
      ))}

      {/* SCAN */}
      <rect x="15" y="20" width="70" height="2" fill="#00E676">
        <animateTransform
          attributeName="transform"
          type="translate"
          values="0 0; 0 60; 0 0"
          dur="2s"
          repeatCount="indefinite"
        />
      </rect>
    </svg>
  );
}