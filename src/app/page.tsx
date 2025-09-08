"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaPalette, FaStar, FaLightbulb, FaLayerGroup, FaMobileAlt, FaBookOpen, FaShoppingCart, FaProjectDiagram } from "react-icons/fa";
import TeamSection from "../components/TeamSection";
import Footer from "../components/Footer";
import SeoHead from "../components/SeoHead";
import Navbar from "../components/Navbar";

const Icon = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300">
    {children}
  </span>
);

const stats = [
  { label: "Projects", value: 120 },
  { label: "Clients", value: 40 },
  { label: "Awards", value: 8 },
];

const services = [
  {
    title: "Custom Software Development",
    desc: "Tailored systems for schools, businesses, and retail management.",
    icon: <FaLayerGroup size={32} />,
  },
  {
    title: "POS & Inventory Systems",
    desc: "Streamlined solutions for efficient business operations.",
    icon: <FaShoppingCart size={32} />,
  },
  {
    title: "School Management Systems",
    desc: "Modern platforms for academic administration and reporting.",
    icon: <FaBookOpen size={32} />,
  },
  {
    title: "Web & Mobile Development",
    desc: "Responsive web apps and mobile applications.",
    icon: <FaMobileAlt size={32} />,
  },
  {
    title: "Automation & Integration",
    desc: "Workflow automation and system integrations for improved efficiency.",
    icon: <FaProjectDiagram size={32} />,
  },
  {
    title: "UI/UX Design",
    desc: "Intuitive interfaces for seamless user experiences.",
    icon: <FaPalette size={32} />,
  },
];

const caseStudies = [
  {
    title: "AgroTech Platform",
    desc: "Connecting farmers with buyers, featuring real-time analytics and efficient workflow.",
    icon: <FaStar size={32} />,
  },
  {
    title: "EduConnect",
    desc: "Digital learning portal for schools with interactive content, progress tracking, and cloud hosting.",
    icon: <FaLightbulb size={32} />,
  },
  {
    title: "Lypha POS System",
    desc: "Complete pharmacy and retail management solution with reporting and stock tracking.",
    icon: <FaShoppingCart size={32} />,
  },
];

const testimonials = [
  {
    name: "Jane Doe",
    role: "CEO, TechCorp",
    text: "Xhenvolt delivered beyond expectations. Highly recommended!",
  },
  {
    name: "John Smith",
    role: "CTO, InnovateX",
    text: "Professional, creative, and reliable team.",
  },
];

const blogPosts = [
  {
    title: "The Future of System Automation in Uganda",
    img: "/blog/automation.jpg",
    link: "#",
  },
  {
    title: "How Custom Software Transforms Businesses",
    img: "/blog/software.jpg",
    link: "#",
  },
  {
    title: "Case Study: Lypha POS for Pharmacies",
    img: "/blog/lypha.jpg",
    link: "#",
  },
];

const clientLogos = [
  "/clients_logos/northgateschool.png",
  "/clients_logos/albayan.png",
  "/clients_logos/bumwenascrap.jpeg",
  "/clients_logos/Bugembe.jpeg",
];

