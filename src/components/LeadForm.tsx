"use client";

import { useState } from "react";

export default function LeadForm() {
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  async function handleSubmit(e: any) {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);

    await fetch("/api/lead", {
      method: "POST",
      body: JSON.stringify({
        name: formData.get("name"),
        email: formData.get("email"),
        company: formData.get("company"),
      }),
    });

    setLoading(false);
    setDone(true);
  }

  if (done) {
    return (
      <div className="p-6 border border-white/10 rounded-xl bg-white/5">
        Talebiniz alındı. En kısa sürede size ulaşacağız.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">

      <input
        name="name"
        placeholder="Adınız"
        required
        className="w-full p-3 bg-black border border-white/10 rounded-lg"
      />

      <input
        name="email"
        placeholder="Email"
        required
        type="email"
        className="w-full p-3 bg-black border border-white/10 rounded-lg"
      />

      <input
        name="company"
        placeholder="Şirket"
        className="w-full p-3 bg-black border border-white/10 rounded-lg"
      />

      <button
        disabled={loading}
        className="w-full bg-cyan-400 text-black py-3 rounded-lg font-medium"
      >
        {loading ? "Gönderiliyor..." : "Demo Talep Et"}
      </button>

    </form>
  );
}