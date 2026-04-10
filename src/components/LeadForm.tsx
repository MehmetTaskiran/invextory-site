"use client";

import { useState } from "react";

export default function LeadForm() {
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    
    // Değişken isimlerini burada netleştiriyoruz
    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      company: formData.get("company"),
      sector: formData.get("sector"),
      assetCount: formData.get("assetCount"),
      message: formData.get("message") || "Not bırakılmadı."
    };

    try {
      const response = await fetch("/api", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (response.ok && result.ok) {
        setDone(true);
      } else {
        alert("Hata: " + (result.error || "İstek sunucu tarafından reddedildi."));
      }
    } catch (err) {
      alert("Bağlantı Hatası: Lütfen internetinizi veya API yolunu kontrol edin.");
    } finally {
      setLoading(false);
    }
  }

  if (done) {
    return (
      <div className="p-6 border border-cyan-500/30 rounded-xl bg-cyan-500/5 text-center text-cyan-400 font-medium">
        Talebiniz başarıyla alındı. Teşekkür ederiz. En kısa zamanda sizinle irtibata geçilecektir..
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <input name="name" placeholder="Ad Soyad" required className="w-full p-3 bg-black/40 border border-white/10 rounded-lg text-white outline-none focus:border-cyan-400" />
        <input name="phone" type="tel" placeholder="Telefon" required className="w-full p-3 bg-black/40 border border-white/10 rounded-lg text-white outline-none focus:border-cyan-400" />
      </div>
      
      <input name="email" type="email" placeholder="E-posta Adresi" required className="w-full p-3 bg-black/40 border border-white/10 rounded-lg text-white outline-none focus:border-cyan-400" />
      <input name="company" placeholder="Şirket Adı" required className="w-full p-3 bg-black/40 border border-white/10 rounded-lg text-white outline-none focus:border-cyan-400" />

      <div className="grid grid-cols-2 gap-4">
        <input name="sector" placeholder="Sektör" required className="w-full p-3 bg-black/40 border border-white/10 rounded-lg text-white outline-none focus:border-cyan-400" />
        <input name="assetCount" type="number" placeholder="Demirbaş Adedi" required className="w-full p-3 bg-black/40 border border-white/10 rounded-lg text-white outline-none focus:border-cyan-400" />
      </div>

      <textarea name="message" placeholder="Mesajınız (Zorunlu değil)" rows={3} className="w-full p-3 bg-black/40 border border-white/10 rounded-lg text-white outline-none focus:border-cyan-400 resize-none" />

      <button type="submit" disabled={loading} className="w-full py-4 bg-cyan-500 hover:bg-cyan-600 text-black font-bold rounded-lg transition-all disabled:opacity-50">
        {loading ? "Gönderiliyor..." : "Demo Talebi Gönder"}
      </button>
    </form>
  );
}