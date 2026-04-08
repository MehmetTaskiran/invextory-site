"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-6">
      {/* Logo */}
      <Link href="/" className="text-xl font-bold">
        Invextori
      </Link>

      {/* Menü */}
      <div className="hidden md:flex gap-6 text-gray-300">
        <span className="cursor-pointer">Products</span>
        <Link href="/solutions">Solutions</Link>
        <Link href="/pricing">Pricing</Link>
        <Link href="/contact">Contact</Link>
      </div>

      {/* CTA */}
      <div className="flex gap-4">
        <Link href="/login" className="text-gray-300">
          Login
        </Link>

        <button className="bg-indigo-500 px-4 py-2 rounded-lg">
          Get Demo
        </button>
      </div>
    </nav>
  );
}