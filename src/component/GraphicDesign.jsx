
import { useState } from "react";
import { FiPlus, FiArrowRight, FiPhone, FiMail } from "react-icons/fi";

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
  "Better visual communication",
  "More user engagement",
  "Improved trust and credibility",
  "Customer retention",
  "More sales and conversions",
  "Encourages structured marketing",
];

const designServices = [
  {
    title: "Logo Design",
    image:
      "https://res.cloudinary.com/di93stsbz/image/upload/f_auto,q_auto,c_limit,w_1920/v1787209959/xntrova-wp-media/xntrova-wp-media/Rectangle-4476-28-b97c0b32b083dfd3.png",
    description:
      "Xntrova creates logos that are not only visually striking but also strategically aligned with your business values and audience.",
  },
  {
    title: "Social Media Designs",
    image:
      "https://res.cloudinary.com/di93stsbz/image/upload/f_auto,q_auto,c_limit,w_1920/v1787209963/xntrova-wp-media/xntrova-wp-media/Rectangle-4476-29-46a4313ca0010c73.png",
    description:
      "Our social media design service combines creativity with brand consistency to help your posts stand out and communicate effectively.",
  },
  {
    title: "Catalog Design",
    image:
      "https://res.cloudinary.com/di93stsbz/image/upload/f_auto,q_auto,c_limit,w_1920/v1787209964/xntrova-wp-media/xntrova-wp-media/Rectangle-4476-30-279d704e765a9c11.png",
    description:
      "Xntrova designs print and digital catalogs that blend stunning visuals with logically structured information.",
  },
  {
    title: "Business Cards",
    image:
      "https://res.cloudinary.com/di93stsbz/image/upload/f_auto,q_auto,c_limit,w_1920/v1787209966/xntrova-wp-media/xntrova-wp-media/Rectangle-4476-31-0f3684a83d0dfcb5.png",
    description:
      "Make a long-lasting impression with professionally designed business cards that represent your brand perfectly.",
  },
];

const reasons = [
  "Compelling designs",
  "Flexible graphic design packages",
  "Professional designers",
  "Upfront pricing",
  "Open communication",
  "Affordable design packages",
];

const faqs = [
  {
    question:
      "What makes professional graphic design important for my business?",
    answer:
      "High-quality graphic design helps your brand make a strong first impression, communicate messages clearly, and stand out in competitive markets.",
  },
  {
    question:
      "How do you ensure that your designs reflect my brand’s identity?",
    answer:
      "We study your brand values, target audience, visual identity, messaging, and business objectives before creating designs that maintain consistency across your brand touchpoints.",
  },
  {
    question: "Do you create both online and offline marketing materials?",
    answer:
      "Yes. Our graphic design services can cover digital and print requirements, including social media creatives, digital assets, catalogs, business cards, and other marketing materials.",
  },
  {
    question: "Can you redesign or modernize my existing brand visuals?",
    answer:
      "Yes. We can refresh existing visual assets while maintaining important elements of your brand identity and introducing a more modern and consistent visual direction.",
  },
  {
    question: "What tools and software do your designers use?",
    answer:
      "Our designers use professional design and creative software appropriate to the project's requirements to create high-quality digital and print-ready assets.",
  },
  {
    question: "How many design concepts and revisions do I get?",
    answer:
      "The number of concepts and revisions depends on the selected design service and package. These requirements can be discussed before starting the project.",
  },
  {
    question: "Can I get the source files for future modifications?",
    answer:
      "Source files can be provided according to the scope and requirements of your project. We can discuss the required editable formats before project delivery.",
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
      "@id": "https://www.xntrova.com/ca/graphic-design/#webpage",
      url: "https://www.xntrova.com/ca/graphic-design/",
      name: "Graphic Design Services in Canada | Xntrova",
      description:
        "Our design team transforms ideas into visually stunning brand experiences. From logos to digital assets, we deliver designs that capture attention and communicate your story beautifully.",
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
          name: "Creative Graphic Design Solutions",
          item: "https://www.xntrova.com/ca/graphic-design/",
        },
      ],
    },
  ],
};

function SectionHeading({ title, description }) {
  return (
    <div className="mx-auto mb-10 max-w-2xl text-center md:mb-12">
      <h2 className="mb-3 text-2xl font-medium leading-tight text-[#001320] md:text-3xl md:font-bold">
        {title}
      </h2>

      {description && (
        <p className="text-base font-medium leading-7 text-slate-500">
          {description}
        </p>
      )}
    </div>
  );
}

function LeadForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <input
        type="text"
        tabIndex="-1"
        autoComplete="off"
        aria-hidden="true"
        name="website_url"
        className="hidden"
      />

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <input
          type="text"
          name="name"
          placeholder="Your Name*"
          aria-label="Your name"
          required
          className="w-full rounded-sm border border-[#DDE5E8] px-4 py-2.5 text-sm text-[#001320] outline-none transition-shadow focus:ring-2 focus:ring-[#0075A2]"
        />

        <input
          type="email"
          name="email"
          placeholder="you@company.com*"
          aria-label="Your email address"
          required
          className="w-full rounded-sm border border-[#DDE5E8] px-4 py-2.5 text-sm text-[#001320] outline-none transition-shadow focus:ring-2 focus:ring-[#0075A2]"
        />
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <input
          type="tel"
          name="phone"
          placeholder="+91 98765 43210"
          aria-label="Your phone number"
          pattern="^\+?[0-9]{10,15}$"
          className="w-full rounded-sm border border-[#DDE5E8] px-4 py-2.5 text-sm text-[#001320] outline-none transition-shadow focus:ring-2 focus:ring-[#0075A2]"
        />

        <input
          type="text"
          name="company"
          placeholder="Company Name"
          aria-label="Your company name"
          className="w-full rounded-sm border border-[#DDE5E8] px-4 py-2.5 text-sm text-[#001320] outline-none transition-shadow focus:ring-2 focus:ring-[#0075A2]"
        />
      </div>

      <select
        name="service"
        aria-label="Which service are you interested in"
        defaultValue=""
        className="w-full rounded-sm border border-[#DDE5E8] px-4 py-2.5 text-sm text-[#001320] outline-none transition-shadow focus:ring-2 focus:ring-[#0075A2]"
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
        className="w-full resize-none rounded-sm border border-[#DDE5E8] px-4 py-2.5 text-sm text-[#001320] outline-none transition-shadow focus:ring-2 focus:ring-[#0075A2]"
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

