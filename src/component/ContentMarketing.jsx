import { useState } from "react";
import { FiArrowRight, FiMail, FiPhone, FiPlus } from "react-icons/fi";

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

const advantages = [
  "Build brand authority",
  "Engage users",
  "Drive sales and conversions",
  "Attracts organic traffic",
  "Improves search engine rankings",
  "Increases brand visibility",
];

const services = [
  {
    title: "Website Content",
    image:
      "https://res.cloudinary.com/di93stsbz/image/upload/f_auto,q_auto,c_limit,w_1920/v1787210088/xntrova-wp-media/xntrova-wp-media/Rectangle-4476-16-01086a51d3575f14.png",
    description:
      "Our writers at Xntrova create compelling, SEO-friendly website content tailored to your brand and target audience.",
  },
  {
    title: "Blogs and Articles",
    image:
      "https://res.cloudinary.com/di93stsbz/image/upload/f_auto,q_auto,c_limit,w_1920/v1787210091/xntrova-wp-media/xntrova-wp-media/Rectangle-4476-17-3ab780f012d6b99f.png",
    description:
      "We produce well-researched, insightful, and original blogs and articles that educate and engage your audience.",
  },
  {
    title: "Social Media Captions",
    image:
      "https://res.cloudinary.com/di93stsbz/image/upload/f_auto,q_auto,c_limit,w_1920/v1787210093/xntrova-wp-media/xntrova-wp-media/Rectangle-4476-18-3ff43c12956b9431.png",
    description:
      "Attract your potential customers via our catchy social media captions and make a strong presence across social media handles.",
  },
  {
    title: "Visual Content Creation",
    image:
      "https://res.cloudinary.com/di93stsbz/image/upload/f_auto,q_auto,c_limit,w_1920/v1787210096/xntrova-wp-media/xntrova-wp-media/Rectangle-4476-19-2bc55e957fb81862.png",
    description:
      "Our team offers custom graphics, videos, and animations that convey your brand story effectively.",
  },
];

const reasons = [
  "Professional and expert writers",
  "Years of experience",
  "Customized writing approach",
  "Data-backed content",
  "Comprehensive content writing solutions",
  "Deep knowledge",
  "Compliance to the SEO guidelines",
];

const faqs = [
  {
    question:
      "What is content marketing, and why do I need it?What types of content should I focus on in my content marketing strategy?",
    answer:
      "Effective content types include long-form blog posts, social media content, videos, podcasts, email newsletters, white papers, and case studies. The choice depends on your audience and goals.",
  },
  {
    question: "How do I ensure my content stands out in a market?",
    answer:
      "Create content that is useful, original, audience-focused, and aligned with your brand voice. Research your audience and competitors, then provide clear information or perspectives that genuinely help your target customers.",
  },
  {
    question: "Can video content improve my content marketing ROI?",
    answer:
      "Video can help communicate complex ideas quickly, increase engagement, and give your audience another way to interact with your brand. Its effectiveness depends on the audience, content quality, distribution, and business goals.",
  },
  {
    question: "How important is content personalization in marketing?",
    answer:
      "Personalized content can make communication more relevant to different audience segments. Using audience needs, interests, and behavior can help create content that feels more useful and targeted.",
  },
  {
    question: "What role does SEO play in content marketing?",
    answer:
      "SEO helps content become easier for search engines and users to discover. Keyword research, useful information, clear structure, and strong technical foundations can help content reach relevant audiences through organic search.",
  },
  {
    question:
      "Should I invest in influencer collaborations as part of content marketing?",
    answer:
      "Influencer collaborations can be useful when the creator's audience is relevant to your brand. The right collaboration should align with your goals, audience, messaging, and overall content strategy.",
  },
  {
    question: "What is evergreen content, and why is it valuable?",
    answer:
      "Evergreen content remains useful for an extended period instead of depending on short-lived trends. It can continue attracting visitors and providing value when it is regularly maintained and kept relevant.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.xntrova.com/#organization",
      name: "Xntrova",
      url: "https://www.xntrova.com",
      logo: "https://res.cloudinary.com/di93stsbz/image/upload/v1788158799/cms-settings/cx4pzlnw2srdmd5ckfjp.png",
      sameAs: [
        "https://www.facebook.com/xntrova/",
        "https://www.instagram.com/xntrova.agency/",
        "https://www.linkedin.com/company/xntrova/",
        "https://x.com/xntrova",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://www.xntrova.com/#website",
      name: "Xntrova",
      url: "https://www.xntrova.com",
      publisher: {
        "@id": "https://www.xntrova.com/#organization",
      },
    },
    {
      "@type": "Service",
      "@id": "https://www.xntrova.com/ca/content-marketing/#webpage",
      url: "https://www.xntrova.com/ca/content-marketing/",
      name: "Content Marketing Services in Canada | Xntrova",
      description:
        "We create meaningful content that inspires, educates, and drives action. Our strategic content marketing approach helps your brand attract the right audience and build lasting trust.",
      isPartOf: {
        "@id": "https://www.xntrova.com/#website",
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.xntrova.com/ca/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Content Marketing That Converts",
          item: "https://www.xntrova.com/ca/content-marketing/",
        },
      ],
    },
  ],
};

