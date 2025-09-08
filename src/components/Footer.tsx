"use client";
import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="max-w-7xl mx-auto px-6 py-8 text-center text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-800 mt-12">
      <div className="flex flex-wrap justify-center gap-6 mb-4">
        <Link href="/about" className="hover:text-blue-600">About</Link>
        <Link href="/services" className="hover:text-blue-600">Services</Link>
        <Link href="/case-studies" className="hover:text-blue-600">Case Studies</Link>
        <Link href="/testimonials" className="hover:text-blue-600">Testimonials</Link>
        <Link href="/blog" className="hover:text-blue-600">Blog</Link>
        <Link href="/faq" className="hover:text-blue-600">FAQ</Link>
        <Link href="/newsletter" className="hover:text-blue-600">Newsletter</Link>
        <Link href="/contact" className="hover:text-blue-600">Contact</Link>
        <Link href="/privacy-policy" className="hover:text-blue-600">Privacy Policy</Link>
        <Link href="/terms-of-service" className="hover:text-blue-600">Terms of Service</Link>
      </div>
      <div className="text-sm">&copy; {new Date().getFullYear()} Xhenvolt Uganda. All rights reserved.</div>
    </footer>
  );
}