function GraphicDesign() {
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
            src="https://res.cloudinary.com/di93stsbz/image/upload/f_auto,q_auto,c_limit,w_1920/v1787226392/xntrova-wp-media/banner-images/image-97.png"
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
              <h1 className="mb-3 text-[35px] font-bold leading-[1.15] tracking-tight text-white sm:text-5xl lg:text-6xl">
                Creative Graphic Design Solutions
              </h1>

              <svg
                width="120"
                height="10"
                viewBox="0 0 120 10"
                fill="none"
                aria-hidden="true"
                className="mb-5 text-[#4CC9F0]"
              >
                <path
                  d="M2 7C24 2 96 2 118 7"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>

              <p className="mb-6 max-w-xl text-lg leading-7 text-white/90">
                Our design team transforms ideas into visually stunning brand
                experiences. From logos to digital assets, we deliver designs
                that capture attention and communicate your story beautifully.
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href="tel:+161735557866"
                  className="inline-flex items-center justify-center gap-2 rounded-sm border border-[#0075A2] bg-[#0075A2] px-7 py-3.5 font-semibold text-white transition-colors hover:opacity-90"
                >
                  Chat with us
                </a>
              </div>
            </div>

            <div
              id="quote"
              className="w-full max-w-md justify-self-center rounded-lg border border-[#DDE5E8] bg-white/95 p-6 text-[#001320] shadow-[0_20px_50px_rgba(0,19,32,0.35)] backdrop-blur-sm lg:justify-self-end"
            >
              <p className="mb-1 text-2xl font-bold">Get a Free Digital Audit</p>

              <p className="mb-3 text-sm text-slate-500">
                Tell us about your business and we’ll get back to you shortly.
              </p>

              <LeadForm />
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#001F2B]/30 to-transparent" />
      </section>

      <section className="mx-auto w-full max-w-[1440px] px-5 py-16 max-md:py-[15px] sm:px-8 lg:px-10">
        <SectionHeading
          title="Graphic Design Services That Upgrade Your Branding"
          description="Xntrova is a leading graphic design company in Vancouver, offering an array of design services to clients. We build a brand that turns heads, earns trust, and opens doors for new opportunities. So, why wait? Communicate with us now and get a quote for your required services."
        />
      </section>

      <section className="mx-auto w-full max-w-[1440px] px-5 py-16 max-md:py-[15px] sm:px-8 lg:px-10">
        <SectionHeading
          title="Key Advantages of Graphic Design"
          description="Graphic design helps maintain a consistent visual identity across different channels. Schedule a free consultation with us and get compelling designs for your brand."
        />

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {advantages.map((item) => (
            <div
              key={item}
              className="flex h-full items-center gap-3 rounded-sm border border-[#DDE5E8] bg-[#F4F8FA] px-5 py-4"
            >
              <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-[#0075A2]" />

              <p className="font-medium text-[#001320]">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1440px] px-5 py-8 max-md:py-[15px] sm:px-8 lg:px-10">
        <SectionHeading
          title="Here’s what we offer"
          description="Xntrova offers an array of graphic design services to meet clients’ business objectives and requirements. Here’s what we have in store for you."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {designServices.map((service, index) => (
            <article
              key={service.title}
              className="flex h-full flex-col gap-3 rounded-md border border-[#DDE5E8] bg-white p-6 shadow-[0_1px_2px_rgba(16,24,32,0.04),0_8px_24px_rgba(16,24,32,0.06)] transition-shadow duration-300 hover:shadow-[0_4px_16px_rgba(16,24,32,0.1)]"
              style={{
                animationDelay: `${index * 90}ms`,
              }}
            >
              <div className="relative -mx-1 -mt-1 h-80 w-[calc(100%+8px)] overflow-hidden rounded-sm">
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              <p className="font-semibold text-[#001320]">{service.title}</p>

              <p className="flex-1 text-sm leading-6 text-slate-600">
                {service.description}
              </p>

              <button
                type="button"
                className="inline-flex items-center justify-center gap-2 self-start rounded-sm border border-transparent px-0 py-0 font-semibold text-[#0075A2] transition-colors hover:underline"
              >
                Read More
                <span className="sr-only"> about {service.title}</span>
                <FiArrowRight size={16} />
              </button>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1440px] px-5 py-16 max-md:py-[15px] sm:px-8 lg:px-10">
        <SectionHeading
          title="Why choose Xntrova as your next graphic design partner"
          description="Xntrova ensures the best-in-class graphic design services in Canada with the highest possible quality. Here’s what makes us stand out from the rest."
        />

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {reasons.map((reason) => (
            <div
              key={reason}
              className="flex h-full items-center gap-3 rounded-sm border border-[#DDE5E8] bg-[#F4F8FA] px-5 py-4"
            >
              <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-[#0075A2]" />

              <p className="font-medium text-[#001320]">{reason}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1440px] px-5 py-16 max-md:py-[15px] sm:px-8 lg:px-10">
        <SectionHeading
          title="Frequently Asked Questions about our graphic design"
          description="Not sure about graphic design services? Read our FAQs below and fix all your general concerns before hiring our experts."
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
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${index}`}
                      className={`flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-semibold transition-colors ${
                        isOpen
                          ? "bg-[#0075A2]/10 text-[#0075A2]"
                          : "text-[#001320]"
                      }`}
                    >
                      <span>{faq.question}</span>

                      <FiPlus
                        size={18}
                        className={`shrink-0 transition-transform ${
                          isOpen ? "rotate-45" : ""
                        }`}
                      />
                    </button>
                  </h3>

                  {isOpen && (
                    <div
                      id={`faq-panel-${index}`}
                      className="px-5 pb-4 text-sm leading-relaxed text-slate-500"
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

      <section className="mx-auto w-full max-w-[1440px] px-5 py-16 max-md:py-[15px] sm:px-8 lg:px-10">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h2 className="mb-3 text-3xl font-semibold text-[#001320]">
              Get a Free Consultation With Us
            </h2>

            <p className="mb-8 text-slate-500">
              Call us right away and speak to our expert for further assistance
            </p>

            <div className="space-y-4">
              <a
                href="tel:+161735557866"
                className="group flex items-center gap-4 rounded-sm"
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
                className="group flex items-center gap-4 rounded-sm"
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
              decoding="async"
              className="h-full w-full object-contain"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#001320] text-white">
        <div className="mx-auto w-full max-w-[1440px] px-5 py-16 text-center max-md:py-[15px] sm:px-8 lg:px-10">
          <h2 className="mb-4 text-3xl font-medium text-white md:text-4xl md:font-bold">
            Ready to accelerate your business growth
          </h2>

          <p className="mx-auto mb-8 max-w-2xl text-base leading-7 text-white/80">
            Connect with our experts now and get a free consultation for your
            upcoming project.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/ca/contact-us/"
              className="inline-flex items-center justify-center rounded-sm border border-[#0075A2] bg-[#0075A2] px-7 py-3.5 font-semibold text-white transition-colors hover:opacity-90"
            >
              Get Free Digital Audit
            </a>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="mx-auto w-full max-w-[1440px] px-5 py-16 max-md:py-[15px] sm:px-8 lg:px-10"
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

export default GraphicDesign;

