"use client";
import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";

const faqs = [
  {
    q: "What services does Xhenvolt offer?",
    a: "We provide web and mobile development, UI/UX design, cloud solutions, POS systems, and enterprise software solutions.",
  },
  {
    q: "How do I request a demo or consultation?",
    a: "You can submit your inquiry via the Contact page or email us directly at contact@xhenvolt.com.",
  },
  {
    q: "Do you provide support after implementation?",
    a: "Yes. All our solutions come with technical support and maintenance packages.",
  },
  {
    q: "Can Xhenvolt customize solutions for my business?",
    a: "Absolutely. We specialize in tailor-made solutions that meet your unique requirements.",
  },
  {
    q: "How secure are your systems?",
    a: "Security is a top priority. We use encryption, secure servers, and follow best practices to protect your data.",
  },
];

export default function FAQPage() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <main className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen font-sans">
      <Navbar />
      <div className="pt-24 md:pt-32 max-w-3xl mx-auto px-6">
        <section className="text-center mb-12">
          <motion.h1 initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-4xl md:text-5xl font-extrabold text-blue-700 dark:text-blue-400 mb-4">Frequently Asked Questions</motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-lg md:text-xl text-gray-700 dark:text-gray-200">We’ve answered the most common queries about our services, systems, and support.</motion.p>
        </section>
        <section className="mb-16">
          {faqs.map((faq, i) => (
            <div key={i} className="mb-4 border-b border-gray-200 dark:border-gray-700">
              <button onClick={() => setOpen(open === i ? null : i)} className="w-full text-left py-4 flex justify-between items-center focus:outline-none">
                <span className="font-semibold text-blue-700 dark:text-blue-400">{faq.q}</span>
                <span className="text-xl">{open === i ? "-" : "+"}</span>
              </button>
              {open === i && (
                <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="pb-4 text-gray-700 dark:text-gray-200">
                  {faq.a}
                </motion.div>
              )}
            </div>
          ))}
        </section>
      </div>
      <Footer />
    </main>
  );
}
