export type ProjectCategory = "Automation" | "Website" | "App";

export type Project = {
  id: string;
  number: string;
  title: string;
  category: ProjectCategory;
  platform: string;
  image: string;
  imageAlt: string;
  imageFit: "cover" | "contain";
  imagePosition?: string;
  summary: string;
  problem: string;
  solution: string;
  workflow: string[];
  tools: string[];
  outcome: string;
};

export const projectCategories = ["All", "Automation", "Website", "App"] as const;

const websiteTools = ["UI/UX Design", "Responsive Layout", "SEO-Ready Structure"];
const appTools = ["UI/UX Design", "Mobile Screens", "App Navigation"];

const projectList: Omit<Project, "number">[] = [
  {
    id: "telegram-ai-inbox-assistant",
    title: "Telegram AI Inbox Assistant",
    category: "Automation",
    platform: "n8n",
    image: "/projects/telegram-ai-assistant.jpg",
    imageAlt:
      "n8n workflow: Telegram trigger, switch for text or audio, OpenAI transcription, AI agent with Gmail tool, Telegram reply",
    imageFit: "contain",
    summary:
      "A personal AI assistant on Telegram that understands text and voice notes, reads your Gmail, and replies in the chat.",
    problem:
      "Checking email and finding information meant switching between apps, and there was no quick way to ask questions on the go, especially by voice.",
    solution:
      "A Telegram bot routes each message by type. Voice notes are downloaded and transcribed with OpenAI, then text and voice both go to an AI agent that can search Gmail and answer back in Telegram.",
    workflow: [
      "Telegram Message",
      "Text / Voice Switch",
      "Voice Transcription",
      "AI Agent + Gmail",
      "Telegram Reply",
    ],
    tools: ["n8n", "Telegram Bot API", "OpenAI Whisper", "OpenAI GPT", "Gmail"],
    outcome:
      "Inbox answers from a single chat, by typing or talking, with no need to open Gmail.",
  },
  {
    id: "real-estate-website",
    title: "HomeNest Real Estate Website",
    category: "Website",
    platform: "Website Design & Development",
    image: "/projects/real-estate-website.jpg",
    imageAlt:
      "HomeNest real estate website with featured property listings, about section, services, testimonials and call to action",
    imageFit: "cover",
    summary:
      "A modern, conversion-focused website for a real estate brand, built to show listings and turn visitors into enquiries.",
    problem:
      "The client needed an online presence that built trust quickly, showed properties clearly, and pointed buyers, sellers, and renters to a next step.",
    solution:
      "A clean, image-led layout with featured listing cards (price, beds, baths, size), trust signals, a services grid, a why-choose-us section, client testimonials, and a strong closing call to action.",
    workflow: [
      "Hero + Trust Signals",
      "Featured Listings",
      "About & Services",
      "Testimonials",
      "Enquiry CTA",
    ],
    tools: websiteTools,
    outcome:
      "A professional site where visitors can browse listings, see social proof, and reach out without friction.",
  },
  {
    id: "hr-reply-human-in-the-loop",
    title: "HR Email Replies with Human Approval",
    category: "Automation",
    platform: "n8n",
    image: "/projects/hr-reply-human-in-loop.jpg",
    imageAlt:
      "n8n human-in-the-loop workflow: IMAP email trigger, AI agent draft, Telegram approval, send email or regenerate",
    imageFit: "contain",
    summary:
      "AI drafts replies to incoming HR emails, and a person approves each one on Telegram before it is sent.",
    problem:
      "HR spent hours writing similar replies, but fully automatic AI responses were too risky for sensitive candidate and employee conversations.",
    solution:
      "Incoming emails are caught over IMAP, cleaned up, and drafted by an AI agent (OpenRouter). Each draft goes to Telegram for approval. Approved drafts are sent. Rejected drafts go back to the agent for a new version.",
    workflow: [
      "Incoming Email",
      "AI Draft",
      "Telegram Approval",
      "Approve → Send",
      "Reject → Redraft",
    ],
    tools: ["n8n", "IMAP", "OpenRouter", "Telegram", "SMTP Email"],
    outcome:
      "Reply drafting is automated while a person still approves every message that goes out.",
  },
  {
    id: "swimming-academy-website",
    title: "Aqua Elite Swimming Academy Website",
    category: "Website",
    platform: "Website Design & Development",
    image: "/projects/swimming-academy-website.jpg",
    imageAlt:
      "Aqua Elite Swimming Academy website with hero, class programs by age, about section, stats, parent testimonials and free trial CTA",
    imageFit: "cover",
    summary:
      "A bright, family-friendly website for a swim school, built around one goal: booking a free trial class.",
    problem:
      "Parents need to quickly find the right class for their child's age and level and trust the school before they commit.",
    solution:
      "A hero with a clear 'Book a Free Trial' CTA and trust badges, program cards by age group (Parent & Tot to Adult Swim), an about section, key stats, parent testimonials, and a closing trial CTA with a newsletter signup in the footer.",
    workflow: [
      "Hero + Free Trial CTA",
      "Programs by Age",
      "About & Stats",
      "Parent Testimonials",
      "Book Trial CTA",
    ],
    tools: websiteTools,
    outcome:
      "Parents can find the right class in seconds and book a trial from any section of the page.",
  },
  {
    id: "ai-social-content-generator",
    title: "AI Social Media Content Generator",
    category: "Automation",
    platform: "Make.com",
    image: "/projects/ai-social-content-generator.jpg",
    imageAlt:
      "Make.com scenario: scheduled HTTP request, OpenAI text completion, DALL-E image generation, router to Instagram, Facebook Pages and Pinterest",
    imageFit: "contain",
    summary:
      "On a schedule, AI writes the caption, generates the image, and publishes to Instagram, Facebook, and Pinterest.",
    problem:
      "Keeping three social channels active meant writing captions, making visuals, and posting to each platform by hand every day.",
    solution:
      "A scheduled HTTP request pulls the topic or source data. OpenAI writes the post copy, DALL·E generates a matching image, and a router publishes it as an Instagram photo post, a Facebook Page post, and a Pinterest pin.",
    workflow: [
      "Scheduled Request",
      "AI Writes Caption",
      "AI Generates Image",
      "Router",
      "Instagram + Facebook + Pinterest",
    ],
    tools: ["Make.com", "HTTP / API", "OpenAI GPT", "DALL·E", "Instagram", "Facebook Pages", "Pinterest"],
    outcome:
      "Fresh AI-made posts go out to three platforms automatically, with no daily content work.",
  },
  {
    id: "law-firm-website",
    title: "Legal Edge Law Firm Website",
    category: "Website",
    platform: "Website Design & Development",
    image: "/projects/law-firm-website.jpg",
    imageAlt:
      "Legal Edge LLC law firm website on desktop and mobile with practice areas, attorneys, awards, reviews, insights, FAQ and consultation CTA",
    imageFit: "cover",
    summary:
      "A trustworthy, authority-driven website for a law firm, designed to turn visitors into consultation requests on desktop and mobile.",
    problem:
      "Legal clients choose on trust. The firm needed a site that shows credibility, explains practice areas clearly, and makes it easy to contact a lawyer.",
    solution:
      "A navy-and-gold design with a 'Lawyers You Can Trust' hero, practice-area cards, a why-choose-us section, attorney profiles, award badges, client reviews, news and insights, an FAQ, and a 'Talk to a Lawyer' CTA. Fully responsive.",
    workflow: [
      "Trust-First Hero",
      "Practice Areas",
      "Attorneys & Awards",
      "Reviews & FAQ",
      "Consultation CTA",
    ],
    tools: websiteTools,
    outcome:
      "A credible online presence that answers common questions up front and guides visitors to book a consultation.",
  },
  {
    id: "email-follow-up-sequence",
    title: "Automated Email Follow-Up Sequence",
    category: "Automation",
    platform: "n8n",
    image: "/projects/email-follow-up-sequence.jpg",
    imageAlt:
      "n8n workflow: Gmail trigger, log to Google Sheets, first reply, wait, lookup, conditional follow-ups and sheet updates",
    imageFit: "contain",
    summary:
      "A multi-step follow-up engine that replies to new leads, waits, checks status, and sends timed follow-ups until they respond.",
    problem:
      "Leads who didn't reply to the first email were rarely followed up on consistently, so warm opportunities went cold.",
    solution:
      "New Gmail enquiries are logged to Google Sheets and get an instant reply. After a wait, the workflow checks the sheet. If there's still no response, it sends follow-up #1, updates the row, waits again, and sends a final follow-up if needed.",
    workflow: [
      "New Enquiry",
      "Log to Sheet",
      "Instant Reply",
      "Wait + Check",
      "Follow-Up 1 & 2",
    ],
    tools: ["n8n", "Gmail", "Google Sheets"],
    outcome:
      "Every lead gets a reply and a structured follow-up path, all tracked in one sheet.",
  },
  {
    id: "creative-agency-website",
    title: "Creative Grove Agency Landing Page",
    category: "Website",
    platform: "Website Design & Development",
    image: "/projects/creative-agency-website.jpg",
    imageAlt:
      "Creative Grove agency landing page in black and yellow with hero, stats, services, team, testimonials and contact CTA",
    imageFit: "cover",
    summary:
      "A bold black-and-yellow landing page for a creative agency, built to show proof fast and capture new client leads.",
    problem:
      "The agency needed a landing page that stood out, proved its track record at a glance, and turned interest into enquiries.",
    solution:
      "A high-contrast design with a strong hero and primary CTA, a results stats bar, a services section, brand values, a 'Meet Our Experts' team grid, client testimonials, and an email-capture CTA above a bright footer.",
    workflow: [
      "Hero + CTA",
      "Results Stats",
      "Services",
      "Team & Testimonials",
      "Lead Capture",
    ],
    tools: websiteTools,
    outcome:
      "A memorable brand page that puts social proof first and gives every visitor a clear way to get in touch.",
  },
  {
    id: "proxmox-ai-agent",
    title: "AI Agent for Proxmox Server Management",
    category: "Automation",
    platform: "n8n",
    image: "/projects/proxmox-ai-agent.jpg",
    imageAlt:
      "n8n workflow: webhook, AI agent with Gemini model and Proxmox API tools, auto-fixing output parser with Groq, switch for GET, POST and DELETE API calls",
    imageFit: "contain",
    summary:
      "Manage Proxmox servers in plain English. An AI agent turns each request into the right API call.",
    problem:
      "Managing virtual machines meant knowing Proxmox API endpoints and parameters, which slowed routine infrastructure tasks and made them error-prone.",
    solution:
      "A webhook receives a plain-language request. A Gemini-powered AI agent reads the Proxmox API docs and cluster details, and an auto-fixing output parser (Groq) returns structured output. A switch then runs the matching GET, POST, or DELETE call, and delete requests go through a check before anything is removed.",
    workflow: [
      "Webhook Request",
      "AI Agent + API Docs",
      "Structured Output",
      "GET / POST / DELETE",
      "Formatted Response",
    ],
    tools: ["n8n", "Google Gemini", "Groq", "Proxmox API", "Webhooks"],
    outcome:
      "Infrastructure tasks run from one natural-language request, with a check in place before any delete.",
  },
  {
    id: "tattoo-studio-website",
    title: "Custom Rose Tattoo Studio Website",
    category: "Website",
    platform: "Website Design & Development",
    image: "/projects/tattoo-studio-website.jpg",
    imageAlt:
      "Custom Rose Tattoo Studio website in dark and red with booking form, services, portfolio gallery, promotion and artist profiles",
    imageFit: "cover",
    summary:
      "A dark, dramatic website for a tattoo studio, with a consultation booking form right in the hero.",
    problem:
      "The studio needed to show off its artwork, build trust in hygiene and skill, and get more consultation bookings.",
    solution:
      "A black-and-red design with a hero booking form (name and phone), trust highlights, a services grid, a portfolio gallery, a promotional offer banner, artist profiles with social links, and a detailed footer. Built for a Russian-speaking audience.",
    workflow: [
      "Hero Booking Form",
      "Services",
      "Portfolio Gallery",
      "Promo Offer",
      "Meet the Artists",
    ],
    tools: [...websiteTools, "Russian-Language Site"],
    outcome:
      "Visitors see the work, meet the artists, and can request a consultation without leaving the first screen.",
  },
  {
    id: "webflow-lead-routing",
    title: "Webflow Lead Capture & Routing",
    category: "Automation",
    platform: "Zapier",
    image: "/projects/webflow-lead-routing.jpg",
    imageAlt:
      "Zapier workflow: Webflow form submission, add record to Tables, split paths to HubSpot contact and Slack sales channel",
    imageFit: "contain",
    summary:
      "Website form submissions are stored, added to the CRM, and sent to the sales team on Slack automatically.",
    problem:
      "Webflow form leads sat in an inbox. Someone had to copy them into HubSpot and tell sales by hand, which delayed first contact.",
    solution:
      "Each Webflow submission is saved as a record in Zapier Tables, then split into paths. One path creates the contact in HubSpot, and the other posts the lead to the sales Slack channel.",
    workflow: [
      "Webflow Form",
      "Zapier Tables Record",
      "Split Paths",
      "HubSpot Contact",
      "Slack Sales Alert",
    ],
    tools: ["Zapier", "Webflow", "Zapier Tables", "HubSpot", "Slack"],
    outcome:
      "New leads reach the CRM and the sales team the moment they submit, with no copy-pasting.",
  },
  {
    id: "tattoo-artist-website",
    title: "Tattoo Artist Personal Portfolio",
    category: "Website",
    platform: "Website Design & Development",
    image: "/projects/tattoo-artist-website.jpg",
    imageAlt:
      "Dark tattoo artist portfolio website with orange accents, about section, statement banner, recent works gallery and contact section",
    imageFit: "cover",
    imagePosition: "center 22%",
    summary:
      "A personal-brand portfolio for an independent tattoo artist, with the artwork front and centre.",
    problem:
      "An independent artist needed a personal site that shows their style and personality and turns admirers into bookings.",
    solution:
      "A dark, textured design with orange accents: a personal 'Hi, I'm Mark' intro, an angled photo collage, a bold 'Your tattoo is about you' statement, a recent works gallery, and a clear contact section.",
    workflow: [
      "Personal Hero",
      "About the Artist",
      "Brand Statement",
      "Latest Works",
      "Contact",
    ],
    tools: websiteTools,
    outcome:
      "A distinctive personal brand site where the portfolio does the selling and contact is one click away.",
  },
  {
    id: "social-content-publisher",
    title: "Canva-to-Social Content Publisher",
    category: "Automation",
    platform: "Make.com",
    image: "/projects/social-content-publisher.jpg",
    imageAlt:
      "Make.com scenario: Google Sheets search, Canva export, sheet update, router to YouTube upload and Instagram reel",
    imageFit: "contain",
    summary:
      "Scheduled content publishing from a Google Sheets calendar to YouTube and Instagram, using Canva designs.",
    problem:
      "Publishing the same content to several platforms meant exporting designs, uploading to each channel, and updating the content calendar by hand.",
    solution:
      "On a schedule, the scenario finds the next post in Google Sheets, exports the matching Canva design, marks the row as processed, and routes the media to a YouTube upload and an Instagram Reel.",
    workflow: [
      "Content Calendar",
      "Canva Export",
      "Update Sheet",
      "Router",
      "YouTube + Instagram",
    ],
    tools: ["Make.com", "Google Sheets", "Canva", "YouTube", "Instagram for Business"],
    outcome:
      "One content calendar feeds several channels on schedule, with no manual uploads.",
  },
  {
    id: "ai-scheduled-email-campaign",
    title: "AI-Generated Scheduled Email Campaign",
    category: "Automation",
    platform: "n8n",
    image: "/projects/ai-scheduled-email.jpg",
    imageAlt:
      "n8n workflow: schedule or manual trigger, basic LLM chain with OpenAI, Google Sheets rows, Gmail send",
    imageFit: "contain",
    summary:
      "AI writes the email content, and the workflow sends it to a contact list from Google Sheets on a schedule.",
    problem:
      "Writing and sending recurring emails such as updates, tips, or outreach took time every cycle and often got pushed back.",
    solution:
      "A schedule (or manual run) triggers an OpenAI LLM chain to generate the message, pulls recipients from Google Sheets, and sends through Gmail.",
    workflow: [
      "Schedule Trigger",
      "AI Writes Email",
      "Load Contacts",
      "Send via Gmail",
    ],
    tools: ["n8n", "OpenAI", "Google Sheets", "Gmail"],
    outcome:
      "Recurring emails go out on time with fresh AI-written content and no manual drafting.",
  },
  {
    id: "dream-home-real-estate-app",
    title: "Dream Home Real Estate App",
    category: "App",
    platform: "Mobile App Design",
    image: "/projects/dream-home-real-estate-app.jpg",
    imageAlt:
      "Real estate mobile app: welcome screen, property search with house and apartment filters, and a listing detail page with price, facilities, and tour booking",
    imageFit: "contain",
    summary:
      "A property app for browsing homes, filtering by type, and booking a tour or making an offer from the listing.",
    problem:
      "Buyers and renters were jumping between photos, specs, and contact forms. Finding a home and taking the next step needed to happen in one place.",
    solution:
      "Three core screens: a welcome start, a search home with House, Real Estate, and Apartment filters plus recommended listings, and a detail page with price, description, facilities, Book a Tour, and Make an Offer.",
    workflow: [
      "Welcome",
      "Search & Filters",
      "Listing Detail",
      "Book a Tour",
      "Make an Offer",
    ],
    tools: appTools,
    outcome:
      "A buyer can find a property, read the details, and request a tour without leaving the app.",
  },
  {
    id: "zesty-food-delivery",
    title: "Zesty Food Delivery Website",
    category: "Website",
    platform: "Website Design & Development",
    image: "/projects/zesty-food-delivery.jpg",
    imageAlt:
      "Zesty food delivery website with hero, why-choose-us, menu cards, reviews, and an app download section",
    imageFit: "cover",
    summary:
      "A food delivery site that sells the meal, the speed, and the app — from the first screen to the order button.",
    problem:
      "A delivery brand needed one page that showed the food, the promise (fast and fresh), and a clear way to order or download the app.",
    solution:
      "A bold hero with Order Now, a 20–30 minute delivery badge, a why-choose-us row, a menu of burgers, pizza, noodles, and drinks with prices and ratings, customer reviews, and a Download App section for Google Play and the App Store.",
    workflow: [
      "Hero + Order Now",
      "Why Choose Us",
      "Menu",
      "Reviews",
      "Download the App",
    ],
    tools: websiteTools,
    outcome:
      "Visitors can order from the menu or download the Zesty app from the same page.",
  },
  {
    id: "city-services-super-app",
    title: "City Services Super App",
    category: "App",
    platform: "Mobile App Design",
    image: "/projects/city-services-super-app.jpg",
    imageAlt:
      "Super app screens for ride, delivery, travel, and food, plus trip activity and a profile with wallet and messages",
    imageFit: "contain",
    summary:
      "One app for ride, delivery, travel, and food, with trip history, a wallet, and account controls.",
    problem:
      "People were using a different app for every errand. Rides, food, parcels, and travel bookings were scattered.",
    solution:
      "A home grid for Ride, Delivery, Travel, and Food, a destination search, an activity feed of past trips, and a profile with Help, Wallet, Trips, Messages, and Settings.",
    workflow: [
      "Choose a Service",
      "Set Destination",
      "Track the Trip",
      "Activity History",
      "Wallet & Profile",
    ],
    tools: appTools,
    outcome:
      "Ride, food, travel, and delivery sit in one app, with past trips and payments in the same account.",
  },
  {
    id: "burger-ordering-app",
    title: "Burger King Ordering App",
    category: "App",
    platform: "Mobile App Design",
    image: "/projects/burger-king-ordering-app.jpg",
    imageAlt:
      "Burger ordering app with a hero meal, category chips, deal cards, and Home, Menu, Offers, Orders, and Profile tabs",
    imageFit: "contain",
    summary:
      "A burger ordering app built around limited-time deals, meal cards, and a cart that stays one tap away.",
    problem:
      "Hungry customers decide fast. A long menu with no deals, ratings, or obvious order button loses the sale.",
    solution:
      "A home screen with a hero meal and Order Now, category chips from Burgers to Desserts, deal cards with price and rating, an exclusive offer banner, and bottom tabs for Home, Menu, Offers, Orders, and Profile.",
    workflow: [
      "Hero Offer",
      "Browse Categories",
      "Pick a Meal",
      "Cart",
      "Orders",
    ],
    tools: appTools,
    outcome:
      "A customer can spot a deal, add a meal, and reach the cart without hunting through the menu.",
  },
  {
    id: "velvet-noir-perfume-app",
    title: "Velvet Noir Perfume Store App",
    category: "App",
    platform: "Mobile App Design",
    image: "/projects/velvet-noir-perfume-app.jpg",
    imageAlt:
      "Perfume store app with new arrivals, category filters, best sellers, and a product page with notes, quantity, and add to cart",
    imageFit: "contain",
    summary:
      "A perfume shop app for browsing scents by category and buying from a product page that explains the notes.",
    problem:
      "Fragrance is hard to sell on a screen. Shoppers need the scent story, the size, and a simple way to add it to the cart.",
    solution:
      "A store home with new arrivals, Women, Men, Unisex, and Gift Sets, plus best sellers. The product screen shows the bottle, price, scent notes, quantity, and Add to Cart, with Home, Explore, Wishlist, and Cart in the tab bar.",
    workflow: [
      "Store Home",
      "Categories",
      "Best Sellers",
      "Product Notes",
      "Add to Cart",
    ],
    tools: appTools,
    outcome:
      "A shopper can compare scents, save a wishlist item, and add a bottle to the cart in a few taps.",
  },
  {
    id: "smart-shipping-app",
    title: "Smart Shipping Tracker App",
    category: "App",
    platform: "Mobile App Design",
    image: "/projects/smart-shipping-app.jpg",
    imageAlt:
      "Shipping app with a get-started screen, recent shipments, order status, and a live tracking map",
    imageFit: "contain",
    summary:
      "A shipping app that shows where an order is, from packed to delivered, with live tracking and a delivery partner.",
    problem:
      "Customers and dispatch teams kept asking for updates. Status lived in emails instead of one clear timeline.",
    solution:
      "A start screen, a searchable list of recent shipments with Packed, Shipped, In Transit, and Delivered steps, and a tracking screen with the route, order details, the delivery partner, and Live Tracking.",
    workflow: [
      "Get Started",
      "Recent Shipments",
      "Status Timeline",
      "Live Map",
      "Delivery Partner",
    ],
    tools: appTools,
    outcome:
      "Anyone can search an order and see whether it is packed, in transit, or delivered.",
  },
  {
    id: "taco-ordering-app",
    title: "Taco Bell Ordering App",
    category: "App",
    platform: "Mobile App Design",
    image: "/projects/taco-bell-ordering-app.jpg",
    imageAlt:
      "Taco ordering app with a hero combo, category chips, popular picks, and a bottom bar for Home, Menu, Order, Offers, and Profile",
    imageFit: "contain",
    summary:
      "A taco ordering app with popular picks, combo deals, and an order button fixed in the tab bar.",
    problem:
      "Regulars want their usual order fast. A menu that hides combos and the cart makes a simple lunch take too long.",
    solution:
      "A home hero with Order Now, chips for Tacos, Burritos, Specialties, Nachos, Drinks, and Desserts, popular picks with ratings and prices, a discount banner, and a center Order tab between Home, Menu, Offers, and Profile.",
    workflow: [
      "Hero Combo",
      "Browse Categories",
      "Popular Picks",
      "Order Tab",
      "Offers",
    ],
    tools: appTools,
    outcome:
      "A customer can jump from a featured combo to the order tab without scrolling back to the top.",
  },
];

export const projects: Project[] = projectList.map((project, index) => ({
  ...project,
  number: String(index + 1).padStart(2, "0"),
}));

/** Shown on the home page, in this order. Everything else lives on /portfolio. */
const featuredProjectIds = [
  "dream-home-real-estate-app",
  "zesty-food-delivery",
  "telegram-ai-inbox-assistant",
  "real-estate-website",
  "smart-shipping-app",
  "law-firm-website",
];

export const featuredProjects: Project[] = featuredProjectIds.map((id) => {
  const project = projects.find((p) => p.id === id);
  if (!project) throw new Error(`Unknown featured project id: ${id}`);
  return project;
});
