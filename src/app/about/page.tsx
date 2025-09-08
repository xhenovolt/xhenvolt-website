"use client"
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Star, BookOpen, ShoppingCart, Users } from "lucide-react";
import TeamSection from "../../components/TeamSection";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const clientLogos = [
  "/clients/client1.svg",
  "/clients/client2.svg",
  "/clients/client3.svg",
  "/clients/client4.svg",
];

const achievements = [
  { label: "Projects", value: 120, icon: <Star size={28} /> },
  { label: "Clients", value: 40, icon: <Users size={28} /> },
  { label: "Lypha POS System", value: 1, icon: <ShoppingCart size={28} /> },
  { label: "EduConnect", value: 1, icon: <BookOpen size={28} /> },
];

export default function AboutPage() {
  return (
    <main className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen font-sans">
      <Navbar />
      <div className="pt-24 md:pt-32 max-w-5xl mx-auto px-6">
        {/* Headline */}
        <section className="text-center mb-12">
          <motion.h1 initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-4xl md:text-5xl font-extrabold text-blue-700 dark:text-blue-400 mb-4">About Xhenvolt Uganda</motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-lg md:text-xl text-gray-700 dark:text-gray-200">Innovating Digital Solutions for Uganda’s Businesses and Beyond</motion.p>
        </section>
        {/* Our Story / Company Overview */}
        <section className="mb-12">
          <motion.h2 initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-2xl font-bold mb-4 text-blue-700 dark:text-blue-400">Our Story</motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="text-lg text-gray-700 dark:text-gray-200">Xhenvolt Uganda is a technology company dedicated to delivering <b>innovative software solutions, automated systems, and digital transformation services</b> to businesses across Uganda. Founded with a vision to empower companies through technology, we specialize in building scalable, efficient, and user-friendly platforms that solve real-world business challenges.<br /><br />Since our inception, we have been committed to <b>excellence, innovation, and client satisfaction</b>, providing services that help organizations grow, streamline operations, and adapt to a rapidly changing digital landscape.</motion.p>
        </section>
        {/* Mission, Vision & Values */}
        <section className="mb-12">
          <motion.h2 initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-2xl font-bold mb-4 text-blue-700 dark:text-blue-400">Mission, Vision & Values</motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold text-blue-700 dark:text-blue-400 mb-2">Mission</h3>
              <p className="text-gray-700 dark:text-gray-200">To empower businesses with <b>cutting-edge digital solutions</b> that enhance efficiency, productivity, and growth.</p>
            </div>
            <div>
              <h3 className="font-semibold text-blue-700 dark:text-blue-400 mb-2">Vision</h3>
              <p className="text-gray-700 dark:text-gray-200">To become <b>Uganda’s leading technology partner</b>, driving innovation and transformation across industries.</p>
            </div>
            <div>
              <h3 className="font-semibold text-blue-700 dark:text-blue-400 mb-2">Core Values</h3>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-200">
                <li><b>Innovation:</b> We constantly explore new ideas and technologies.</li>
                <li><b>Integrity:</b> Transparent and honest interactions with our clients and partners.</li>
                <li><b>Excellence:</b> Commitment to high-quality, reliable solutions.</li>
                <li><b>Client-Centric:</b> We prioritize the success and satisfaction of our clients.</li>
                <li><b>Collaboration:</b> Working together as a team and with our clients to achieve exceptional results.</li>
              </ul>
            </div>
          </div>
        </section>
        {/* Why Choose Us */}
        <section className="mb-12">
          <motion.h2 initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-2xl font-bold mb-4 text-blue-700 dark:text-blue-400">Why Choose Us</motion.h2>
          <ul className="list-disc list-inside text-lg text-gray-700 dark:text-gray-200 space-y-2">
            <li><b>Local Expertise:</b> Deep understanding of Uganda’s market needs and challenges.</li>
            <li><b>Customized Solutions:</b> Tailored software and systems that fit your unique business requirements.</li>
            <li><b>Reliable Support:</b> End-to-end assistance from consultation, development, deployment, to maintenance.</li>
            <li><b>Proven Track Record:</b> Successfully completed multiple projects for businesses, schools, and retail operations.</li>
          </ul>
        </section>
        {/* Team Section */}
        <TeamSection />
        {/* Achievements / Milestones */}
        <section className="mb-12">
          <motion.h2 initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-2xl font-bold mb-8 text-blue-700 dark:text-blue-400">Achievements & Milestones</motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((ach, i) => (
              <motion.div key={ach.label} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 flex flex-col items-center text-center">
                <div className="mb-2">{ach.icon}</div>
                <div className="text-3xl font-bold text-blue-700 dark:text-blue-400">{ach.value}+</div>
                <div className="mt-2 text-gray-600 dark:text-gray-300">{ach.label}</div>
              </motion.div>
            ))}
          </div>
          <ul className="mt-8 list-disc list-inside text-gray-700 dark:text-gray-200 space-y-2">
            <li>Successfully implemented <b>Lypha POS System</b> for multiple pharmacies and retail businesses.</li>
            <li>Developed <b>EduConnect</b>, a digital learning platform for schools.</li>
            <li>Completed over <b>120 projects</b> serving more than <b>40 clients</b>.</li>
            <li>Received recognition for <b>innovation and excellence</b> in digital solutions.</li>
          </ul>
        </section>
        {/* Client Logos Carousel */}
        <section className="mb-12">
          <div className="flex items-center justify-center gap-8 overflow-x-auto py-4">
            {clientLogos.map((logo, i) => (
              <div key={i} className="w-32 h-16 flex items-center justify-center bg-white dark:bg-gray-800 rounded shadow">
                <Image src={logo} alt={`Client ${i + 1}`} width={120} height={48} className="object-contain" />
              </div>
            ))}
          </div>
        </section>
        {/* Call-to-Action Banner */}
        <section className="mb-16">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="bg-blue-700 dark:bg-blue-800 rounded-xl shadow p-12 flex flex-col items-center text-center text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
            <p className="mb-8">Partner with Xhenvolt Uganda to implement systems and software that streamline operations, enhance productivity, and grow your business.</p>
            <div className="flex gap-4">
              <a href="/contact" className="px-6 py-3 bg-yellow-400 text-blue-900 rounded-lg font-semibold shadow hover:bg-yellow-300 transition-colors">Contact Us</a>
              <a href="/contact" className="px-6 py-3 bg-white text-blue-700 rounded-lg font-semibold shadow hover:bg-blue-100 transition-colors">Schedule a Demo</a>
            </div>
          </motion.div>
        </section>
        {/* Footer */}
        <Footer />
      </div>
    </main>
  );
}
