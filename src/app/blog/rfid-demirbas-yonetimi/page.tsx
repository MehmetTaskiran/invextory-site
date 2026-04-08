import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "RFID Demirbaş Yönetimi Nedir? | Invextory",
  description:
    "RFID teknolojisi ile demirbaş yönetimi nasıl yapılır? Manuel sistemlerin neden yetersiz kaldığını ve RFID ile otomatik takibin nasıl çalıştığını öğrenin.",

    alternates: {
    languages: {
      tr: "https://www.invextory.com/blog/rfid-demirbas-yonetimi",
      en: "https://www.invextory.com/en/blog/rfid-asset-management",
    },
  },
};

export default function Page() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-24 text-white">

      {/* HEAD */}
      <h1 className="text-4xl font-semibold leading-tight">
        RFID Demirbaş Yönetimi Nedir?
      </h1>

      <p className="mt-6 text-neutral-400 text-lg">
        RFID demirbaş yönetimi, fiziksel varlıkların manuel giriş olmadan otomatik olarak takip edilmesini sağlayan bir sistemdir. 
        Bu sistem, özellikle büyük ölçekli organizasyonlarda envanter doğruluğunu artırır ve operasyonel maliyetleri düşürür.
      </p>

      {/* SECTION 1 */}
      <h2 className="mt-12 text-2xl font-semibold">
        Demirbaş Yönetimi Neden Zordur?
      </h2>

      <p className="mt-4 text-neutral-400">
        Geleneksel demirbaş yönetimi genellikle Excel tabloları, manuel sayımlar ve barkod sistemleri ile yürütülür. 
        Bu yöntemler:
      </p>

      <ul className="mt-4 list-disc list-inside text-neutral-400 space-y-2">
        <li>İnsan hatasına açıktır</li>
        <li>Güncel veri sağlamaz</li>
        <li>Operasyonel olarak yavaştır</li>
        <li>Gerçek zamanlı görünürlük sunmaz</li>
      </ul>

      {/* SECTION 2 */}
      <h2 className="mt-12 text-2xl font-semibold">
        RFID ile Demirbaş Takibi Nasıl Çalışır?
      </h2>

      <p className="mt-4 text-neutral-400">
        RFID (Radio Frequency Identification), varlıkların radyo frekansları ile otomatik olarak algılanmasını sağlar.
        Sistemin temel bileşenleri şunlardır:
      </p>

      <ul className="mt-4 list-disc list-inside text-neutral-400 space-y-2">
        <li>RFID etiketler (varlık üzerine yerleştirilir)</li>
        <li>RFID okuyucular (sabit veya mobil)</li>
        <li>Yazılım sistemi (veriyi işler)</li>
      </ul>

      <p className="mt-4 text-neutral-400">
        Okuyucu sinyal gönderir, etiket yanıt verir ve veri otomatik olarak sisteme aktarılır.
      </p>

      {/* SECTION 3 */}
      <h2 className="mt-12 text-2xl font-semibold">
        RFID ile Manuel Sistemler Arasındaki Fark
      </h2>

      <div className="mt-6 grid md:grid-cols-2 gap-6 text-neutral-400">
        <div className="border border-white/10 p-4 rounded-lg">
          <div className="font-semibold text-white mb-2">Manuel Sistemler</div>
          <ul className="space-y-1">
            <li>Tek tek sayım gerekir</li>
            <li>Veri gecikmeli girilir</li>
            <li>Hata oranı yüksektir</li>
          </ul>
        </div>

        <div className="border border-white/10 p-4 rounded-lg">
          <div className="font-semibold text-white mb-2">RFID Sistemleri</div>
          <ul className="space-y-1">
            <li>Toplu ve hızlı okuma</li>
            <li>Gerçek zamanlı veri</li>
            <li>Minimum hata</li>
          </ul>
        </div>
      </div>

      {/* SECTION 4 */}
      <h2 className="mt-12 text-2xl font-semibold">
        RFID Demirbaş Yönetiminin Avantajları
      </h2>

      <ul className="mt-4 list-disc list-inside text-neutral-400 space-y-2">
        <li>Gerçek zamanlı takip</li>
        <li>İnsan hatasının minimize edilmesi</li>
        <li>Hızlı envanter sayımı</li>
        <li>Operasyonel verimlilik artışı</li>
      </ul>

      {/* CTA */}
      <div className="mt-16 border border-white/10 p-6 rounded-2xl bg-white/5">
        <h3 className="text-xl font-semibold">
          RFID sistemleri operasyonlarınızı nasıl dönüştürür?
        </h3>

        <p className="mt-3 text-neutral-400">
          Invextory ile fiziksel varlıklarınızı otomatik olarak izleyebilir, 
          manuel süreçleri ortadan kaldırabilirsiniz.
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