const inputClass =
  "w-full rounded-sm border border-[#DDE5E8] px-4 py-2.5 text-sm text-[#001320] outline-none focus:ring-2 focus:ring-[#0075A2] transition-shadow";

function SectionHeading({ title, description }) {
  return (
    <div className="mx-auto mb-10 max-w-2xl text-center md:mb-12">
      <h2 className="mb-3 text-3xl font-medium tracking-tight text-[#001320] md:text-4xl md:font-bold">
        {title}
      </h2>
      <p className="text-base font-medium leading-8 text-[#64748B] md:text-lg">
        {description}
      </p>
    </div>
  );
}

function LeadForm() {
  return (
    <form
      className="space-y-3"
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        tabIndex="-1"
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
        type="text"
        name="website_url"
      />

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <input
          placeholder="Your Name*"
          aria-label="Your name"
          required
          className={inputClass}
          type="text"
          name="name"
        />

        <input
          placeholder="you@company.com*"
          aria-label="Your email address"
          required
          className={inputClass}
          type="email"
          name="email"
        />
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <input
          placeholder="+91 98765 43210"
          aria-label="Your phone number"
          pattern="^\\+?[0-9]{10,15}$"
          className={inputClass}
          type="tel"
          name="phone"
        />

        <input
          placeholder="Company Name"
          aria-label="Your company name"
          className={inputClass}
          type="text"
          name="company"
        />
      </div>

      <select
        name="service"
        aria-label="Which service are you interested in"
        defaultValue=""
        className={`${inputClass} bg-white`}
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
        rows="2"
        className={inputClass}
      />

      <button
        type="submit"
        className="w-full rounded-sm bg-gradient-to-r from-[#001320] to-[#0075A2] px-6 py-3 font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-60"
      >
        Submit
      </button>
    </form>
  );
}

