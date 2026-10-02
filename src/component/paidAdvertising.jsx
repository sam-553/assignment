import { useState } from "react";
import {
  FiPhone,
  FiMail,
  FiPlus,
  FiSearch,
  FiShoppingCart,
  FiUsers,
  FiRefreshCw,
  FiTarget,
  FiBarChart2,
  FiCheckCircle,
  FiMonitor,
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
  "Transparent tracking",
  "Require scalable budget",
  "Precise targeting",
  "Drives effective leads",
  "Instant traffic",
  "Cross-platform expertise",
];

const services = [
  {
    title: "Search Ads",
    description:
      "Our PPC Ad agency optimizes Google Ads campaigns with strategic keyword targeting, ad copywriting, and continuous bid adjustments.",
    icon: FiSearch,
  },
  {
    title: "Social Media Ads",
    description:
      "Engage your audience on platforms like Facebook, Instagram, LinkedIn, and TikTok with expertly crafted social ads that leverage audience insights.",
    icon: FiUsers,
  },
  {
    title: "Remarketing",
    description:
      "Our remarketing strategies use personalized messaging to nurture leads through the sales funnel and drive repeat visits.",
    icon: FiRefreshCw,
  },
  {
    title: "Google Shopping Ads",
    description:
      "Showcase your products directly in Google search results with optimized Shopping ads.",
    icon: FiShoppingCart,
  },
];

const whyChooseUs = [
  "Experienced PPC professionals",
  "Customized advertising strategies",
  "Advanced AI tools and analytics",
  "Transparent reports",
  "Dedicated support",
];

const faqs = [
  {
    question: "What platforms do you advertise on?",
    answer:
      "We specialize in Google Search Ads, Google Shopping, Facebook, Instagram, LinkedIn, and TikTok ads, tailoring strategies for each platform's audience.",
  },
  {
    question: "How do you determine ad budgets?",
    answer:
      "We determine advertising budgets based on your business objectives, target audience, competition, expected customer value, campaign goals, and available resources.",
  },
  {
    question: "What is remarketing and how does it work?",
    answer:
      "Remarketing allows businesses to show relevant advertisements to people who have previously visited their website or interacted with their brand, helping bring interested users back into the conversion journey.",
  },
  {
    question: "How long before I see results from paid ads?",
    answer:
      "Paid advertising can begin generating traffic shortly after campaigns launch, but meaningful performance trends require enough data for testing, optimization, and audience learning.",
  },
  {
    question: "Do you handle ad creative design?",
    answer:
      "Yes. Depending on your campaign requirements, we can support ad creative strategy, messaging, formats, and landing-page recommendations to improve campaign performance.",
  },
  {
    question: "Can paid ads improve my organic search rankings?",
    answer:
      "Paid advertisements and organic search rankings are separate channels. Running paid ads does not directly increase organic rankings, although paid campaigns can provide useful audience and keyword insights.",
  },
  {
    question: "How often do you provide campaign reports?",
    answer:
      "Reporting frequency can be customized according to your campaign and business requirements. Reports can include traffic, conversions, cost per lead, acquisition costs, spending, and other relevant performance metrics.",
  },
];

const heroImage =
  "https://res.cloudinary.com/di93stsbz/image/upload/f_auto,q_auto,c_limit,w_1920/v1787226398/xntrova-wp-media/banner-images/image-99.png";

const advantageImage =
  "https://res.cloudinary.com/di93stsbz/image/upload/f_auto,q_auto,c_limit,w_1920/v1787209978/xntrova-wp-media/xntrova-wp-media/Rectangle-4484-13-5faba77f526d2095.png";

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
        placeholder="Tell us about your business goals"
        aria-label="Tell us about your business goals"
        rows={compact ? 2 : 4}
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

