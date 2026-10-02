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
  {
    id: "jewellery-shop-website",
    title: "Jewellery Shop Website",
    category: "Website",
    platform: "Website Design & Development",
    image: "/projects/jewellery-shop-website.jpg",
    imageAlt:
      "Jewellery Shop fine jewels website with Timeless Brilliance hero, category cards for rings, necklaces, earrings, bracelets and bridal, a loved-most product grid, and client stories",
    imageFit: "cover",
    summary:
      "A warm fine-jewelry storefront for browsing signature pieces, booking a consultation, and reading the craft behind each design.",
    problem:
      "Jewelry shoppers need to see the piece, the price, and a reason to trust the maker before they book a private consultation.",
    solution:
      "A gold-toned page with a Timeless Brilliance hero, category cards for rings, necklaces, earrings, bracelets, and bridal, editorial collections, a Loved Most grid with prices and ratings, a craftsmanship story, shipping and returns promises, client quotes, and a journal.",
    workflow: [
      "Hero + Consultation",
      "Shop by Category",
      "Loved Most",
      "Craft & Promises",
      "Client Stories",
    ],
    tools: websiteTools,
    outcome:
      "A visitor can move from a signature piece to a category, a product, or a private consultation without leaving the page.",
  },
  {
    id: "beauty-shop-website",
    title: "Beauty Shop Cosmetics Website",
    category: "Website",
    platform: "Website Design & Development",
    image: "/projects/beauty-shop-website.jpg",
    imageAlt:
      "Beauty Shop cosmetics website with a beauty hub hero, category circles, hair and skincare deals, brand story, tips, and newsletter",
    imageFit: "cover",
    summary:
      "A cosmetics shop for browsing skin, makeup, hair, fragrance, nails, and body care, with deals called out above the fold.",
    problem:
      "A large beauty catalog is hard to scan. Shoppers need categories, current deals, and a short path to the products.",
    solution:
      "A green storefront with a Beauty & Cosmetics Hub hero, trust notes for quality, payment, delivery, and returns, round category icons, hair-care and skincare offer cards, a founder story with catalog stats, ingredient and cruelty-free badges, beauty tips, and an email signup.",
    workflow: [
      "Hero + Shop Now",
      "Shop by Category",
      "Hair & Skin Deals",
      "Brand Story",
      "Tips & Newsletter",
    ],
    tools: websiteTools,
    outcome:
      "A shopper can jump into a category or a live deal, then subscribe for the next drop.",
  },
  {
    id: "deart-jewelry-catalog",
    title: "DE'ART Jewelry Catalog",
    category: "Website",
    platform: "Website Design & Development",
    image: "/projects/deart-jewelry-catalog.jpg",
    imageAlt:
      "DE'ART 2025 jewelry catalog with a sapphire portrait, heart pendant, diamond ring, and advantage cards on a dark navy layout",
    imageFit: "cover",
    summary:
      "A dark 2025 product catalog for DE'ART, built to present signature stones, a ring story, and a video look at the collection.",
    problem:
      "A jewelry catalog has to feel rare. A plain product list does not show the stone, the setting, or why the piece is worth a closer look.",
    solution:
      "A navy presentation with the DE'ART name, a sapphire portrait, a heart pendant on velvet, a diamond ring section with material and sizing notes, a play button for the 2025 collection film, and four advantage cards for exclusive pieces, quality, range, and packaging.",
    workflow: [
      "Catalog Cover",
      "Designer Jewelry",
      "Signature Ring",
      "Collection Film",
      "Advantages",
    ],
    tools: websiteTools,
    outcome:
      "A reader can move from the cover story to a single ring, its sizes, and a filmed look at the 2025 collection.",
  },
  {
    id: "street-fashion-website",
    title: "Street Fashion Store",
    category: "Website",
    platform: "Website Design & Development",
    image: "/projects/street-fashion-website.jpg",
    imageAlt:
      "Street Fashion store with a summer collection hero, cart, bestsellers, a shoes sale, and a latest-products grid",
    imageFit: "cover",
    summary:
      "A streetwear shop with a summer collection hero, a live cart, bestsellers, and a latest-products row.",
    problem:
      "Streetwear buyers skim fast. The sale, the cart total, and the newest drops need to be visible at once.",
    solution:
      "A concrete-textured layout with apparel, shoes, accessories, brands, and outlet tabs, a Summer Collection hero, a header cart with checkout, a shoes sale tile, a bestsellers spotlight, new-arrival promos, and a latest-products grid with prices and quick view.",
    workflow: [
      "Summer Hero",
      "Cart & Checkout",
      "Bestsellers",
      "Sale Tiles",
      "Latest Products",
    ],
    tools: websiteTools,
    outcome:
      "A shopper can see the cart total, open a bestseller, and scan the latest prices from the same screen.",
  },
  {
    id: "lunora-fashion-website",
    title: "Lunora Fashion Website",
    category: "Website",
    platform: "Website Design & Development",
    image: "/projects/lunora-fashion-website.jpg",
    imageAlt:
      "Lunora fashion website with an everyday-style hero, category icons, collection tiles, bestseller products, and a style-list signup",
    imageFit: "cover",
    summary:
      "A fashion store for women, men, dresses, shoes, and bags, with a seasonal sale and a bestseller grid.",
    problem:
      "An everyday fashion shop needs a clear way in: shop the look, filter by category, or catch the current sale.",
    solution:
      "A light editorial page with an Elevate Your Everyday Style hero, category icons from women and men through sale, collection tiles for a spring sale and new arrivals, a most-loved product row with prices and ratings, shipping and returns notes, and a style-list signup.",
    workflow: [
      "Style Hero",
      "Category Icons",
      "Seasonal Sale",
      "Loved Picks",
      "Style List",
    ],
    tools: websiteTools,
    outcome:
      "A visitor can enter a category, open the sale, or join the list for the next drop.",
  },
  {
    id: "urbanstyle-website",
    title: "UrbanStyle Clothing Store",
    category: "Website",
    platform: "Website Design & Development",
    image: "/projects/urbanstyle-website.jpg",
    imageAlt:
      "UrbanStyle clothing store with a summer arrivals banner, category tiles, filters for price color and size, and an add-to-cart product grid",
    imageFit: "cover",
    summary:
      "A clothing shop with summer arrivals, a sale tile, and filters for price, color, size, and brand.",
    problem:
      "Apparel catalogs get noisy. Shoppers need filters and an add-to-cart button on every product, not after a second page.",
    solution:
      "An UrbanStyle store with search, a summer arrivals banner, tiles for new releases, bestsellers, the men's collection, and sale items, then a trending grid beside filters for category, a $20–$150 price range, color, size, and brand. Each card has a rating and Add to Cart.",
    workflow: [
      "Summer Banner",
      "Collection Tiles",
      "Filter Sidebar",
      "Trending Grid",
      "Add to Cart",
    ],
    tools: websiteTools,
    outcome:
      "A shopper can narrow by size or price and add a piece to the cart from the grid.",
  },
  {
    id: "modeza-fashion-website",
    title: "Modeza Fashion Website",
    category: "Website",
    platform: "Website Design & Development",
    image: "/projects/modeza-fashion-website.jpg",
    imageAlt:
      "Modeza fashion website with a Timeless Elegance hero, shipping promises, dress and outerwear categories, and a summer sale banner",
    imageFit: "cover",
    summary:
      "A Modeza lookbook for the 2026 collection, with category browsing and a summer sale up to 50% off.",
    problem:
      "A new collection needs one calm page: the campaign image, the categories, and the sale, without a crowded menu.",
    solution:
      "A cream layout with a Timeless Elegance hero, customer and rating notes, free shipping, returns, payment, and support promises, a shop-by-category row for dresses, tops, outerwear, and bottoms, and a summer sale panel with a shop button.",
    workflow: [
      "Collection Hero",
      "Shopping Promises",
      "Shop by Category",
      "Summer Sale",
      "Explore Collection",
    ],
    tools: websiteTools,
    outcome:
      "A visitor can open the new collection, a category, or the summer sale from the first screen.",
  },
  {
    id: "timeless-by-nature-website",
    title: "Timeless By Nature Fashion Website",
    category: "Website",
    platform: "Website Design & Development",
    image: "/projects/timeless-by-nature-website.jpg",
    imageAlt:
      "Dark fashion website with a Timeless By Nature hero, men women tops and accessories categories, new arrivals, and best sellers",
    imageFit: "cover",
    summary:
      "A dark fashion store for premium essentials, with men, women, tops, and accessories leading into new arrivals and bestsellers.",
    problem:
      "A premium wardrobe site has to feel quiet and still make prices, categories, and new arrivals easy to scan.",
    solution:
      "A black and sand layout with a Timeless By Nature hero, notes on fabrics, design, and shipping, category portraits, a new-arrivals row with prices, a summer collection panel, bestsellers, journal stories, and an email signup.",
    workflow: [
      "Collection Hero",
      "Shop by Category",
      "New Arrivals",
      "Bestsellers",
      "Journal & Signup",
    ],
    tools: websiteTools,
    outcome:
      "A shopper can move from the campaign into a category, a priced arrival, or a care story.",
  },
  {
    id: "vectra-watch-marketplace",
    title: "Vectra Watch Marketplace",
    category: "Website",
    platform: "Website Design & Development",
    image: "/projects/vectra-watch-marketplace.jpg",
    imageAlt:
      "Vectra luxury watch marketplace with latest listings, brand categories, recommended watches, and live auctions",
    imageFit: "cover",
    summary:
      "A luxury watch marketplace for browsing listings by brand and joining live auctions.",
    problem:
      "Watch buyers compare references across brands. A marketplace has to show the listing, the price, and whether a lot is in auction.",
    solution:
      "A dark Vectra home with latest listings and a Shop Now path, a brand row, recommended watches with prices and ratings, and a Vectra Auctions row marked Ending Soon, with Bid and Watch actions on each lot.",
    workflow: [
      "Latest Listings",
      "Shop by Brand",
      "Recommended",
      "Live Auctions",
      "Bid or Watch",
    ],
    tools: websiteTools,
    outcome:
      "A buyer can open a listing, compare a recommendation, or bid on a lot that is ending soon.",
  },
  {
    id: "scheduled-social-content",
    title: "Scheduled Social Content Workflow",
    category: "Automation",
    platform: "n8n",
    image: "/projects/scheduled-social-content.jpg",
    imageAlt:
      "n8n workflow: schedule trigger, Google Sheet row, AI agent, image prompt, generate image, then post to Facebook, LinkedIn, and Instagram",
    imageFit: "contain",
    summary:
      "A scheduled flow that takes the next sheet row, writes the post, makes the image, and publishes it to Facebook, LinkedIn, and Instagram.",
    problem:
      "Each campaign meant copying a row, creating a visual, and uploading the same post to three networks by hand.",
    solution:
      "A schedule trigger reads the next sheet row. An AI agent writes the post and an image prompt agent prepares the picture. The image is converted, posted to Facebook, LinkedIn, and Instagram, emailed, and the sheet row is marked done.",
    workflow: [
      "Schedule",
      "Sheet Row",
      "AI Copy + Image",
      "Social Posts",
      "Update Sheet",
    ],
    tools: ["n8n", "Google Sheets", "OpenAI", "Facebook", "LinkedIn", "Instagram", "Gmail"],
    outcome:
      "One sheet row becomes a caption, an image, and posts on three networks without a manual upload.",
  },
  {
    id: "zammad-ticket-workflow",
    title: "Zammad Ticket Attachment Workflow",
    category: "Automation",
    platform: "n8n",
    image: "/projects/zammad-ticket-workflow.jpg",
    imageAlt:
      "n8n workflow that logs in, uploads a file, comments on a Zammad ticket, closes it, and a second path that filters ticket attachments",
    imageFit: "contain",
    summary:
      "A support flow that uploads a file, comments on the Zammad ticket, and closes it when the upload succeeds.",
    problem:
      "Attachments and ticket comments were handled one by one, and a failed upload still needed a person to notice it.",
    solution:
      "The flow logs in, uploads the file, and if the upload is ok it adds a Zammad comment and closes the ticket. A second path gets tickets, maps them, fetches articles, filters attachments, and corrects the file before commenting.",
    workflow: [
      "Login",
      "Upload File",
      "Zammad Comment",
      "Close Ticket",
      "Filter Attachments",
    ],
    tools: ["n8n", "Zammad", "HTTP Request"],
    outcome:
      "A successful upload leaves a comment and closes the ticket. Failed uploads stay on a separate path.",
  },
  {
    id: "ai-agent-architecture",
    title: "AI Agent Architecture",
    category: "Automation",
    platform: "AI Agent Design",
    image: "/projects/ai-agent-architecture.jpg",
    imageAlt:
      "AI agent architecture diagram from user goal through channels, planning, memory, models, tools, data, safety checks, and deployment",
    imageFit: "contain",
    summary:
      "An architecture map for an AI agent, from the user goal through channels, planning, memory, models, tools, and deployment.",
    problem:
      "An agent is more than a chat box. Without a map of memory, tools, and checks, the system is hard to explain or extend.",
    solution:
      "One diagram splits the agent into layers: interface and channels, planning and orchestration, memory, language models, tools and actions, a data layer, observability and safety, and deployment.",
    workflow: [
      "User Goal",
      "Channels & Planning",
      "Memory & Models",
      "Tools & Data",
      "Checks & Deploy",
    ],
    tools: ["Chat & API", "Planning", "Memory", "Language Models", "Tools & Actions", "Data Layer"],
    outcome:
      "The whole agent can be walked through in one view, from the request to the checks before it goes live.",
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
