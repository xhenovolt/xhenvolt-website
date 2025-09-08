"use client";
import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen font-sans">
      <Navbar />
      <div className="pt-24 md:pt-32 max-w-3xl mx-auto px-6">
        <section className="mb-12">
          <motion.h1 initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-3xl md:text-4xl font-extrabold text-blue-700 dark:text-blue-400 mb-6">Privacy Policy</motion.h1>
          <p className="mb-4">Xhenvolt Uganda values your privacy. This policy explains how we collect, use, and protect your personal information when you use our website or services.</p>
          <h2 className="font-bold text-blue-700 dark:text-blue-400 mt-6 mb-2">Information We Collect</h2>
          <ul className="list-disc list-inside mb-4">
            <li><b>Personal Information:</b> Name, email address, phone number, and messages submitted through our contact forms.</li>
            <li><b>Non-Personal Information:</b> Browser type, device information, IP address, and website usage data.</li>
          </ul>
          <h2 className="font-bold text-blue-700 dark:text-blue-400 mt-6 mb-2">How We Use Information</h2>
          <ul className="list-disc list-inside mb-4">
            <li>Respond to inquiries and provide support.</li>
            <li>Improve our services, website, and user experience.</li>
            <li>Send promotional information only if you opt-in.</li>
          </ul>
          <h2 className="font-bold text-blue-700 dark:text-blue-400 mt-6 mb-2">Data Protection</h2>
          <p className="mb-4">We implement strict security measures to protect your information from unauthorized access, alteration, or disclosure.</p>
          <h2 className="font-bold text-blue-700 dark:text-blue-400 mt-6 mb-2">Third-Party Services</h2>
          <p className="mb-4">We may use trusted third-party services (like email providers or analytics tools) to help operate the website. These services adhere to strict privacy standards.</p>
          <h2 className="font-bold text-blue-700 dark:text-blue-400 mt-6 mb-2">Cookies</h2>
          <p className="mb-4">Our website may use cookies to enhance user experience. You can manage cookie preferences via your browser settings.</p>
          <h2 className="font-bold text-blue-700 dark:text-blue-400 mt-6 mb-2">Your Rights</h2>
          <p className="mb-4">You have the right to access, update, or request deletion of your personal information. Contact us at <a href="mailto:contact@xhenvolt.com" className="text-blue-600 hover:underline">contact@xhenvolt.com</a> to exercise these rights.</p>
          <h2 className="font-bold text-blue-700 dark:text-blue-400 mt-6 mb-2">Changes to Policy</h2>
          <p className="mb-4">Xhenvolt Uganda may update this privacy policy from time to time. Changes will be posted on this page with an updated effective date.</p>
          <h2 className="font-bold text-blue-700 dark:text-blue-400 mt-6 mb-2">Contact</h2>
          <p>If you have any questions about this policy, please contact us at <a href="mailto:contact@xhenvolt.com" className="text-blue-600 hover:underline">contact@xhenvolt.com</a>.</p>
        </section>
      </div>
      <Footer />
    </main>
  );
}