function PaidAdvertising() {
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

        <div className="absolute inset-0 bg-gradient-to-br from-[#001320]/75 via-[#012A3A]/55 to-[#01415A]/30" />

        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_18%_45%,rgba(0,15,26,0.55),transparent_70%)]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_60%,rgba(0,139,185,0.20),transparent_45%)]" />

        <div className="relative z-10 mx-auto w-full max-w-[1440px] px-5 py-10 sm:px-8 sm:py-12 lg:px-10 lg:py-8">
          <div className="grid w-full grid-cols-1 items-center gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
            <div className="max-w-2xl">
              <h1 className="mb-3 text-[35px] font-bold leading-[1.15] tracking-tight sm:text-5xl lg:text-6xl">
                Performance-Driven Paid Advertising
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
                Maximize ROI with targeted paid campaigns across Google, Meta,
                and beyond. Our PPC experts create strategies that deliver
                qualified traffic, measurable results, and scalable growth.
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href="tel:+918683828646"
                  className="inline-flex items-center justify-center gap-2 rounded-sm border border-[#0075A2] bg-[#0075A2] px-7 py-3.5 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#006487] hover:shadow-lg"
                >
                  <FiPhone size={18} />
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

              <LeadForm compact />
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#001F2B]/30 to-transparent" />
      </section>

      <section className="mx-auto w-full max-w-[1440px] px-5 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto mb-10 max-w-2xl text-center md:mb-12">
          <h2 className="mb-3 text-2xl font-medium md:text-3xl md:font-bold">
            Key Advantages of Paid Advertising
          </h2>

          <p className="text-base font-medium leading-7 text-slate-500 md:text-lg">
            PPC Agency helps you reach the right audience at the right time. As
            a leading PPC agency in Delhi, we turn clicks into ROI, thus
            maximizing your growth.
          </p>
        </div>

        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="relative h-72 w-full overflow-hidden rounded-lg ring-[3px] ring-slate-100 lg:h-96 lg:order-1">
            <img
              src={advantageImage}
              alt="Key advantages of paid advertising"
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:order-2">
            {advantages.map((item) => (
              <div
                key={item}
                className="group flex h-full items-center gap-3 rounded-sm border border-slate-200 bg-slate-50 px-5 py-4 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-md"
              >
                <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-[#0075A2] transition-transform duration-300 group-hover:scale-125" />

                <p className="font-medium text-slate-900">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1440px] px-5 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto mb-10 max-w-2xl text-center md:mb-12">
          <h2 className="mb-3 text-2xl font-medium md:text-3xl md:font-bold">
            Here's what we offer
          </h2>

          <p className="text-base font-medium leading-7 text-slate-500 md:text-lg">
            Want to make the most of your ad budget? Choose from an array of
            PPC services in Delhi we offer and get measurable outcomes.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="group flex h-full items-start gap-4 rounded-md bg-[#082B39] p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-[#063746] hover:shadow-xl"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#0075A2] text-white transition-transform duration-300 group-hover:scale-110">
                  <Icon size={21} />
                </div>

                <div>
                  <p className="mb-1 font-semibold text-white">
                    {service.title}
                  </p>

                  <p className="text-sm leading-6 text-white/70">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1440px] px-5 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto mb-10 max-w-2xl text-center md:mb-12">
          <h2 className="mb-3 text-2xl font-medium leading-tight md:text-3xl md:font-bold">
            Why choose Xntrova for your paid advertising needs
          </h2>

          <p className="text-base font-medium leading-7 text-slate-500 md:text-lg">
            Whether you want to boost sales or generate leads, our paid
            advertising campaigns ensure maximum ROI and success. Here's what
            makes us stand out.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {whyChooseUs.map((item) => (
            <div
              key={item}
              className="group flex h-full items-center gap-3 rounded-sm border border-slate-200 bg-slate-50 px-5 py-4 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-md"
            >
              <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-[#0075A2]" />

              <p className="font-medium text-slate-900">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1440px] px-5 py-8 sm:px-8 lg:px-10">
        <article className="mx-auto max-w-3xl text-slate-900">
          <p className="mb-6 leading-7">
            Getting clicks is easy. However, converting clicks into potential
            buyers is not a simple process. It needs proper targeting, an
            offer, a landing page, a budget, and optimization. Xntrova offers
            PPC services in Delhi to help your business achieve success through
            targeted marketing.
          </p>

          <h2 className="mb-4 text-2xl font-bold">
            What Are PPC Services?
          </h2>

          <p className="mb-6 leading-7">
            Pay-per-click (PPC) is a kind of online advertising strategy
            whereby one pays for each click on his/her advertisement. Examples
            of pay-per-click include Google Search Ads, Google Shopping Ads,
            Google Display Ads, Meta Ads, and remarketing campaigns.
          </p>

          <p className="mb-6 leading-7">
            While organic marketing does not target individuals who are looking
            out for something to buy, PPC is a kind of digital marketing that
            allows you to place your business before a person who is actively
            looking for a solution.
          </p>

          <p className="mb-8 leading-7">
            For example, while running shopping ads for an ecommerce company, an
            advertiser can provide users with images, titles, prices, and the
            name of the store before they click on it.
          </p>

          <h3 className="mb-4 text-xl font-bold">
            Why Is PPC Important for a Growing Business?
          </h3>

          <p className="mb-6 leading-7">
            Paid advertising provides an opportunity for the brand to compete
            against demand when its organic visibility is yet to catch up. This
            becomes especially important in light of the rapid growth in the
            global digital commerce space. As Google reports, India’s online
            retail market has already reached $90 billion in 2025 and is
            expected to surpass $250 billion by 2030. An additional 150 million
            Indians are expected to shop online in 2025- 2030, according to the
            research.
          </p>

          <p className="mb-4 leading-7">
            However, increased online demand will also bring increased
            competition for consumers’ attention. A well-structured PPC
            campaign will help you-
          </p>

          <ul className="mb-8 list-disc space-y-2 pl-6 leading-7">
            <li>
              Target users according to search intent, geography, audience, and
              other targeting parameters
            </li>
            <li>Produce qualified leads or sales</li>
            <li>Manage daily and overall campaign budgets</li>
            <li>
              Test various offers, keywords, creative, and landing pages
            </li>
            <li>
              Track conversions, customer acquisition cost, and ad spend
              efficiency
            </li>
            <li>Follow up with users who didn’t make a purchase initially</li>
          </ul>

          <p className="mb-8 leading-7">
            For instance, a furniture brand from Delhi could target keywords
            about particular categories of furniture instead of buying general
            traffic. Then the campaign could compare the number of enquiries or
            sales to the amount spent on ads and reallocate budgets to the most
            effective keyword/offering/landing page combinations.
          </p>

          <h3 className="mb-4 text-xl font-bold">
            How Do PPC Services Work?
          </h3>

          <p className="mb-6 leading-7">
            PPC management begins even before the first ad is posted.
          </p>

          <h4 className="mb-2 text-lg font-bold">
            1. Identify the business and customer
          </h4>

          <p className="mb-6 leading-7">
            This will help us understand your products, services, customers,
            geography, competition, margins, and conversion targets.
          </p>

          <h4 className="mb-2 text-lg font-bold">
            2. Keyword and intent research
          </h4>

          <p className="mb-6 leading-7">
            Search terms are categorised based on the actual needs of the
            searcher. Intent-based searches will be managed with a distinct
            message and budget compared to informational and generic searches.
          </p>

          <h4 className="mb-2 text-lg font-bold">
            3. Campaign setup
          </h4>

          <p className="mb-6 leading-7">
            Depending on the objectives, Search, Shopping, Performance Max,
            Display, Remarketing, or Social campaigns may be required. Google
            currently has an advertising network made up of Search, Shopping,
            Performance Max, YouTube, Display, Gmail, Maps, and Demand Gen
            placements.
          </p>

          <h4 className="mb-2 text-lg font-bold">
            4. Conversion-focused advertising and landing pages
          </h4>

          <p className="mb-6 leading-7">
            The message, offer, and landing-page experience must align with the
            intent of the search. An ad that gets clicked but results in a poor
            landing-page experience is just wasting your advertising budget.
          </p>

          <h4 className="mb-2 text-lg font-bold">
            5. Measurement and optimization
          </h4>

          <p className="mb-8 leading-7">
            We track clicks, conversion rates, cost-per-lead,
            cost-per-acquisition, conversion values, and ROAS where relevant.
            Insights from search terms will also show the kind of searches
            being done.
          </p>

          <h3 className="mb-4 text-xl font-bold">
            How to Choose the Right PPC Agency in Delhi?
          </h3>

          <p className="mb-6 leading-7">
            Avoid selecting a PPC agency based on promises of cheap clicks and
            guarantees of results. Determine how they define conversions, what
            data they collect, how they deal with wasted budgets, whether you
            maintain control over your advertising accounts, and how often the
            campaigns are optimized.
          </p>

          <p className="mb-6 leading-7">
            Selecting the right PPC agency for your Delhi business requires
            someone who can tie up advertising statistics with real-world
            results. One lead is not equal to another lead if one results in a
            ₹5,000 sale and the other leads to a ₹5 lakh deal.
          </p>

          <p className="mb-8 leading-7">
            The PPC agency should offer you detailed information on reporting,
            budgeting, and testing campaigns rather than sticking to a set
            model forever.
          </p>

          <h3 className="mb-4 text-xl font-bold">
            Why Choose Xntrova for PPC Services?
          </h3>

          <p className="mb-6 leading-7">
            Xntrova integrates campaign strategy, keyword strategy, ad copy,
            audience targeting, remarketing, and analysis to create PPC
            campaigns around measurable objectives. Our current PPC strategy
            includes Search Ads, Social Media Ads, Remarketing, and Google
            Shopping Ads, and we can optimize these campaigns and provide full
            transparency in terms of reports.
          </p>

          <p className="leading-7">
            If you are trying to launch a product, generate leads for service
            businesses, or scale up your e-commerce business, our PPC services
            in Delhi are all about one question – does your money spent on ads
            result in any business outcomes? Contact Xntrova Technologies for
            PPC strategies tailored to your needs and budget.
          </p>
        </article>
      </section>

      <section className="mx-auto w-full max-w-[1440px] px-5 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto mb-10 max-w-2xl text-center md:mb-12">
          <h2 className="mb-3 text-2xl font-medium md:text-3xl md:font-bold">
            Frequently Asked Questions About Paid Advertising
          </h2>

          <p className="text-base font-medium leading-7 text-slate-500 md:text-lg">
            Got questions in your mind? Don't worry, we are here to answer.
            Read these FAQs and begin your journey with us.
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
                <h3>
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${index}`}
                    className={`flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-semibold transition-all duration-300 ${
                      isOpen
                        ? "bg-[#0075A2]/10 text-[#006487]"
                        : "text-slate-900 hover:bg-slate-50"
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
                </h3>

                <div
                  id={`faq-panel-${index}`}
                  className={`grid transition-all duration-300 ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-4 text-sm leading-7 text-slate-500">
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
            <h2 className="mb-3 text-2xl font-medium md:text-3xl md:font-bold">
              Get in touch with us
            </h2>

            <p className="mb-8 text-slate-500">
              Get in touch with our experts and seek further assistance
            </p>

            <div className="space-y-4">
              <a
                href="tel:+918683828646"
                className="group flex items-center gap-4 rounded-sm"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#0075A2]/10 text-[#0075A2] transition-all duration-300 group-hover:bg-[#0075A2] group-hover:text-white">
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
                className="group flex items-center gap-4 rounded-sm"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#0075A2]/10 text-[#0075A2] transition-all duration-300 group-hover:bg-[#0075A2] group-hover:text-white">
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
              className="inline-flex items-center justify-center gap-2 rounded-sm border border-[#0075A2] bg-[#0075A2] px-7 py-3.5 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#006487] hover:shadow-lg"
            >
              Get Free Digital Audit
            </a>

            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 rounded-sm border border-white/70 bg-transparent px-7 py-3.5 font-semibold text-white transition-all duration-300 hover:bg-white/10"
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

          <p className="text-base font-medium text-slate-500 md:text-lg">
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

export default PaidAdvertising;