"use client";
import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";

export default function NewsletterPage() {
  const [form, setForm] = useState({ name: "", email: "" });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const validateEmail = (email: string) => /\S+@\S+\.\S+/.test(email);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email) {
      setError("All fields are required.");
      return;
    }
    if (!validateEmail(form.email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setSubmitted(true);
    setForm({ name: "", email: "" });
  };

  return (
    <main className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen font-sans">
      <Navbar />
      <div className="pt-24 md:pt-32 max-w-xl mx-auto px-6">
        <section className="text-center mb-12">
          <motion.h1 initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-4xl md:text-5xl font-extrabold text-blue-700 dark:text-blue-400 mb-4">Stay Updated with Xhenvolt</motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-lg md:text-xl text-gray-700 dark:text-gray-200">Subscribe to our newsletter for the latest technology insights, case studies, and exclusive updates.</motion.p>
        </section>
        <section className="mb-16">
          <motion.form onSubmit={handleSubmit} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="flex flex-col gap-4 bg-white dark:bg-gray-800 rounded-xl shadow p-8">
            <input name="name" value={form.name} onChange={handleChange} required type="text" placeholder="Name" className="px-4 py-3 rounded border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400" />
            <input name="email" value={form.email} onChange={handleChange} required type="email" placeholder="Email" className="px-4 py-3 rounded border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400" />
            {error && <div className="text-red-600 text-sm">{error}</div>}
            {submitted && <div className="text-green-600 text-sm">Thank you for subscribing!</div>}
            <button type="submit" className="mt-2 px-6 py-3 bg-blue-700 text-white rounded-lg font-semibold shadow hover:bg-blue-800 transition-colors">Subscribe Now</button>
          </motion.form>
        </section>
      </div>
      <Footer />
    </main>
  );
}
