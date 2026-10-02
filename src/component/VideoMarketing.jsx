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
  "Better engagement",
  "High conversion rate",
  "Improved brand identity",
  "Better SEO",
  "Create brand loyalty",
  "Drive real results",
];

const services = [
  {
    title: "Explainer Videos",
    image:
      "https://res.cloudinary.com/di93stsbz/image/upload/f_auto,q_auto,c_limit,w_1920/v1787209893/xntrova-wp-media/xntrova-wp-media/vo-1-b112ea1e4ff29bce.png",
    description:
      "Simplify complex ideas with animated or live-action videos that clearly communicate your product or service benefits.",
  },
  {
    title: "Ad Films",
    image:
      "https://res.cloudinary.com/di93stsbz/image/upload/f_auto,q_auto,c_limit,w_1920/v1787209895/xntrova-wp-media/xntrova-wp-media/vo-2-ce19f5a5bb6721c0.png",
    description:
      "At Xntrova, we create powerful, persuasive ad films that emotionally connect with your target audience and drive brand recall.",
  },
  {
    title: "Corporate Videos",
    image:
      "https://res.cloudinary.com/di93stsbz/image/upload/f_auto,q_auto,c_limit,w_1920/v1787209897/xntrova-wp-media/xntrova-wp-media/vo-3-34cab7b5061a9199.png",
    description:
      "Showcase your company culture, achievements, and work ethic through sleek, professional corporate videos.",
  },
  {
    title: "Instagram Reels",
    image:
      "https://res.cloudinary.com/di93stsbz/image/upload/f_auto,q_auto,c_limit,w_1920/v1787209900/xntrova-wp-media/xntrova-wp-media/vo-4-b72ec22df9fac2d3.png",
    description:
      "We create scroll-stopping, SEO-friendly Instagram reels tailored to trends and your brand’s personality.",
  },
];

const reasons = [
  "Expert team of video strategists",
  "Seamless integration of creativity and analytics",
  "Customized storytelling tailored to your goals and audience",
  "Fast delivery with premium quality visuals",
  "Proven results across industries",
  "Cost-effective solutions",
  "Round-the-clock support",
  "Cross-platform, data-driven strategy",
  "Creative collaborations",
  "Professional expertise",
  "Certified professionals",
];

const faqs = [
  {
    question: "How do you decide the right type of video for my business?",
    answer:
      "We analyze your brand goals, audience behavior, and platform trends to recommend the ideal video type, such as explainer, testimonial, ad film, or short reel.",
  },
  {
    question: "Can video marketing help improve my website traffic?",
    answer:
      "Yes. Video content can increase engagement, encourage visitors to spend more time on your website, and support your overall content and SEO strategy.",
  },
  {
    question: "Do you provide voiceover and scriptwriting services?",
    answer:
      "Yes. We can support the complete video production process, including concept development, scriptwriting, voiceover, visual direction, and final production.",
  },
  {
    question: "How long does it take to produce a video?",
    answer:
      "Production time depends on the video's format, complexity, length, scripting requirements, and revisions. We establish a clear timeline before production begins.",
  },
  {
    question: "Can I reuse the same video across platforms?",
    answer:
      "Yes. Videos can be adapted into different formats and dimensions for platforms such as websites, YouTube, Instagram, LinkedIn, and other digital channels.",
  },
  {
    question: "Is it possible to update or repurpose old videos?",
    answer:
      "Yes. Existing videos can often be edited, refreshed, shortened, or repurposed into new content formats to extend their usefulness across multiple platforms.",
  },
  {
    question: "What’s the difference between an explainer video and an ad film?",
    answer:
      "An explainer video focuses on clearly communicating a product, service, or concept, while an ad film is primarily designed to persuade, create emotional impact, and strengthen brand recall.",
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
      "@id": "https://www.xntrova.com/ca/video-marketing/#webpage",
      url: "https://www.xntrova.com/ca/video-marketing/",
      name: "Video Marketing Services in Canada | Xntrova",
      description:
        "Tell your story through impactful video content that connects, converts, and captivates your audience. We handle everything from concept to production and distribution.",
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
          name: "Video Marketing That Inspires",
          item: "https://www.xntrova.com/ca/video-marketing/",
        },
      ],
    },
  ],
};

