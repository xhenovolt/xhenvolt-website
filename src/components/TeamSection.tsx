"use client";
import React from "react";
import { motion } from "framer-motion";
import { Linkedin, Github, Twitter } from "lucide-react";

const team = [
	{
		name: "Naminya Aslam",
		role: "Headteacher",
		bio: "Visionary educational leader guiding Al Hanan Education Centre with excellence, discipline, and commitment to Islamic values and academic achievement.",
		specialties: [
			"Educational Leadership",
			"School Management",
			"Academic Excellence",
		],
		social: {
			linkedin: "#",
			twitter: "#",
			github: "#",
		},
	},
	{
		name: "Faisal Naminya",
		role: "School Center Director",
		bio: "Dynamic director overseeing school operations, ensuring conducive learning environment and seamless coordination of all school activities and programs.",
		specialties: ["Operations Management", "Strategic Planning", "Center Coordination"],
		social: {
			linkedin: "#",
			twitter: "#",
			github: "#",
		},
	},
	{
		name: "Ganiyu Kule Hussein",
		role: "Director Of Studies - Upper Primary",
		bio: "Experienced educator dedicated to delivering rigorous academics and Qur'anic excellence for upper primary learners, fostering discipline and intellectual growth.",
		specialties: ["Curriculum Development", "Academic Strategy", "Upper Primary Education"],
		social: {
			linkedin: "#",
			twitter: "#",
			github: "#",
		},
	},
	{
		name: "Wotali Hadijja",
		role: "Director Of Studies - Lower Primary",
		bio: "Nurturing educator focused on foundational learning and character development in lower primary, creating engaging and supportive learning experiences.",
		specialties: ["Primary Education", "Foundational Learning", "Student Development"],
		social: {
			linkedin: "#",
			twitter: "#",
			github: "#",
		},
	},
	{
		name: "Maganda Thabit",
		role: "Director Of Studies - Theology",
		bio: "Islamic scholar dedicated to delivering comprehensive Islamic studies and Qur'anic memorization programs aligned with Al Hanan's faith-centered mission.",
		specialties: ["Islamic Studies", "Qur'an Memorization", "Theology Education"],
		social: {
			linkedin: "#",
			twitter: "#",
			github: "#",
		},
	},
];

export default function TeamSection() {
	return (
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
						Meet Our Leadership Team
					</h2>
					<p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
						Our dedicated team of educators and administrators is committed to 
						delivering exceptional Islamic education combined with rigorous academics.
					</p>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{team.map((member, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.1 }}
							whileHover={{ scale: 1.05, y: -10 }}
							className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20 dark:border-gray-700/50 hover:shadow-3xl transition-all duration-500 text-center"
						>
							{/* Profile Image Placeholder */}
							<div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
								{member.name.split(" ").map((n) => n[0]).join("")}
							</div>

							<h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
								{member.name}
							</h3>

							<p className="text-blue-600 dark:text-blue-400 font-medium mb-4">
								{member.role}
							</p>

							<p className="text-gray-600 dark:text-gray-300 text-sm mb-6 leading-relaxed">
								{member.bio}
							</p>

							{/* Specialties */}
							<div className="mb-6">
								<div className="flex flex-wrap justify-center gap-2">
									{member.specialties.map((specialty, idx) => (
										<span
											key={idx}
											className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-xs font-medium"
										>
											{specialty}
										</span>
									))}
								</div>
							</div>

							{/* Social Links */}
							<div className="flex justify-center gap-4">
								<motion.a
									href={member.social.linkedin}
									whileHover={{ scale: 1.1, y: -2 }}
									className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white transition-all duration-300"
								>
									<Linkedin className="w-4 h-4" />
								</motion.a>
								<motion.a
									href={member.social.twitter}
									whileHover={{ scale: 1.1, y: -2 }}
									className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white transition-all duration-300"
								>
									<Twitter className="w-4 h-4" />
								</motion.a>
								<motion.a
									href={member.social.github}
									whileHover={{ scale: 1.1, y: -2 }}
									className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white transition-all duration-300"
								>
									<Github className="w-4 h-4" />
								</motion.a>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
