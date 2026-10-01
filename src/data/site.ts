export const siteConfig = {
  name: "SmileBrilL",
  tagline: "AI Automation × Websites & Apps",
  title: "SmileBrilL | AI Automation, Websites & Apps",
  description:
    "AI automation, website development, and app development for businesses in any niche. I build modern websites and apps, and automate lead management, customer communication, follow-ups, and internal workflows.",
  url: "https://smilebrill.com",
  keywords: [
    "AI automation expert",
    "AI automation services",
    "website development",
    "app development",
    "mobile app development",
    "web design",
    "business process automation",
    "workflow automation",
    "lead automation",
    "AI agents",
    "n8n automation",
    "business automation consultant",
  ],
};

export const contactInfo = {
  email: "smilebrill756@gmail.com",
  phone: "+2348056243084",
  phoneHref: "tel:+2348056243084",
  whatsapp: "https://wa.me/2348056243084",
  linkedin: "",
  discord: "SmileBrill 🥰",
  discordHref: "https://discord.com/users/smilebrill",
  twitter: "@SmileBrill01",
  twitterHref: "https://x.com/SmileBrill01",
  calendlyLabel: "Anytime",
  calendly: "https://wa.me/2348056243084",
};

export const socialLinks = {
  linkedin: contactInfo.linkedin,
  whatsapp: contactInfo.whatsapp,
  email: `mailto:${contactInfo.email}`,
  phone: contactInfo.phoneHref,
  discord: contactInfo.discordHref,
  twitter: contactInfo.twitterHref,
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "Solutions", href: "/#solutions" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Process", href: "/#process" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
] as const;

export const heroWorkflow = [
  "Lead Captured",
  "AI Analysis",
  "Lead Qualification",
  "CRM",
  "Personalized Follow-Up",
  "Sales Team Notification",
] as const;

export const trustBadges = [
  "AI Automation",
  "Website Development",
  "App Development",
  "Workflow Automation",
  "Lead Management",
] as const;

export const problems = [
  {
    title: "Repetitive customer questions",
    description: "Manually responding to the same inquiries over and over.",
    icon: "MessageCircleQuestion",
  },
  {
    title: "Leads falling through cracks",
    description: "Promising prospects get lost between inbox, CRM, and spreadsheets.",
    icon: "UserX",
  },
  {
    title: "Forgotten follow-ups",
    description: "Opportunities stall because no one remembers to follow up in time.",
    icon: "BellOff",
  },
  {
    title: "Manual data transfers",
    description: "Copying information between forms, sheets, CRMs, and tools by hand.",
    icon: "ArrowLeftRight",
  },
  {
    title: "Spreadsheet overload",
    description: "Hours spent updating rows instead of serving customers.",
    icon: "Table",
  },
  {
    title: "Slow response times",
    description: "Customers wait while the team is buried in administrative work.",
    icon: "Timer",
  },
  {
    title: "Repetitive admin tasks",
    description: "Scheduling, reminders, and status updates eat into productive hours.",
    icon: "Repeat",
  },
  {
    title: "No process visibility",
    description: "Hard to see where work stalls or which steps create bottlenecks.",
    icon: "EyeOff",
  },
] as const;

export const services = [
  {
    id: "ai-customer-support",
    title: "AI Customer Support",
    description:
      "AI-powered systems that handle common customer questions and intelligently escalate complex conversations to humans.",
    icon: "Bot",
  },
  {
    id: "lead-management",
    title: "Lead Management",
    description:
      "Capture, organize, qualify, score, and route leads automatically.",
    icon: "Target",
  },
  {
    id: "lead-follow-up",
    title: "Lead Follow-Up",
    description:
      "Automatically follow up with prospects so opportunities don't get forgotten.",
    icon: "Send",
  },
  {
    id: "ai-agents",
    title: "AI Agents",
    description:
      "Build AI-powered agents capable of understanding requests and taking actions through connected tools.",
    icon: "Sparkles",
  },
  {
    id: "workflow-automation",
    title: "Business Workflow Automation",
    description:
      "Connect the tools a business already uses and remove repetitive work. The same approach fits any niche.",
    icon: "Workflow",
  },
  {
    id: "appointment-automation",
    title: "Appointment & Booking Automation",
    description:
      "Automate inquiries, qualification, scheduling, reminders, and notifications.",
    icon: "CalendarCheck",
  },
  {
    id: "email-automation",
    title: "Email Automation",
    description:
      "Automate personalized email responses, notifications, follow-ups, and internal communication.",
    icon: "Mail",
  },
  {
    id: "crm-automation",
    title: "Data & CRM Automation",
    description:
      "Move and synchronize information between forms, spreadsheets, CRMs, databases, and other systems.",
    icon: "Database",
  },
  {
    id: "website-development",
    title: "Website Development",
    description:
      "Design and build modern, fast, conversion-focused websites for businesses — from landing pages to full marketing sites.",
    icon: "Globe",
  },
  {
    id: "app-development",
    title: "App Development",
    description:
      "Design and build business apps — customer apps and internal tools — that can connect to the same automations as your website.",
    icon: "Smartphone",
  },
] as const;

