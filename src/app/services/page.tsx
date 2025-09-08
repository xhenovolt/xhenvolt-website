"use client";
import React from "react";
import { motion } from "framer-motion";
import { Layers, ShoppingCart, BookOpen, MonitorSmartphone, Workflow, Palette } from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const services = [
	{
		title: "Custom Software Development",
		icon: <Layers size={32} />,
		desc: "Build systems tailored to your business needs, including management platforms, workflow automation, and internal tools.",
		benefits: ["Efficiency, scalability, and seamless integration."],
		example: "Lypha POS System, School Management Systems",
	},
	{
		title: "POS & Inventory Systems",
		icon: <ShoppingCart size={32} />,
		desc: "Streamlined solutions for retail, pharmacies, and small businesses.",
		benefits: ["Stock management, sales tracking, real-time analytics."],
		example: "Lypha POS for pharmacies",
	},
	{
		title: "School Management Systems",
		icon: <BookOpen size={32} />,
		desc: "Full-featured academic administration platforms.",
		benefits: ["Attendance, grading, reporting, parent communication."],
		example: "EduConnect",
	},
	{
		title: "Web & Mobile Development",
		icon: <MonitorSmartphone size={32} />,
		desc: "Modern, responsive websites and mobile apps.",
		benefits: ["Cross-platform compatibility, scalable architecture."],
		example: "Company websites, mobile portals",
	},
	{
		title: "Automation & System Integration",
		icon: <Workflow size={32} />,
		desc: "Automate repetitive tasks and integrate existing systems.",
		benefits: ["Time-saving, reduced errors, improved efficiency."],
		example: "Automated reporting, API integrations",
	},
	{
		title: "UI/UX Design",
		icon: <Palette size={32} />,
		desc: "Intuitive, visually appealing interfaces.",
		benefits: ["Enhanced user engagement, satisfaction, and retention."],
		example: "Custom dashboards, mobile interfaces",
	},
];

export default function ServicesPage() {
	return (
		<main className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen font-sans">
			<Navbar />
			<div className="pt-24 md:pt-32 max-w-5xl mx-auto px-6">
				{/* Headline */}
				<section className="text-center mb-12">
					<motion.h1
						initial={{ opacity: 0, y: -30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.7 }}
						className="text-4xl md:text-5xl font-extrabold text-blue-700 dark:text-blue-400 mb-4"
					>
						Our Services
					</motion.h1>
					<motion.p
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.2 }}
						className="text-lg md:text-xl text-gray-700 dark:text-gray-200"
					>
						Delivering Innovative, Reliable, and Tailored Digital Solutions for
						Businesses
					</motion.p>
				</section>
				{/* Introduction */}
				<section className="mb-12 text-center">
					<motion.p
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.3 }}
						className="text-lg text-gray-700 dark:text-gray-200 max-w-2xl mx-auto"
					>
						Xhenvolt Uganda offers a comprehensive range of technology services
						designed to{" "}
						<b>empower businesses, streamline operations, and drive growth</b>. Our
						team of expert developers, designers, and strategists ensures that
						every solution is <b>tailored, scalable, and user-friendly</b>.
					</motion.p>
				</section>
				{/* Services Offered */}
				<section className="mb-16">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						{services.map((service, i) => (
							<motion.div
								key={service.title}
								whileHover={{
									scale: 1.04,
									boxShadow: "0 8px 32px rgba(59,130,246,0.10)",
								}}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: i * 0.1 }}
								className="bg-white dark:bg-gray-800 rounded-xl shadow p-8 flex flex-col gap-3 group cursor-pointer border border-transparent hover:border-blue-400"
							>
								<div className="flex items-center gap-3 mb-2">
									<span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300">
										{service.icon}
									</span>
									<h3 className="text-xl font-semibold text-blue-700 dark:text-blue-400 group-hover:text-yellow-400 transition-colors">
										{service.title}
									</h3>
								</div>
								<p className="text-gray-700 dark:text-gray-200">
									{service.desc}
								</p>
								<ul className="list-disc list-inside text-gray-600 dark:text-gray-300 ml-4">
									{service.benefits.map((b, j) => (
										<li key={j}>{b}</li>
									))}
								</ul>
								<div className="text-sm text-gray-500 dark:text-gray-400 mt-2">
									<b>Example:</b> {service.example}
								</div>
							</motion.div>
						))}
					</div>
				</section>
				{/* Why Our Services Stand Out */}
				<section className="mb-16">
					<motion.h2
						initial={{ opacity: 0, x: -30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className="text-2xl font-bold mb-4 text-blue-700 dark:text-blue-400"
					>
						Why Our Services Stand Out
					</motion.h2>
					<ul className="list-disc list-inside text-lg text-gray-700 dark:text-gray-200 space-y-2">
						<li>
							<b>Tailored Solutions:</b> Every project is built around the client’s
							needs.
						</li>
						<li>
							<b>Reliable & Scalable:</b> Systems grow with your business.
						</li>
						<li>
							<b>Expert Team:</b> Experienced developers, designers, and
							strategists.
						</li>
						<li>
							<b>End-to-End Support:</b> From planning to deployment and ongoing
							maintenance.
						</li>
					</ul>
				</section>
				{/* Call-to-Action Banner */}
				<section className="mb-16">
					<motion.div
						initial={{ opacity: 0, y: 40 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.7 }}
						className="bg-blue-700 dark:bg-blue-800 rounded-xl shadow p-12 flex flex-col items-center text-center text-white"
					>
						<h2 className="text-2xl md:text-3xl font-bold mb-4">
							Ready to Transform Your Business?
						</h2>
						<p className="mb-8">
							Let Xhenvolt Uganda implement systems that optimize your operations,
							increase productivity, and accelerate growth.
						</p>
						<div className="flex gap-4">
							<a
								href="/contact"
								className="px-6 py-3 bg-yellow-400 text-blue-900 rounded-lg font-semibold shadow hover:bg-yellow-300 transition-colors"
							>
								Contact Us
							</a>
							<a
								href="/contact"
								className="px-6 py-3 bg-white text-blue-700 rounded-lg font-semibold shadow hover:bg-blue-100 transition-colors"
							>
								Request a Demo
							</a>
						</div>
					</motion.div>
				</section>
			</div>
			{/* Footer */}
			<Footer />
		</main>
	);
}
