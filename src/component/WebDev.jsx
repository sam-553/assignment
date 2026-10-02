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
  "Enhance conversion rates",
  "Build trust and credibility",
  "Improves customer engagement",
  "Increases visibility online",
  "Streamlines sales funnel",
  "Offers a professional first impression",
];

const services = [
  {
    title: "Responsive Websites",
    image:
      "https://res.cloudinary.com/di93stsbz/image/upload/f_auto,q_auto,c_limit,w_1920/v1787209927/xntrova-wp-media/xntrova-wp-media/Rectangle-4476-43-215df13c9548166f.png",
    description:
      "Xntrova offers responsive web design services that adjust to different screen sizes automatically.",
  },
  {
    title: "Small Business Website Designs",
    image:
      "https://res.cloudinary.com/di93stsbz/image/upload/f_auto,q_auto,c_limit,w_1920/v1787209928/xntrova-wp-media/xntrova-wp-media/Rectangle-4476-44-fca68f5f2342be4a.png",
    description:
      "We are experts at creating fast, responsive, and fast-loading web designs, tailored to startups and growing brands alike.",
  },
  {
    title: "Landing Pages",
    image:
      "https://res.cloudinary.com/di93stsbz/image/upload/f_auto,q_auto,c_limit,w_1920/v1787209932/xntrova-wp-media/xntrova-wp-media/Rectangle-4476-45-7b4b3d465c673b6b.png",
    description:
      "Our web design company in Toronto offers exclusive landing pages to attract and captivate the audience.",
  },
  {
    title: "E-commerce Web Design",
    image:
      "https://res.cloudinary.com/di93stsbz/image/upload/f_auto,q_auto,c_limit,w_1920/v1787209934/xntrova-wp-media/xntrova-wp-media/Rectangle-4476-46-5f68a893017e5ec7.png",
    description:
      "Our impressive e-commerce web designs bring forth your online store to the right audience, thus improving brand visibility.",
  },
  {
    title: "Website Redesign",
    image:
      "https://res.cloudinary.com/di93stsbz/image/upload/f_auto,q_auto,c_limit,w_1920/v1787209937/xntrova-wp-media/xntrova-wp-media/Rectangle-4476-47-4219a399950bc24d.png",
    description:
      "We modernize existing websites to boost appeal, usability, and conversion rates.",
  },
];

const reasons = [
  "Extensive industry experience",
  "Highly skilled team",
  "Customized website designs",
  "Ongoing maintenance and support",
  "Budget-friendly approach",
  "Focus on SEO and performance",
];

const faqs = [
  {
    question: "What do you offer as a web design company?",
    answer:
      "At Xntrova, we offer plenty of web design services, such as responsive web designs, mobile-friendly websites, e-commerce designs, custom designs, and more.",
  },
  {
    question: "How long does it take to build a website?",
    answer:
      "The timeline depends on the website's complexity, number of pages, features, content, and integrations. A simple website can be completed faster, while larger e-commerce or custom websites require more time.",
  },
  {
    question: "Why do I need web design services?",
    answer:
      "Professional web design helps create a strong first impression, improve usability, build credibility, increase engagement, and provide a better experience across different devices.",
  },
  {
    question: "How does a design affect a website?",
    answer:
      "Website design affects how easily visitors navigate your site, understand your message, interact with your content, and take actions such as contacting you or making a purchase.",
  },
  {
    question: "What process do you follow when designing a website?",
    answer:
      "Our process generally includes understanding your goals, planning the structure, creating the design, developing the website, testing responsiveness and functionality, and launching the final website.",
  },
  {
    question: "Will my website work on smartphones?",
    answer:
      "Yes. Our responsive website designs are built to adapt to smartphones, tablets, laptops, and desktop screens for a consistent user experience.",
  },
  {
    question: "How much does the web design service cost?",
    answer:
      "The cost depends on the project requirements, number of pages, functionality, integrations, design complexity, and other business needs. Contact us for a project-specific consultation.",
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
        "https://www.xntrova.com/ca/website-development/#webpage",
      url: "https://www.xntrova.com/ca/website-development/",
      name: "Website Development Services in Canada | Xntrova",
      description:
        "High-performance, responsive websites from Xntrova — a leading web design company in Canada. Custom design, small-business sites, landing pages, e-commerce and redesigns.",
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
          name: "Website Development Services",
          item:
            "https://www.xntrova.com/ca/website-development/",
        },
      ],
    },
  ],
};