export const processSteps = [
  {
    step: "01",
    title: "Discover",
    description:
      "Understand the business, existing workflow, bottlenecks, and repetitive tasks.",
  },
  {
    step: "02",
    title: "Design",
    description:
      "Create an automation strategy around the business's actual needs.",
  },
  {
    step: "03",
    title: "Build",
    description:
      "Connect AI, APIs, CRMs, forms, databases, email, messaging platforms, and other tools.",
  },
  {
    step: "04",
    title: "Optimize",
    description: "Test, monitor, improve, and scale the automation.",
  },
] as const;

export const processFlow = [
  "Business Problem",
  "Automation Design",
  "AI + Integrations",
  "Automated Process",
  "Business Result",
] as const;

export const tools = [
  "Claude",
  "OpenAI",
  "n8n",
  "Make",
  "Zapier",
  "Next.js",
  "React",
  "Google Sheets",
  "Gmail",
  "APIs",
  "Webhooks",
  "CRMs",
  "Airtable",
  "Notion",
] as const;

export const whyPoints = [
  {
    title: "Business First",
    description:
      "I focus on the business problem before choosing the technology.",
    icon: "Briefcase",
  },
  {
    title: "Intelligent Automation",
    description:
      "I combine traditional workflow automation with AI where it provides real value.",
    icon: "Brain",
  },
  {
    title: "Custom Systems",
    description:
      "Every automation is designed around the client's existing process.",
    icon: "Puzzle",
  },
  {
    title: "Scalable Workflows",
    description:
      "Systems should be built so they can grow with the business.",
    icon: "TrendingUp",
  },
  {
    title: "Human + AI",
    description:
      "Automation should support teams, not blindly replace every human interaction.",
    icon: "Users",
  },
] as const;

export const qualificationQuestions = [
  "Do you receive leads regularly?",
  "Does your team manually respond to repetitive questions?",
  "Do you manually follow up with prospects?",
  "Do employees repeatedly move information between different systems?",
  "Do leads sometimes get forgotten?",
  "Do you spend hours performing repetitive administrative tasks?",
  "Are you already using automation but still have manual gaps?",
] as const;

export const budgetRanges = [
  "Not sure yet",
  "Under $1,000",
  "$1,000 – $5,000",
  "$5,000 – $15,000",
  "$15,000+",
] as const;

export type Review = {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: 5 | 4 | 3;
  project?: string;
  image: string;
  imageAlt: string;
};

