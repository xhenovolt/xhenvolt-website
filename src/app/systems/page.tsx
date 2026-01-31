"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Users, TrendingUp, Briefcase } from "lucide-react";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const systems = [
	{
		id: "drais",
		name: "DRAIS",
		fullName: "School Management System",
		description: "Comprehensive solution for schools to manage student information, grades, attendance, and parent-teacher communication.",
		forWho: "Schools and educational institutions",
		coreValue: "Streamline administrative operations while improving communication between educators, students, and parents.",
		icon: <BookOpen className="w-12 h-12" />,
		href: "/systems/drais",
		learnMore: "https://drais-demo.xhenvolt.com"
	},
	{
		id: "xheton",
		name: "XHETON",
		fullName: "Sales & Inventory Management",
		description: "Powerful system for retail and wholesale businesses to manage inventory, sales, and customer relationships efficiently.",
		forWho: "Retail businesses, wholesalers, and distributors",
		coreValue: "Real-time inventory tracking and sales analytics to drive profitability and operational efficiency.",
		icon: <TrendingUp className="w-12 h-12" />,
		href: "/systems/xheton",
		learnMore: "https://xheton.xhenvolt.com"
	},
	{
		id: "xheton",
		name: "JETON",
		fullName: "Company Execution",
		description: "Powerful system for company valuation and efficient execution.",
		forWho: "Companies so much frustrated with paperwork or having issues with narrow ERP systems ",
		coreValue: "Real-time valuation & pipeline tracking and sales analytics to drive profitability and operational efficiency.",
		icon: <TrendingUp className="w-12 h-12" />,
		href: "/systems/jeton",
		learnMore: "https://jeton.xhenvolt.com"
	},
	{
		id: "xhaira",
		name: "XHAIRA",
		fullName: "SACCO Management System",
		description: "Complete financial management solution for SACCOs to handle member accounts, loans, contributions, and reporting.",
		forWho: "SACCOs and cooperative financial institutions",
		coreValue: "Transparent, automated financial operations that empower members and strengthen institutional trust.",
		icon: <Users className="w-12 h-12" />,
		href: "/systems/xhaira",
		learnMore: "https://xhaira.xhenvolt.com"
	},
	{
		id: "consty",
		name: "CONSTY",
		fullName: "Construction Management System",
		description: "End-to-end project management for construction companies covering budgeting, scheduling, resource allocation, and reporting.",
		forWho: "Construction companies and project managers",
		coreValue: "Enhanced project control and resource optimization for timely, cost-effective project delivery.",
		icon: <Briefcase className="w-12 h-12" />,
		href: "/systems/consty",
		learnMore: "https://consty-demo.xhenvolt.com"
	},
	{
		id: "jorc",
		name: "JORC",
		fullName: "Project Management System",
		description: "Versatile project management platform for organizing teams, tracking tasks, managing timelines, and coordinating resources.",
		forWho: "Project-based organizations and teams",
		coreValue: "Improved collaboration and visibility across all project phases for successful, on-time delivery.",
		icon: <TrendingUp className="w-12 h-12" />,
		href: "/systems/jorc",
		learnMore: "https://jorc.xhenvolt.com"
	},
];

export default function SystemsPage() {
	return (
		<main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-blue-900">
			<Navbar />
			
			{/* Hero Section */}
			<section className="pt-32 pb-20">
				<div className="max-w-7xl mx-auto px-6">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						className="text-center max-w-4xl mx-auto"
					>
						<h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
							Our Systems
						</h1>
						<p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed">
							Proven enterprise solutions designed to address specific business challenges across different sectors.
						</p>
					</motion.div>
				</div>
			</section>

			{/* Systems Grid */}
			<section className="py-20">
				<div className="max-w-7xl mx-auto px-6">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						{systems.map((system, index) => (
							<motion.div
								key={system.id}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: index * 0.1 }}
								whileHover={{ scale: 1.02, y: -5 }}
								className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20 dark:border-gray-700/50 hover:shadow-3xl transition-all duration-500"
							>
								<div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-white mb-6">
									{system.icon}
								</div>

								<h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
									{system.name}
								</h3>
								<p className="text-lg text-gray-600 dark:text-gray-400 mb-4 font-medium">
									{system.fullName}
								</p>

								<p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
									{system.description}
								</p>

								<div className="mb-6 space-y-4">
									<div>
										<h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
											FOR
										</h4>
										<p className="text-gray-600 dark:text-gray-400">
											{system.forWho}
										</p>
									</div>
									<div>
										<h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
											CORE VALUE
										</h4>
										<p className="text-gray-600 dark:text-gray-400">
											{system.coreValue}
										</p>
									</div>
								</div>

								<div className="flex gap-3 pt-4 border-t border-gray-200 dark:border-gray-600">
									<motion.a
										href={system.href}
										whileHover={{ scale: 1.05 }}
										whileTap={{ scale: 0.95 }}
										className="flex-1 inline-flex items-center justify-center px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
									>
										Learn More
										<ArrowRight className="w-4 h-4 ml-2" />
									</motion.a>
									<motion.a
										href={system.learnMore}
										target="_blank"
										rel="noopener noreferrer"
										whileHover={{ scale: 1.05 }}
										whileTap={{ scale: 0.95 }}
										className="flex-1 inline-flex items-center justify-center px-4 py-3 bg-transparent border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-xl font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300"
									>
										Demo
										<ArrowRight className="w-4 h-4 ml-2" />
									</motion.a>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-20">
				<div className="max-w-7xl mx-auto px-6">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
						className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 rounded-3xl p-12 text-white shadow-2xl text-center"
					>
						<h2 className="text-3xl md:text-4xl font-bold mb-6">
							Ready to Transform Your Organization?
						</h2>
						<p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
							Discover which system best fits your needs and start your digital transformation journey.
						</p>
						<motion.div
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
						>
							<Link
								href="/contact"
								className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 gap-2"
							>
								Get Started Today
								<ArrowRight className="w-5 h-5" />
							</Link>
						</motion.div>
					</motion.div>
				</div>
			</section>

			<Footer />
		</main>
	);
}
