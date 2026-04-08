import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "What is RFID Asset Management? | Invextory",
  description:
    "Learn how RFID asset management works, how it replaces manual tracking systems, and how real-time inventory tracking is achieved.",

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

      <h1 className="text-4xl font-semibold leading-tight">
        What is RFID Asset Management?
      </h1>

      <p className="mt-6 text-neutral-400 text-lg">
        RFID asset management is a system that enables automatic tracking of physical assets without manual data entry. 
        It significantly improves inventory accuracy and operational efficiency.
      </p>

      <h2 className="mt-12 text-2xl font-semibold">
        Why Traditional Asset Management Fails
      </h2>

      <p className="mt-4 text-neutral-400">
        Traditional methods rely on spreadsheets, manual counting, and barcode systems.
        These approaches are:
      </p>

      <ul className="mt-4 list-disc list-inside text-neutral-400 space-y-2">
        <li>Error-prone</li>
        <li>Not real-time</li>
        <li>Slow and inefficient</li>
        <li>Lack visibility</li>
      </ul>

      <h2 className="mt-12 text-2xl font-semibold">
        How RFID Works
      </h2>

      <p className="mt-4 text-neutral-400">
        RFID (Radio Frequency Identification) allows assets to be detected automatically using radio signals.
      </p>

      <ul className="mt-4 list-disc list-inside text-neutral-400 space-y-2">
        <li>RFID tags attached to assets</li>
        <li>Readers that scan multiple items at once</li>
        <li>Software that processes data in real time</li>
      </ul>

      <h2 className="mt-12 text-2xl font-semibold">
        RFID vs Manual Systems
      </h2>

      <div className="mt-6 grid md:grid-cols-2 gap-6 text-neutral-400">
        <div className="border border-white/10 p-4 rounded-lg">
          <div className="font-semibold text-white mb-2">Manual</div>
          <ul className="space-y-1">
            <li>One-by-one scanning</li>
            <li>Delayed updates</li>
            <li>High error rate</li>
          </ul>
        </div>

        <div className="border border-white/10 p-4 rounded-lg">
          <div className="font-semibold text-white mb-2">RFID</div>
          <ul className="space-y-1">
            <li>Bulk reading</li>
            <li>Real-time data</li>
            <li>Minimal errors</li>
          </ul>
        </div>
      </div>

      <div className="mt-16 border border-white/10 p-6 rounded-2xl bg-white/5">
        <h3 className="text-xl font-semibold">
          Transform your operations with RFID
        </h3>

        <p className="mt-3 text-neutral-400">
          Invextory enables automatic asset tracking with RFID infrastructure.
        </p>

        <Link
          href="/"
          className="inline-block mt-6 px-5 py-3 bg-cyan-400 text-black rounded-lg font-medium"
        >
          Explore the system
        </Link>
      </div>

    </main>
  );
}