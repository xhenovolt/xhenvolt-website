"use client";
import React from "react";
import { motion } from "framer-motion";
import { Star, Quote, CheckCircle, ArrowRight, Heart, Trophy } from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const testimonials = [
	{
		name: "Ngobi Peter",
		role: "Director, Northgate School",
		company: "Northgate School",
		text: "The DRAIS School Management System has completely transformed how we manage our school operations. From student enrollment to grade management, everything is now automated and efficient. Our teachers can easily input grades, parents receive real-time updates about their children's progress, and our administrative workload has reduced by over 60%. The parent-teacher communication portal has been particularly impressive - parents love being able to track attendance, assignments, and academic performance instantly. The system's reporting capabilities have also helped us make data-driven decisions for school improvement.",
		rating: 5,
		project: "DRAIS School Management System",
		location: "Bulubandi, Iganga, Uganda",
	},
	{
		name: "Ssekatawa Huzaifa",
		role: "Secretary, Bugembe Islamic Institute",
		company: "Bugembe Islamic Institute",
		text: "As an Islamic educational institution, we needed a system that could handle both our academic and religious studies curriculum seamlessly. The customized school management solution from Xhenvolt has exceeded our expectations. The system efficiently manages our Quran memorization programs, Islamic studies classes, and regular academic subjects. The Arabic language support and Islamic calendar integration were particularly valuable. Student progress tracking for both academic and Quranic studies is now streamlined, and parents appreciate the detailed progress reports. The fee management module has also simplified our financial operations significantly.",
		rating: 5,
		project: "Custom Islamic School Management System",
		location: "Bugembe, Jinja, Uganda",
	},
	{
		name: "Wagogo Husama",
		role: "Headteacher, Albayan Quran Memorization Center",
		company: "Albayan Quran Memorization Center",
		text: "Managing a Quran memorization center requires specialized tools that traditional school systems don't provide. Xhenvolt developed a tailored solution that tracks each student's memorization progress, verse by verse. The system includes features for recording recitation assessments, tracking Tajweed improvements, and managing different levels of Quranic studies. Teachers can easily input daily progress, and parents receive detailed reports about their child's memorization journey. The system has helped us increase our students' completion rates by 40% through better tracking and personalized learning paths.",
		rating: 5,
		project: "Quran Memorization Management System",
		location: "Bugumba, Iganga, Uganda",
	},
	{
		name: "Dr. John Doe",
		role: "Medical Director, Kampala Children's Hospital",
		company: "Kampala Example Hospital",
		text: "Our custom hospital management system has streamlined patient care from admission to discharge. The pediatric-focused features, including growth tracking, vaccination schedules, and specialized pediatric treatment protocols, have improved our care quality significantly. The system integrates seamlessly with our laboratory and pharmacy, reducing waiting times and improving accuracy. Staff productivity has increased by 45%, and patient satisfaction scores have reached an all-time high.",
		rating: 5,
		project: "Pediatric Hospital Management System",
		location: "Kampala, Uganda",
	},
];

// Featured as happiest client
const happiestClient = {
	name: "Wekesa Muhammad",
	role: "Chairperson, Bumwena Scrap SACCO",
	company: "Bumwena Scrap SACCO",
	text: "&ldquo;The Zyra SACCO Management System has transformed our scrap metal dealers&apos; cooperative completely. Before this system, managing member contributions, loans, and savings was a manual nightmare with frequent errors and disputes. Now everything is automated and transparent. Members can check their account balances, loan status, and transaction history anytime through the member portal.&rdquo;",
	rating: 5,
	project: "Zyra SACCO Management System",
	location: "Mbale, Uganda",
	satisfaction: "100%",
	impact: "Transformed 500+ members' financial lives"
};

const stats = [
	{ number: "25+", label: "Successful Projects" },
	{ number: "100%", label: "Wekesa's Satisfaction" },
	{ number: "25+", label: "Happy Clients" },
	{ number: "3", label: "Months in Business" },
];