const inputClass =
  "w-full rounded-sm border border-[#DDE5E8] px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-[#0075A2] transition-shadow";

function SectionHeading({ title, description }) {
  return (
    <div className="mx-auto mb-10 max-w-2xl text-center md:mb-12">
      <h2 className="mb-3 font-medium md:font-bold">{title}</h2>
      <p className="text-body-lg font-medium text-[#64748B]">
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
        className={`${inputClass} text-[#001320]`}
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
        <div key={item}>
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
    <div>
      <div className="flex h-full flex-col gap-3 rounded-md border border-[#DDE5E8] bg-white p-6 shadow-[0_1px_2px_rgba(16,24,32,0.04),0_8px_24px_rgba(16,24,32,0.06)] transition-shadow duration-300 hover:shadow-[0_4px_16px_rgba(16,24,32,0.1)]">
        <div className="-mx-1 -mt-1 relative h-80 w-full overflow-hidden rounded-sm">
          <img
            src={service.image}
            alt={service.title}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>

        <p className="font-semibold text-[#001320]">
          {service.title}
        </p>

        <p className="flex-1 text-sm text-[#334155]">
          {service.description}
        </p>

        <button
          type="button"
          className="inline-flex self-start items-center justify-center gap-2 rounded-sm border border-transparent bg-transparent px-0 py-0 font-semibold text-[#0075A2] transition-colors hover:underline"
        >
          Read More
          <span className="sr-only">
            {" "}
            about {service.title}
          </span>
          <FiArrowRight size={16} aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}

export default function WebsiteDevelopment() {
  const [activeFaq, setActiveFaq] = useState(0);

  return (
    <main className="text-[#001320]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />

      <section className="relative overflow-hidden bg-[#001F2B] text-white lg:flex lg:min-h-[min(58vh,620px)] lg:items-center">
        <div className="absolute inset-0">
          <img
            src="https://res.cloudinary.com/di93stsbz/image/upload/f_auto,q_auto,c_limit,w_1920/v1787226413/xntrova-wp-media/banner-images/image-100.png"
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

        <div className="relative z-10 mx-auto w-full max-w-[1440px] px-5 py-10 sm:px-8 sm:py-12 lg:px-10 lg:py-8 max-md:py-[15px]">
          <div className="grid w-full grid-cols-1 items-center gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
            <div className="max-w-2xl">
              <h1 className="mb-3 text-[35px]/[1.15] font-bold tracking-tight text-white sm:text-5xl">
                Website Development Services
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

              <p className="mb-6 max-w-xl text-lg text-white/90">
                We design and build high-performance websites that
                combine creativity, usability, and functionality. Your
                website becomes your most powerful tool for growth and
                engagement.
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href="tel:+161735557866"
                  className="inline-flex items-center justify-center gap-2 rounded-sm border border-[#0075A2] bg-[#0075A2] px-7 py-3.5 font-semibold text-white transition-colors hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0075A2]"
                >
                  Chat with us
                </a>
              </div>
            </div>

            <div
              id="quote"
              className="w-full max-w-md justify-self-center rounded-lg border border-[#DDE5E8] bg-white/95 p-6 text-[#001320] shadow-[0_20px_50px_rgba(0,19,32,0.35)] backdrop-blur-sm lg:justify-self-end"
            >
              <p className="mb-1 text-2xl font-bold text-[#001320]">
                Get a Free Digital Audit
              </p>

              <p className="mb-3 text-sm text-[#334155]">
                Tell us about your business and we’ll get back to you
                shortly.
              </p>

              <LeadForm />
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#001F2B]/30 to-transparent" />
      </section>

      <section className="mx-auto w-full max-w-[1440px] px-5 py-16 sm:px-8 lg:px-10 max-md:py-[15px]">
        <SectionHeading
          title="Website Design Services That Illuminate Your Online Presence"
          description="At Xntrova, we believe that if you can imagine it, we can build it. As a leading web design company in Vancouver, we turn your ideas into powerful website designs that illuminate your digital presence. So, why wait? Create first impressions with our web design services in Canada."
        />
      </section>

      <section className="mx-auto w-full max-w-[1440px] px-5 py-16 sm:px-8 lg:px-10 max-md:py-[15px]">
        <SectionHeading
          title="Key Advantages of Website Development Services"
          description="Impressive design draws visitors, and intelligent design keeps them. Our UI/UX web design and development services in Vancouver create responsive websites that captivate and engage the right audience."
        />

        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="lg:order-1">
            <div className="relative h-72 w-full overflow-hidden rounded-lg ring-[3px] ring-[#0075A2]/20 lg:h-96">
              <img
                src="https://res.cloudinary.com/di93stsbz/image/upload/f_auto,q_auto,c_limit,w_1920/v1787209925/xntrova-wp-media/xntrova-wp-media/Rectangle-4484-14-8ddc0662878611a4.png"
                alt="Key advantages of website development services"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:order-2">
            {advantages.map((item) => (
              <div key={item}>
                <div className="flex h-full items-center gap-3 rounded-sm border border-[#DDE5E8] bg-[#F4F8FA] px-5 py-4">
                  <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-[#0075A2]" />
                  <p className="font-medium text-[#001320]">
                    {item}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1440px] px-5 py-8 sm:px-8 lg:px-10 max-md:py-[15px]">
        <SectionHeading
          title="What we have in store for you?"
          description="Whether you are looking for attracting landing pages or want to re-design the existing website, we have it all under one roof."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1440px] px-5 py-16 sm:px-8 lg:px-10 max-md:py-[15px]">
        <SectionHeading
          title="Why Xntrova is the best web design company in Canada?"
          description="The immense industry experience and professional team of designers make Xntrova the best choice among web design agencies in Canada. Here's why you should choose us."
        />

        <BulletGrid items={reasons} />
      </section>

      <section className="mx-auto w-full max-w-[1440px] px-5 py-16 sm:px-8 lg:px-10 max-md:py-[15px]">
        <SectionHeading
          title="Frequently Asked Questions About Website Development Services"
          description="Having doubts about web design services? Fix your general concerns with the FAQs below and hire the best web design company to turn your vision into reality."
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
                      onClick={() =>
                        setActiveFaq(isOpen ? -1 : index)
                      }
                      className={`flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-semibold transition-colors ${
                        isOpen
                          ? "bg-[#0075A2]/10 text-[#005B7E]"
                          : "text-[#001320]"
                      }`}
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${index}`}
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
                      className="px-5 pb-4 leading-relaxed text-[#64748B]"
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
            <h2 className="mb-3">
              Get a Free Consultation With Us
            </h2>

            <p className="mb-8 text-[#64748B]">
              Call us right away and speak to our expert for further
              assistance
            </p>

            <div className="space-y-4">
              <a
                href="tel:+161735557866"
                className="group flex items-center gap-4 rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0075A2]"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#0075A2]/10 text-[#0075A2]">
                  <FiPhone size={20} aria-hidden="true" />
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
                className="group flex items-center gap-4 rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0075A2]"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#0075A2]/10 text-[#0075A2]">
                  <FiMail size={20} aria-hidden="true" />
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
              className="absolute inset-0 h-full w-full object-contain"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#001320] text-white">
        <div className="mx-auto w-full max-w-[1440px] px-5 py-16 text-center sm:px-8 lg:px-10 max-md:py-[15px]">
          <h2 className="mb-4 font-medium text-white md:font-bold">
            Ready to accelerate your business growth
          </h2>

          <p className="mx-auto mb-8 max-w-2xl text-white/80">
            Connect with our experts now and get a free consultation
            for your upcoming project.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/ca/contact-us/"
              className="inline-flex items-center justify-center gap-2 rounded-sm border border-[#0075A2] bg-[#0075A2] px-7 py-3.5 font-semibold text-white transition-colors hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0075A2]"
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