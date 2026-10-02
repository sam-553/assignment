import { useState } from "react";
import {
  FiArrowRight,
  FiMail,
  FiPhone,
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

const advantages = [
  "Strengthen customer relations",
  "Precise targeting",
  "Data-backed campaigns",
  "Measurable growth",
  "Generate better leads and revenue",
  "Customer retention",
];

const services = [
  {
    title: "Email Campaigns Strategy",
    image:
      "https://res.cloudinary.com/di93stsbz/image/upload/f_auto,q_auto,c_limit,w_1920/v1787209866/xntrova-wp-media/xntrova-wp-media/Rectangle-4476-24-12770c25fd941ec9.png",
    description:
      "We craft data-driven email campaigns that deliver personalized messages to the right audience at the right time.",
  },
  {
    title: "List Management",
    image:
      "https://res.cloudinary.com/di93stsbz/image/upload/f_auto,q_auto,c_limit,w_1920/v1787209870/xntrova-wp-media/xntrova-wp-media/Rectangle-4476-25-f4e93200ec805b6b.png",
    description:
      "We help you build, segment, and maintain straightforward subscriber lists to ensure your emails reach the most receptive audience.",
  },
  {
    title: "Personalization and Automation",
    image:
      "https://res.cloudinary.com/di93stsbz/image/upload/f_auto,q_auto,c_limit,w_1920/v1787209871/xntrova-wp-media/xntrova-wp-media/Rectangle-4476-26-1ff5680fe6d5be93.png",
    description:
      "We deliver relevant content and offer at scale through triggered emails based on user actions.",
  },
  {
    title: "Data-driven Optimization",
    image:
      "https://res.cloudinary.com/di93stsbz/image/upload/f_auto,q_auto,c_limit,w_1920/v1787209874/xntrova-wp-media/xntrova-wp-media/Rectangle-4476-27-bfdec205356ee9cf.png",
    description:
      "We analyze campaign performance using detailed metrics such as open rates, click-through rates, conversions, and ROI.",
  },
];

const reasons = [
  "Professional experts",
  "Advanced reporting",
  "On-time delivery",
  "Flexible packages",
  "No hidden charges",
  "Open communication",
  "Improved user retention",
  "Cost-effective solutions",
];

const faqs = [
  {
    question:
      "What are the latest trends shaping email marketing in 2025?",
    answer:
      "Email marketing is becoming more data-driven and interactive. Trends include AI-powered personalization, predictive send times, AMP emails for real-time engagement, hyper-segmentation, and dynamic content with polls.",
  },
  {
    question:
      "How does personalization improve my email campaign performance?",
    answer:
      "Personalized email content helps businesses deliver more relevant messages based on audience interests, behavior, preferences, and previous interactions.",
  },
  {
    question:
      "What is email deliverability, and how can it be improved?",
    answer:
      "Email deliverability refers to the ability of emails to successfully reach recipients' inboxes. It can be improved through clean subscriber lists, relevant content, proper authentication, segmentation, and consistent sending practices.",
  },
  {
    question:
      "Why is segmentation crucial for effective email marketing?",
    answer:
      "Segmentation allows you to divide your audience into meaningful groups and send more relevant messages to each group, helping improve engagement and campaign performance.",
  },
  {
    question: "How does automation benefit email campaigns?",
    answer:
      "Automation allows businesses to send timely messages based on user actions, events, and predefined workflows while reducing repetitive manual work.",
  },
  {
    question:
      "How do you optimize email design for better engagement?",
    answer:
      "We focus on clear messaging, compelling layouts, readable typography, strong calls to action, responsive design, and content that works effectively across devices.",
  },
  {
    question:
      "Can interactive or dynamic content increase customer engagement?",
    answer:
      "Yes. Interactive and dynamic content can create more engaging experiences by allowing recipients to interact with content directly and receive information that is more relevant to them.",
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
      "@id":
        "https://www.xntrova.com/ca/email-marketing/#webpage",
      url: "https://www.xntrova.com/ca/email-marketing/",
      name: "Email Marketing Services in Canada | Xntrova",
      description:
        "Reach, retain, and re-engage your audience with personalized email campaigns that deliver results. We design and automate high-performing email funnels that drive conversions and loyalty.",
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
          name: "Email Marketing That Engages",
          item:
            "https://www.xntrova.com/ca/email-marketing/",
        },
      ],
    },
  ],
};