export default function TestimonialsPage() {
	return (
		<main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-blue-900">
			<Navbar />

			{/* Hero Section */}
			<section className="pt-32 pb-16">
				<div className="max-w-7xl mx-auto px-6">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						className="text-center max-w-4xl mx-auto"
					>
						<h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent mb-6">
							Real Stories from Real Clients
						</h1>
						<p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
							Discover how educational institutions, businesses, and organizations across East Africa have transformed their operations with our innovative technology solutions.
						</p>
					</motion.div>
				</div>
			</section>

			<div className="max-w-7xl mx-auto px-6 pb-16">
				{/* Happiest Client Spotlight */}
				<motion.section
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
					className="mb-20"
				>
					<div className="text-center mb-12">
						<div className="inline-flex items-center gap-3 bg-yellow-100 dark:bg-yellow-900/30 px-6 py-3 rounded-full mb-4">
							<Trophy className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
							<span className="font-bold text-yellow-800 dark:text-yellow-300">Our Happiest Client</span>
							<Heart className="w-6 h-6 text-red-500 fill-current" />
						</div>
						<h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
							Client Spotlight: Wekesa Muhammad
						</h2>
						<p className="text-xl text-gray-600 dark:text-gray-300">
							Leading Bumwena Scrap SACCO to unprecedented success with our Zyra SACCO Management System
						</p>
					</div>

					<div className="bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-3xl p-12 border-2 border-yellow-200 dark:border-yellow-700/50 shadow-2xl">
						<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
							<div className="lg:col-span-2">
								<div className="flex items-center gap-4 mb-6">
									<div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-2xl">
										WM
									</div>
									<div>
										<h3 className="text-2xl font-bold text-gray-900 dark:text-white">
											{happiestClient.name}
										</h3>
										<p className="text-gray-600 dark:text-gray-400 text-lg">
											{happiestClient.role}
										</p>
										<p className="text-blue-600 dark:text-blue-400 font-medium">
											{happiestClient.company}
										</p>
										<p className="text-sm text-gray-500 dark:text-gray-500 flex items-center gap-1">
											📍 {happiestClient.location}
										</p>
									</div>
								</div>

								<div className="flex items-center gap-2 mb-6">
									{[...Array(happiestClient.rating)].map((_, i) => (
										<Star
											key={i}
											className="w-8 h-8 text-yellow-400 fill-current"
										/>
									))}
									<span className="ml-2 text-2xl font-bold text-yellow-600 dark:text-yellow-400">
										{happiestClient.satisfaction} Satisfaction!
									</span>
								</div>

								<div className="relative mb-6">
									<Quote className="absolute -top-2 -left-2 w-10 h-10 text-yellow-300 dark:text-yellow-600" />
									<blockquote className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed italic pl-8">
										&quot;{happiestClient.text}&quot;
									</blockquote>
								</div>

								<div className="bg-white/60 dark:bg-gray-800/60 rounded-xl p-4">
									<div className="flex items-center gap-2 mb-2">
										<CheckCircle className="w-5 h-5 text-green-500" />
										<span className="font-medium text-gray-900 dark:text-white">
											Project: {happiestClient.project}
										</span>
									</div>
									<div className="flex items-center gap-2">
										<Heart className="w-5 h-5 text-red-500" />
										<span className="text-gray-600 dark:text-gray-300">
											Impact: {happiestClient.impact}
										</span>
									</div>
								</div>
							</div>

							<div className="text-center">
								<div className="bg-white/80 dark:bg-gray-800/80 rounded-2xl p-8 shadow-xl">
									<div className="text-6xl font-bold text-yellow-600 dark:text-yellow-400 mb-4">
										100%
									</div>
									<div className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
										Satisfaction Rate
									</div>
									<div className="text-gray-600 dark:text-gray-300 mb-6">
										Our most satisfied client!
									</div>
									<div className="space-y-3">
										<div className="bg-green-100 dark:bg-green-900/30 rounded-lg p-3">
											<div className="text-green-800 dark:text-green-300 font-semibold">500+</div>
											<div className="text-green-600 dark:text-green-400 text-sm">Members Served</div>
										</div>
										<div className="bg-blue-100 dark:bg-blue-900/30 rounded-lg p-3">
											<div className="text-blue-800 dark:text-blue-300 font-semibold">Zero</div>
											<div className="text-blue-600 dark:text-blue-400 text-sm">System Downtime</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</motion.section>

				{/* Stats Section */}
				<motion.section
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
					className="mb-20"
				>
					<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
						{stats.map((stat, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: index * 0.1 }}
								className="text-center"
							>
								<div className={`text-4xl md:text-5xl font-bold mb-2 ${
									stat.label === "Wekesa's Satisfaction" 
										? "text-yellow-600 dark:text-yellow-400" 
										: stat.label === "Months in Business"
										? "text-green-600 dark:text-green-400"
										: "bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
								}`}>
									{stat.number}
								</div>
								<div className="text-gray-600 dark:text-gray-300 font-medium">
									{stat.label}
								</div>
							</motion.div>
						))}
					</div>
				</motion.section>

				{/* Other Testimonials */}
				<section className="mb-20">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="text-center mb-12"
					>
						<h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
							More Success Stories
						</h2>
						<p className="text-xl text-gray-600 dark:text-gray-300">
							Every client matters to us - here are more stories of transformation
						</p>
					</motion.div>

					<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
						{testimonials.map((testimonial, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: index * 0.1 }}
								whileHover={{ scale: 1.02, y: -5 }}
								className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20 dark:border-gray-700/50 hover:shadow-3xl transition-all duration-500"
							>
								<div className="flex items-center gap-2 mb-6">
									{[...Array(testimonial.rating)].map((_, i) => (
										<Star
											key={i}
											className="w-5 h-5 text-yellow-400 fill-current"
										/>
									))}
								</div>

								<div className="relative mb-8">
									<Quote className="absolute -top-2 -left-2 w-8 h-8 text-blue-200 dark:text-blue-800" />
									<p className="text-gray-700 dark:text-gray-300 leading-relaxed italic pl-6 text-lg">
										&quot;{testimonial.text}&quot;
									</p>
								</div>

								<div className="flex items-start gap-4 mb-6">
									<div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
										{testimonial.name
											.split(" ")
											.map((n) => n[0])
											.join("")}
									</div>
									<div className="flex-1">
										<h3 className="font-bold text-xl text-gray-900 dark:text-white mb-1">
											{testimonial.name}
										</h3>
										<p className="text-gray-600 dark:text-gray-400 mb-1">
											{testimonial.role}
										</p>
										<p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
											{testimonial.company}
										</p>
										<p className="text-sm text-gray-500 dark:text-gray-500">
											📍 {testimonial.location}
										</p>
									</div>
								</div>

								<div className="pt-4 border-t border-gray-200 dark:border-gray-600">
									<div className="flex items-center gap-2">
										<CheckCircle className="w-5 h-5 text-green-500" />
										<span className="text-sm font-medium text-gray-600 dark:text-gray-400">
											Project: {testimonial.project}
										</span>
									</div>
								</div>
							</motion.div>
						))}
					</div>
				</section>

				{/* Featured Testimonial Quote */}
				<motion.section
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
					className="mb-20"
				>
					<div className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 rounded-3xl p-12 text-white shadow-2xl">
						<div className="text-center max-w-4xl mx-auto">
							<Quote className="w-16 h-16 text-white/30 mx-auto mb-6" />
							<blockquote className="text-2xl md:text-3xl font-medium mb-8 leading-relaxed">
								&ldquo;Xhenvolt Uganda doesn&apos;t just deliver software - they deliver
								solutions that understand our unique challenges in East Africa.
								Their team took time to understand our cultural and operational
								needs, resulting in systems that truly work for our context.&rdquo;
							</blockquote>
							<div className="flex items-center justify-center gap-4">
								<div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-2xl font-bold">
									WM
								</div>
								<div className="text-left">
									<div className="text-xl font-semibold">Wekesa Muhammad</div>
									<div className="text-white/80">
										Chairperson, Bumwena Scrap SACCO - Our Happiest Client!
									</div>
								</div>
							</div>
						</div>
					</div>
				</motion.section>

				{/* Industry Focus */}
				<motion.section
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
					className="mb-20"
				>
					<div className="text-center mb-12">
						<h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
							Trusted Across Industries
						</h2>
						<p className="text-xl text-gray-600 dark:text-gray-300">
							From schools to SACCOs, hospitals to construction companies - delivering excellence since June 2025.
						</p>
					</div>

					<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
						{[
							{ sector: "Education", projects: "12+", icon: "🎓" },
							{ sector: "Healthcare", projects: "6+", icon: "🏥" },
							{ sector: "Finance/SACCOs", projects: "7+", icon: "🏦" },
							{ sector: "Others", projects: "3+", icon: "🏢" },
						].map((item, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: index * 0.1 }}
								className="text-center bg-white/60 dark:bg-gray-800/60 rounded-2xl p-6 backdrop-blur-sm"
							>
								<div className="text-4xl mb-4">{item.icon}</div>
								<div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">
									{item.projects}
								</div>
								<div className="text-gray-700 dark:text-gray-300 font-medium">
									{item.sector}
								</div>
							</motion.div>
						))}
					</div>
				</motion.section>

				{/* CTA Section */}
				<motion.section
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
				>
					<div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-3xl p-12 shadow-2xl border border-white/20 dark:border-gray-700/50 text-center">
						<h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
							Ready to Join Our Success Stories?
						</h2>
						<p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
							Let&apos;s discuss how our proven technology solutions can transform your
							organization and create lasting value, just like we&apos;ve done for
							clients across East Africa.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<motion.a
								href="/contact"
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
							>
								Start Your Project
								<ArrowRight className="w-5 h-5" />
							</motion.a>
							<motion.a
								href="/services"
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								className="px-8 py-4 bg-transparent border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-xl font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300"
							>
								Explore Our Services
							</motion.a>
						</div>
					</div>
				</motion.section>
			</div>

			<Footer />
		</main>
	);
}
	