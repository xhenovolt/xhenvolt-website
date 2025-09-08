"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
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
        {/* Desktop Nav */}
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
        {/* Mobile Hamburger */}
        <button
          aria-label="Open menu"
          className="md:hidden ml-4 p-2 rounded hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors"
          onClick={() => setMobileOpen((v) => !v)}
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
            )}
          </svg>
        </button>
      </div>
      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 shadow-lg px-6 py-4 flex flex-col gap-4 animate-fade-in-down">
          <Link
            href="/about"
            className="hover:text-blue-600 transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            About
          </Link>
          <Link
            href="/services"
            className="hover:text-blue-600 transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            Services
          </Link>
          <Link
            href="/case-studies"
            className="hover:text-blue-600 transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            Case Studies
          </Link>
          <Link
            href="/testimonials"
            className="hover:text-blue-600 transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            Testimonials
          </Link>
          <Link
            href="/contact"
            className="hover:text-blue-600 transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
