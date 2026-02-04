"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Zap, Shield, Users, Globe, Star, CheckCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TeamSection from "../components/TeamSection";

const features = [
	{
		icon: <Zap className="w-8 h-8" />,
		title: "Qur'an Memorization",
		description: "Comprehensive Qur'anic memorization program with expert guidance, structured curriculum, and proven success in developing Hafiz students.",
	},
	{
		icon: <Shield className="w-8 h-8" />,
		title: "Islamic Excellence",
		description: "Deep Islamic theology and religious studies integrated with faith-centered values, discipline, and character development.",
	},
	{
		icon: <Users className="w-8 h-8" />,
		title: "Holistic Development",
		description: "Learners are shaped into disciplined, excellent thinkers with strong Islamic identity and real-life leadership capabilities.",
	},
	{
		icon: <Globe className="w-8 h-8" />,
		title: "Academic Mastery",
		description: "Full secular curriculum delivered with academic rigor, ensuring learners complete Primary Seven with exceptional performance.",
	},
];

const testimonials = [
	{
		name: "Amina Hassan",
		role: "Parent, Al Hanan Learner",
		text: "&ldquo;My child has grown not just academically, but spiritually. The combination of Qur'anic memorization and excellent academics is unmatched.&rdquo;",
		rating: 5,
	},
	{
		name: "Dr. Muhammad Ssali",
		role: "Educational Consultant",
		text: "&ldquo;Al Hanan represents a new generation of African Muslim schools. The commitment to excellence in faith and academics is remarkable.&rdquo;",
		rating: 5,
	},
	{
		name: "Zainab Nakigudde",
		role: "Parent & Community Leader",
		text: "&ldquo;Al Hanan learners are far different from ordinary learners. You can see the discipline, excellence, and faith in everything they do.&rdquo;",
		rating: 5,
	},
	{
		name: "Sheikh Abdirahman Ali",
		role: "Islamic Scholar",
		text: "&ldquo;A school that combines rigorous academic excellence with Qur'anic mastery—this is what African Islamic education should be.&rdquo;",
		rating: 5,
	},
	{
		name: "James Lwanga",
		role: "Guardian, Al Hanan Learner",
		text: "&ldquo;The holistic development approach ensures my ward is not just passing exams, but becoming a leader of character.&rdquo;",
		rating: 5,
	},
	{
		name: "Fatima Mayanja",
		role: "Parent of Hafiz Graduate",
		text: "&ldquo;Seeing my child complete the Qur'an memorization while maintaining academic excellence is a dream come true.&rdquo;",
		rating: 5,
	},
	{
		name: "Prof. Nakajjugo",
		role: "Ministry of Education Official",
		text: "&ldquo;Al Hanan exemplifies what registered, innovative schools should look like in Uganda—excellence in faith and academics.&rdquo;",
		rating: 5,
	},
	{
		name: "Ibrahim Musoke",
		role: "Parent & Business Owner",
		text: "&ldquo;The values and discipline instilled at Al Hanan will shape my children for life. It's a premium investment in their future.&rdquo;",
		rating: 5,
	},
	{
		name: "Halima Nakato",
		role: "Primary Seven Graduate, Al Hanan",
		text: "&ldquo;I'm proud to have memorized the Qur'an and excelled in my academics. Al Hanan changed my life.&rdquo;",
		rating: 5,
	},
	{
		name: "Karim Hassan",
		role: "Parent & Education Advocate",
		text: "&ldquo;In a world of ordinary schools, Al Hanan stands out. The teaching staff are among the most proficient in the country.&rdquo;",
		rating: 5,
	},
];

const solutions = [
	{
		title: "Qur'an Memorization (Hifdh)",
		description: "Students memorize and master the entire Holy Qur'an with expert guidance, completing their Hifdh by Primary Seven graduation.",
		features: [
			"Structured Memorization Curriculum",
			"Expert Qur'anic Teachers",
			"Daily Practice & Revision Sessions",
		],
	},
	{
		title: "Islamic Studies",
		description: "Deep theological knowledge, Islamic law, and religious principles integrated into daily learning to build faith-centered leaders.",
		features: [
			"Islamic Theology & Jurisprudence",
			"Character & Values Development",
			"Islamic History & Civilization",
		],
	},
	{
		title: "Primary Education Excellence",
		description: "Full secular curriculum delivered with academic rigor, English and Arabic proficiency, ensuring outstanding academic performance.",
		features: [
			"English Language Mastery",
			"Arabic Fluency",
			"Mathematics & Science Excellence",
		],
	},
];

