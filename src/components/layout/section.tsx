"use client";

import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  id?: string; // 🔥 EKLENDİ
};

export function Section({ children, className = "", id }: Props) {
  return (
    <section id={id} className={className}>
      {children}
    </section>
  );
}