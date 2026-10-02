import { useState } from "react";
import {
  FiPhone,
  FiMail,
  FiPlus,
  FiShield,
  FiMessageCircle,
  FiStar,
  FiRefreshCw,
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
  "Proactive brand protection",
  "Increased customer loyalty",
  "Enhanced search engine rankings",
  "Competitive edge",
  "Data-driven strategies",
  "Performance reporting",
];

const services = [
  {
    title: "Brand Reputation Management",
    description:
      "Our Brand Reputation Management service helps you build, protect, and enhance your brand's image across all digital channels.",
    icon: FiShield,
  },
  {
    title: "Response Negative Reviews",
    description:
      "Xntrova's expert team crafts thoughtful, prompt, and professional responses to negative feedback to protect your reputation.",
    icon: FiMessageCircle,
  },
  {
    title: "Review Generation",
    description:
      "Xntrova ensures your brand gains a robust reputation through genuine customer voices.",
    icon: FiStar,
  },
  {
    title: "Online Reviews Management",
    description:
      "Xntrova's comprehensive review management service continuously monitors and analyzes reviews across multiple platforms, thus suppressing negative reviews.",
    icon: FiRefreshCw,
  },
];

const reasons = [
  "Certified experts",
  "Customized solutions for every business",
  "Transparent communication",
  "Proven track record",
  "Ethical and White-Hat practices",
  "Comprehensive approach",
  "24/7 customer support",
];

const faqs = [
  {
    question: "How quickly should negative reviews be responded to?",
    answer:
      "We recommend responding within 24 to 48 hours to demonstrate attentiveness and commitment to customer satisfaction.",
  },
  {
    question: "Can responding to negative reviews improve my brand reputation?",
    answer:
      "Yes. Thoughtful and timely responses can demonstrate that a business listens to customers, addresses legitimate concerns, and takes feedback seriously.",
  },
  {
    question:
      "How do you generate authentic positive reviews without violating platform policies?",
    answer:
      "We encourage genuine customers to share honest feedback through appropriate review-request processes while following the policies of the relevant review platforms.",
  },
  {
    question: "What if negative reviews are fake or malicious?",
    answer:
      "We can review potentially misleading or fraudulent feedback, document the relevant evidence, and help submit appropriate reports through the platform's available processes.",
  },
  {
    question:
      "How often do you provide status reports on reputation management efforts?",
    answer:
      "Reporting frequency can be aligned with your business needs and campaign activity, with updates covering review trends, mentions, visibility, responses, and key actions.",
  },
  {
    question:
      "Can online reputation management help improve local business visibility?",
    answer:
      "ORM can support local visibility by keeping business information accurate, strengthening review signals, managing listings, and maintaining a consistent digital presence.",
  },
  {
    question: "Is review generation suitable for all types of businesses?",
    answer:
      "Most businesses can benefit from genuine customer feedback, although the review-request approach should be adapted to the business type, customer journey, and platform policies.",
  },
];

const inputClass =
  "w-full rounded-sm border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-[#0075A2] focus:ring-2 focus:ring-[#0075A2]/20";

function LeadForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
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
        rows="2"
        className={`${inputClass} resize-none`}
      />

      <button
        type="submit"
        className="w-full rounded-sm bg-gradient-to-r from-[#001F2B] to-[#0075A2] px-6 py-3 font-semibold text-white transition-opacity hover:opacity-90"
      >
        Submit
      </button>
    </form>
  );
}

function SectionHeading({ title, description }) {
  return (
    <div className="mx-auto mb-10 max-w-2xl text-center md:mb-12">
      <h2 className="mb-3 text-2xl font-medium tracking-tight text-slate-900 sm:text-3xl md:text-4xl md:font-bold">
        {title}
      </h2>

      <p className="text-base font-medium leading-relaxed text-slate-500 sm:text-lg">
        {description}
      </p>
    </div>
  );
}

