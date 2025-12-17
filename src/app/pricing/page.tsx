"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const pricingPlans = [
	{
		name: "Professional Setup",
		price: "1,000,000",
		currency: "UGX",
		description: "Ideal for small businesses getting started with digital solutions.",
		features: [
			"Basic system setup and configuration",
			"User training and onboarding",
			"30 days support",
			"Standard integration",
			"Basic reporting and analytics",
		],
		cta: "Get Started",
		highlighted: false,
	},
	{
		name: "Premium Setup",
		price: "1,800,000",
		currency: "UGX",
		description: "Perfect for growing organizations with advanced operational needs.",
		features: [
			"Advanced system setup and customization",
			"Comprehensive user training",
			"90 days support",
			"Advanced integrations",
			"Custom reporting and analytics",
			"Priority support access",
			"Mobile app deployment",
		],
		cta: "Get Started",
		highlighted: true,
	},
	{
		name: "Gold Plan",
		price: "2,500,000",
		currency: "UGX",
		description: "For enterprises requiring comprehensive, enterprise-grade solutions.",
		features: [
			"Complete custom development",
			"Full system integration",
			"6 months dedicated support",
			"Multi-location deployment",
			"Advanced analytics and reporting",
			"Priority support (24/7)",
			"Custom feature development",
			"Performance optimization",
			"Security audit and compliance",
		],
		cta: "Contact Sales",
		highlighted: false,
	},
];

export default function PricingPage() {
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
							Clear, Transparent Pricing
						</h1>
						<p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed">
							Choose the plan that best fits your organization's needs. Scale as you grow.
						</p>
					</motion.div>
				</div>
			</section>

			{/* Pricing Plans */}
			<section className="py-20">
				<div className="max-w-7xl mx-auto px-6">
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						{pricingPlans.map((plan, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: index * 0.1 }}
								whileHover={{ scale: 1.02, y: -5 }}
								className={`rounded-3xl shadow-2xl border transition-all duration-500 overflow-hidden ${
									plan.highlighted
										? "bg-gradient-to-br from-blue-600 to-purple-600 text-white scale-105 md:scale-110 border-blue-400"
										: "bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg border-white/20 dark:border-gray-700/50"
								}`}
							>
								{plan.highlighted && (
									<div className="bg-yellow-400 text-gray-900 py-2 text-center font-bold text-sm">
										MOST POPULAR
									</div>
								)}
								
								<div className="p-8">
									<h3 className={`text-2xl font-bold mb-2 ${plan.highlighted ? "text-white" : "text-gray-900 dark:text-white"}`}>
										{plan.name}
									</h3>
									<p className={`mb-6 ${plan.highlighted ? "text-white/80" : "text-gray-600 dark:text-gray-300"}`}>
										{plan.description}
									</p>

									<div className="mb-8">
										<span className={`text-5xl font-bold ${plan.highlighted ? "text-white" : "text-gray-900 dark:text-white"}`}>
											{plan.price}
										</span>
										<span className={`ml-2 ${plan.highlighted ? "text-white/80" : "text-gray-600 dark:text-gray-400"}`}>
											{plan.currency}
										</span>
									</div>

									<motion.a
										href="/contact"
										whileHover={{ scale: 1.05 }}
										whileTap={{ scale: 0.95 }}
										className={`w-full inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold mb-8 transition-all duration-300 gap-2 ${
											plan.highlighted
												? "bg-white text-blue-600 hover:shadow-xl shadow-lg"
												: "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-xl shadow-lg"
										}`}
									>
										{plan.cta}
										<ArrowRight className="w-5 h-5" />
									</motion.a>

									<div className="space-y-4">
										{plan.features.map((feature, idx) => (
											<motion.div
												key={idx}
												initial={{ opacity: 0, x: -20 }}
												whileInView={{ opacity: 1, x: 0 }}
												transition={{ delay: idx * 0.05 }}
												className="flex items-start gap-3"
											>
												<CheckCircle className={`w-5 h-5 flex-shrink-0 mt-0.5 ${plan.highlighted ? "text-green-300" : "text-green-500"}`} />
												<span className={plan.highlighted ? "text-white/90" : "text-gray-600 dark:text-gray-300"}>
													{feature}
												</span>
											</motion.div>
										))}
									</div>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* FAQ */}
			<section className="py-20">
				<div className="max-w-3xl mx-auto px-6">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
						className="text-center mb-16"
					>
						<h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
							Frequently Asked Questions
						</h2>
					</motion.div>

					<div className="space-y-6">
						{[
							{
								question: "Can I upgrade my plan?",
								answer: "Yes, you can upgrade at any time. We'll calculate the difference and adjust your billing accordingly."
							},
							{
								question: "What's included in support?",
								answer: "All plans include technical support, bug fixes, and system maintenance. Premium plans include priority support and extended availability."
							},
							{
								question: "Is training included?",
								answer: "Yes, all plans include user training. The extent varies by plan - Professional gets basic training, Premium gets comprehensive, and Gold gets dedicated support."
							},
							{
								question: "What if my needs change?",
								answer: "We understand your business evolves. Contact our team to discuss custom options and scaling your solution."
							},
						].map((faq, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: index * 0.1 }}
								className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/20 dark:border-gray-700/50"
							>
								<h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
									{faq.question}
								</h3>
								<p className="text-gray-600 dark:text-gray-300">
									{faq.answer}
								</p>
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
							Ready to Get Started?
						</h2>
						<p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
							Let's discuss your specific needs and find the perfect solution for your organization.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<motion.div
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
							>
								<Link
									href="/contact"
									className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 gap-2"
								>
									Schedule Consultation
									<ArrowRight className="w-5 h-5" />
								</Link>
							</motion.div>
							<motion.div
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
							>
								<Link
									href="/systems"
									className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
								>
									Explore Systems
								</Link>
							</motion.div>
						</div>
					</motion.div>
				</div>
			</section>

			<Footer />
		</main>
	);
}
