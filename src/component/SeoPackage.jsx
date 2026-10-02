import { useState } from "react";
import {
  FiCheck,
  FiPlus,
  FiPhone,
  FiMail,
  FiShield,
  FiBarChart2,
  FiTarget,
} from "react-icons/fi";

/*
  Setup:
    npm i react-icons
    Tailwind CSS must be enabled in your project.
  Brand colors used below (swap freely):
    primary  #008BB9   ink  #001F2B   muted  #5B6B75   line  #E3E8EC
*/

const PHONE = "+918683828646";
const EMAIL = "sales@xntrova.com";

const includes = [
  {
    title: "Website Audit & Technical Optimization",
    items: [
      "Conduct a thorough crawlability and indexing analysis",
      "Optimize site speed by improving Core Web Vitals metrics",
      "Ensure mobile-first design and responsiveness",
    ],
  },
  {
    title: "Keyword Research & Strategy",
    items: [
      "Use AI-assisted tools to analyze search intent and competitor keywords",
      "Prioritize long-tail and local keywords for more specific ranking",
      "Continuously update keyword strategy",
    ],
  },
  {
    title: "On-Page SEO",
    items: [
      "Optimize meta elements including titles and descriptions",
      "Structure content using header tags",
      "Strengthen internal linking patterns",
    ],
  },
  {
    title: "Content Creation & Optimization",
    items: [
      "Develop high-quality, engaging content",
      "Optimize existing content by refreshing keyword usage",
      "Implement schema markup",
    ],
  },
  {
    title: "Link Building & Digital PR",
    items: [
      "Conduct ethical outreach to gain backlinks",
      "Leverage influencer collaborations and digital PR campaigns",
      "Regularly audit backlink profiles",
    ],
  },
  {
    title: "Analytics & Monthly Reporting",
    items: [
      "Provide transparent monthly reports",
      "Use analytics data to identify content gaps, technical issues, and user behavior trends",
      "Schedule regular review meetings with clear action plans",
    ],
  },
];

const highlights = [
  {
    Icon: FiShield,
    title: "White-Hat SEO Practices",
    text: "At Xntrova, we prioritize sustainable SEO techniques that comply fully with search engine guidelines, thus ensuring your site's reputation.",
  },
  {
    Icon: FiBarChart2,
    title: "Data-Backed Strategies",
    text: "We leverage advanced analytics and tools to develop an SEO strategy uniquely suited to your business objectives and market trends.",
  },
  {
    Icon: FiTarget,
    title: "Targeted Organic Traffic",
    text: "Our SEO experts optimize your website to rank higher in search results for keywords that matter most to your business.",
  },
];

const plans = [
  {
    name: "Basic SEO Plan",
    price: "₹6,950",
    features: [
      "10 Target Keywords",
      "On-Page SEO Optimization",
      "Meta Tags & Title Optimization",
      "Google Analytics Setup",
      "Monthly Performance Report",
      "Local SEO Optimization",
      "Basic Link Building (5 backlinks)",
      "Basic Technical Audit",
    ],
  },
  {
    name: "Standard SEO Plan",
    price: "₹12,500",
    featured: true,
    features: [
      "25 Target Keywords",
      "Complete On-Page SEO",
      "Advanced Keyword Research",
      "Google My Business Optimization",
      "Mobile SEO Optimization",
      "Quality Backlink Building (15 links/month)",
      "Monthly SEO Audit Report",
      "Blog Optimization (2 posts/month)",
    ],
  },
  {
    name: "Premium SEO Plan",
    price: "₹22,900",
    features: [
      "50+ Target Keywords",
      "Full Technical SEO Optimization",
      "High DA Backlinks (30/month)",
      "Competitor Analysis",
      "Content Optimization Strategy",
      "Local + Global SEO Targeting",
      "Dedicated Account Manager",
      "Weekly Ranking Reports",
      "24/7 Support",
    ],
  },
];

