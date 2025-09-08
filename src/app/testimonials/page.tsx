"use client";
import React from "react";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const testimonials = [
  {
    name: "Jane Doe",
    role: "CEO, TechCorp",
    text: "Xhenvolt Uganda delivered beyond expectations. Their professionalism, creativity, and technical expertise helped us streamline operations and improve efficiency.",
  },
  {
    name: "John Smith",
    role: "CTO, InnovateX",
    text: "Professional, reliable, and innovative. Xhenvolt’s solutions transformed how we manage our workflows and engage with clients.",
  },
  {
    name: "Emily K.",
    role: "Head of Administration, BrightSchool",
    text: "EduConnect made school management effortless. The team at Xhenvolt understood our needs and delivered a system that works perfectly for our staff and parents.",
  },
  {
    name: "David M.",
    role: "Operations Manager, AgroHub",
    text: "Lypha POS revolutionized our sales and inventory management. Accurate, fast, and easy to use. Xhenvolt’s support has been outstanding.",
  },
];

export default function TestimonialsPage() {
  return (
    <main className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen font-sans">
      <Navbar />
      <div className="pt-24 md:pt-32 max-w-5xl mx-auto px-6">
        {/* Headline */}
        <section className="text-center mb-12">
          <motion.h1 initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-4xl md:text-5xl font-extrabold text-blue-700 dark:text-blue-400 mb-4">What Our Clients Say</motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-lg md:text-xl text-gray-700 dark:text-gray-200">Trusted by Businesses Across Uganda</motion.p>
        </section>
        {/* Introduction */}
        <section className="mb-12 text-center">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="text-lg text-gray-700 dark:text-gray-200 max-w-2xl mx-auto">At Xhenvolt Uganda, we believe our clients’ success speaks for itself. Here’s what our partners and customers have to say about working with us. From seamless system implementation to innovative solutions, we deliver value every step of the way.</motion.p>
        </section>
        {/* Testimonials */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                whileHover={{ scale: 1.03, boxShadow: "0 8px 32px rgba(59,130,246,0.10)" }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow p-8 flex flex-col gap-3 group cursor-pointer border border-transparent hover:border-blue-400"
              >
                <div className="text-lg font-semibold text-blue-700 dark:text-blue-400 mb-1">{t.name}</div>
                <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">{t.role}</div>
                <div className="text-gray-700 dark:text-gray-200 italic">“{t.text}”</div>
              </motion.div>
            ))}
          </div>
        </section>
        {/* Call-to-Action Banner */}
        <section className="mb-16">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="bg-blue-700 dark:bg-blue-800 rounded-xl shadow p-12 flex flex-col items-center text-center text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Want to Join Our Satisfied Clients?</h2>
            <p className="mb-8">Work with Xhenvolt Uganda to experience seamless, innovative solutions that elevate your business.</p>
            <div className="flex gap-4">
              <a href="/contact" className="px-6 py-3 bg-yellow-400 text-blue-900 rounded-lg font-semibold shadow hover:bg-yellow-300 transition-colors">Contact Us</a>
              <a href="/contact" className="px-6 py-3 bg-white text-blue-700 rounded-lg font-semibold shadow hover:bg-blue-100 transition-colors">Request a Demo</a>
            </div>
          </motion.div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
