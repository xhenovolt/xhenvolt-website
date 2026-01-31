"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Zap, Shield, Users, Globe, Star, CheckCircle } from "lucide-react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TeamSection from "../components/TeamSection";

const features = [
	{
		icon: <Zap className="w-8 h-8" />,
		title: "Innovative Solutions",
		description: "We deliver cutting-edge technology solutions tailored to your business needs.",
	},
	{
		icon: <Shield className="w-8 h-8" />,
		title: "Enterprise-Grade Security",
		description: "Our systems are built with bank-level security to protect your data and operations.",
	},
	{
		icon: <Users className="w-8 h-8" />,
		title: "Client-Centric Approach",
		description: "We prioritize your success by delivering solutions that align with your goals.",
	},
	{
		icon: <Globe className="w-8 h-8" />,
		title: "Global Expertise",
		description: "Our team has experience delivering solutions for clients across East Africa and beyond.",
	},
];

const testimonials = [
	{
		name: "Wekesa Muhammad",
		role: "Chairperson, Bumwena Scrap SACCO",
		text: "&ldquo;The Zyra SACCO Management System has completely transformed our operations. We now serve 500+ members efficiently.&rdquo;",
		rating: 5,
	},
	{
		name: "Aisha Nabukeera",
		role: "Head Teacher, Bright Future Primary School",
		text: "&ldquo;DRAIS has streamlined our school management. It's user-friendly and efficient!&rdquo;",
		rating: 5,
	},
	{
		name: "Sheikh Hassan Mwaita",
		role: "General Director",
		text: "&ldquo;DRAIS has transformed our school management beyond borders. Efficiency, control, and modernization are now at the core of our operations.&rdquo;",
		rating: 5,
	},
	{
		name: "Fatuma Abdi",
		role: "Manager, XYZ Logistics",
		text: "&ldquo;We achieved 100% client satisfaction in our last project, thanks to Xhenvolt's solutions!&rdquo;",
		rating: 5,
	},
	{
		name: "Musa Kiggundu",
		role: "CTO, Tech Innovators",
		text: "&ldquo;Xhenvolt's team is highly skilled and dedicated. They delivered our project ahead of schedule.&rdquo;",
		rating: 5,
	},
	{
		name: "Zainab Nanteza",
		role: "Director, Nanteza Holdings",
		text: "&ldquo;The custom software developed by Xhenvolt has given us a competitive edge in the market.&rdquo;",
		rating: 5,
	},
	{
		name: "Juma Seif",
		role: "CEO, Seif Enterprises",
		text: "&ldquo;We doubled our operational capacity within three months of using the new system from Xhenvolt.&rdquo;",
		rating: 5,
	},
	{
		name: "Laila Kyomuhendo",
		role: "Principal, Kampala International School",
		text: "&ldquo;DRAIS has made communication with parents seamless and improved student performance tracking.&rdquo;",
		rating: 4.5,
	},
	{
		name: "Ali Mufeed",
		role: "Operations Manager, Mufeed Traders",
		text: "&ldquo;The efficiency of our loan processing has tripled, and member satisfaction is at an all-time high!&rdquo;",
		rating: 5,
	},
	{
		name: "Nina Kansiime",
		role: "HR Manager, Great Lakes Services",
		text: "&ldquo;Xhenvolt's solutions are a game-changer. Our recruitment and onboarding process is now so efficient!&rdquo;",
		rating: 5,
	},
];

const solutions = [
	{
		title: "DRAIS School Management System",
		description: "Empowering schools with efficient student management, grade tracking, and parent-teacher communication.",
		features: [
			"Student Information System",
			"Grade & Attendance Management",
			"Parent-Teacher Communication",
		],
	},
	{
		title: "Zyra SACCO Management System",
		description: "Streamlining SACCO operations with automated member contributions, loan processing, and financial reporting.",
		features: [
			"Member Account Management",
			"Loan Application & Approval",
			"Financial Reporting & Analytics",
		],
	},
	{
		title: "Custom POS System for Retail",
		description: "Enhancing retail operations with real-time inventory tracking, sales analytics, and customer loyalty programs.",
		features: [
			"Real-time Inventory Tracking",
			"Sales Analytics & Reporting",
			"Customer Loyalty Programs",
		],
	},
];