const faqs = [
  {
    q: "What is included in Xntrova's SEO package?",
    a: "Each package includes technical SEO, keyword strategy, on-page and off-page optimization, link building, and monthly reports for performance tracking.",
  },
  {
    q: "How long does SEO take to show results?",
    a: "Most websites see early movement in 2 to 3 months, with stronger and more stable results from month 4 to 6. Timelines depend on competition, site health, and content.",
  },
  {
    q: "How does SEO help my business grow?",
    a: "SEO brings in visitors who are already searching for what you offer. That means more qualified leads and enquiries without paying for every click.",
  },
  {
    q: "What is the difference between on-page and off-page SEO?",
    a: "On-page SEO improves your own site: content, titles, structure, and speed. Off-page SEO builds your authority elsewhere, mainly through backlinks and digital PR.",
  },
  {
    q: "Is local SEO part of the package?",
    a: "Yes. The Basic plan includes local SEO optimization, the Standard plan adds Google My Business optimization, and the Premium plan covers local and global targeting.",
  },
  {
    q: "Do you use AI tools for SEO?",
    a: "Yes. We use AI-assisted tools to analyze search intent and competitor keywords, while our SEO experts review and decide every strategy.",
  },
  {
    q: "Why choose Xntrova for SEO?",
    a: "We use white-hat methods, data-backed strategies, transparent monthly reporting, and plans you can customize to your goals and budget.",
  },
];

const services = [
  "SEO (Search Engine Optimisation)",
  "PPC (Pay-Per-Click)",
  "Social Media Marketing",
  "E-Commerce Marketing",
  "Content Marketing",
  "Web Development",
  "Email Marketing",
  "Performance Marketing",
  "Other",
];

const wrap = "mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-10";
const btn =
  "inline-flex items-center justify-center gap-2 rounded-sm px-7 py-3.5 font-semibold transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#008BB9]";
const input =
  "w-full rounded-sm border border-[#E3E8EC] px-4 py-2.5 text-sm text-[#001F2B] outline-none transition-shadow focus:ring-2 focus:ring-[#008BB9]";

function SectionHeading({ title, text }) {
  return (
    <div className="mx-auto mb-10 max-w-2xl text-center md:mb-12">
      <h2 className="mb-3 text-3xl font-bold text-[#001F2B]">{title}</h2>
      {text && <p className="text-lg font-medium text-[#5B6B75]">{text}</p>}
    </div>
  );
}

function CheckItem({ children }) {
  return (
    <li className="flex gap-2 text-sm text-[#5B6B75]">
      <FiCheck className="mt-0.5 shrink-0 text-[#008BB9]" size={16} aria-hidden="true" />
      {children}
    </li>
  );
}

function LeadForm({ idPrefix = "" }) {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    if (data.get("website_url")) return; // honeypot
    // TODO: send Object.fromEntries(data) to your API
    setSent(true);
  };

  if (sent) {
    return (
      <p className="py-6 text-center font-semibold text-[#001F2B]" role="status">
        Thanks! We'll get back to you shortly.
      </p>
    );
  }

  return (
    <form className="space-y-3" onSubmit={handleSubmit}>
      <input tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" type="text" name="website_url" />
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <input id={`${idPrefix}name`} name="name" type="text" required placeholder="Your Name*" aria-label="Your name" className={input} />
        <input id={`${idPrefix}email`} name="email" type="email" required placeholder="you@company.com*" aria-label="Your email address" className={input} />
      </div>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <input name="phone" type="tel" pattern="^\+?[0-9]{10,15}$" placeholder="+91 98765 43210" aria-label="Your phone number" className={input} />
        <input name="company" type="text" placeholder="Company Name" aria-label="Your company name" className={input} />
      </div>
      <select name="service" defaultValue="" aria-label="Which service are you interested in" className={input}>
        <option value="" disabled>
          Which service are you interested in?
        </option>
        {services.map((s) => (
          <option key={s} value={s}>
            {s}
          </option>
        ))}
      </select>
      <textarea name="message" rows={2} placeholder="Tell us about your business goals" aria-label="Tell us about your business goals" className={input} />
      <button type="submit" className="w-full rounded-sm bg-gradient-to-r from-[#001F2B] to-[#008BB9] px-6 py-3 font-semibold text-white transition-opacity hover:opacity-90">
        Submit
      </button>
    </form>
  );
}

