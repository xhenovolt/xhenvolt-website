"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function SchoolLifePage() {
  const activities = [
    {
      title: "Daily Qur'an Memorization",
      description: "Structured sessions for Qur'anic memorization with revision and practice",
      color: "from-emerald-600 to-green-600"
    },
    {
      title: "Islamic Studies Classes",
      description: "Theology, jurisprudence, and Islamic history integrated into curriculum",
      color: "from-blue-600 to-cyan-600"
    },
    {
      title: "Academic Excellence",
      description: "Rigorous English, Arabic, Mathematics, and Science classes",
      color: "from-purple-600 to-pink-600"
    },
    {
      title: "Sports & Recreation",
      description: "Physical education and sporting activities for holistic development",
      color: "from-yellow-500 to-orange-600"
    },
    {
      title: "Arts & Culture",
      description: "Creative and performing arts that celebrate Islamic and African culture",
      color: "from-red-600 to-pink-600"
    },
    {
      title: "Community Service",
      description: "Projects teaching learners about serving their community and society",
      color: "from-indigo-600 to-blue-600"
    }
  ];

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
              School Life at Al Hanan
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              A faith-centered, disciplined environment designed for holistic learner development
            </p>
          </motion.div>

          {/* Nursery Facilities Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-full h-[300px] md:h-[400px] rounded-3xl overflow-hidden shadow-2xl mb-12"
          >
            <Image
              src="/Alhanan/Alhanan Nursary classes.jpeg"
              alt="Al Hanan Education Centre Nursery classroom facilities for early childhood education"
              fill
              className="object-cover"
              sizes="100vw"
              quality={85}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/70 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Nursery & Early Childhood Education</h2>
              <p className="text-white/90">Safe, nurturing environment for our youngest learners</p>
            </div>
          </motion.div>

          {/* Featured Video Section - Abdul Swabur's Friday Sermon */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12 bg-gradient-to-br from-emerald-50 to-blue-50 dark:from-gray-800 dark:to-emerald-900/30 rounded-3xl p-6 md:p-10 border border-emerald-200 dark:border-emerald-700/50"
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">
                <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                  Our Learners in Action
                </span>
              </h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Showcasing the exceptional talent and leadership of our learners
              </p>
            </div>

            <div className="relative w-full max-w-4xl mx-auto group">
              <div className="rounded-2xl overflow-hidden shadow-2xl ring-4 ring-emerald-100 dark:ring-emerald-900/50 transition-all duration-300 group-hover:shadow-emerald-500/20 group-hover:ring-emerald-200 dark:group-hover:ring-emerald-700/50">
                <iframe
                  src="https://www.youtube.com/embed/3XWboqG0E3Y"
                  title="Abdul Swabur delivering a Friday sermon at Al Hanan Education Centre"
                  className="w-full aspect-video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  aria-label="Video of Abdul Swabur delivering a Friday sermon at Al Hanan Education Centre"
                />
              </div>
            </div>

            <div className="text-center mt-6">
              <p className="text-lg text-gray-700 dark:text-gray-300 italic bg-white/60 dark:bg-gray-800/60 rounded-xl py-3 px-6 inline-block">
                "Abdul Swabur delivering a Friday sermon at Al Hanan Education Centre."
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {activities.map((activity, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className={`bg-gradient-to-br ${activity.color} rounded-2xl p-8 text-white shadow-lg`}
              >
                <h3 className="text-xl font-bold mb-3">{activity.title}</h3>
                <p className="opacity-90">{activity.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/80 dark:bg-gray-800/80 rounded-3xl p-12 border border-emerald-200 dark:border-emerald-700/50"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Our School Values
            </h2>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              {[
                "Integrity and honesty in all actions",
                "Excellence in all endeavors",
                "Respect and discipline",
                "Islamic faith and practice",
                "Community and cooperation",
                "Continuous improvement and growth"
              ].map((value, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-emerald-600 font-bold">✦</span>
                  <span>{value}</span>
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
