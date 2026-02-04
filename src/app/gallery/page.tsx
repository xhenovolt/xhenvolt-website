"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const galleryImages = [
  {
    src: "/Alhanan/Alhanan compound.jpeg",
    alt: "Al Hanan Education Centre compound with school buildings and mosque dome",
    title: "School Compound",
    category: "Facilities"
  },
  {
    src: "/Alhanan/Alhanan Admin block.jpeg",
    alt: "Al Hanan Education Centre Admin block building showcasing school infrastructure",
    title: "Admin Block",
    category: "Infrastructure"
  },
  {
    src: "/Alhanan/Alhanan class bloack Ultra wide.jpeg",
    alt: "Al Hanan Education Centre Ultra wide classroom block with modern facilities",
    title: "Classroom Block",
    category: "Academic Facilities"
  },
  {
    src: "/Alhanan/Alhanan Nursary classes.jpeg",
    alt: "Al Hanan Education Centre Nursery classroom facilities for early childhood education",
    title: "Nursery Classes",
    category: "Early Education"
  }
];

export default function GalleryPage() {
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
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-emerald-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent mb-6">
              Al Hanan Gallery
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Explore our world-class facilities and vibrant school life
            </p>
          </motion.div>

          {/* Gallery Grid with Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {galleryImages.map((image, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.02 }}
                className="relative group rounded-2xl overflow-hidden shadow-lg cursor-pointer aspect-[4/3]"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={85}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-bold text-white mb-1">{image.title}</h3>
                  <p className="text-emerald-200 text-sm">{image.category}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/80 dark:bg-gray-800/80 rounded-3xl p-8 md:p-12 border border-emerald-200 dark:border-emerald-700/50 text-center"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              More Photos Coming Soon
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              We're continuously capturing and sharing moments from our vibrant school community. Check back regularly for updates!
            </p>
            <a href="/location" className="inline-block px-6 py-3 bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-700 transition">
              Schedule a Visit
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