const inputClass =
  "w-full rounded-sm border border-[#DDE5E8] px-4 py-2.5 text-sm text-[#001320] outline-none focus:ring-2 focus:ring-[#0075A2] transition-shadow";

function LeadForm() {
  return (
    <form
      className="space-y-3"
      onSubmit={(e) => e.preventDefault()}
    >
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
          pattern="^\\+?[0-9]{10,15}$"
          placeholder="+91 98765 43210"
          aria-label="Your phone number"
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
        rows="2"
        placeholder="Tell us about your business goals"
        aria-label="Tell us about your business goals"
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

function SectionHeading({ title, description }) {
  return (
    <div className="mx-auto mb-10 max-w-2xl text-center md:mb-12">
      <h2 className="mb-3 font-medium md:font-bold">
        {title}
      </h2>

      <p className="text-lg font-medium text-[#64748B]">
        {description}
      </p>
    </div>
  );
}

function BulletGrid({ items }) {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
      {items.map((item, index) => (
        <div key={index}>
          <div className="flex h-full items-center gap-3 rounded-sm border border-[#DDE5E8] bg-[#F4F8FA] px-5 py-4">
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
    <div>
      <div className="flex h-full flex-col gap-3 rounded-md border border-[#DDE5E8] bg-white p-6 shadow-[0_1px_2px_rgba(16,24,32,0.04),0_8px_24px_rgba(16,24,32,0.06)] transition-shadow duration-300 hover:shadow-[0_4px_16px_rgba(16,24,32,0.1)]">
        <div className="relative -mx-1 -mt-1 h-80 w-full overflow-hidden rounded-sm">
          <img
            src={service.image}
            alt={service.title}
            loading="lazy"
            decoding="async"
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

export default function VideoMarketing() {
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
            src="https://res.cloudinary.com/di93stsbz/image/upload/f_auto,q_auto,c_limit,w_1920/v1787226409/xntrova-wp-media/banner-images/image-89.png"
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
                Video Marketing That Inspires
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
                Tell your story through impactful video content that connects,
                converts, and captivates your audience. We handle everything
                from concept to production and distribution.
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
              <p className="mb-1 text-xl font-bold text-[#001320]">
                Get a Free Digital Audit
              </p>

              <p className="mb-3 text-sm text-[#334155]">
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
          title="Video Marketing Services That Turns Views Into Business Growth"
          description="At Xntrova, we create impactful visual stories that engage audiences, boost online visibility, and drive measurable results. From dynamic explainer videos to trending Instagram reels, our video marketing services help brands connect, inspire, and convert."
        />
      </section>

      <section className="mx-auto w-full max-w-[1440px] px-5 py-16 sm:px-8 lg:px-10 max-md:py-[15px]">
        <SectionHeading
          title="Key Advantages of Video Marketing"
          description="Video has the power to engage and hold the attention of your customers like no other type of content. Hire our video experts in Canada and reach your potential customers."
        />

        <BulletGrid items={advantages} />
      </section>

      <section className="mx-auto w-full max-w-[1440px] px-5 py-8 sm:px-8 lg:px-10 max-md:py-[15px]">
        <SectionHeading
          title="Here’s what we offer"
          description="Video marketing is the effective method to drive real results and drive revenue. Here’s what we bring to the table for you."
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

      <section className="mx-auto w-full max-w-[1440px] px-5 py-16 sm:px-8 lg:px-10 max-md:py-[15px]">
        <SectionHeading
          title="Why Xntrova is the best video marketing company in Canada"
          description="We craft high-impact executive videos that position your leadership and brand at the forefront. Join hands with our video experts and communicate your value fast."
        />

        <BulletGrid items={reasons} />
      </section>

      <section className="mx-auto w-full max-w-[1440px] px-5 py-16 sm:px-8 lg:px-10 max-md:py-[15px]">
        <SectionHeading
          title="Frequently Asked Questions about Video Marketing"
          description="Get to know more about our video marketing services here. Check these FAQs and resolve your doubts in the least possible time."
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
                        className={`shrink-0 transition-transform duration-200 ${
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
              decoding="async"
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
            Connect with our experts now and get a free consultation for your
            upcoming project.
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