function BulletGrid({ items }) {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
      {items.map((item, index) => (
        <div
          key={item}
          className="animate-[fadeIn_0.5s_ease-out_forwards]"
          style={{
            animationDelay: `${index * 70}ms`,
          }}
        >
          <div className="flex h-full items-center gap-3 rounded-sm border border-[#DDE5E8] bg-[#F4F8FA] px-5 py-4">
            <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-[#0075A2]" />
            <p className="font-medium text-[#001320]">{item}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function ServiceCard({ service }) {
  return (
    <div className="flex h-full flex-col gap-3 rounded-md border border-[#DDE5E8] bg-white p-6 shadow-[0_1px_2px_rgba(16,24,32,0.04),0_8px_24px_rgba(16,24,32,0.06)] transition-shadow duration-300 hover:shadow-[0_4px_16px_rgba(16,24,32,0.1)]">
      <div className="-mx-1 -mt-1 h-80 w-full overflow-hidden rounded-sm">
        <img
          src={service.image}
          alt={service.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      <p className="font-semibold text-[#001320]">{service.title}</p>

      <p className="flex-1 text-sm leading-6 text-[#334155]">
        {service.description}
      </p>

      <button
        type="button"
        className="inline-flex self-start items-center justify-center gap-2 rounded-sm px-0 py-0 font-semibold text-[#0075A2] transition-colors hover:underline"
      >
        Read More
        <span className="sr-only"> about {service.title}</span>
        <FiArrowRight size={16} aria-hidden="true" />
      </button>
    </div>
  );
}

export default function ContentMarketing() {
  const [activeFaq, setActiveFaq] = useState(0);

  return (
    <main className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />

      <section className="relative overflow-hidden bg-[#001F2B] text-white lg:flex lg:min-h-[min(58vh,620px)] lg:items-center">
        <div className="absolute inset-0">
          <img
            src="https://res.cloudinary.com/di93stsbz/image/upload/f_auto,q_auto,c_limit,w_1920/v1787226384/xntrova-wp-media/banner-images/image-94.png"
            alt=""
            fetchPriority="high"
            loading="eager"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-br from-[#001320]/72 via-[#012A3A]/50 to-[#01415A]/26" />

        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_18%_45%,rgba(0,15,26,0.55),transparent_70%)]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_60%,rgba(0,139,185,0.20),transparent_45%)]" />

        <div className="relative z-10 mx-auto w-full max-w-[1440px] px-5 py-10 sm:px-8 sm:py-12 lg:px-10 lg:py-8">
          <div className="grid w-full grid-cols-1 items-center gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
            <div className="max-w-2xl">
              <h1 className="mb-3 text-[35px] font-bold leading-[1.15] tracking-tight text-white sm:text-5xl lg:text-6xl">
                Content Marketing That Converts
              </h1>

              <svg
                width="120"
                height="10"
                viewBox="0 0 120 10"
                fill="none"
                aria-hidden="true"
                className="mb-5 text-[#0075A2]"
              >
                <path
                  d="M2 7C24 2 96 2 118 7"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>

              <p className="mb-6 max-w-xl text-base leading-8 text-white/90 md:text-lg">
                We create meaningful content that inspires, educates, and
                drives action. Our strategic content marketing approach helps
                your brand attract the right audience and build lasting trust.
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href="tel:+161735557866"
                  className="inline-flex items-center justify-center gap-2 rounded-sm border border-[#0075A2] bg-[#0075A2] px-7 py-3.5 font-semibold text-white transition-colors hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#001F2B]"
                >
                  Chat with us
                </a>
              </div>
            </div>

            <div
              id="quote"
              className="w-full max-w-md justify-self-center rounded-lg border border-[#DDE5E8] bg-white/95 p-6 text-[#001320] shadow-[0_20px_50px_rgba(0,19,32,0.35)] backdrop-blur-sm lg:justify-self-end"
            >
              <p className="mb-1 text-xl font-bold">Get a Free Digital Audit</p>

              <p className="mb-3 text-sm leading-6 text-[#334155]">
                Tell us about your business and we’ll get back to you shortly.
              </p>

              <LeadForm />
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#001F2B]/30 to-transparent" />
      </section>

      <section className="mx-auto w-full max-w-[1440px] px-5 py-16 sm:px-8 lg:px-10 max-md:py-[15px]">
        <SectionHeading
          title="Content Marketing Services That Boost ROI"
          description="Looking forward to establishing your brand as an authority? Harness the power of our content marketing services and attract real leads to improve conversions. Our content marketing services are designed to build authority and drive audience engagement."
        />
      </section>

      <section className="mx-auto w-full max-w-[1440px] px-5 py-16 sm:px-8 lg:px-10 max-md:py-[15px]">
        <SectionHeading
          title="Key Advantages of Content Marketing"
          description="A value-driven content can attract potential customers and drive conversions by establishing your brand as an authority. Connect with our digital marketing company Toronto and get the best-in-class content services to grow your brand."
        />

        <BulletGrid items={advantages} />
      </section>

      <section className="mx-auto w-full max-w-[1440px] px-5 py-8 sm:px-8 lg:px-10 max-md:py-[15px]">
        <SectionHeading
          title="Here’s what we offer"
          description="As a trusted digital marketing company Vancouver, we deliver engaging, scalable content that fuels growth and drives results for your business. Here’s what we offer to grow your business online."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1440px] px-5 py-16 sm:px-8 lg:px-10 max-md:py-[15px]">
        <SectionHeading
          title="Why choose Xntrova as your next Content Marketing partner"
          description="Choosing the right content marketing partner isn’t about good writing, it’s about working with a team that understands industry norms and works accordingly. Here’s why Xntrova is a perfect choice for you."
        />

        <BulletGrid items={reasons} />
      </section>

      <section className="mx-auto w-full max-w-[1440px] px-5 py-16 sm:px-8 lg:px-10 max-md:py-[15px]">
        <SectionHeading
          title="Frequently Asked Questions About Our Content Marketing"
          description="Wondering if you should choose our content marketing services or not? Fix your concerns with the FAQs below."
        />

        <div className="mx-auto max-w-3xl">
          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = activeFaq === index;

              return (
                <div
                  key={faq.question}
                  className="overflow-hidden rounded-md border border-[#DDE5E8]"
                >
                  <h3>
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${index}`}
                      onClick={() =>
                        setActiveFaq(isOpen ? -1 : index)
                      }
                      className={`flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-semibold transition-colors ${
                        isOpen
                          ? "bg-[#0075A2]/10 text-[#005B7E]"
                          : "text-[#001320] hover:bg-[#F4F8FA]"
                      }`}
                    >
                      <span>{faq.question}</span>

                      <FiPlus
                        size={18}
                        aria-hidden="true"
                        className={`shrink-0 transition-transform duration-300 ${
                          isOpen ? "rotate-45" : ""
                        }`}
                      />
                    </button>
                  </h3>

                  {isOpen && (
                    <div
                      id={`faq-panel-${index}`}
                      className="px-5 pb-4 text-sm leading-7 text-[#64748B]"
                    >
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1440px] px-5 py-16 sm:px-8 lg:px-10 max-md:py-[15px]">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h2 className="mb-3 text-3xl font-medium tracking-tight text-[#001320] md:text-4xl">
              Get a Free Consultation With Us
            </h2>

            <p className="mb-8 text-[#64748B]">
              Call us right away and speak to our expert for further assistance
            </p>

            <div className="space-y-4">
              <a
                href="tel:+161735557866"
                className="group flex items-center gap-4 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#0075A2] focus:ring-offset-2"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#0075A2]/10 text-[#0075A2]">
                  <FiPhone size={20} />
                </span>

                <span>
                  <span className="block text-sm text-[#64748B]">
                    Call For Advice
                  </span>

                  <span className="block font-semibold text-[#001320] group-hover:underline">
                    +1 (617) 355-57866
                  </span>
                </span>
              </a>

              <a
                href="mailto:sales@xntrova.com"
                className="group flex items-center gap-4 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#0075A2] focus:ring-offset-2"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#0075A2]/10 text-[#0075A2]">
                  <FiMail size={20} />
                </span>

                <span>
                  <span className="block text-sm text-[#64748B]">
                    Mail Us
                  </span>

                  <span className="block font-semibold text-[#001320] group-hover:underline">
                    sales@xntrova.com
                  </span>
                </span>
              </a>
            </div>
          </div>

          <div className="relative h-72 w-full overflow-hidden rounded-lg lg:h-96">
            <img
              src="https://res.cloudinary.com/di93stsbz/image/upload/f_auto,q_auto,c_limit,w_1920/v1787209714/xntrova-wp-media/xntrova-wp-media/contact-man-ef520e947c3403b4.png"
              alt=""
              loading="lazy"
              className="h-full w-full object-contain"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#001320] text-white">
        <div className="mx-auto w-full max-w-[1440px] px-5 py-16 text-center sm:px-8 lg:px-10 max-md:py-[15px]">
          <h2 className="mb-4 text-3xl font-medium text-white md:text-4xl md:font-bold">
            Ready to accelerate your business growth
          </h2>

          <p className="mx-auto mb-8 max-w-2xl text-base leading-8 text-white/80 md:text-lg">
            Connect with our experts now and get a free consultation for your
            upcoming project.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/ca/contact-us/"
              className="inline-flex items-center justify-center gap-2 rounded-sm border border-[#0075A2] bg-[#0075A2] px-7 py-3.5 font-semibold text-white transition-colors hover:opacity-90"
            >
              Get Free Digital Audit
            </a>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="mx-auto w-full max-w-[1440px] px-5 py-16 sm:px-8 lg:px-10 max-md:py-[15px]"
      >
        <SectionHeading
          title="Got a Project in Mind? Contact Us"
          description="Tell us about your goals and we'll get back to you shortly."
        />

        <div className="mx-auto max-w-2xl">
          <LeadForm />
        </div>
      </section>
    </main>
  );
}