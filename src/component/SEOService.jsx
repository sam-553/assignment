import { useState } from "react";
import {
  FiPhone,
  FiMail,
  FiPlus,
  FiSearch,
  FiLink,
  FiFileText,
  FiSettings,
  FiTarget,
  FiBarChart2,
  FiCheckCircle,
} from "react-icons/fi";

const benefits = [
  "Customized SEO solution built around your industry",
  "Comprehensive SEO audit",
  "On-page and Off-page SEO",
  "Local and global SEO services to target the marketing funnel",
  "Improved user experience",
  "Maximizes the benefit of PPC campaigns",
];

const whyChooseUs = [
  {
    title: "SEO Audit",
    description:
      "Being the best SEO company in Delhi, we evaluate your website's SEO health to identify issues and opportunities for improved search rankings.",
    icon: FiSearch,
  },
  {
    title: "Keyword Research",
    description:
      "Keyword is the heart of any SEO strategy, so our experts first look for competitive keywords around your business.",
    icon: FiTarget,
  },
  {
    title: "Link Building",
    description:
      "We help build high-quality backlinks from reputable websites to increase your site's authority.",
    icon: FiLink,
  },
  {
    title: "On-page SEO",
    description:
      "At Xntrova, we optimize individual web pages' content, meta tags, headings, and internal links to enhance relevance.",
    icon: FiFileText,
  },
  {
    title: "Off-page SEO",
    description:
      "Enhance your website's authority and trustworthiness through external factors like backlinks, social signals, etc.",
    icon: FiBarChart2,
  },
  {
    title: "Technical SEO",
    description:
      "Improve your website's speed, navigation, and responsiveness with our technical SEO tactics.",
    icon: FiSettings,
  },
];

const businessNeeds = [
  "Excellent, performance-driven strategies",
  "No hidden charges",
  "Open communication",
  "Customized solutions",
  "24/7 customer support",
  "Experience team",
  "Integrated digital marketing",
  "Data-driven approach",
];

const faqs = [
  {
    question: "What is SEO, and why is it important for my business?",
    answer:
      "SEO stands for Search Engine Optimization; it helps your website rank higher on search engines to attract more organic traffic and potential customers.",
  },
  {
    question: "How long does it take to see results from SEO?",
    answer:
      "SEO results depend on factors such as competition, website condition, content quality, authority, and the strategy being implemented. Meaningful improvements generally require consistent work over time.",
  },
  {
    question: "Will SEO work for small local businesses?",
    answer:
      "Yes. Local SEO can help small businesses improve their visibility for searches related to their products, services, and geographic area.",
  },
  {
    question: "Do you guarantee first-page rankings on Google?",
    answer:
      "No legitimate SEO provider can guarantee a specific Google ranking because search results depend on continuously changing algorithms, competition, location, and many other factors.",
  },
  {
    question: "How do you approach keyword research?",
    answer:
      "We analyze search intent, relevance, competition, business goals, and potential traffic before selecting keywords that fit the website's target audience.",
  },
  {
    question: "What's the difference between on-page and off-page SEO?",
    answer:
      "On-page SEO focuses on elements within your website such as content, headings, metadata, internal links, and technical structure. Off-page SEO focuses on external signals such as backlinks and brand authority.",
  },
  {
    question: "Can SEO increase my website sales?",
    answer:
      "SEO can increase qualified organic traffic and improve visibility for relevant searches. Better traffic and user experience can contribute to conversions and sales, although results vary by business and market.",
  },
];

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

const heroImage =
  "https://res.cloudinary.com/di93stsbz/image/upload/f_auto,q_auto,c_limit,w_1920/v1787226400/xntrova-wp-media/banner-images/image-98.png";

const benefitImage =
  "https://res.cloudinary.com/di93stsbz/image/upload/f_auto,q_auto,c_limit,w_1920/v1787209795/xntrova-wp-media/xntrova-wp-media/Rectangle-4484-12-ed060be42f44f59d.png";

const contactImage =
  "https://res.cloudinary.com/di93stsbz/image/upload/f_auto,q_auto,c_limit,w_1920/v1787209714/xntrova-wp-media/xntrova-wp-media/contact-man-ef520e947c3403b4.png";

const inputClass =
  "w-full rounded-sm border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-[#0075A2] focus:ring-2 focus:ring-[#0075A2]/20";

