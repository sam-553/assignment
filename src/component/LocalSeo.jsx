import { useState } from "react";
import {
  FiCheck,
  FiPlus,
} from "react-icons/fi";

const serviceOptions = [
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

const localSeoPackages = [
  {
    title: "GMB & Local Listing Management",
    items: [
      "Claim, verify, and optimize your Google Business Profile",
      "Manage additional local listings on Bing Places, Yelp, and relevant niche directories",
      "Respond to customer reviews promptly with our local SEO package",
    ],
  },
  {
    title: "Keyword Research and On-page Local SEO",
    items: [
      "Identify and target geo-specific, high-intent keywords",
      "Optimize website elements such as meta titles, descriptions, header tags, and URLs",
      "Create dedicated location and service pages",
    ],
  },
  {
    title: "Citation Building and Review Management",
    items: [
      "Build and maintain a consistent NAP",
      "Obtain and manage positive customer reviews",
      "Monitor citation accuracy regularly",
    ],
  },
  {
    title: "Local Content Creation & Optimization",
    items: [
      "Develop blogs, news, event announcements, and landing pages tailored to the local community",
      "Incorporate location-based keywords naturally within content",
      "Update existing content periodically",
    ],
  },
  {
    title: "Local Link Building & Partnerships",
    items: [
      "Secure backlinks from reputable local sources",
      "Engage in digital PR and sponsorship opportunities",
      "Utilize reciprocal partnerships within the community",
    ],
  },
  {
    title: "Performance Tracking & Reporting",
    items: [
      "Monitor local search rankings, Google Business Profile insights, and lead conversions",
      "Provide monthly detailed reports with actionable insights",
      "Schedule regular review meetings to align SEO efforts with evolving business objectives",
    ],
  },
];

const pricingPlans = [
  {
    title: "Basic Local SEO Plan",
    price: "₹6,950",
    items: [
      "Google My Business Setup",
      "10 Local Keywords Optimization",
      "NAP Consistency Check",
      "Business Listing on 10 Directories",
      "Review Monitoring Setup",
      "Monthly Ranking Report",
    ],
  },
  {
    title: "Standard Local SEO Plan",
    price: "₹12,500",
    featured: true,
    items: [
      "25 Local Keywords Optimization",
      "Advanced GMB Optimization",
      "Local Landing Page Creation",
      "20 Local Citations (Manual)",
      "Review & Reputation Management",
      "Local Link Building (10 backlinks)",
    ],
  },
  {
    title: "Premium Local SEO Plan",
    price: "₹22,900",
    items: [
      "50+ Local Keywords",
      "Full Local SEO Audit",
      "Google Map Embedding Optimization",
      "High-Authority Local Backlinks",
      "Competitor Tracking & Reporting",
      "24/7 Customer Support",
    ],
  },
];

const faqs = [
  {
    question: "What is included in your Local SEO packages?",
    answer:
      "Our packages cover Google My Business optimization, local keyword targeting, citation building, review management, and regular performance reporting.",
  },
  {
    question: "Do you guarantee a #1 ranking in local search results?",
    answer:
      "While we cannot guarantee specific rankings, our white-hat strategies are designed to improve your visibility and traffic sustainably.",
  },
  {
    question: "Can you optimize my business for multiple locations?",
    answer:
      "Yes, we offer multi-location local SEO services customized to manage and boost visibility for multiple branches or service areas.",
  },
  {
    question: "How important are online reviews for local SEO?",
    answer:
      "Very important. Positive reviews improve your local rankings and trustworthiness, influencing customer decisions and search engine rankings.",
  },
  {
    question: "Will you create new content for my local SEO campaign?",
    answer:
      "Yes, we provide locally relevant content creation, including blog posts, service pages, and keyword-optimized descriptions, to enhance local engagement.",
  },
  {
    question: "How do you handle citation building?",
    answer:
      "We manually build and maintain consistent, accurate business listings on relevant local directories critical to your geographic area.",
  },
  {
    question: "Do I need technical changes to my website for local SEO?",
    answer:
      "Yes, sometimes. Our team first evaluates your site for mobile-friendliness, page speed, and schema markup to ensure it supports local SEO best practices.",
  },
];

const heroImage =
  "https://res.cloudinary.com/di93stsbz/image/upload/f_auto,q_auto,c_limit,w_1920/v1787226393/xntrova-wp-media/banner-images/image-83.png";

const inputClass =
  "w-full rounded-sm border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-[#0075A2] focus:ring-2 focus:ring-[#0075A2]/20";

function LeadForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <input
        type="text"
        name="website_url"
        tabIndex="-1"
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <input
          type="text"
          name="name"
          required
          placeholder="Your Name*"
          aria-label="Your name"
          className={inputClass}
        />

        <input
          type="email"
          name="email"
          required
          placeholder="you@company.com*"
          aria-label="Your email address"
          className={inputClass}
        />
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <input
          type="tel"
          name="phone"
          placeholder="+91 98765 43210"
          aria-label="Your phone number"
          pattern="^\\+?[0-9]{10,15}$"
          className={inputClass}
        />

        <input
          type="text"
          name="company"
          placeholder="Company Name"
          aria-label="Your company name"
          className={inputClass}
        />
      </div>

      <select
        name="service"
        defaultValue=""
        aria-label="Which service are you interested in"
        className={`${inputClass} cursor-pointer`}
      >
        <option value="" disabled>
          Which service are you interested in?
        </option>

        {serviceOptions.map((service) => (
          <option key={service} value={service}>
            {service}
          </option>
        ))}
      </select>

      <textarea
        name="message"
        rows={2}
        placeholder="Tell us about your business goals"
        aria-label="Tell us about your business goals"
        className={`${inputClass} resize-none`}
      />

      <button
        type="submit"
        className="w-full rounded-sm bg-gradient-to-r from-[#001F2B] to-[#0075A2] px-6 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:opacity-90 hover:shadow-lg"
      >
        Submit
      </button>
    </form>
  );
}

