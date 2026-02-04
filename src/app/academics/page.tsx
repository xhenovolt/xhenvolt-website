"use client";
import React from "react";
import { motion } from "framer-motion";
import { BookOpen, Heart, Zap } from "lucide-react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AcademicsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50 dark:from-gray-900 dark:to-emerald-900">
      <Navbar />
      
      <section className="pt-24 pb-12 md:pt-32 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Our Academic Programs
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Excellence in faith, academics, and character development
            </p>
          </motion.div>

          {/* Academic Facilities Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-full h-[300px] md:h-[400px] rounded-3xl overflow-hidden shadow-2xl mb-12"
          >
            <Image
              src="/Alhanan/Alhanan class bloack Ultra wide.jpeg"
              alt="Al Hanan Education Centre classroom block showcasing modern academic facilities"
              fill
              className="object-cover"
              sizes="100vw"
              quality={85}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/70 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">World-Class Academic Facilities</h2>
              <p className="text-white/90">Modern classrooms designed for optimal learning</p>
            </div>
          </motion.div>

          {/* Qur'an Memorization */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            id="quran"
            className="bg-white/80 dark:bg-gray-800/80 rounded-3xl p-8 md:p-12 border border-emerald-200 dark:border-emerald-700/50 mb-8"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-emerald-600 to-blue-600 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                <BookOpen className="w-7 h-7" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                  Qur'an Memorization (Hifdh)
                </h2>
                <p className="text-emerald-600 dark:text-emerald-400 font-semibold mt-1">
                  Core Program
                </p>
              </div>
            </div>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Students memorize and master the entire Holy Qur'an under expert guidance. Our structured curriculum ensures learners complete Hifdh by Primary Seven while maintaining excellent academic performance.
            </p>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              {[
                "Structured memorization curriculum aligned with national standards",
                "Daily Qur'an study and revision sessions",
                "Expert Qur'anic teachers with proven track record",
                "Individual pace while maintaining high standards",
                "Hifdh completion by Primary Seven graduation"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-emerald-600 mt-1">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Islamic Studies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            id="islamic"
            className="bg-white/80 dark:bg-gray-800/80 rounded-3xl p-8 md:p-12 border border-blue-200 dark:border-blue-700/50 mb-8"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-emerald-600 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                <Heart className="w-7 h-7" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                  Islamic Studies
                </h2>
                <p className="text-blue-600 dark:text-blue-400 font-semibold mt-1">
                  Faith & Character Formation
                </p>
              </div>
            </div>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Deep theological knowledge and Islamic principles integrated into daily learning, shaping learners into disciplined, excellent individuals grounded in Islamic values.
            </p>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              {[
                "Islamic theology and jurisprudence",
                "Qur'anic interpretation (Tafsir) basics",
                "Islamic history and civilization",
                "Character and values development through Islamic principles",
                "Integration of Islamic values in all subjects"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-blue-600 mt-1">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Primary Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            id="primary"
            className="bg-white/80 dark:bg-gray-800/80 rounded-3xl p-8 md:p-12 border border-cyan-200 dark:border-cyan-700/50"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-emerald-600 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                <Zap className="w-7 h-7" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                  Primary Education Excellence
                </h2>
                <p className="text-cyan-600 dark:text-cyan-400 font-semibold mt-1">
                  Classes 1-7 (Full National Curriculum)
                </p>
              </div>
            </div>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Rigorous academics delivered with excellence. English and Arabic proficiency, combined with Mathematics, Science, and Social Studies, prepare learners for secondary education success.
            </p>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              {[
                "English language mastery and fluency (Mother tongue of instruction)",
                "Arabic language strong proficiency",
                "Mathematics and Science excellence",
                "Social studies with Islamic perspective",
                "Physical education, arts, and digital literacy"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-cyan-600 mt-1">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
