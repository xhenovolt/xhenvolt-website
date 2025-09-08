"use client";
import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";

export default function TermsOfServicePage() {
  return (
    <main className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen font-sans">
      <Navbar />
      <div className="pt-24 md:pt-32 max-w-3xl mx-auto px-6">
        <section className="mb-12">
          <motion.h1 initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-3xl md:text-4xl font-extrabold text-blue-700 dark:text-blue-400 mb-6">Terms of Service</motion.h1>
          <h2 className="font-bold text-blue-700 dark:text-blue-400 mt-6 mb-2">Acceptance of Terms</h2>
          <p className="mb-4">By accessing or using the Xhenvolt Uganda website or services, you agree to comply with these terms. If you do not agree, please do not use our services.</p>
          <h2 className="font-bold text-blue-700 dark:text-blue-400 mt-6 mb-2">Services Provided</h2>
          <p className="mb-4">Xhenvolt Uganda offers technology solutions, including web and mobile applications, software development, and digital consultancy.</p>
          <h2 className="font-bold text-blue-700 dark:text-blue-400 mt-6 mb-2">User Responsibilities</h2>
          <ul className="list-disc list-inside mb-4">
            <li>Provide accurate information when submitting forms or inquiries.</li>
            <li>Use our services lawfully and ethically.</li>
            <li>Respect intellectual property and copyright of Xhenvolt Uganda content.</li>
          </ul>
          <h2 className="font-bold text-blue-700 dark:text-blue-400 mt-6 mb-2">Limitation of Liability</h2>
          <p className="mb-4">Xhenvolt Uganda is not liable for any indirect, incidental, or consequential damages arising from the use of our website or services.</p>
          <h2 className="font-bold text-blue-700 dark:text-blue-400 mt-6 mb-2">Intellectual Property</h2>
          <p className="mb-4">All content, designs, software, and branding on this website are owned by Xhenvolt Uganda and protected by intellectual property laws.</p>
          <h2 className="font-bold text-blue-700 dark:text-blue-400 mt-6 mb-2">Termination</h2>
          <p className="mb-4">We reserve the right to suspend or terminate access to our services if terms are violated.</p>
          <h2 className="font-bold text-blue-700 dark:text-blue-400 mt-6 mb-2">Governing Law</h2>
          <p className="mb-4">These terms are governed by the laws of Uganda.</p>
          <h2 className="font-bold text-blue-700 dark:text-blue-400 mt-6 mb-2">Changes to Terms</h2>
          <p className="mb-4">Xhenvolt Uganda may update these terms periodically. Continued use of our services constitutes acceptance of the updated terms.</p>
          <h2 className="font-bold text-blue-700 dark:text-blue-400 mt-6 mb-2">Contact</h2>
          <p>For questions regarding these terms, contact us at <a href="mailto:contact@xhenvolt.com" className="text-blue-600 hover:underline">contact@xhenvolt.com</a>.</p>
        </section>
      </div>
      <Footer />
    </main>
  );
}
