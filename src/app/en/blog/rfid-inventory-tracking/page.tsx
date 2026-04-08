import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How RFID Inventory Tracking Works | Invextory",
  description:
    "Learn how RFID inventory tracking works, how it replaces manual systems, and how real-time visibility is achieved in warehouses and enterprises.",
};

export default function Page() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-24 text-white">
        <a href="/blog/rfid-envanter-takibi" className="text-cyan-400">
        Türkçe versiyon
        </a>
      <h1 className="text-4xl font-semibold leading-tight">
        How RFID Inventory Tracking Works
      </h1>

      <p className="mt-6 text-neutral-400 text-lg">
        RFID inventory tracking is a modern method that allows assets and stock to be monitored automatically without manual input.
        It is widely used in warehouses, hospitals, manufacturing, and enterprise environments.
      </p>

      <h2 className="mt-12 text-2xl font-semibold">
        Problems with Traditional Inventory Tracking
      </h2>

      <ul className="mt-4 list-disc list-inside text-neutral-400 space-y-2">
        <li>Requires manual counting</li>
        <li>Data is outdated</li>
        <li>Time-consuming</li>
        <li>High error rates</li>
      </ul>

      <h2 className="mt-12 text-2xl font-semibold">
        How RFID Inventory Tracking Works
      </h2>

      <p className="mt-4 text-neutral-400">
        RFID systems consist of three main components:
      </p>

      <ul className="mt-4 list-disc list-inside text-neutral-400 space-y-2">
        <li>RFID tags</li>
        <li>RFID readers</li>
        <li>Software platform</li>
      </ul>

      <p className="mt-4 text-neutral-400">
        Readers send signals and collect responses from tags, allowing data to be captured automatically and processed in real time.
      </p>

      <h2 className="mt-12 text-2xl font-semibold">
        Advantages of RFID Inventory Tracking
      </h2>

      <ul className="mt-4 list-disc list-inside text-neutral-400 space-y-2">
        <li>Real-time inventory visibility</li>
        <li>Fast counting (hundreds of items in seconds)</li>
        <li>Reduced human error</li>
        <li>Improved operational efficiency</li>
      </ul>

      <h2 className="mt-12 text-2xl font-semibold">
        Where Is It Used?
      </h2>

      <ul className="mt-4 list-disc list-inside text-neutral-400 space-y-2">
        <li>Logistics and warehousing</li>
        <li>Healthcare</li>
        <li>Manufacturing</li>
        <li>Government institutions</li>
      </ul>

      <div className="mt-16 border border-white/10 p-6 rounded-2xl bg-white/5">
        <h3 className="text-xl font-semibold">
          Automate your inventory with RFID
        </h3>

        <p className="mt-3 text-neutral-400">
          Invextory enables real-time asset tracking and eliminates manual processes.
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