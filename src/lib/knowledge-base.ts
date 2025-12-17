/**
 * Xhenvolt Knowledge Base
 * This is the single source of truth for all company information.
 * The AI assistant ONLY uses this data to answer questions.
 */

export const xhenvoltKnowledgeBase = {
  company: {
    name: "Xhenvolt",
    tagline: "Enterprise Software Solutions for East Africa",
    description: "Xhenvolt is a leading technology solutions provider specializing in custom enterprise software, mobile applications, and digital transformation services.",
    foundedYear: 2025,
    location: {
      address: "Bulubandi, Iganga, Uganda",
      country: "Uganda",
      region: "East Africa"
    },
    contact: {
      phone: ["0745 726 350", "+256 774 543 406"],
      email: "info@xhenvolt.com",
      hours: "Monday-Friday, 8:00 AM - 6:00 PM EAT"
    }
  },

  systems: {
    drais: {
      name: "DRAIS",
      fullName: "DRAIS School Management System",
      category: "Education",
      description: "Comprehensive school management system that revolutionizes educational institution operations.",
      targetAudience: "Schools, colleges, and educational institutions",
      keyFeatures: [
        "Student enrollment and profile management",
        "Grade management and automated reporting",
        "Parent-teacher communication portal",
        "Fee management and payment tracking",
        "Attendance tracking and reporting",
        "Academic performance analytics"
      ],
      benefits: [
        "60% reduction in administrative workload",
        "Real-time parent engagement",
        "Automated grade reporting",
        "Comprehensive student data management"
      ],
      successStories: {
        school: "Ibun Baz Girls Secondary School, Busei, Uganda",
        contact: "Sheikh Hassan Mwaita (General Director)",
        impact: "DRAIS elevated school management beyond borders, delivering efficiency, control, and modernization."
      },
      demoUrl: "https://drais.xhenvolt.com/demo"
    },

    xheton: {
      name: "XHETON",
      fullName: "XHETON Sales & Inventory Management",
      category: "Retail & Commerce",
      description: "Intelligent point-of-sale and inventory system for retail businesses.",
      targetAudience: "Retail businesses, shops, and trading enterprises",
      keyFeatures: [
        "Real-time inventory tracking",
        "Multi-location management",
        "Sales analytics and reporting",
        "Customer loyalty programs",
        "POS system with offline capability",
        "Automated reorder management"
      ],
      benefits: [
        "Complete inventory control",
        "Sales performance insights",
        "Reduced stockouts and overstock",
        "Improved customer experience"
      ],
      demoUrl: "https://xheton.xhenvolt.com/demo"
    },

    xhaira: {
      name: "XHAIRA",
      fullName: "XHAIRA SACCO Management System",
      category: "Finance",
      description: "Powerful system for managing savings and credit cooperative organizations.",
      targetAudience: "SACCOs, financial cooperatives, and microfinance institutions",
      keyFeatures: [
        "Member account management",
        "Loan processing and disbursement",
        "Savings tracking and reporting",
        "Interest calculation automation",
        "Financial reporting and compliance",
        "Member portal for self-service"
      ],
      benefits: [
        "Automated member management",
        "Streamlined loan processing",
        "Accurate financial tracking",
        "Regulatory compliance"
      ],
      demoUrl: "https://xhaira.xhenvolt.com/demo"
    },

    consty: {
      name: "CONSTY",
      fullName: "CONSTY Construction Management",
      category: "Construction",
      description: "Comprehensive project management system for construction and building enterprises.",
      targetAudience: "Construction companies, contractors, and building firms",
      keyFeatures: [
        "Project planning and scheduling",
        "Resource management",
        "Budget control and cost tracking",
        "Quality assurance tracking",
        "Progress monitoring",
        "Contractor and supplier management"
      ],
      benefits: [
        "Improved project visibility",
        "Budget control and cost savings",
        "Quality management",
        "Timeline adherence"
      ],
      demoUrl: "https://consty.xhenvolt.com/demo"
    },

    jorc: {
      name: "JORC",
      fullName: "JORC Project Management",
      category: "Project Management",
      description: "Modern project management and team collaboration platform.",
      targetAudience: "Project-based organizations, agencies, and development teams",
      keyFeatures: [
        "Task management and assignment",
        "Team collaboration tools",
        "Timeline and milestone tracking",
        "Progress reporting",
        "Resource allocation",
        "Team communication portal"
      ],
      benefits: [
        "Enhanced team collaboration",
        "Better project tracking",
        "Improved deadline adherence",
        "Team productivity boost"
      ],
      demoUrl: "https://jorc.xhenvolt.com/demo"
    }
  },

  pricing: {
    currency: "UGX",
    disclaimer: "Pricing depends on project complexity, timeline, and specific features required. These are base prices.",
    tiers: [
      {
        name: "Professional",
        price: "1,000,000",
        description: "Suitable for small businesses and startups",
        features: [
          "Basic system setup",
          "Core features implementation",
          "Initial training",
          "30 days of support"
        ]
      },
      {
        name: "Premium",
        price: "1,800,000",
        description: "Most popular for growing organizations",
        features: [
          "Complete system setup",
          "All premium features",
          "Advanced training",
          "3 months of dedicated support",
          "Customization support"
        ],
        highlighted: true
      },
      {
        name: "Gold",
        price: "2,500,000",
        description: "Enterprise-grade for large organizations",
        features: [
          "Full enterprise implementation",
          "All features and customizations",
          "Comprehensive training",
          "6 months of dedicated support",
          "Priority support",
          "Custom integrations"
        ]
      }
    ],
    paymentOptions: "Flexible payment models available: fixed-price projects, hourly rates, monthly retainers, milestone-based payments, or custom packages.",
    consultation: "Free consultation available to discuss project requirements and provide personalized quotes."
  },

  team: {
    introduction: "Xhenvolt's expert team brings specialized expertise in technology and business strategy.",
    members: [
      {
        name: "Hamuza Ibrahim",
        role: "CEO & Founder",
        bio: "Visionary leader and founder of Xhenvolt, driving the company's mission to transform African businesses through innovative technology solutions.",
        specialties: ["Strategic Vision", "Business Development", "Leadership"]
      },
      {
        name: "Ganiyu Kule Hussein",
        role: "Marketing & Growth Lead",
        bio: "Leads marketing and growth initiatives, building brand awareness and expanding Xhenvolt's presence across East Africa.",
        specialties: ["Marketing Strategy", "Growth", "Brand Development"]
      },
      {
        name: "Ssentamu Murshid",
        role: "COO (Chief Operations Officer)",
        bio: "Oversees day-to-day operations and ensures excellence in project delivery and client satisfaction.",
        specialties: ["Operations Management", "Project Oversight", "Client Success"]
      },
      {
        name: "Nasa Matovu",
        role: "CTO (Chief Technology Officer)",
        bio: "Expert technologist specializing in scalable enterprise systems and technology architecture. Leads technical strategy and delivery of innovative solutions.",
        specialties: ["System Architecture", "Technology Strategy", "Enterprise Solutions"]
      }
    ]
  },

  services: {
    overview: "Comprehensive technology solutions tailored to your business needs.",
    offerings: [
      {
        name: "Enterprise Software Development",
        description: "Custom software solutions built specifically for your business requirements."
      },
      {
        name: "System Management",
        description: "DRAIS, XHETON, XHAIRA, CONSTY, and JORC - industry-specific management systems."
      },
      {
        name: "Process Automation",
        description: "Automate repetitive processes to save time and reduce errors."
      },
      {
        name: "Consulting & Strategy",
        description: "Technology advisory and digital transformation consulting."
      }
    ]
  },

  faqs: [
    {
      question: "What makes Xhenvolt different?",
      answer: "Xhenvolt combines rapid delivery, proven expertise, 100% client satisfaction, and deep understanding of East African market needs. We deliver enterprise-grade solutions tailored to your business."
    },
    {
      question: "How long does implementation take?",
      answer: "Implementation timelines vary based on project scope and complexity. Typically, core system implementations range from 2-8 weeks. We'll provide specific timelines during your consultation."
    },
    {
      question: "Do you provide training?",
      answer: "Yes, comprehensive training is included in all packages. Training covers system usage, best practices, and ongoing support resources."
    },
    {
      question: "What about ongoing support?",
      answer: "All pricing tiers include dedicated support. Professional tier includes 30 days, Premium includes 3 months, and Gold includes 6 months of support. Extended support packages are available."
    },
    {
      question: "Can you customize the systems?",
      answer: "Yes, all systems can be customized to match your specific business processes and requirements. Customization details will be discussed during your consultation."
    },
    {
      question: "Do you offer demos?",
      answer: "Absolutely. We offer personalized product demonstrations for all systems. Contact us at 0745 726 350 or +256 774 543 406 to schedule your demo."
    }
  ],

  compliance: {
    security: "Enterprise-grade security with data encryption, secure authentication, and regular security audits.",
    dataProtection: "All customer data is protected and handled in compliance with relevant regulations.",
    sla: "Service level agreements available for all enterprise packages with guaranteed uptime and support response times."
  }
};

