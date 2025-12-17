"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Zap, TrendingUp, Shield, Boxes } from "lucide-react";
import Link from "next/link";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

const features = [
	{ icon: <Boxes className="w-8 h-8" />, title: "Real-time Inventory", description: "Track stock levels across multiple locations in real-time" },
	{ icon: <TrendingUp className="w-8 h-8" />, title: "Sales Analytics", description: "Comprehensive sales reports and analytics for data-driven decisions" },
	{ icon: <Zap className="w-8 h-8" />, title: "Point of Sale", description: "Fast, reliable checkout with integrated payment processing" },
	{ icon: <Shield className="w-8 h-8" />, title: "Security", description: "Bank-level security for all transactions and customer data" },
];

export default function XHETONPage() {
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
						<div className="inline-flex items-center gap-3 bg-blue-100 dark:bg-blue-900/30 px-4 py-2 rounded-full mb-6">
							<span className="text-blue-700 dark:text-blue-300 font-semibold">Sales & Inventory</span>
						</div>
						<h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
							XHETON
						</h1>
						<p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
							Powerful sales and inventory management for retail businesses of all sizes.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<motion.a
								href="/contact"
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
							>
								Request Demo
								<ArrowRight className="w-5 h-5 ml-2" />
							</motion.a>
							<motion.a
								href="https://xheton.xhenvolt.com"
								target="_blank"
								rel="noopener noreferrer"
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-xl font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300"
							>
								Live Demo
								<ArrowRight className="w-5 h-5 ml-2" />
							</motion.a>
						</div>
					</motion.div>
				</div>
			</section>

			{/* Features */}
			<section className="py-20">
				<div className="max-w-7xl mx-auto px-6">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
						className="text-center mb-16"
					>
						<h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
							Key Features
						</h2>
						<p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
							Everything for modern retail operations
						</p>
					</motion.div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
						{features.map((feature, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: index * 0.1 }}
								className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20 dark:border-gray-700/50"
							>
								<div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-white mb-4">
									{feature.icon}
								</div>
								<h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
									{feature.title}
								</h3>
								<p className="text-gray-600 dark:text-gray-300">
									{feature.description}
								</p>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Benefits */}
			<section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600">
				<div className="max-w-7xl mx-auto px-6">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
						className="text-center mb-16"
					>
						<h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
							Why Retailers Choose XHETON
						</h2>
					</motion.div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						{[
							"Increase sales efficiency and customer satisfaction",
							"Reduce inventory waste and shrinkage",
							"Access real-time business analytics",
							"Multi-location inventory synchronization",
							"Secure payment processing",
							"Comprehensive stock management",
						].map((benefit, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, x: -30 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true }}
								transition={{ delay: index * 0.1 }}
								className="flex items-start gap-4"
							>
								<CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
								<p className="text-lg text-white/90">
									{benefit}
								</p>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* CTA */}
			<section className="py-20">
				<div className="max-w-7xl mx-auto px-6">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
						className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-3xl p-12 shadow-2xl border border-white/20 dark:border-gray-700/50 text-center"
					>
						<h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
							Streamline Your Retail Operations
						</h2>
						<p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
							Join retailers across East Africa using XHETON to grow their businesses efficiently.
						</p>
						<motion.div
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
						>
							<Link
								href="/contact"
								className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 gap-2"
							>
								Schedule a Demo
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