function LeadForm({ compact = false }) {
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
          pattern="^\+?[0-9]{10,15}$"
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
        placeholder="Tell us about your business goals"
        aria-label="Tell us about your business goals"
        rows={compact ? 2 : 4}
        className={`${inputClass} resize-none`}
      />

      <button
        type="submit"
        className="w-full rounded-sm bg-gradient-to-r from-[#001F2B] to-[#0075A2] px-6 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
      >
        Submit
      </button>
    </form>
  );
}

function SEOService() {
  const [activeFaq, setActiveFaq] = useState(0);

  const toggleFaq = (index) => {
    setActiveFaq((current) => (current === index ? -1 : index));
  };

  return (
    <main className="overflow-hidden bg-white text-slate-900">
      <section className="relative flex min-h-[620px] items-center overflow-hidden bg-[#001F2B] text-white">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt=""
            fetchPriority="high"
            loading="eager"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-br from-[#001320]/90 via-[#012A3A]/65 to-[#01415A]/35" />

        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_18%_45%,rgba(0,15,26,0.55),transparent_70%)]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_60%,rgba(0,139,185,0.20),transparent_45%)]" />

        <div className="relative z-10 mx-auto w-full max-w-[1440px] px-5 py-12 sm:px-8 lg:px-10 lg:py-16">
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="max-w-2xl">
              <h1 className="mb-4 text-[35px] font-bold leading-[1.15] tracking-tight sm:text-5xl lg:text-6xl">
                Search Engine Optimization
              </h1>

              <div className="mb-5">
                <svg
                  width="120"
                  height="10"
                  viewBox="0 0 120 10"
                  fill="none"
                  aria-hidden="true"
                  className="text-[#00A8D6]"
                >
                  <path
                    d="M2 7C24 2 96 2 118 7"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              <p className="mb-7 max-w-xl text-base leading-7 text-white/90 sm:text-lg">
                We optimize your digital presence to rank higher, attract
                organic traffic, and increase conversions. Our SEO strategies
                are data-driven, transparent, and designed for long-term
                growth.
              </p>

              <a
                href="tel:+918683828646"
                className="inline-flex items-center gap-2 rounded-sm bg-[#0075A2] px-7 py-3.5 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#006487] hover:shadow-lg"
              >
                <FiPhone size={18} />
                Chat with us
              </a>
            </div>

            <div
              id="quote"
              className="w-full max-w-md justify-self-center rounded-lg border border-white/30 bg-white/95 p-6 text-slate-900 shadow-[0_20px_50px_rgba(0,19,32,0.35)] backdrop-blur-sm lg:justify-self-end"
            >
              <h2 className="mb-1 text-xl font-bold">
                Get a Free Digital Audit
              </h2>

              <p className="mb-4 text-sm leading-6 text-slate-600">
                Tell us about your business and we’ll get back to you shortly.
              </p>

              <LeadForm compact />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1440px] px-5 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto mb-10 max-w-2xl text-center md:mb-12">
          <h2 className="mb-3 text-2xl font-medium leading-tight md:text-3xl md:font-bold">
            Key Benefits of Search Engine Optimization
          </h2>

          <p className="text-base leading-7 text-slate-500 md:text-lg">
            Whether you are running a small business or own a medium-sized
            company, hiring an SEO company in Delhi offers you plenty of
            benefits. We boost your online visibility and fuel your business
            growth.
          </p>
        </div>

        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="relative h-72 overflow-hidden rounded-lg ring-[3px] ring-slate-100 lg:h-96">
            <img
              src={benefitImage}
              alt="Key benefits of search engine optimization"
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="group flex h-full items-center gap-3 rounded-sm border border-slate-200 bg-slate-50 px-5 py-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#0075A2]/30 hover:bg-white hover:shadow-md"
              >
                <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-[#0075A2] transition-transform group-hover:scale-125" />

                <p className="text-sm font-medium leading-6 text-slate-800">
                  {benefit}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1440px] px-5 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto mb-10 max-w-2xl text-center md:mb-12">
          <h2 className="mb-3 text-2xl font-medium md:text-3xl md:font-bold">
            Here's why you should choose us.
          </h2>

          <p className="text-base leading-7 text-slate-500 md:text-lg">
            At Xntrova, we blend proven SEO techniques with innovative
            strategies tailored to your unique business goals. Here's how to
            drive sustainable organic growth.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group h-full rounded-md bg-[#082B39] p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-[#063746] hover:shadow-xl"
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-[#0075A2] text-white transition-transform duration-300 group-hover:scale-110">
                  <Icon size={21} strokeWidth={2} />
                </div>

                <h3 className="mb-2 text-lg font-semibold text-white">
                  {item.title}
                </h3>

                <p className="text-sm leading-6 text-white/70">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1440px] px-5 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto mb-10 max-w-2xl text-center md:mb-12">
          <h2 className="mb-3 text-2xl font-medium leading-tight md:text-3xl md:font-bold">
            Why does your business need the best SEO services in Delhi?
          </h2>

          <p className="text-base leading-7 text-slate-500 md:text-lg">
            SEO isn't a luxury anymore; instead, it has become a necessity for
            every size of business. Wait no more and contact the best SEO
            expert in Delhi to give your brand a digital boost.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {businessNeeds.map((item) => (
            <div
              key={item}
              className="group flex h-full items-center gap-3 rounded-sm border border-slate-200 bg-slate-50 px-4 py-4 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-md sm:px-5"
            >
              <FiCheckCircle
                size={19}
                className="shrink-0 text-[#0075A2]"
              />

              <p className="text-sm font-medium leading-5 text-slate-800 sm:text-base">
                {item}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1440px] px-5 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto mb-10 max-w-2xl text-center md:mb-12">
          <h2 className="mb-3 text-2xl font-medium leading-tight md:text-3xl md:font-bold">
            Frequently Asked Questions About SEO Services in Delhi
          </h2>

          <p className="text-base leading-7 text-slate-500 md:text-lg">
            Struggling with basic doubts and queries? Fix your concerns with
            the FAQs mentioned below and hire the best SEO agency in Delhi for
            further assistance.
          </p>
        </div>

        <div className="mx-auto max-w-3xl space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = activeFaq === index;

            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-md border border-slate-200"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${index}`}
                  className={`flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-semibold transition-all duration-300 ${
                    isOpen
                      ? "bg-[#0075A2]/10 text-[#006487]"
                      : "text-slate-800 hover:bg-slate-50"
                  }`}
                >
                  <span>{faq.question}</span>

                  <FiPlus
                    size={19}
                    className={`shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  />
                </button>

                <div
                  id={`faq-panel-${index}`}
                  className={`grid transition-all duration-300 ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 pt-1 text-sm leading-7 text-slate-500">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1440px] px-5 py-16 sm:px-8 lg:px-10">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h2 className="mb-3 text-3xl font-bold">
              Get in touch with us
            </h2>

            <p className="mb-8 text-slate-500">
              Get in touch with our experts and seek further assistance
            </p>

            <div className="space-y-5">
              <a
                href="tel:+918683828646"
                className="group flex items-center gap-4"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#0075A2]/10 text-[#0075A2] transition-all group-hover:bg-[#0075A2] group-hover:text-white">
                  <FiPhone size={20} />
                </span>

                <span>
                  <span className="block text-sm text-slate-500">
                    Call For Advice
                  </span>

                  <span className="block font-semibold text-slate-900 group-hover:text-[#0075A2]">
                    +91 868-382-8646
                  </span>
                </span>
              </a>

              <a
                href="mailto:sales@xntrova.com"
                className="group flex items-center gap-4"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#0075A2]/10 text-[#0075A2] transition-all group-hover:bg-[#0075A2] group-hover:text-white">
                  <FiMail size={20} />
                </span>

                <span>
                  <span className="block text-sm text-slate-500">
                    Mail Us
                  </span>

                  <span className="block font-semibold text-slate-900 group-hover:text-[#0075A2]">
                    sales@xntrova.com
                  </span>
                </span>
              </a>
            </div>
          </div>

          <div className="relative h-72 w-full overflow-hidden rounded-lg lg:h-96">
            <img
              src={contactImage}
              alt="Contact Xntrova"
              loading="lazy"
              className="h-full w-full object-contain"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#001A24] text-white">
        <div className="mx-auto w-full max-w-[1440px] px-5 py-16 text-center sm:px-8 lg:px-10">
          <h2 className="mb-4 text-2xl font-medium md:text-3xl md:font-bold">
            Elevate Your Brand with Digital Excellence
          </h2>

          <p className="mx-auto mb-8 max-w-2xl text-white/80">
            Get a comprehensive digital audit and discover how we can
            accelerate your business growth
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/contact-us/"
              className="inline-flex items-center justify-center rounded-sm border border-[#0075A2] bg-[#0075A2] px-7 py-3.5 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#006487] hover:shadow-lg"
            >
              Get Free Digital Audit
            </a>

            <a
              href="#"
              className="inline-flex items-center justify-center rounded-sm border border-white/70 bg-transparent px-7 py-3.5 font-semibold text-white transition-all duration-300 hover:bg-white/10"
            >
              Download Brochure
            </a>
          </div>
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

          <p className="text-base text-slate-500 md:text-lg">
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

export default SEOService;