export default function Home() {
  return (
    <main className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen font-sans">
      <Navbar />
      <SeoHead
        title="Xhenvolt Uganda | Web, Mobile, POS & Cloud Solutions"
        description="Leading Uganda tech company for web development, mobile apps, POS, UI/UX, and cloud solutions. Empowering African businesses with digital innovation."
        url="https://xhenvolt.com/"
        ogImage="https://xhenvolt.com/og-image.png"
        ogTitle="Xhenvolt Uganda | Digital Solutions for Africa"
        ogDescription="Web, mobile, POS, and cloud solutions for Uganda. Transform your business with Xhenvolt&apos;s expert tech team."
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Xhenvolt Uganda",
          "url": "https://xhenvolt.com/",
          "logo": "https://xhenvolt.com/logo.png",
          "contactPoint": [
            {
              "@type": "ContactPoint",
              "telephone": "+256 741 341 483",
              "contactType": "customer support",
              "email": "info@xhenvolt.com"
            }
          ],
          "sameAs": [
            "https://twitter.com/xhenvolt",
            "https://linkedin.com/company/xhenvolt"
          ]
        }}
      />
      <div className="pt-24 md:pt-32">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex-1"
          >
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-blue-700 dark:text-blue-400">
              Empowering Uganda&apos;s Digital Future
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-700 dark:text-gray-200">
              Xhenvolt Uganda delivers innovative technology solutions, transforming
              businesses with modern web, software, and system automation expertise.
            </p>
            <div className="flex gap-4">
              <Link href="#contact" className="px-6 py-3 bg-blue-700 text-white rounded-lg font-semibold shadow hover:bg-blue-800 transition-colors">
                Get Started
              </Link>
              <Link href="#services" className="px-6 py-3 bg-blue-100 text-blue-700 rounded-lg font-semibold hover:bg-blue-200 transition-colors">
                Our Services
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex-1 flex justify-center"
          >
            {/* Hero Graphic */}
            <svg
              width="320"
              height="240"
              viewBox="0 0 320 240"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                width="320"
                height="240"
                rx="32"
                fill="#1D4ED8"
                fillOpacity="0.1"
              />
              <circle cx="160" cy="120" r="80" fill="#3B82F6" fillOpacity="0.2" />
              <circle cx="160" cy="120" r="48" fill="#FBBF24" fillOpacity="0.7" />
              <text
                x="50%"
                y="50%"
                textAnchor="middle"
                fill="#1D4ED8"
                fontSize="32"
                fontWeight="bold"
                dy=".3em"
              >
                Xhenvolt
              </text>
            </svg>
          </motion.div>
        </section>
        {/* Stats Counters */}
        <section className="max-w-4xl mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow p-6"
            >
              <div className="text-4xl font-bold text-blue-700 dark:text-blue-400">
                {/* Animated Counter (placeholder) */}
                {stat.value}+
              </div>
              <div className="mt-2 text-gray-600 dark:text-gray-300">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </section>
        {/* About Section */}
        <section id="about" className="max-w-4xl mx-auto px-6 py-16">
          <motion.h2
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold mb-4 text-blue-700 dark:text-blue-400"
          >
            About Us
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-700 dark:text-gray-200"
          >
            Passionate team of technologists, software developers, and strategists
            dedicated to building scalable digital solutions for businesses in Uganda and beyond.
            <br />
            Mission: Empower businesses with cutting-edge software systems and automated workflows.
          </motion.p>
        </section>
        {/* Services Section */}
        <section id="services" className="max-w-7xl mx-auto px-6 py-16">
          <motion.h2
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold mb-8 text-blue-700 dark:text-blue-400"
          >
            Our Services
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 8px 32px rgba(59,130,246,0.15)",
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow p-8 flex flex-col items-center text-center cursor-pointer group"
              >
                <Icon>{service.icon}</Icon>
                <h3 className="mt-4 text-xl font-semibold text-blue-700 dark:text-blue-400 group-hover:text-yellow-400 transition-colors">
                  {service.title}
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </section>
        {/* Case Studies Section */}
        <section id="case-studies" className="max-w-7xl mx-auto px-6 py-16">
          <motion.h2
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold mb-8 text-blue-700 dark:text-blue-400"
          >
            Case Studies
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((cs, i) => (
              <motion.div
                key={cs.title}
                whileHover={{ scale: 1.03 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.15 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow p-8 flex flex-col gap-4 cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <Icon>{cs.icon}</Icon>
                  <span className="font-semibold text-blue-700 dark:text-blue-400">
                    {cs.title}
                  </span>
                </div>
                <p className="text-gray-700 dark:text-gray-200">
                  {cs.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </section>
        {/* Why Choose Us Section */}
        <section className="max-w-5xl mx-auto px-6 py-16">
          <motion.h2
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold mb-8 text-blue-700 dark:text-blue-400"
          >
            Why Choose Us
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow p-8"
            >
              <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-400 mb-2">
                Innovative Solutions
              </h3>
              <p className="text-gray-700 dark:text-gray-200">
                Systems built to solve real business challenges.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow p-8"
            >
              <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-400 mb-2">
                End-to-End Support
              </h3>
              <p className="text-gray-700 dark:text-gray-200">
                From strategy to development and maintenance.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow p-8"
            >
              <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-400 mb-2">
                Local Expertise
              </h3>
              <p className="text-gray-700 dark:text-gray-200">
                Deep understanding of Uganda&apos;s market.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow p-8"
            >
              <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-400 mb-2">
                Client-Centric
              </h3>
              <p className="text-gray-700 dark:text-gray-200">
                Focused on long-term business growth.
              </p>
            </motion.div>
          </div>
        </section>
        {/* Team Section */}
        <TeamSection />
        {/* Client Logos Carousel */}
        <section className="max-w-5xl mx-auto px-6 py-8">
          <div className="flex items-center justify-center gap-8 overflow-x-auto py-4">
            {clientLogos.map((logo, i) => (
              <div key={i} className="w-48 h-24 flex items-center justify-center bg-white dark:bg-gray-800 rounded shadow">
                <Image src={logo} alt={`Client ${i + 1}`} width={180} height={96} className="object-contain max-h-20 max-w-full" />
              </div>
            ))}
          </div>
        </section>
        {/* Blog / Insights */}
        <section className="max-w-7xl mx-auto px-6 py-16">
          <motion.h2 initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl font-bold mb-8 text-blue-700 dark:text-blue-400">Insights &amp; Blog</motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, i) => (
              <motion.div key={post.title} whileHover={{ scale: 1.03 }} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 flex flex-col">
                <div className="w-full h-40 rounded-lg overflow-hidden mb-4 bg-gray-200 dark:bg-gray-700">
                  <Image src={post.img} alt={post.title} width={320} height={160} className="object-cover w-full h-full" />
                </div>
                <h3 className="text-lg font-semibold text-blue-700 dark:text-blue-400 mb-2">{post.title}</h3>
                <Link href={post.link} className="text-blue-600 dark:text-blue-300 hover:underline mt-auto">Read More</Link>
              </motion.div>
            ))}
          </div>
        </section>
        {/* Call-to-Action Banner */}
        <section className="max-w-5xl mx-auto px-6 py-16">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="bg-blue-700 dark:bg-blue-800 rounded-xl shadow p-12 flex flex-col items-center text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
            <p className="mb-8">Partner with Xhenvolt Uganda to automate and scale your business with innovative digital systems.</p>
            <div className="flex gap-4">
              <Link href="#contact" className="px-6 py-3 bg-yellow-400 text-blue-900 rounded-lg font-semibold shadow hover:bg-yellow-300 transition-colors">Contact Us</Link>
              <Link href="#contact" className="px-6 py-3 bg-white text-blue-700 rounded-lg font-semibold shadow hover:bg-blue-100 transition-colors">Schedule a Demo</Link>
            </div>
          </motion.div>
        </section>
        {/* Newsletter Signup */}
        <section className="max-w-2xl mx-auto px-6 py-8">
          <motion.form initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="flex flex-col md:flex-row gap-4 bg-white dark:bg-gray-800 rounded-xl shadow p-6 items-center">
            <input type="email" placeholder="Your email address" className="flex-1 px-4 py-3 rounded border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400" />
            <button type="submit" className="px-6 py-3 bg-blue-700 text-white rounded-lg font-semibold shadow hover:bg-blue-800 transition-colors">Subscribe</button>
          </motion.form>
        </section>
        {/* Testimonials Section */}
        <section id="testimonials" className="max-w-4xl mx-auto px-6 py-16">
          <motion.h2 initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl font-bold mb-8 text-blue-700 dark:text-blue-400">Testimonials</motion.h2>
          <div className="relative overflow-hidden">
            <motion.div className="flex gap-8" animate={{ x: [0, -400, 0] }} transition={{ repeat: Infinity, duration: 10, ease: 'linear' }}>
              {testimonials.map((t, i) => (
                <div key={i} className="min-w-[320px] bg-white dark:bg-gray-800 rounded-xl shadow p-8 mx-2">
                  <div className="text-lg font-semibold text-blue-700 dark:text-blue-400">{t.name}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">{t.role}</div>
                  <div className="text-gray-700 dark:text-gray-200">“{t.text}”</div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>
        {/* Contact Section */}
        <section id="contact" className="max-w-2xl mx-auto px-6 py-16">
          <motion.h2 initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl font-bold mb-4 text-blue-700 dark:text-blue-400">Contact Us</motion.h2>
          <motion.form initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="flex flex-col gap-4 bg-white dark:bg-gray-800 rounded-xl shadow p-8">
            <input type="text" placeholder="Name" className="px-4 py-3 rounded border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400" />
            <input type="email" placeholder="Email" className="px-4 py-3 rounded border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400" />
            <textarea placeholder="Message" rows={4} className="px-4 py-3 rounded border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400" />
            <button type="submit" className="mt-2 px-6 py-3 bg-blue-700 text-white rounded-lg font-semibold shadow hover:bg-blue-800 transition-colors">Send Message</button>
          </motion.form>
          <div className="mt-8 text-center text-gray-600 dark:text-gray-400">
            <div>Phone: <a href="tel:+256741341483" className="hover:text-blue-600">+256 741 341 483</a></div>
            <div>Email: <a href="mailto:info@xhenvolt.com" className="hover:text-blue-600">info@xhenvolt.com</a></div>
            <div>Address: <span>Iganga, Uganda</span></div>
            <div className="flex justify-center gap-4 mt-2">
              <a href="#" aria-label="Twitter" className="hover:text-blue-600"><svg width="24" height="24" fill="currentColor"><circle cx="12" cy="12" r="10" /></svg></a>
              <a href="#" aria-label="LinkedIn" className="hover:text-blue-600"><svg width="24" height="24" fill="currentColor"><rect x="4" y="4" width="16" height="16" rx="2" /></svg></a>
            </div>
          </div>
        </section>
        {/* Footer */}
        <Footer />
      </div>
    </main>
  );
}