/** Client reviews shown inside the About section. */
export const reviews: Review[] = [
  {
    id: "chioma-adebayo",
    name: "Chioma Adebayo",
    role: "Founder",
    company: "Lumen Agency",
    quote:
      "SmileBrilL rebuilt our website and set up lead follow-ups we used to do by hand. Enquiries get a response the same day now, and the site finally looks as serious as our work.",
    rating: 5,
    project: "Website + Lead Follow-Up",
    image: "/reviews/chioma-adebayo.jpg",
    imageAlt: "Portrait of Chioma Adebayo",
  },
  {
    id: "daniel-okafor",
    name: "Daniel Okafor",
    role: "Operations Manager",
    company: "Northbridge Services",
    quote:
      "He mapped our messy intake process and automated the parts that kept breaking. Less chasing spreadsheets, clearer handoffs to sales — exactly what we needed.",
    rating: 5,
    project: "Workflow Automation",
    image: "/reviews/daniel-okafor.jpg",
    imageAlt: "Portrait of Daniel Okafor",
  },
  {
    id: "amira-hassan",
    name: "Amira Hassan",
    role: "Director",
    company: "Crestline Consulting",
    quote:
      "Clear communication, sharp design sense, and automation that actually fits how we already work. The new site and booking flow cut a lot of back-and-forth with clients.",
    rating: 5,
    project: "Website + Booking Automation",
    image: "/reviews/amira-hassan.jpg",
    imageAlt: "Portrait of Amira Hassan",
  },
  {
    id: "grace-mensah",
    name: "Grace Mensah",
    role: "Owner",
    company: "Harbour & Co",
    quote:
      "The property app lets buyers filter listings and book a tour without calling the office. Our agents spend their time on viewings, not on repeating the same details.",
    rating: 5,
    project: "Real Estate App",
    image: "/reviews/grace-mensah.jpg",
    imageAlt: "Portrait of Grace Mensah",
  },
  {
    id: "malik-rahman",
    name: "Malik Rahman",
    role: "Founder",
    company: "Zesty Kitchen",
    quote:
      "The delivery site finally matches the food. People order from the menu or grab the app, and we stopped losing customers on a slow, confusing page.",
    rating: 5,
    project: "Food Delivery Website",
    image: "/reviews/malik-rahman.jpg",
    imageAlt: "Portrait of Malik Rahman",
  },
  {
    id: "sofia-alvarez",
    name: "Sofia Alvarez",
    role: "Product Lead",
    company: "MetroGo",
    quote:
      "Ride, food, and delivery used to live in three different tools. One app now covers the trip, the wallet, and the history. Customers stopped asking which app to open.",
    rating: 5,
    project: "City Services App",
    image: "/reviews/sofia-alvarez.jpg",
    imageAlt: "Portrait of Sofia Alvarez",
  },
  {
    id: "james-whitfield",
    name: "James Whitfield",
    role: "Brand Manager",
    company: "Velvet Atelier",
    quote:
      "Selling fragrance online is hard. The store app explains the notes, keeps a wishlist, and makes checkout feel as considered as the bottle.",
    rating: 5,
    project: "Perfume Store App",
    image: "/reviews/james-whitfield.jpg",
    imageAlt: "Portrait of James Whitfield",
  },
  {
    id: "priya-nair",
    name: "Priya Nair",
    role: "Operations Lead",
    company: "Northline Freight",
    quote:
      "Customers used to email us for every status update. The tracker shows packed, in transit, or delivered, and our support queue dropped the same week it launched.",
    rating: 5,
    project: "Shipping Tracker App",
    image: "/reviews/priya-nair.jpg",
    imageAlt: "Portrait of Priya Nair",
  },
  {
    id: "emmanuel-boateng",
    name: "Emmanuel Boateng",
    role: "Academy Manager",
    company: "Aqua Elite",
    quote:
      "Parents find the right class for their child's age and book a free trial from the phone. We filled the beginner groups without chasing messages all evening.",
    rating: 5,
    project: "Swimming Academy Website",
    image: "/reviews/emmanuel-boateng.jpg",
    imageAlt: "Portrait of Emmanuel Boateng",
  },
  {
    id: "fatima-bello",
    name: "Fatima Bello",
    role: "Managing Partner",
    company: "Legal Edge",
    quote:
      "Clients choose a lawyer on trust. The new site explains the practice areas, answers the usual questions, and turns that confidence into consultation requests.",
    rating: 5,
    project: "Law Firm Website",
    image: "/reviews/fatima-bello.jpg",
    imageAlt: "Portrait of Fatima Bello",
  },
  {
    id: "noah-keller",
    name: "Noah Keller",
    role: "Creative Director",
    company: "Grove Studio",
    quote:
      "The landing page is bold without being noisy. Proof, services, and a way to start a project are all on one screen. New enquiries come in already knowing what we do.",
    rating: 5,
    project: "Agency Landing Page",
    image: "/reviews/noah-keller.jpg",
    imageAlt: "Portrait of Noah Keller",
  },
  {
    id: "aisha-lawal",
    name: "Aisha Lawal",
    role: "People Lead",
    company: "Brightpath HR",
    quote:
      "The inbox used to eat the afternoon. AI drafts the routine replies and a person still approves anything sensitive before it sends. We kept the judgment and lost the typing.",
    rating: 5,
    project: "HR Email Automation",
    image: "/reviews/aisha-lawal.jpg",
    imageAlt: "Portrait of Aisha Lawal",
  },
];

export const faqs = [
  {
    question: "What is AI automation?",
    answer:
      "AI automation combines workflow tools with artificial intelligence so routine tasks — like qualifying leads, answering common questions, or updating records — happen reliably without constant manual effort.",
  },
  {
    question: "Can you improve an automation system we already have?",
    answer:
      "Yes. I can review what you already run, find gaps or fragile steps, and improve reliability, speed, and how well it fits your real process.",
  },
  {
    question: "Do I need to replace my current tools?",
    answer:
      "Usually no. The goal is to connect and extend the tools you already use — CRM, email, forms, sheets — rather than force a full platform switch.",
  },
  {
    question: "Can you connect AI to my CRM?",
    answer:
      "Yes. AI can analyze incoming information, score or categorize leads, draft updates, and push structured data into your CRM through integrations and APIs.",
  },
  {
    question: "Can AI handle customer conversations?",
    answer:
      "AI can handle many common questions and route complex or sensitive conversations to your team. Escalation rules keep humans in control where it matters.",
  },
  {
    question: "Can you automate lead follow-ups?",
    answer:
      "Yes. Follow-up sequences can run automatically based on timing, responses, and lead status — so prospects don't go cold while your team stays informed.",
  },
  {
    question: "Can you work with my existing workflow?",
    answer:
      "That's the preferred approach. Good automation starts from how your business already operates, then removes friction instead of inventing a process you won't use.",
  },
  {
    question: "How do you determine what should be automated?",
    answer:
      "We look for tasks that are repetitive, rule-based, time-consuming, or easy to forget. If it happens often and follows a pattern, it's a strong automation candidate.",
  },
] as const;
