import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "RFID vs Barcode: Which One is Better? | Invextory",
  description:
    "Compare RFID and barcode systems. Learn which technology is better for inventory and asset tracking.",

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
        RFID vs Barcode: Which One is Better?
      </h1>

      <p className="mt-6 text-neutral-400 text-lg">
        RFID and barcode are the two most common technologies used in inventory and asset tracking.
        However, they differ significantly in performance and efficiency.
      </p>

      <h2 className="mt-12 text-2xl font-semibold">
        How Barcode Systems Work
      </h2>

      <ul className="mt-4 list-disc list-inside text-neutral-400 space-y-2">
        <li>Requires line of sight</li>
        <li>Items must be scanned one by one</li>
        <li>Slower process</li>
      </ul>

      <h2 className="mt-12 text-2xl font-semibold">
        How RFID Works
      </h2>

      <ul className="mt-4 list-disc list-inside text-neutral-400 space-y-2">
        <li>Bulk scanning</li>
        <li>No line of sight needed</li>
        <li>Much faster</li>
      </ul>

      <h2 className="mt-12 text-2xl font-semibold">
        Comparison
      </h2>

      <div className="mt-6 grid md:grid-cols-2 gap-6 text-neutral-400">
        <div className="border border-white/10 p-4 rounded-lg">
          <div className="font-semibold text-white mb-2">Barcode</div>
          <ul className="space-y-1">
            <li>Manual</li>
            <li>Slower</li>
            <li>Error-prone</li>
          </ul>
        </div>

        <div className="border border-white/10 p-4 rounded-lg">
          <div className="font-semibold text-white mb-2">RFID</div>
          <ul className="space-y-1">
            <li>Automated</li>
            <li>Fast</li>
            <li>Accurate</li>
          </ul>
        </div>
      </div>

      <div className="mt-16 border border-white/10 p-6 rounded-2xl bg-white/5">
        <h3 className="text-xl font-semibold">
          Upgrade to RFID
        </h3>

        <p className="mt-3 text-neutral-400">
          Invextory enables real-time tracking and eliminates manual processes.
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