export default function HomePage() {
	return (
		<main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-blue-900">
			<Navbar />
			
			{/* Hero Section */}
			<section className="pt-24 pb-12 md:pt-32 md:pb-20 overflow-hidden">
				<div className="max-w-7xl mx-auto px-4 sm:px-6">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
						<motion.div
							initial={{ opacity: 0, x: -50 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.8 }}
						>
							<h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6">
								<span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
									Transforming
								</span>
								<br />
								<span className="text-gray-900 dark:text-white">
									Africa with Technology
								</span>
							</h1>
							<p className="text-lg sm:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 leading-relaxed">
								We deliver cutting-edge software solutions that empower businesses, schools, and organizations across East Africa to achieve their digital transformation goals.
							</p>
							<div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
								<motion.div
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
									className="w-full sm:w-auto"
								>
									<Link
										href="/contact"
										className="inline-flex w-full sm:w-auto items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 gap-2"
									>
										Start Your Project
										<ArrowRight className="w-5 h-5" />
									</Link>
								</motion.div>
								<motion.div
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
									className="w-full sm:w-auto"
								>
									<Link
										href="/services"
										className="inline-flex w-full sm:w-auto items-center justify-center px-6 sm:px-8 py-3 sm:py-4 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-xl font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300"
									>
										Explore Services
									</Link>
								</motion.div>
							</div>
						</motion.div>
						
						<motion.div
							initial={{ opacity: 0, x: 50 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.8, delay: 0.2 }}
							className="relative"
						>
							<div className="relative z-10 bg-white/10 dark:bg-gray-800/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 dark:border-gray-700/50">
								<div className="grid grid-cols-2 gap-4 mb-6">
									<div className="bg-green-100 dark:bg-green-900/30 p-4 rounded-2xl text-center">
										<div className="text-3xl font-bold text-green-600 dark:text-green-400">28+</div>
										<div className="text-sm text-green-700 dark:text-green-300">Projects Delivered</div>
									</div>
									<div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-2xl text-center">
										<div className="text-3xl font-bold text-blue-600 dark:text-blue-400">97.3%</div>
										<div className="text-sm text-blue-700 dark:text-blue-300">Client Satisfaction</div>
									</div>
								</div>
								<div className="flex items-center gap-2 mb-4">
									{[...Array(5)].map((_, i) => (
										<Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
									))}
									<span className="text-gray-600 dark:text-gray-300 ml-2">Trusted by 25+ clients</span>
								</div>
								<p className="text-gray-600 dark:text-gray-300 italic">
									&quot;Xhenvolt Uganda has been instrumental in our digital transformation journey.&quot;
								</p>
							</div>
						</motion.div>
					</div>
				</div>
			</section>

		{/* Features Section */}
		<section className="py-12 sm:py-16 md:py-20">
			<div className="max-w-7xl mx-auto px-4 sm:px-6">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
					className="text-center mb-12 sm:mb-16"
				>
					<h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
						Why Choose Xhenvolt?
					</h2>
					<p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
						We don&apos;t just build software—we craft solutions that transform businesses and create lasting value.
					</p>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
						{features.map((feature, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: index * 0.1 }}
								whileHover={{ scale: 1.05, y: -10 }}
								className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20 dark:border-gray-700/50 text-center hover:shadow-3xl transition-all duration-500"
							>
								<div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-white mx-auto mb-6">
									{feature.icon}
								</div>
								<h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
									{feature.title}
								</h3>
								<p className="text-gray-600 dark:text-gray-300 leading-relaxed">
									{feature.description}
								</p>
							</motion.div>
						))}
					</div>
				</div>
			</section>

		{/* Solutions Showcase */}
		<section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600">
			<div className="max-w-7xl mx-auto px-4 sm:px-6">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
					className="text-center mb-12 sm:mb-16"
				>
					<h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
						Proven Solutions in Action
					</h2>
					<p className="text-base sm:text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
						See how our custom-built systems are transforming organizations across East Africa in record time.
					</p>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
						{solutions.map((solution, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: index * 0.1 }}
								whileHover={{ scale: 1.02, y: -5 }}
								className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-500"
							>
								<h3 className="text-2xl font-bold text-white mb-4">
									{solution.title}
								</h3>
								<p className="text-white/80 mb-6 leading-relaxed">
									{solution.description}
								</p>
								<ul className="space-y-3 mb-6">
									{solution.features.map((feature, idx) => (
										<li key={idx} className="flex items-center gap-3 text-white/90">
											<CheckCircle className="w-5 h-5 text-green-400" />
											{feature}
										</li>
									))}
								</ul>
								<Link
									href="/testimonials"
									className="inline-flex items-center text-white hover:text-yellow-300 transition-colors duration-300 gap-2"
								>
									See Client Stories
									<ArrowRight className="w-4 h-4" />
								</Link>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Team Section */}
			<TeamSection />

		{/* CTA Section */}
		<section className="py-12 sm:py-16 md:py-20">
			<div className="max-w-7xl mx-auto px-4 sm:px-6">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
					className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-3xl p-8 sm:p-12 shadow-2xl border border-white/20 dark:border-gray-700/50 text-center"
				>
					<h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
						Ready to Transform Your Organization?
					</h2>
					<p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto">
						Join our growing list of 25+ satisfied clients across East Africa who have revolutionized their operations with our innovative technology solutions in just 3 months.
					</p>
					<div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
						<motion.div
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							className="w-full sm:w-auto"
						>
							<Link
								href="/contact"
								className="inline-flex w-full sm:w-auto items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 gap-2"
							>
								Get Free Consultation
								<ArrowRight className="w-5 h-5" />
							</Link>
						</motion.div>
						<motion.div
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							className="w-full sm:w-auto"
						>
							<Link
								href="/testimonials"
								className="inline-flex w-full sm:w-auto items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-xl font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300"
							>
								View Success Stories
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