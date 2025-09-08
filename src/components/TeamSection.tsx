"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const team = [
  {
    name: "Hamuza Ibrahim",
    role: "Founder & Chief Visionary",
    img: "/team/hamuza.jpg",
    bio: "Visionary leader driving digital transformation in Uganda.",
  },
  {
    name: "Mubeezi Calebu Ashiraf",
    role: "Lead Designer",
    img: "/team/mubeezi.jpg",
    bio: "Expert in UI/UX and brand design for digital products.",
  },
  {
    name: "Nasa Matovu",
    role: "Lead Developer",
    img: "/team/nasa.jpg",
    bio: "Full-stack developer specializing in scalable systems.",
  },
  {
    name: "Ganiyu Kule Hussein",
    role: "Marketing Lead",
    img: "/team/ganiyu.jpg",
    bio: "Marketing strategist with a passion for tech growth.",
  },
];

export default function TeamSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <motion.h2
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold mb-8 text-blue-700 dark:text-blue-400"
      >
        Meet the Team
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {team.map((member, i) => (
          <motion.div
            key={member.name}
            whileHover={{ scale: 1.04 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 flex flex-col items-center text-center"
          >
            <div className="w-24 h-24 rounded-full overflow-hidden mb-4 bg-gray-200 dark:bg-gray-700">
              <Image
                src={member.img}
                alt={member.name}
                width={96}
                height={96}
                className="object-cover w-full h-full"
              />
            </div>
            <h3 className="text-lg font-semibold text-blue-700 dark:text-blue-400">
              {member.name}
            </h3>
            <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">
              {member.role}
            </div>
            <p className="text-gray-700 dark:text-gray-200">
              {member.bio}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
