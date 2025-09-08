"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur border-b border-gray-200 dark:border-gray-800 transition-colors">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        <Link
          href="/"
          className="flex items-center gap-2 font-bold text-2xl text-blue-700 dark:text-blue-400 tracking-tight hover:opacity-80 transition-opacity"
        >
          <Image
            src="/logo.png"
            alt="Xhenvolt Logo"
            width={100}
            height={100}
            className="object-contain"
          />
          Xhenvolt
        </Link>
        <div className="hidden md:flex gap-8">
          <Link href="/about" className="hover:text-blue-600 transition-colors">
            About
          </Link>
          <Link href="/services" className="hover:text-blue-600 transition-colors">
            Services
          </Link>
          <Link href="/case-studies" className="hover:text-blue-600 transition-colors">
            Case Studies
          </Link>
          <Link href="/testimonials" className="hover:text-blue-600 transition-colors">
            Testimonials
          </Link>
          <Link href="/contact" className="hover:text-blue-600 transition-colors">
            Contact
          </Link>
        </div>
        {/* Light/Dark Mode Toggle */}
        <button
          aria-label="Toggle theme"
          className="ml-4 p-2 rounded hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M12 3v1m0 16v1m8.66-13.66l-.71.71M4.05 19.95l-.71.71M21 12h-1M4 12H3m16.66 5.66l-.71-.71M4.05 4.05l-.71-.71" />
          </svg>
        </button>
      </div>
    </nav>
  );
}