export default function OnlineReputation() {
  const [activeFaq, setActiveFaq] = useState(0);

  return (
    <main className="overflow-hidden bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
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
                  "https://www.xntrova.com/online-reputation-management/#webpage",
                url: "https://www.xntrova.com/online-reputation-management/",
                name: "Best ORM Company in Delhi | Xntrova Technologies",
                description:
                  "Xntrova Technologies is the best ORM company in Delhi, managing your online reputation with expert solutions to protect and grow your brand’s image.",
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
                    item: "https://www.xntrova.com/",
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "Online Reputation Management",
                    item: "https://www.xntrova.com/online-reputation-management/",
                  },
                ],
              },
            ],
          }),
        }}
      />

      <section className="relative overflow-hidden bg-[#001F2B] text-white lg:flex lg:min-h-[min(58vh,620px)] lg:items-center">
        <div className="absolute inset-0">
          <img
            src="https://res.cloudinary.com/di93stsbz/image/upload/f_auto,q_auto,c_limit,w_1920/v1787226395/xntrova-wp-media/banner-images/image-92.png"
            alt=""
            fetchPriority="high"
            loading="eager"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-br from-[#001320]/72 via-[#012A3A]/50 to-[#01415A]/26" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_18%_45%,rgba(0,15,26,0.55),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_60%,rgba(0,139,185,0.20),transparent_45%)]" />

        <div className="relative z-10 mx-auto w-full max-w-[1440px] px-5 py-[15px] sm:px-8 sm:py-12 lg:px-10 lg:py-8">
          <div className="grid w-full grid-cols-1 items-center gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
            <div className="max-w-2xl">
              <h1 className="mb-3 text-[35px] font-bold leading-[1.15] tracking-tight text-white sm:text-5xl lg:text-6xl">
                Online Reputation Management
              </h1>

              <div className="mb-5 h-1.5 w-28 rounded-full bg-[#00A8D6]" />

              <p className="mb-6 max-w-xl text-base leading-relaxed text-white/90 sm:text-lg">
                We protect and enhance your brand&apos;s image with proactive
                monitoring, response strategies, and review management. Build
                credibility, restore trust, and maintain a positive online
                presence.
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href="tel:+918683828646"
                  className="inline-flex items-center justify-center gap-2 rounded-sm border border-[#0075A2] bg-[#0075A2] px-7 py-3.5 font-semibold text-white transition-all hover:opacity-90"
                >
                  <FiPhone size={18} />
                  Chat with us
                </a>
              </div>
            </div>

            <div
              id="quote"
              className="w-full max-w-md justify-self-center rounded-lg border border-white/30 bg-white/95 p-6 text-slate-900 shadow-[0_20px_50px_rgba(0,19,32,0.35)] backdrop-blur-sm lg:justify-self-end"
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

      <section className="mx-auto w-full max-w-[1440px] px-5 py-[15px] sm:px-8 lg:px-10 lg:py-16">
        <SectionHeading
          title="Key Advantages of Online Reputation Management"
          description="Our customized ORM solutions ensure you maintain trust, attract more customers, and build a lasting positive impact online."
        />

        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="relative h-72 w-full overflow-hidden rounded-lg ring-[3px] ring-slate-100 lg:h-96">
            <img
              src="https://res.cloudinary.com/di93stsbz/image/upload/f_auto,q_auto,c_limit,w_1920/v1787210057/xntrova-wp-media/xntrova-wp-media/Rectangle-4484-5-620a55dcd47d89a3.png"
              alt="Key advantages of online reputation management"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {advantages.map((item) => (
              <div
                key={item}
                className="flex h-full items-center gap-3 rounded-sm border border-slate-200 bg-slate-50 px-5 py-4 transition-all hover:-translate-y-1 hover:shadow-md"
              >
                <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-[#0075A2]" />
                <p className="font-medium text-slate-900">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1440px] px-5 py-[15px] sm:px-8 lg:px-10 lg:py-16">
        <SectionHeading
          title="What do we offer"
          description="From performance monitoring to suppressing negative reviews, our digital marketing agency in Delhi offers an array of ORM services to safeguard your reputation."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="h-full rounded-md bg-[#001F2B] p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(0,31,43,0.22)]"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#0075A2] text-white">
                    <Icon size={22} />
                  </div>

                  <div>
                    <p className="mb-2 font-semibold text-white">
                      {service.title}
                    </p>

                    <p className="text-sm leading-relaxed text-white/70">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1440px] px-5 py-[15px] sm:px-8 lg:px-10 lg:py-16">
        <SectionHeading
          title="Why choose Xntrova for your reputation management needs"
          description="Want to build positive reputation on the internet? Choose our digital marketing company in Delhi and let our experts handle all negative reviews for you."
        />

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {reasons.map((reason) => (
            <div
              key={reason}
              className="flex h-full items-center gap-3 rounded-sm border border-slate-200 bg-slate-50 px-5 py-4 transition-all hover:-translate-y-1 hover:shadow-md"
            >
              <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-[#0075A2]" />

              <p className="font-medium text-slate-900">{reason}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1440px] px-5 py-[15px] sm:px-8 lg:px-10 lg:py-8">
        <article className="prose prose-slate mx-auto max-w-3xl prose-headings:font-bold prose-headings:text-slate-900 prose-p:text-slate-700 prose-p:leading-8 prose-li:text-slate-700">
          <p>
            As the digital world is growing, customers have more options. In
            this crucial time, it&apos;s important to maintain and manage your
            brand image. The online reputation of a brand determines its
            future, including whether a customer will be convinced to make a
            purchase. Negative reviews, unanswered complaints, or outdated
            information can create doubt about your business before you even
            get the chance to make your pitch. This is because Online
            Reputation Management (ORM) is more than just handling negative
            reviews.
          </p>

          <h2>What Is Online Reputation Management?</h2>

          <p>
            Online Reputation Management is the process of tracking, managing,
            and improving your reputation online. The reputation of a brand
            does not depend only on reviews. It depends on Google search
            results, directories, social networks, press releases, forums,
            feedback from clients, mentions of your brand, or any other kind
            of online content.
          </p>

          <p>
            Good ORM services help to unite all these aspects into one system
            that finds the threats to your reputation, reacts to feedback,
            supports credible content, and improves the representation online.
          </p>

          <p>
            It is important to understand that ORM does not consist of writing
            false reviews or deleting negative comments. ORM consists of
            building a credible presence online, reacting to real concerns,
            inviting customers to leave their feedback, and making credible
            content easily accessible.
          </p>

          <h3>Why Should You Invest in ORM?</h3>

          <p>
            Customer trust and online reputation go hand-in-hand. And customer
            trust in a business is quantifiable. For instance, according to
            Harvard Business School research, each additional star in the Yelp
            rating meant a 5-9% revenue increase for restaurants. While the
            study is limited to particular industries, it demonstrates how
            important it may be to manage your online reputation from a
            business perspective rather than for brand purposes alone.
          </p>

          <p>Using an effective ORM strategy, you will be able to -</p>

          <ul>
            <li>Track reviews, mentions, and discussions of your brand</li>
            <li>
              Find reputation issues that can turn into bigger issues
            </li>
            <li>Manage your responses to actual negative feedback</li>
            <li>
              Foster positive and honest reviews from real customers
            </li>
            <li>Keep all information updated on your website</li>
            <li>Boost your positive and authoritative brand content</li>
            <li>
              Improve your reputation online on review sites, social media, and
              other digital channels
            </li>
          </ul>

          <p>
            As a founder, professional, doctor, consultant, or anyone who is
            closely connected with his/her business or profession, you can also
            improve your professional reputation using ORM.
          </p>

          <h3>How Does Online Reputation Management Work?</h3>

          <p>
            Effective ORM services start with understanding how your reputation
            is currently presented online.
          </p>

          <h4>Audit existing Online Reputation:-</h4>

          <p>
            We analyse the reputation signals, such as search results, reviews,
            profiles, listings, mentions, etc.
          </p>

          <h4>Monitor New Reviews:-</h4>

          <p>
            We monitor new reviews, mentions, discussions, and any new
            developments that may impact your reputation.
          </p>

          <h4>Respond to Reputation Issues:-</h4>

          <p>We create a response strategy for reviews and other reputation issues.</p>

          <h4>Strengthen Positive Signals:-</h4>

          <p>
            We increase the accuracy of business information, good content,
            profiles, listings, and review signals.
          </p>

          <h4>Measure Progress:-</h4>

          <p>
            We measure changes in reviews, sentiment, mentions, visibility, and
            other reputation signals.
          </p>

          <h3>
            What Should You Check Before Choosing an ORM Service in Delhi NCR?
          </h3>

          <p>
            It is wrong to choose an ORM service that guarantees the removal of
            negative reviews or promises a perfect rating. This is because
            even legitimate agencies do not have control over every website,
            and it is wrong to hide negative comments.
          </p>

          <p>
            Before you choose an agency, ask how it handles negative comments,
            review generation, monitoring, search visibility, and reporting.
          </p>

          <h3>What Does Xntrova Offer?</h3>

          <p>
            Xntrova offers online reputation management services in Delhi NCR
            for organisations, brands, professionals, entrepreneurs, and
            individuals. We offer brand reputation management, review
            management, handling negative reviews, creation of authentic
            reviews, reputation monitoring, brand mentions, profile and
            listing optimisation, SEO and content for reputation, and
            performance reports.
          </p>

          <p>
            By combining the elements of reputation strategy, content,
            reputation monitoring, and reputation search optimisation, we can
            help you control how your reputation appears when searched for.
          </p>

          <p>
            It is already having an effect on how your business is perceived.
            Xntrova ORM services can help you monitor and improve your
            reputation. Speak to our ORM specialists for reputation evaluation
            and strategy.
          </p>
        </article>
      </section>

      <section className="mx-auto w-full max-w-[1440px] px-5 py-[15px] sm:px-8 lg:px-10 lg:py-16">
        <SectionHeading
          title="Frequently Answered Questions About Our ORM Services"
          description="Having questions? We are here to answer. Scroll through our FAQ section and get to know more about ORM services."
        />

        <div className="mx-auto max-w-3xl">
          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = activeFaq === index;

              return (
                <div
                  key={faq.question}
                  className="overflow-hidden rounded-md border border-slate-200"
                >
                  <h3>
                    <button
                      type="button"
                      onClick={() =>
                        setActiveFaq(isOpen ? -1 : index)
                      }
                      className={`flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-semibold transition-colors ${
                        isOpen
                          ? "bg-[#0075A2]/10 text-[#005B7C]"
                          : "text-slate-900 hover:bg-slate-50"
                      }`}
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${index}`}
                    >
                      <span>{faq.question}</span>

                      <FiPlus
                        size={19}
                        className={`shrink-0 transition-transform duration-300 ${
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

      <section className="mx-auto w-full max-w-[1440px] px-5 py-[15px] sm:px-8 lg:px-10 lg:py-16">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h2 className="mb-3 text-3xl font-medium tracking-tight text-slate-900 sm:text-4xl">
              Get in touch with us
            </h2>

            <p className="mb-8 text-base text-slate-500 sm:text-lg">
              Get in touch with our experts and seek further assistance
            </p>

            <div className="space-y-4">
              <a
                href="tel:+918683828646"
                className="group flex items-center gap-4 rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0075A2]"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#0075A2]/10 text-[#0075A2]">
                  <FiPhone size={20} />
                </span>

                <span>
                  <span className="block text-sm text-slate-500">
                    Call For Advice
                  </span>

                  <span className="block font-semibold text-slate-900 group-hover:underline">
                    +91 868-382-8646
                  </span>
                </span>
              </a>

              <a
                href="mailto:sales@xntrova.com"
                className="group flex items-center gap-4 rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0075A2]"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#0075A2]/10 text-[#0075A2]">
                  <FiMail size={20} />
                </span>

                <span>
                  <span className="block text-sm text-slate-500">
                    Mail Us
                  </span>

                  <span className="block font-semibold text-slate-900 group-hover:underline">
                    sales@xntrova.com
                  </span>
                </span>
              </a>
            </div>
          </div>

          <div className="relative h-72 w-full overflow-hidden rounded-lg lg:h-96">
            <img
              src="https://res.cloudinary.com/di93stsbz/image/upload/f_auto,q_auto,c_limit,w_1920/v1787209714/xntrova-wp-media/xntrova-wp-media/contact-man-ef520e947c3403b4.png"
              alt="Contact Xntrova"
              loading="lazy"
              className="h-full w-full object-contain"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#001A24] text-white">
        <div className="mx-auto w-full max-w-[1440px] px-5 py-[15px] text-center sm:px-8 lg:px-10 lg:py-16">
          <h2 className="mb-4 text-2xl font-medium text-white sm:text-3xl md:text-4xl md:font-bold">
            Elevate Your Brand with Digital Excellence
          </h2>

          <p className="mx-auto mb-8 max-w-2xl text-base text-white/80 sm:text-lg">
            Get a comprehensive digital audit and discover how we can
            accelerate your business growth
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/contact-us/"
              className="inline-flex items-center justify-center rounded-sm border border-[#0075A2] bg-[#0075A2] px-7 py-3.5 font-semibold text-white transition-all hover:opacity-90"
            >
              Get Free Digital Audit
            </a>

            <a
              href="#"
              className="inline-flex items-center justify-center rounded-sm border border-white/70 bg-transparent px-7 py-3.5 font-semibold text-white transition-all hover:bg-white/10"
            >
              Download Brochure
            </a>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="mx-auto w-full max-w-[1440px] px-5 py-[15px] sm:px-8 lg:px-10 lg:py-16"
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