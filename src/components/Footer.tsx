"use client";
import React from "react";

export default function Footer() {
  return (
    <footer className="max-w-7xl mx-auto px-6 py-8 text-center text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-800 mt-12">
      <div className="flex flex-wrap justify-center gap-6 mb-4">
        <a href="/about" className="hover:text-blue-600">About</a>
        <a href="/services" className="hover:text-blue-600">Services</a>
        <a href="/case-studies" className="hover:text-blue-600">Case Studies</a>
        <a href="/testimonials" className="hover:text-blue-600">Testimonials</a>
        <a href="/blog" className="hover:text-blue-600">Blog</a>
        <a href="/faq" className="hover:text-blue-600">FAQ</a>
        <a href="/newsletter" className="hover:text-blue-600">Newsletter</a>
        <a href="/contact" className="hover:text-blue-600">Contact</a>
        <a href="/privacy-policy" className="hover:text-blue-600">Privacy Policy</a>
        <a href="/terms-of-service" className="hover:text-blue-600">Terms of Service</a>
      </div>
      <div className="text-sm">&copy; {new Date().getFullYear()} Xhenvolt Uganda. All rights reserved.</div>
    </footer>
  );
}
