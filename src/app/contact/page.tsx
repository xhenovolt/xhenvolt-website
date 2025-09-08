"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const validateEmail = (email: string) => /\S+@\S+\.\S+/.test(email);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.subject || !form.message) {
      setError("All fields are required.");
      return;
    }
    if (!validateEmail(form.email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setSubmitted(true);
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <main className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen font-sans">
      <Navbar />
      <div className="pt-24 md:pt-32 max-w-3xl mx-auto px-6">
        {/* Headline */}
        <section className="text-center mb-10">
          <motion.h1 initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-4xl md:text-5xl font-extrabold text-blue-700 dark:text-blue-400 mb-4">Get in Touch</motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-lg md:text-xl text-gray-700 dark:text-gray-200">We’re Ready to Help You Build the Future</motion.p>
        </section>
        {/* Introduction */}
        <section className="mb-8 text-center">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="text-lg text-gray-700 dark:text-gray-200 max-w-2xl mx-auto">Have a question, project idea, or need support? Xhenvolt Uganda is here to assist. Connect with us through the form below or via our direct contact channels. We respond promptly and professionally.</motion.p>
        </section>
        {/* Contact Details & Map */}
        <section className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className="space-y-4">
            <div><b>Address:</b> Bulubandi, Iganga, Uganda</div>
            <div><b>Email:</b> <a href="mailto:info@xhenvolt.com" className="hover:text-blue-600">info@xhenvolt.com</a></div>
            <div><b>Phone:</b> <a href="tel:+256741341483" className="hover:text-blue-600">+256 741 341 483</a> / <a href="tel:+256745726350" className="hover:text-blue-600">+256 745 726 350</a></div>
            <div><b>Working Hours:</b> Mon – Fri: 8:00 AM – 6:00 PM</div>
            <div className="flex gap-4 mt-2">
              <a href="#" aria-label="Twitter" className="hover:text-blue-600"><svg width="24" height="24" fill="currentColor"><circle cx="12" cy="12" r="10" /></svg></a>
              <a href="#" aria-label="LinkedIn" className="hover:text-blue-600"><svg width="24" height="24" fill="currentColor"><rect x="4" y="4" width="16" height="16" rx="2" /></svg></a>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg min-h-[250px]">
            <iframe
              title="Xhenvolt Location"
              src="https://www.google.com/maps?q=Bulubandi,+Iganga,+Uganda&output=embed"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>
        {/* Contact Form */}
        <section className="mb-16">
          <motion.form onSubmit={handleSubmit} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="flex flex-col gap-4 bg-white dark:bg-gray-800 rounded-xl shadow p-8">
            <input name="name" value={form.name} onChange={handleChange} required type="text" placeholder="Name" className="px-4 py-3 rounded border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400" />
            <input name="email" value={form.email} onChange={handleChange} required type="email" placeholder="Email" className="px-4 py-3 rounded border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400" />
            <input name="subject" value={form.subject} onChange={handleChange} required type="text" placeholder="Subject" className="px-4 py-3 rounded border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400" />
            <textarea name="message" value={form.message} onChange={handleChange} required placeholder="Message" rows={4} className="px-4 py-3 rounded border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400" />
            {error && <div className="text-red-600 text-sm">{error}</div>}
            {submitted && <div className="text-green-600 text-sm">Thank you! Your message has been sent.</div>}
            <button type="submit" className="mt-2 px-6 py-3 bg-blue-700 text-white rounded-lg font-semibold shadow hover:bg-blue-800 transition-colors">Send Message</button>
          </motion.form>
        </section>
        {/* Call-to-Action Banner */}
        <section className="mb-16">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="bg-blue-700 dark:bg-blue-800 rounded-xl shadow p-12 flex flex-col items-center text-center text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
            <p className="mb-8">Let’s discuss your project, and see how Xhenvolt Uganda can bring your ideas to life.</p>
            <div className="flex gap-4">
              <button className="px-6 py-3 bg-yellow-400 text-blue-900 rounded-lg font-semibold shadow hover:bg-yellow-300 transition-colors">Submit Inquiry</button>
              <button className="px-6 py-3 bg-white text-blue-700 rounded-lg font-semibold shadow hover:bg-blue-100 transition-colors">Request a Demo</button>
            </div>
          </motion.div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
