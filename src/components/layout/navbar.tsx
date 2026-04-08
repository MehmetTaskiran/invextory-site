"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    console.log("Navbar mounted");
  }, []);

  return (
    <>
      <nav className="flex justify-between items-center px-8 py-6">
        <Link href="/" className="text-xl font-bold">
          Invextori
        </Link>

        <div className="hidden md:flex gap-6 text-gray-300">
          <span className="cursor-pointer">Products</span>
          <Link href="/solutions">Solutions</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/contact">Contact</Link>
        </div>

        <div className="flex gap-4">
          <Link href="/login" className="text-gray-300">
            Login
          </Link>

          <button
            onClick={() => {
              console.log("CLICKED");
              setOpen(true);
            }}
            className="bg-indigo-500 px-4 py-2 rounded-lg"
          >
            Get Demo
          </button>
        </div>
      </nav>

      {open && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-[9999]">
          <div className="bg-[#0B1220] p-6 rounded-2xl w-full max-w-md relative">

            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 text-white/60"
            >
              ✕
            </button>

            <LeadForm />
          </div>
        </div>
      )}
    </>
  );
}