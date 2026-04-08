import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "RFID vs Barkod: Hangisi Daha İyi? | Invextory",
  description:
    "RFID ve barkod sistemleri arasındaki farklar nelerdir? Hangi teknoloji envanter ve demirbaş yönetimi için daha uygundur?",

      alternates: {
    languages: {
      tr: "https://www.invextory.com/blog/rfid-vs-barcode",
      en: "https://www.invextory.com/en/blog/rfid-vs-barcode",
    },
  },
};

export default function Page() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-24 text-white">

      <h1 className="text-4xl font-semibold leading-tight">
        RFID vs Barkod: Hangisi Daha İyi?
      </h1>

      <p className="mt-6 text-neutral-400 text-lg">
        Envanter ve demirbaş yönetiminde en yaygın kullanılan iki teknoloji RFID ve barkod sistemleridir. 
        Ancak bu iki sistem arasında ciddi farklar vardır.
      </p>

      <h2 className="mt-12 text-2xl font-semibold">
        Barkod Sistemleri Nasıl Çalışır?
      </h2>

      <p className="mt-4 text-neutral-400">
        Barkod sistemleri, ürünlerin optik olarak tek tek taranmasına dayanır. 
        Her ürünün ayrı ayrı okutulması gerekir.
      </p>

      <ul className="mt-4 list-disc list-inside text-neutral-400 space-y-2">
        <li>Görüş hattı gerekir</li>
        <li>Tek tek okutma zorunluluğu</li>
        <li>Yavaş işlem süreci</li>
      </ul>

      <h2 className="mt-12 text-2xl font-semibold">
        RFID Sistemleri Nasıl Çalışır?
      </h2>

      <p className="mt-4 text-neutral-400">
        RFID, radyo frekansları ile birden fazla varlığı aynı anda okuyabilir. 
        Görüş hattına ihtiyaç duymaz.
      </p>

      <ul className="mt-4 list-disc list-inside text-neutral-400 space-y-2">
        <li>Toplu okuma yapılabilir</li>
        <li>Görüş hattı gerekmez</li>
        <li>Çok daha hızlıdır</li>
      </ul>

      <h2 className="mt-12 text-2xl font-semibold">
        RFID vs Barkod Karşılaştırması
      </h2>

      <div className="mt-6 grid md:grid-cols-2 gap-6 text-neutral-400">
        <div className="border border-white/10 p-4 rounded-lg">
          <div className="font-semibold text-white mb-2">Barkod</div>
          <ul className="space-y-1">
            <li>Tekli okuma</li>
            <li>Yavaş</li>
            <li>İnsan bağımlı</li>
          </ul>
        </div>

        <div className="border border-white/10 p-4 rounded-lg">
          <div className="font-semibold text-white mb-2">RFID</div>
          <ul className="space-y-1">
            <li>Toplu okuma</li>
            <li>Çok hızlı</li>
            <li>Otomatik veri</li>
          </ul>
        </div>
      </div>

      <h2 className="mt-12 text-2xl font-semibold">
        Hangi Sistem Daha İyi?
      </h2>

      <p className="mt-4 text-neutral-400">
        Eğer küçük ölçekli bir işletmeyseniz barkod yeterli olabilir. 
        Ancak büyük ölçekli operasyonlar için RFID çok daha verimli ve sürdürülebilir bir çözümdür.
      </p>

      <div className="mt-16 border border-white/10 p-6 rounded-2xl bg-white/5">
        <h3 className="text-xl font-semibold">
          RFID ile operasyonlarınızı dönüştürün
        </h3>

        <p className="mt-3 text-neutral-400">
          Invextory ile manuel süreçleri ortadan kaldırın ve varlıklarınızı gerçek zamanlı yönetin.
        </p>

        <Link
          href="/"
          className="inline-block mt-6 px-5 py-3 bg-cyan-400 text-black rounded-lg font-medium"
        >
          Sistemi Keşfet
        </Link>
      </div>

    </main>
  );
}