/**
 * Extract relevant knowledge sections based on user query
 * This implements keyword-based retrieval for knowledge grounding
 */
export function extractRelevantKnowledge(userQuery: string): string {
  const queryLower = userQuery.toLowerCase();
  const relevantSections: string[] = [];

  // System queries
  if (queryLower.includes("drais") || queryLower.includes("school")) {
    relevantSections.push(
      `DRAIS System: ${JSON.stringify(xhenvoltKnowledgeBase.systems.drais, null, 2)}`
    );
  }
  if (queryLower.includes("xheton") || queryLower.includes("sales") || queryLower.includes("inventory") || queryLower.includes("pos")) {
    relevantSections.push(
      `XHETON System: ${JSON.stringify(xhenvoltKnowledgeBase.systems.xheton, null, 2)}`
    );
  }
  if (queryLower.includes("xhaira") || queryLower.includes("sacco")) {
    relevantSections.push(
      `XHAIRA System: ${JSON.stringify(xhenvoltKnowledgeBase.systems.xhaira, null, 2)}`
    );
  }
  if (queryLower.includes("consty") || queryLower.includes("construction")) {
    relevantSections.push(
      `CONSTY System: ${JSON.stringify(xhenvoltKnowledgeBase.systems.consty, null, 2)}`
    );
  }
  if (queryLower.includes("jorc") || queryLower.includes("project management")) {
    relevantSections.push(
      `JORC System: ${JSON.stringify(xhenvoltKnowledgeBase.systems.jorc, null, 2)}`
    );
  }

  // Pricing queries
  if (queryLower.includes("price") || queryLower.includes("cost") || queryLower.includes("pricing")) {
    relevantSections.push(
      `Pricing Information: ${JSON.stringify(xhenvoltKnowledgeBase.pricing, null, 2)}`
    );
  }

  // Contact queries
  if (queryLower.includes("contact") || queryLower.includes("phone") || queryLower.includes("email")) {
    relevantSections.push(
      `Contact Information: ${JSON.stringify(xhenvoltKnowledgeBase.company.contact, null, 2)}`
    );
  }

  // Team queries
  if (queryLower.includes("team") || queryLower.includes("about") || queryLower.includes("who")) {
    relevantSections.push(
      `Team: ${JSON.stringify(xhenvoltKnowledgeBase.team, null, 2)}`
    );
  }

  // Company info
  if (queryLower.includes("xhenvolt") && relevantSections.length === 0) {
    relevantSections.push(
      `Company Overview: ${JSON.stringify(xhenvoltKnowledgeBase.company, null, 2)}`
    );
  }

  // Services queries
  if (queryLower.includes("service") && relevantSections.length === 0) {
    relevantSections.push(
      `Services: ${JSON.stringify(xhenvoltKnowledgeBase.services, null, 2)}`
    );
  }

  // FAQ queries
  if (queryLower.includes("how") || queryLower.includes("can") || queryLower.includes("do you")) {
    relevantSections.push(
      `FAQs: ${JSON.stringify(xhenvoltKnowledgeBase.faqs, null, 2)}`
    );
  }

  // Always include company overview for context
  if (relevantSections.length === 0) {
    relevantSections.push(
      `Company Overview: ${JSON.stringify(xhenvoltKnowledgeBase.company, null, 2)}`
    );
    relevantSections.push(
      `Systems Overview: ${JSON.stringify(Object.keys(xhenvoltKnowledgeBase.systems).join(", "), null, 2)}`
    );
  }

  return relevantSections.join("\n\n---\n\n");
}

/**
 * Sanitize user input to prevent injection attacks
 */
export function sanitizeInput(input: string): string {
  return input
    .trim()
    .substring(0, 2000) // Limit input length
    .replace(/[<>]/g, ""); // Remove angle brackets
}