const inputClass =
  "w-full rounded-sm border border-[#DDE5E8] px-4 py-2.5 text-sm text-[#001320] outline-none focus:ring-2 focus:ring-[#0075A2] transition-shadow placeholder:text-slate-400";

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
        className="w-full rounded-sm bg-gradient-to-r from-[#001320] to-[#0075A2] px-6 py-3 font-semibold text-white transition-opacity hover:opacity-90"
      >
        Submit
      </button>
    </form>
  );
}

function SectionHeading({ title, description }) {
  return (
    <div className="mx-auto mb-10 max-w-2xl text-center md:mb-12">
      <h2 className="mb-3 text-2xl font-medium tracking-tight text-[#001320] sm:text-3xl md:text-4xl md:font-bold">
        {title}
      </h2>

      <p className="text-base font-medium leading-8 text-slate-500 md:text-lg">
        {description}
      </p>
    </div>
  );
}

function FeatureGrid({ items }) {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
      {items.map((item, index) => (
        <div
          key={item}
          className="h-full"
          style={{
            animationDelay: `${index * 70}ms`,
          }}
        >
          <div className="flex h-full items-center gap-3 rounded-sm border border-[#DDE5E8] bg-[#F4F8FA] px-5 py-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
            <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-[#0075A2]" />

            <p className="font-medium text-[#001320]">
              {item}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

function ServiceCard({ service }) {
  return (
    <div className="group rounded-md border border-[#DDE5E8] bg-white p-6 shadow-[0_1px_2px_rgba(16,24,32,0.04),0_8px_24px_rgba(16,24,32,0.06)] transition-shadow duration-300 hover:shadow-[0_4px_16px_rgba(16,24,32,0.1)]">
      <div className="relative -mx-1 -mt-1 h-80 overflow-hidden rounded-sm">
        <img
          src={service.image}
          alt={service.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex h-full flex-col gap-3 pt-3">
        <p className="font-semibold text-[#001320]">
          {service.title}
        </p>

        <p className="flex-1 text-sm leading-6 text-slate-600">
          {service.description}
        </p>

        <button
          type="button"
          className="inline-flex self-start items-center justify-center gap-2 rounded-sm px-0 py-0 font-semibold text-[#0075A2] transition-colors hover:underline"
        >
          Read More

          <span className="sr-only">
            {" "}
            about {service.title}
          </span>

          <FiArrowRight
            size={16}
            aria-hidden="true"
          />
        </button>
      </div>
    </div>
  );
}

export default function EmailMarketing() {
  const [activeFaq, setActiveFaq] = useState(0);

  return (
    <main className="overflow-hidden bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />

      <section className="relative overflow-hidden bg-[#001F2B] text-white lg:flex lg:min-h-[min(58vh,620px)] lg:items-center">
        <div className="absolute inset-0">
          <img
            src="https://res.cloudinary.com/di93stsbz/image/upload/f_auto,q_auto,c_limit,w_1920/v1787226389/xntrova-wp-media/banner-images/image-96.png"
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
                Email Marketing That Engages
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
                Reach, retain, and re-engage your audience with
                personalized email campaigns that deliver results.
                We design and automate high-performing email
                funnels that drive conversions and loyalty.
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href="tel:+161735557866"
                  className="inline-flex items-center justify-center gap-2 rounded-sm border border-[#0075A2] bg-[#0075A2] px-7 py-3.5 font-semibold text-white transition-colors hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-white"
                >
                  Chat with us
                </a>
              </div>
            </div>

            <div
              id="quote"
              className="w-full max-w-md justify-self-center rounded-lg border border-[#DDE5E8] bg-white/95 p-6 text-[#001320] shadow-[0_20px_50px_rgba(0,19,32,0.35)] backdrop-blur-sm lg:justify-self-end"
            >
              <p className="mb-1 text-xl font-bold text-[#001320]">
                Get a Free Digital Audit
              </p>

              <p className="mb-3 text-sm leading-6 text-slate-600">
                Tell us about your business and we’ll get back
                to you shortly.
              </p>

              <LeadForm />
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#001F2B]/30 to-transparent" />
      </section>

      <section className="mx-auto w-full max-w-[1440px] px-5 py-16 sm:px-8 lg:px-10">
        <SectionHeading
          title="Email Marketing that Drives Customer Retention"
          description="Xntrova is a fully-fledged digital marketing agency Vancouver, offering result-driven email marketing services to drive customers' retention and boost sales. Get hands-off results with transparent pricing, detailed reporting, and email campaigns built for your industry."
        />
      </section>

      <section className="mx-auto w-full max-w-[1440px] px-5 py-16 sm:px-8 lg:px-10">
        <SectionHeading
          title="Key Advantages of Email Marketing"
          description="Achieve predictable growth with Xntrova’s best-in-class email marketing services. Get in touch with our experts today to request a quote."
        />

        <FeatureGrid items={advantages} />
      </section>

      <section className="mx-auto w-full max-w-[1440px] px-5 py-8 sm:px-8 lg:px-10">
        <SectionHeading
          title="Here’s what we offer?"
          description="Xntrova offers an array of email marketing services to ensure precise targeting and more customer retention. Here’s what we have in store for you."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              service={service}
            />
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1440px] px-5 py-16 sm:px-8 lg:px-10">
        <SectionHeading
          title="Why Xntrova stands as a top Email Marketing Company in Canada"
          description="Xntrova is a fully-fledged email marketing company in Vancouver, offering excellent email marketing services to connect with new and existing customers."
        />

        <FeatureGrid items={reasons} />
      </section>

      <section className="mx-auto w-full max-w-[1440px] px-5 py-16 sm:px-8 lg:px-10">
        <SectionHeading
          title="Frequently Asked Questions About Our Email Marketing"
          description="Do you have any trouble with our email marketing services? Get to know about our services here and hire the expert now."
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
                          : "text-[#001320] hover:bg-slate-50"
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
                      className="px-5 pb-4 text-sm leading-7 text-slate-500"
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

      <section className="mx-auto w-full max-w-[1440px] px-5 py-16 sm:px-8 lg:px-10">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h2 className="mb-3 text-2xl font-medium tracking-tight text-[#001320] sm:text-3xl md:text-4xl md:font-bold">
              Get a Free Consultation With Us
            </h2>

            <p className="mb-8 text-slate-500">
              Call us right away and speak to our expert for
              further assistance
            </p>

            <div className="space-y-4">
              <a
                href="tel:+161735557866"
                className="group flex items-center gap-4 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#0075A2]"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#0075A2]/10 text-[#0075A2]">
                  <FiPhone size={20} />
                </span>

                <span>
                  <span className="block text-sm text-slate-500">
                    Call For Advice
                  </span>

                  <span className="block font-semibold text-[#001320] group-hover:underline">
                    +1 (617) 355-57866
                  </span>
                </span>
              </a>

              <a
                href="mailto:sales@xntrova.com"
                className="group flex items-center gap-4 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#0075A2]"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#0075A2]/10 text-[#0075A2]">
                  <FiMail size={20} />
                </span>

                <span>
                  <span className="block text-sm text-slate-500">
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
        <div className="mx-auto w-full max-w-[1440px] px-5 py-16 text-center sm:px-8 lg:px-10">
          <h2 className="mb-4 text-2xl font-medium text-white sm:text-3xl md:text-4xl md:font-bold">
            Ready to accelerate your business growth
          </h2>

          <p className="mx-auto mb-8 max-w-2xl text-white/80">
            Connect with our experts now and get a free
            consultation for your upcoming project.
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
        className="mx-auto w-full max-w-[1440px] px-5 py-16 sm:px-8 lg:px-10"
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