function LocalSeo() {
  const [activeFaq, setActiveFaq] = useState(0);

  const toggleFaq = (index) => {
    setActiveFaq((current) => (current === index ? -1 : index));
  };

  return (
    <main className="overflow-hidden bg-white text-slate-900">
      <section className="relative overflow-hidden bg-[#001F2B] text-white lg:flex lg:min-h-[min(58vh,620px)] lg:items-center">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt=""
            fetchPriority="high"
            loading="eager"
            decoding="sync"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-br from-[#001320]/72 via-[#012A3A]/50 to-[#01415A]/26" />

        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_18%_45%,rgba(0,15,26,0.55),transparent_70%)]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_60%,rgba(0,139,185,0.20),transparent_45%)]" />

        <div className="relative z-10 mx-auto w-full max-w-[1440px] px-5 py-10 sm:px-8 sm:py-12 lg:px-10 lg:py-8">
          <div className="grid w-full grid-cols-1 items-center gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
            <div className="max-w-2xl">
              <h1 className="mb-3 text-[35px] font-bold leading-[1.15] tracking-tight sm:text-5xl lg:text-6xl">
                Local SEO Services
              </h1>

              <svg
                width="120"
                height="10"
                viewBox="0 0 120 10"
                fill="none"
                aria-hidden="true"
                className="mb-5 text-[#00A8D6]"
              >
                <path
                  d="M2 7C24 2 96 2 118 7"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>

              <p className="mb-6 max-w-xl text-base leading-7 text-white/90 sm:text-lg">
                Get found by customers near you. We optimize your local
                listings, maps, and online presence to drive real-world visits
                and local business growth.
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href="tel:+918683828646"
                  className="inline-flex items-center justify-center gap-2 rounded-sm border border-[#0075A2] bg-[#0075A2] px-7 py-3.5 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:opacity-90 hover:shadow-lg"
                >
                  Chat with us
                </a>
              </div>
            </div>

            <div
              id="quote"
              className="w-full max-w-md justify-self-center rounded-lg border border-slate-200 bg-white/95 p-6 text-slate-900 shadow-[0_20px_50px_rgba(0,19,32,0.35)] backdrop-blur-sm lg:justify-self-end"
            >
              <p className="mb-1 text-xl font-bold">
                Get a Free Digital Audit
              </p>

              <p className="mb-3 text-sm text-slate-500">
                Tell us about your business and we’ll get back to you shortly.
              </p>

              <LeadForm />
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#001F2B]/30 to-transparent" />
      </section>

      <section className="mx-auto w-full max-w-[1440px] px-5 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto mb-10 max-w-2xl text-center md:mb-12">
          <h2 className="mb-3 text-2xl font-medium md:text-3xl md:font-bold">
            Boost your local presence with Xntrova's Local SEO Packages
          </h2>

          <p className="text-base font-medium leading-7 text-slate-500 md:text-lg">
            Turn clicks into customers and improve your foot traffic with
            Xntrova's custom-built local SEO business packages.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {localSeoPackages.map((item) => (
            <div key={item.title} className="h-full">
              <div className="h-full rounded-md border border-slate-200 bg-white p-6 shadow-[0_1px_2px_rgba(16,24,32,0.04),0_8px_24px_rgba(16,24,32,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <p className="mb-3 font-semibold text-slate-900">
                  {item.title}
                </p>

                <ul className="space-y-2">
                  {item.items.map((feature) => (
                    <li
                      key={feature}
                      className="flex gap-2 text-sm leading-6 text-slate-500"
                    >
                      <FiCheck
                        size={16}
                        className="mt-1 shrink-0 text-[#0075A2]"
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-10">
          <div className="mx-auto mb-10 max-w-2xl text-center md:mb-12">
            <h2 className="mb-3 text-2xl font-medium md:text-3xl md:font-bold">
              Select the plan that fits best for your business
            </h2>

            <p className="text-base font-medium leading-7 text-slate-500 md:text-lg">
              Our local SEO agency offers flexible prices and local SEO
              packages India to ease customers.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-3">
            {pricingPlans.map((plan) => (
              <div key={plan.title} className="h-full">
                <div
                  className={`flex h-full flex-col rounded-md border border-slate-200 bg-white p-6 shadow-[0_1px_2px_rgba(16,24,32,0.04),0_8px_24px_rgba(16,24,32,0.06)] ${
                    plan.featured
                      ? "ring-2 ring-[#0075A2]"
                      : ""
                  }`}
                >
                  <p className="mb-1 font-semibold text-slate-900">
                    {plan.title}
                  </p>

                  <p className="text-3xl font-bold text-[#0075A2]">
                    {plan.price}
                    <span className="text-sm font-normal text-slate-500">
                      {" "}
                      / month
                    </span>
                  </p>

                  <ul className="mt-5 flex-1 space-y-2.5">
                    {plan.items.map((feature) => (
                      <li
                        key={feature}
                        className="flex gap-2 text-sm leading-6 text-slate-500"
                      >
                        <FiCheck
                          size={16}
                          className="mt-1 shrink-0 text-[#0075A2]"
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#quote"
                    className="mt-6 inline-flex w-full items-center justify-center rounded-sm border border-[#0075A2] bg-[#0075A2] px-7 py-3.5 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#006487] hover:shadow-lg"
                  >
                    Get Price Estimate
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1440px] px-5 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto mb-10 max-w-2xl text-center md:mb-12">
          <h2 className="mb-3 text-2xl font-medium md:text-3xl md:font-bold">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="mx-auto max-w-3xl space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = activeFaq === index;

            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-md border border-slate-200 shadow-[0_1px_2px_rgba(16,24,32,0.04),0_8px_24px_rgba(16,24,32,0.06)]"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  aria-expanded={isOpen}
                  className={`flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-semibold transition-all duration-300 ${
                    isOpen
                      ? "bg-[#0075A2]/10 text-[#006487]"
                      : "bg-white text-slate-800 hover:bg-slate-50"
                  }`}
                >
                  <span>{faq.question}</span>

                  <FiPlus
                    size={18}
                    className={`shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  />
                </button>

                <div
                  className={`grid transition-all duration-300 ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-4 text-sm leading-relaxed text-slate-500">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section
        id="contact"
        className="mx-auto w-full max-w-[1440px] px-5 py-16 sm:px-8 lg:px-10"
      >
        <div className="mx-auto mb-10 max-w-2xl text-center md:mb-12">
          <h2 className="mb-3 text-2xl font-medium md:text-3xl md:font-bold">
            Got a Project in Mind? Contact Us
          </h2>

          <p className="text-base font-medium leading-7 text-slate-500 md:text-lg">
            Tell us about your goals and we'll get back to you shortly.
          </p>
        </div>

        <div className="mx-auto max-w-2xl">
          <LeadForm />
        </div>
      </section>
    </main>
  );
}

export default LocalSeo;