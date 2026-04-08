import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "RFID ile Envanter Takibi Nasıl Yapılır? | Invextory",
  description:
    "RFID teknolojisi ile envanter takibi nasıl yapılır? Gerçek zamanlı stok takibi, otomatik veri toplama ve operasyonel verimlilik hakkında detaylı rehber.",
};

export default function Page() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-24 text-white">
        <a href="/en/blog/rfid-inventory-tracking" className="text-cyan-400">
        English version
        </a>
      <h1 className="text-4xl font-semibold leading-tight">
        RFID ile Envanter Takibi Nasıl Yapılır?
      </h1>

      <p className="mt-6 text-neutral-400 text-lg">
        RFID ile envanter takibi, stokların ve varlıkların manuel işlem olmadan otomatik olarak izlenmesini sağlayan modern bir yöntemdir.
        Bu teknoloji özellikle depo, hastane, üretim ve kurumsal ortamlarda kullanılır.
      </p>

      <h2 className="mt-12 text-2xl font-semibold">
        Geleneksel Envanter Takibinin Problemleri
      </h2>

      <ul className="mt-4 list-disc list-inside text-neutral-400 space-y-2">
        <li>Manuel sayım gerektirir</li>
        <li>Veri güncel değildir</li>
        <li>Zaman alır</li>
        <li>Hata oranı yüksektir</li>
      </ul>

      <h2 className="mt-12 text-2xl font-semibold">
        RFID ile Envanter Takibi Nasıl Çalışır?
      </h2>

      <p className="mt-4 text-neutral-400">
        RFID sistemi üç ana bileşenden oluşur:
      </p>

      <ul className="mt-4 list-disc list-inside text-neutral-400 space-y-2">
        <li>RFID etiketler</li>
        <li>RFID okuyucular</li>
        <li>Yazılım altyapısı</li>
      </ul>

      <p className="mt-4 text-neutral-400">
        Okuyucular sinyal gönderir ve etiketlerden gelen veriyi toplar. Bu veri anında sisteme aktarılır.
      </p>

      <h2 className="mt-12 text-2xl font-semibold">
        RFID ile Sağlanan Avantajlar
      </h2>

      <ul className="mt-4 list-disc list-inside text-neutral-400 space-y-2">
        <li>Gerçek zamanlı stok görünürlüğü</li>
        <li>Hızlı sayım (yüzlerce ürün saniyeler içinde)</li>
        <li>İnsan hatasının azalması</li>
        <li>Operasyonel verimlilik artışı</li>
      </ul>

      <h2 className="mt-12 text-2xl font-semibold">
        Hangi Sektörlerde Kullanılır?
      </h2>

      <ul className="mt-4 list-disc list-inside text-neutral-400 space-y-2">
        <li>Lojistik ve depolama</li>
        <li>Sağlık sektörü</li>
        <li>Üretim tesisleri</li>
        <li>Kamu kurumları</li>
      </ul>

      <div className="mt-16 border border-white/10 p-6 rounded-2xl bg-white/5">
        <h3 className="text-xl font-semibold">
          RFID ile envanterinizi otomatik yönetin
        </h3>

        <p className="mt-3 text-neutral-400">
          Invextory ile envanter takibini manuel süreçlerden kurtarın ve tüm varlıklarınızı gerçek zamanlı yönetin.
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