function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <div className="space-y-3">
      {faqs.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={f.q} className="overflow-hidden rounded-md border border-[#E3E8EC]">
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${i}`}
                onClick={() => setOpen(isOpen ? -1 : i)}
                className={`flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-semibold ${
                  isOpen ? "bg-[#008BB9]/10 text-[#006A8C]" : "text-[#001F2B]"
                }`}
              >
                {f.q}
                <FiPlus size={18} aria-hidden="true" className={`shrink-0 transition-transform ${isOpen ? "rotate-45" : ""}`} />
              </button>
            </h3>
            {isOpen && (
              <div id={`faq-panel-${i}`} className="px-5 pb-4 leading-relaxed text-[#5B6B75]">
                {f.a}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default function SeoPackage() {
  return (
    <main className="text-[#001F2B]">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#001F2B] text-white lg:flex lg:min-h-[min(58vh,620px)] lg:items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-[#001320] via-[#012A3A] to-[#01415A]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_60%,rgba(0,139,185,0.25),transparent_45%)]" />
        <div className={`${wrap} relative z-10 py-10 sm:py-12 lg:py-8`}>
          <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
            <div className="max-w-2xl">
              <h1 className="mb-3 text-[35px] font-bold leading-[1.15] tracking-tight sm:text-5xl">
                Affordable SEO Packages
              </h1>
              <svg width="120" height="10" viewBox="0 0 120 10" fill="none" aria-hidden="true" className="mb-5 text-[#2BC4F0]">
                <path d="M2 7C24 2 96 2 118 7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
              </svg>
              <p className="mb-6 max-w-xl text-lg text-white/90">
                Choose from our transparent, results-driven SEO plans designed for businesses of all sizes. We deliver
                measurable growth, improved visibility, and long-term success.
              </p>
              <a href={`tel:${PHONE}`} className={`${btn} border border-[#008BB9] bg-[#008BB9] text-white`}>
                <FiPhone size={18} aria-hidden="true" /> Chat with us
              </a>
            </div>

            <div id="quote" className="w-full max-w-md justify-self-center rounded-lg border border-[#E3E8EC] bg-white/95 p-6 shadow-[0_20px_50px_rgba(0,19,32,0.35)] backdrop-blur-sm lg:justify-self-end">
              <p className="mb-1 text-xl font-bold">Get a Free Digital Audit</p>
              <p className="mb-3 text-sm text-[#5B6B75]">Tell us about your business and we'll get back to you shortly.</p>
              <LeadForm idPrefix="hero-" />
            </div>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className={`${wrap} py-16`}>
        <SectionHeading
          title="Xntrova SEO Solutions - What do our packages include"
          text="Whether you're running a startup, an e-commerce brand, or a global business, our scalable SEO services in Delhi ensure measurable results."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {includes.map((b) => (
            <div key={b.title} className="h-full rounded-md border border-[#E3E8EC] bg-white p-6 shadow-[0_8px_24px_rgba(16,24,32,0.06)]">
              <p className="mb-3 font-semibold">{b.title}</p>
              <ul className="space-y-2">
                {b.items.map((t) => (
                  <CheckItem key={t}>{t}</CheckItem>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Highlights */}
      <section className={`${wrap} py-16`}>
        <SectionHeading
          title="Elevate your online presence with our Custom SEO Packages"
          text="Xntrova's SEO packages are designed to deliver sustainable business growth through proven strategies tailored for your unique goals."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map(({ Icon, title, text }) => (
            <div key={title} className="flex h-full items-start gap-4 rounded-md bg-[#012A3A] p-6">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#008BB9] text-white">
                <Icon size={22} aria-hidden="true" />
              </div>
              <div>
                <p className="mb-1 font-semibold text-white">{title}</p>
                <p className="text-sm text-white/70">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-[#F1F8FB] py-16">
        <div className={wrap}>
          <SectionHeading
            title="Choose the SEO Package That Fits Your Business Goals"
            text="We offer tailored SEO packages designed to help your business improve visibility, rankings, and ROI — no matter your budget or goals."
          />
          <div className="grid gap-6 sm:grid-cols-3">
            {plans.map((p) => (
              <div
                key={p.name}
                className={`flex h-full flex-col rounded-md border border-[#E3E8EC] bg-white p-6 shadow-[0_8px_24px_rgba(16,24,32,0.06)] ${
                  p.featured ? "ring-2 ring-[#008BB9]" : ""
                }`}
              >
                <p className="mb-1 font-semibold">{p.name}</p>
                <p className="text-3xl font-bold text-[#008BB9]">
                  {p.price}
                  <span className="text-sm font-normal text-[#5B6B75]"> / month</span>
                </p>
                <ul className="mt-5 flex-1 space-y-2.5">
                  {p.features.map((f) => (
                    <CheckItem key={f}>{f}</CheckItem>
                  ))}
                </ul>
                <a href="#quote" className={`${btn} mt-6 w-full border border-[#008BB9] bg-[#008BB9] text-white`}>
                  Get Price Estimate
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className={`${wrap} py-16`}>
        <SectionHeading
          title="Get to Know More About SEO Packages"
          text="Having queries about our SEO packages? Our FAQ section is here to help."
        />
        <div className="max-w-3xl mx-auto">
          <Faq />
        </div>
      </section>

      {/* Contact info */}
      <section className={`${wrap} py-16`}>
        <h2 className="mb-3 text-3xl font-bold">Get in touch with us</h2>
        <p className="mb-8 text-[#5B6B75]">Get in touch with our experts and seek further assistance</p>
        <div className="space-y-4">
          <a href={`tel:${PHONE}`} className="group flex items-center gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#008BB9]/10 text-[#008BB9]">
              <FiPhone size={20} aria-hidden="true" />
            </span>
            <span>
              <span className="block text-sm text-[#5B6B75]">Call For Advice</span>
              <span className="block font-semibold group-hover:underline">+91 868-382-8646</span>
            </span>
          </a>
          <a href={`mailto:${EMAIL}`} className="group flex items-center gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#008BB9]/10 text-[#008BB9]">
              <FiMail size={20} aria-hidden="true" />
            </span>
            <span>
              <span className="block text-sm text-[#5B6B75]">Mail Us</span>
              <span className="block font-semibold group-hover:underline">{EMAIL}</span>
            </span>
          </a>
        </div>
      </section>

      {/* CTA band */}
      <section className="bg-[#001F2B] text-white">
        <div className={`${wrap} py-16 text-center`}>
          <h2 className="mb-4 text-3xl font-bold">Elevate Your Brand with Digital Excellence</h2>
          <p className="mx-auto mb-8 max-w-2xl text-white/80">
            Get a comprehensive digital audit and discover how we can accelerate your business growth
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/contact-us/" className={`${btn} border border-[#008BB9] bg-[#008BB9] text-white`}>
              Get Free Digital Audit
            </a>
            {/* Replace "#" with the real brochure file URL */}
            <a href="#" className={`${btn} border border-white/70 bg-transparent text-white hover:bg-white/10`}>
              Download Brochure
            </a>
          </div>
        </div>
      </section>

      {/* Contact form */}
      <section id="contact" className={`${wrap} py-16`}>
        <SectionHeading title="Got a Project in Mind? Contact Us" text="Tell us about your goals and we'll get back to you shortly." />
        <div className="mx-auto max-w-2xl">
          <LeadForm idPrefix="contact-" />
        </div>
      </section>
    </main>
  );
}