export default function HomePage() {
	return (
		<main className="min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50 dark:from-gray-900 dark:to-emerald-900">
			<Navbar />
			
			{/* Hero Section */}
			<section className="pt-24 pb-12 md:pt-32 md:pb-20 overflow-hidden relative">
				{/* Hero Background Image */}
				<div className="absolute inset-0 z-0">
					<Image
						src="/Alhanan/Alhanan compound.jpeg"
						alt="Al Hanan Education Centre compound with school buildings and mosque dome"
						fill
						priority
						className="object-cover"
						sizes="100vw"
						quality={85}
					/>
					<div className="absolute inset-0 bg-gradient-to-r from-emerald-900/80 via-emerald-800/60 to-blue-900/60" />
				</div>
				<div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
						<motion.div
							initial={{ opacity: 0, x: -50 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.8 }}
						>
							<h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6">
								<span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
									Shaping Minds,
								</span>
								<br />
								<span className="text-white drop-shadow-lg">
									Nurturing Faith, Building the Future
								</span>
							</h1>
							<p className="text-lg sm:text-xl lg:text-2xl text-white/90 mb-6 sm:mb-8 leading-relaxed">
								Where academic excellence meets Qur'anic mastery. Al Hanan Education Centre is a premium Muslim school dedicated to shaping disciplined, excellent leaders with unshakeable faith.
							</p>
							<div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
								<motion.div
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
									className="w-full sm:w-auto"
								>
									<Link
										href="/admissions"
										className="inline-flex w-full sm:w-auto items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-emerald-500 to-blue-500 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 gap-2"
									>
										Apply Now
										<ArrowRight className="w-5 h-5" />
									</Link>
								</motion.div>
								<motion.div
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
									className="w-full sm:w-auto"
								>
									<Link
										href="#why-al-hanan"
										className="inline-flex w-full sm:w-auto items-center justify-center px-6 sm:px-8 py-3 sm:py-4 border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-emerald-900 transition-all duration-300"
									>
										Learn More
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
									<div className="bg-emerald-100 dark:bg-emerald-900/30 p-4 rounded-2xl text-center">
										<div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400">2019</div>
										<div className="text-sm text-emerald-700 dark:text-emerald-300">Founded</div>
									</div>
									<div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-2xl text-center">
										<div className="text-3xl font-bold text-blue-600 dark:text-blue-400">100%</div>
										<div className="text-sm text-blue-700 dark:text-blue-300">Registered</div>
									</div>
								</div>
								<div className="flex items-center gap-2 mb-4">
									{[...Array(5)].map((_, i) => (
										<Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
									))}
									<span className="text-white ml-2">Trusted by African families</span>
								</div>
								<p className="text-white/90 italic">
									&quot;Al Hanan learners are far different from ordinary learners.&quot;
								</p>
							</div>
						</motion.div>
					</div>
				</div>
			</section>

		{/* Features Section */}
		<section className="py-12 sm:py-16 md:py-20" id="why-al-hanan">
			<div className="max-w-7xl mx-auto px-4 sm:px-6">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
					className="text-center mb-12 sm:mb-16"
				>
					<h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
						Why Al Hanan?
					</h2>
					<p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
						We don&apos;t just teach academics—we shape minds through faith, discipline, and excellence. Here&apos;s what sets us apart.
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
								<div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-2xl flex items-center justify-center text-white mx-auto mb-6">
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
		<section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-emerald-600 via-blue-600 to-cyan-500">
			<div className="max-w-7xl mx-auto px-4 sm:px-6">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
					className="text-center mb-12 sm:mb-16"
				>
					<h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
						Our Academic Programs
					</h2>
					<p className="text-base sm:text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
						Comprehensive educational pathways combining Qur'anic mastery, Islamic excellence, and academic achievement.
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
									href="/academics"
									className="inline-flex items-center text-white hover:text-emerald-300 transition-colors duration-300 gap-2"
								>
									Explore Program
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
						Ready to Shape Your Child&apos;s Future?
					</h2>
					<p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto">
						Join Al Hanan Education Centre and become part of a faith-centered community dedicated to academic excellence and Qur'anic mastery. Your child&apos;s journey to becoming a disciplined, excellent leader with unshakeable faith starts here.
					</p>
					<div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
						<motion.div
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							className="w-full sm:w-auto"
						>
							<Link
								href="/admissions"
								className="inline-flex w-full sm:w-auto items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-emerald-600 to-blue-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 gap-2"
							>
								Apply Now
								<ArrowRight className="w-5 h-5" />
							</Link>
						</motion.div>
						<motion.div
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							className="w-full sm:w-auto"
						>
							<Link
								href="/location"
								className="inline-flex w-full sm:w-auto items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-emerald-600 text-emerald-600 dark:text-emerald-400 rounded-xl font-semibold hover:bg-emerald-600 hover:text-white transition-all duration-300"
							>
								Visit Us Today
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