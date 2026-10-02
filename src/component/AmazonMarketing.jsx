import { useState } from "react";
import { FiPlus, FiPhone, FiMail } from "react-icons/fi";

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
  "Boost product visibility",
  "Improve sales consistency",
  "Enhance brand credibility",
  "Maximizing advertising ROI",
  "Advanced targeting",
  "International Reach",
];

const amazonServices = [
  {
    title: "Product page optimization",
    image:
      "https://res.cloudinary.com/di93stsbz/image/upload/f_auto,q_auto,c_limit,w_1920/v1787210003/xntrova-wp-media/xntrova-wp-media/Rectangle-4476-20-0db28d5ef4359df9.png",
    description:
      "We offer strategic titles, bullet points, descriptions, and A+ content creation that improve visibility and conversions.",
  },
  {
    title: "Campaign Management",
    image:
      "https://res.cloudinary.com/di93stsbz/image/upload/f_auto,q_auto,c_limit,w_1920/v1787210005/xntrova-wp-media/xntrova-wp-media/Rectangle-4476-21-29fb5b7f43eb5867.png",
    description:
      "At Xntrova Technologies, we handle every aspect of your Amazon Ad campaigns, from setup and targeting to optimization and reporting.",
  },
  {
    title: "Video Ads",
    image:
      "https://res.cloudinary.com/di93stsbz/image/upload/f_auto,q_auto,c_limit,w_1920/v1787210007/xntrova-wp-media/xntrova-wp-media/Rectangle-4476-22-0f8019dc88cf80a4.png",
    description:
      "Our team creates high-quality, mobile-optimized video ads designed to engage shoppers and drive traffic to either product pages or brand stores.",
  },
  {
    title: "Sponsored Brands",
    image:
      "https://res.cloudinary.com/di93stsbz/image/upload/f_auto,q_auto,c_limit,w_1920/v1787210010/xntrova-wp-media/xntrova-wp-media/Rectangle-4476-23-be41faa6d2bbec33.png",
    description:
      "We design and manage Sponsored Brands campaigns that highlight your best products and link directly to your Amazon Store or product pages.",
  },
  {
    title: "Account management",
    image:
      "https://res.cloudinary.com/di93stsbz/image/upload/f_auto,q_auto,c_limit,w_1920/v1787210005/xntrova-wp-media/xntrova-wp-media/Rectangle-4476-21-29fb5b7f43eb5867.png",
    description:
      "At Xntrova, we offer complete account setup, product upload, and store design customization.",
  },
];

const reasons = [
  "Certified Amazon Marketing professionals",
  "End-to-end account management",
  "Proven record of sales growth",
  "Improved ROI for client stores",
  "Personalized strategies",
  "Transparent reporting",
  "Expertise across all Amazon models",
];

const faqs = [
  {
    question: "What budget is required to start an Amazon campaign?",
    answer:
      "Budgets can vary widely based on goals, product category, and competition, but we help tailor a budget that maximizes ROI starting from modest spend levels.",
  },
  {
    question: "How do you choose keywords for Amazon campaigns?",
    answer:
      "We research relevant keywords based on your products, category, competition, search intent, and marketplace data, then strategically place them across the appropriate product page elements.",
  },
  {
    question: "Can video ads be used for all types of products?",
    answer:
      "Video advertising can be used for eligible products and campaigns. We create mobile-optimized video creatives designed to engage shoppers and drive traffic to product pages or Amazon Stores.",
  },
  {
    question: "How long should Amazon video ads be?",
    answer:
      "Video duration depends on the Amazon ad placement, campaign objective, product, and applicable creative requirements. We optimize the creative according to the intended placement and audience.",
  },
  {
    question: "What metrics do you track to measure campaign success?",
    answer:
      "We monitor important metrics including impressions, CTR, CPC, conversion rate, sales, ACoS, and ROAS to understand campaign performance and identify areas for improvement.",
  },
  {
    question: "How often do you optimize Amazon campaigns?",
    answer:
      "Campaigns are monitored regularly and adjusted according to performance data, keyword behavior, advertising costs, conversions, and changing marketplace conditions.",
  },
  {
    question: "Can Sponsored Brands ads include multiple products?",
    answer:
      "Sponsored Brands can be structured to showcase multiple products and direct shoppers toward relevant products or your Amazon Store, depending on campaign eligibility and setup.",
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
      "@type": "ImageObject",
      "@id":
        "https://www.xntrova.com/amazon-marketing-services/#primaryimage",
      url: "https://res.cloudinary.com/di93stsbz/image/upload/v1787209743/xntrova-wp-media/xntrova-wp-media/Rectangle-4486-6-0d11e2ce920e07cb.png",
      contentUrl:
        "https://res.cloudinary.com/di93stsbz/image/upload/v1787209743/xntrova-wp-media/xntrova-wp-media/Rectangle-4486-6-0d11e2ce920e07cb.png",
      caption: "Amazon Marketing Services in Delhi | Xntrova Technologies",
    },
    {
      "@type": "Service",
      "@id": "https://www.xntrova.com/amazon-marketing-services/#webpage",
      url: "https://www.xntrova.com/amazon-marketing-services/",
      name: "Amazon Marketing Services in Delhi | Xntrova Technologies",
      description:
        "Xntrova Techno is a leading Amazon Marketing Services in Delhi offering expert Amazon listing optimisation, ads, e-commerce growth solutions.",
      isPartOf: {
        "@id": "https://www.xntrova.com/#website",
      },
      primaryImageOfPage: {
        "@id":
          "https://www.xntrova.com/amazon-marketing-services/#primaryimage",
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
          name: "Amazon Marketing Services",
          item: "https://www.xntrova.com/amazon-marketing-services/",
        },
      ],
    },
  ],
};

function SectionHeading({ title, description, center = true }) {
  return (
    <div
      className={`mb-10 max-w-3xl ${
        center ? "mx-auto text-center" : "text-left"
      }`}
    >
      <h2 className="mb-4 text-3xl font-semibold leading-tight text-[#001320] sm:text-4xl lg:text-[42px]">
        {title}
      </h2>

      {description && (
        <p className="text-base leading-7 text-slate-600 sm:text-lg">
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
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl bg-white p-6 shadow-2xl sm:p-8"
    >
      <input
        type="text"
        name="website_url"
        tabIndex="-1"
        autoComplete="off"
        className="hidden"
      />

      <h3 className="mb-6 text-2xl font-semibold text-[#001320]">
        Get a Free Digital Audit
      </h3>

      <div className="grid gap-4 sm:grid-cols-2">
        <input
          type="text"
          name="name"
          placeholder="Your Name *"
          required
          className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-900 outline-none transition focus:border-[#0075A2] focus:ring-2 focus:ring-[#0075A2]/10"
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email *"
          required
          className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-900 outline-none transition focus:border-[#0075A2] focus:ring-2 focus:ring-[#0075A2]/10"
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          pattern="^\+?[0-9]{10,15}$"
          className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-900 outline-none transition focus:border-[#0075A2] focus:ring-2 focus:ring-[#0075A2]/10"
        />

        <input
          type="text"
          name="company"
          placeholder="Company Name"
          className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-900 outline-none transition focus:border-[#0075A2] focus:ring-2 focus:ring-[#0075A2]/10"
        />

        <select
          name="service"
          defaultValue=""
          className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-700 outline-none transition focus:border-[#0075A2] focus:ring-2 focus:ring-[#0075A2]/10 sm:col-span-2"
        >
          <option value="" disabled>
            Select a Service
          </option>

          {serviceOptions.map((service) => (
            <option key={service} value={service}>
              {service}
            </option>
          ))}
        </select>

        <textarea
          name="message"
          rows="4"
          placeholder="Tell us about your project"
          className="w-full resize-none rounded-lg border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-900 outline-none transition focus:border-[#0075A2] focus:ring-2 focus:ring-[#0075A2]/10 sm:col-span-2"
        />

        <button
          type="submit"
          className="rounded-lg bg-[#0075A2] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#005f83] sm:col-span-2"
        >
          Submit Request
        </button>
      </div>
    </form>
  );
}

function AmazonMarketing() {
  const [activeFaq, setActiveFaq] = useState(0);

  return (
    <main className="overflow-hidden bg-white text-[#001320]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />

      <section className="relative min-h-[680px] overflow-hidden bg-[#001F2B] text-white">
        <img
          src="https://res.cloudinary.com/di93stsbz/image/upload/f_auto,q_auto,c_limit,w_1920/v1787226376/xntrova-wp-media/banner-images/image-95.png"
          alt="Amazon Marketing Experts"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-[#001F2B]/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#001F2B] via-[#001F2B]/85 to-[#001F2B]/40" />

        <div className="relative mx-auto flex min-h-[680px] w-full max-w-[1440px] items-center px-5 py-16 sm:px-8 lg:px-10">
          <div className="grid w-full items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="max-w-3xl">
              <span className="mb-5 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur-sm">
                Amazon Marketing Services
              </span>

              <h1 className="text-[40px] font-semibold leading-[1.1] sm:text-5xl lg:text-6xl">
                Amazon Marketing Experts
              </h1>

              <div className="mb-6 mt-5 h-3 w-32">
                <div className="h-2 w-28 rotate-[2deg] rounded-[50%] border-t-[3px] border-[#4CC9F0]" />
              </div>

              <p className="max-w-2xl text-base leading-7 text-white/85 sm:text-lg">
                Empowering brands to grow and dominate on Amazon Marketing
                Services in Delhi — we blend data-driven strategy, creative
                optimization, and proven advertising expertise to boost
                visibility, sales, and customer engagement.
              </p>

              <a
                href="tel:+918683828646"
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#0075A2] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#005f83]"
              >
                <FiPhone />
                Chat with us
              </a>
            </div>

            <LeadForm />
          </div>
        </div>
      </section>

      <section className="bg-white py-16 max-md:py-[15px] sm:py-20 lg:py-24">
        <div className="mx-auto grid w-full max-w-[1440px] items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:px-10">
          <div className="overflow-hidden rounded-2xl">
            <img
              src="https://res.cloudinary.com/di93stsbz/image/upload/f_auto,q_auto,c_limit,w_1920/v1787210001/xntrova-wp-media/xntrova-wp-media/Rectangle-4484-8-4611d35138fa4a20.png"
              alt="Amazon Marketing Services"
              className="h-full min-h-[350px] w-full object-cover"
            />
          </div>

          <div>
            <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-[0.15em] text-[#0075A2]">
              Amazon Growth
            </span>

            <h2 className="mb-5 text-3xl font-semibold leading-tight sm:text-4xl">
              Key Advantages of Amazon Marketing Services
            </h2>

            <p className="mb-7 text-base leading-7 text-slate-600">
              Amazon Marketing helps your brand stay ahead of your competitors
              by attracting potential customers to your online store.
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              {advantages.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4"
                >
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#0075A2] text-xs text-white">
                    ✓
                  </span>

                  <span className="text-sm font-medium leading-6 text-slate-800">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F4F8FA] py-16 max-md:py-[15px] sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-10">
          <SectionHeading
            title="What do we offer"
            description="As a trusted digital marketing company in Delhi, we offer best-in-class Amazon marketing services to drive real customers and traffic to your online store."
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {amazonServices.map((service) => (
              <article
                key={service.title}
                className="group rounded-2xl bg-[#012A3A] p-7 text-white transition duration-300 hover:-translate-y-1"
              >
                <div className="mb-7 flex h-11 w-11 items-center justify-center overflow-hidden rounded-full bg-[#0075A2]">
                  <img
                    src={service.image}
                    alt=""
                    className="h-6 w-6 object-cover"
                  />
                </div>

                <h3 className="mb-4 text-xl font-semibold">
                  {service.title}
                </h3>

                <p className="text-sm leading-7 text-white/70">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 max-md:py-[15px] sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-10">
          <SectionHeading
            title="Why Xntrova is the Best Amazon Marketing Services Company in Delhi"
            description="Our Amazon Marketing experts specialize in elevating your brand's discoverability, sales performance, and advertising ROI. As a trusted digital marketing company in Delhi, we ensure your brand stands out in the crowd."
          />

          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {reasons.map((reason, index) => (
              <div
                key={reason}
                className={`rounded-xl border p-5 ${
                  index === reasons.length - 1
                    ? "lg:col-span-1"
                    : "border-slate-200 bg-slate-50"
                }`}
              >
                <span className="mb-4 flex h-9 w-9 items-center justify-center rounded-full bg-[#0075A2] text-sm font-semibold text-white">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <p className="text-sm font-semibold leading-6 text-slate-800">
                  {reason}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F4F8FA] py-16 max-md:py-[15px] sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-[1000px] px-5 sm:px-8 lg:px-10">
          <div className="text-[16px] leading-8 text-slate-700">
            <p className="mb-6">
              Do you have aspirations of becoming the biggest seller in your
              product niche? Let us tell you one thing: it is hard to handle it
              all alone. Being an Amazon seller does not only mean listing your
              product and then just sitting around and waiting for orders.
              Amazon India has a seller network of 20 lakh in 2026; it becomes
              necessary to have product visibility and a proper listing &
              marketing strategy for your product. Xntrova offers Amazon
              Marketing Services in Delhi, which would help in achieving the
              above goals.
            </p>

            <h2 className="mb-4 mt-10 text-3xl font-bold text-[#001320]">
              What Are Amazon Marketing Services?
            </h2>

            <p className="mb-6">
              Amazon Marketing Services are the ways by which a brand can
              enhance visibility, product listing, advertisement effectiveness,
              and sales performance on Amazon.
            </p>

            <p className="mb-6">
              This might include optimising listings for a new product and
              running ads for a new brand. For an established brand, it
              optimises the conversion rate, decreases unnecessary costs
              incurred while running ads, increases keywords, and enhances the
              visibility of the brand. Some of our Amazon marketing services
              are-
            </p>

            <ul className="mb-8 grid gap-3 sm:grid-cols-2">
              {[
                "Amazon SEO and Keyword research",
                "Listing optimization",
                "Title, Bullet Point, and Description Optimisation",
                "A+ Content",
                "Sponsored Products and Sponsored Brands",
                "Amazon Video Ads",
                "Campaign Management and Bid Optimization",
                "Competitor and Category Research",
                "Catalog & Account Management",
                "Performance Reporting",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#0075A2]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <h3 className="mb-4 mt-10 text-2xl font-bold text-[#001320]">
              Why Is Amazon Marketing Important?
            </h3>

            <p className="mb-6">
              Amazon is a marketplace as well as a product discovery platform.
              It is necessary that your product be displayed in response to
              pertinent search queries and also provide shoppers with
              sufficient information to enable them to make a purchasing
              decision.
            </p>

            <p className="mb-6">
              The 20-lakh sellers' base at Amazon India clearly demonstrates
              the level of competition on the platform. Amazon has also
              mentioned that there are over 2 lakh sellers using its Artificial
              Intelligence-based listings on the platform.
            </p>

            <p className="mb-6">
              Advertising helps you achieve high visibility. Sponsored Products
              are one type of ad campaign where a pay-per-click ad can get
              displayed in Amazon search results and product pages. But ads
              will not make up for a bad product listing.
            </p>

            <p className="mb-6">
              Take the case of an insulated bottle costing ₹1,499. Though the
              ad may drive the shopper to your product listing, poor images,
              lack of benefits of the product, incorrect keywords, or simply a
              bad offer will lead to poor conversions. Amazon marketing, hence,
              connects all of the above.
            </p>

            <h3 className="mb-4 mt-10 text-2xl font-bold text-[#001320]">
              How Do Amazon Marketing Services Work?
            </h3>

            <p className="mb-6">
              Getting the traffic to your product listing is the easy part. The
              hard part is to make sure that traffic is relevant and to
              optimize everything you do based on the data collected.
            </p>

            <h4 className="mb-3 mt-8 text-xl font-bold text-[#001320]">
              Product and Market Research
            </h4>

            <p className="mb-6">
              Your product, its category, competitive set, pricing, buyer
              intent, and performance are analyzed to determine how you can
              fill any gaps or capitalize on opportunities.
            </p>

            <h4 className="mb-3 mt-8 text-xl font-bold text-[#001320]">
              Develop Amazon SEO
            </h4>

            <p className="mb-6">
              Relevant keywords are discovered and allocated to the correct
              product page elements. This process aims to ensure your product
              is relevant in search without excessive keyword usage.
            </p>

            <h4 className="mb-3 mt-8 text-xl font-bold text-[#001320]">
              Enhance the Product Page
            </h4>

            <p className="mb-6">
              This includes improving the product title, bullets, description,
              images, and A+ content to clearly explain what your product is and
              how it works, the target market, and the features and benefits of
              the product.
            </p>

            <h4 className="mb-3 mt-8 text-xl font-bold text-[#001320]">
              Manage Amazon Advertising Campaigns
            </h4>

            <p className="mb-6">
              Campaigns may consist of Sponsored Products, Sponsored Brands,
              and even video advertising. It is important to note that Amazon
              has reported that its Sponsored Products video campaigns had a CTR
              that was 67% higher and a conversion rate 9% higher than those
              campaigns that did not use video.
            </p>

            <h4 className="mb-3 mt-8 text-xl font-bold text-[#001320]">
              Performance Tracking and Improvement
            </h4>

            <p className="mb-6">
              We have performance monitoring tools that include keeping an eye
              on metrics such as impressions, CTR, CPC, conversion rate, sales,
              and ACoS and ROAS in order to see which parts need improvement.
            </p>

            <h3 className="mb-4 mt-10 text-2xl font-bold text-[#001320]">
              How to Choose an Amazon Marketing Agency in Delhi?
            </h3>

            <p className="mb-6">
              Never choose an agency based on promises of more sales or reduced
              advertising expenses. Understand how these goals are being
              fulfilled.
            </p>

            <p className="mb-6">
              A professional Amazon marketing agency in Delhi NCR should be
              able to elaborate on its processes of keyword research, listing
              optimization, advertising, report generation, and metric
              measurement.
            </p>

            <p className="mb-6">
              Also determine if the agency knows the relationship between
              advertising and conversion. Earning clicks is just one aspect of
              growing your business on Amazon.
            </p>

            <h3 className="mb-4 mt-10 text-2xl font-bold text-[#001320]">
              Why Choose Xntrova?
            </h3>

            <p className="mb-6">
              Xntrova uses Amazon SEO, marketplace content, and advertising and
              analytics to create an interconnected Amazon growth strategy.
            </p>

            <p className="mb-6">
              Whether it is your first product, a private label brand, or
              expanding your existing catalogue, we will craft a strategy
              unique to your market, competitors, and objectives.
            </p>

            <p>
              We do not aim merely for clicks. Our aim is improved visibility,
              listings, smarter decisions in advertising, and growth in the
              marketplace. Considering an Amazon brand launch or expansion?
              Contact Xntrova for an Amazon marketing strategy customised to
              your products and your niches objectives.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 max-md:py-[15px] sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-[900px] px-5 sm:px-8 lg:px-10">
          <SectionHeading
            title="Frequently Asked Questions About Amazon Marketing Services"
            description="Do you have questions about Amazon marketing services? We're here to answer. Read these FAQs and resolve your doubts."
          />

          <div className="divide-y divide-slate-200 border-y border-slate-200">
            {faqs.map((faq, index) => {
              const isOpen = activeFaq === index;

              return (
                <div key={faq.question}>
                  <button
                    type="button"
                    onClick={() => setActiveFaq(isOpen ? -1 : index)}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left"
                  >
                    <span className="text-base font-semibold text-[#001320] sm:text-lg">
                      {faq.question}
                    </span>

                    <FiPlus
                      className={`h-5 w-5 shrink-0 text-[#0075A2] transition-transform duration-300 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="pb-6 pr-10 text-sm leading-7 text-slate-600">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#F4F8FA] py-16 max-md:py-[15px] sm:py-20 lg:py-24">
        <div className="mx-auto grid w-full max-w-[1440px] items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:px-10">
          <div>
            <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-[0.15em] text-[#0075A2]">
              Contact Us
            </span>

            <h2 className="mb-4 text-3xl font-semibold sm:text-4xl lg:text-[42px]">
              Get in touch with us
            </h2>

            <p className="mb-8 text-base leading-7 text-slate-600">
              Get in touch with our experts and seek further assistance
            </p>

            <div className="space-y-6">
              <a
                href="tel:+918683828646"
                className="flex items-center gap-4"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0075A2] text-white">
                  <FiPhone size={20} />
                </span>

                <span>
                  <span className="block text-sm text-slate-500">
                    Call For Advice
                  </span>
                  <span className="font-semibold text-[#001320]">
                    +91 868-382-8646
                  </span>
                </span>
              </a>

              <a
                href="mailto:sales@xntrova.com"
                className="flex items-center gap-4"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0075A2] text-white">
                  <FiMail size={20} />
                </span>

                <span>
                  <span className="block text-sm text-slate-500">
                    Mail Us
                  </span>
                  <span className="font-semibold text-[#001320]">
                    sales@xntrova.com
                  </span>
                </span>
              </a>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <img
              src="https://res.cloudinary.com/di93stsbz/image/upload/f_auto,q_auto,c_limit,w_1920/v1787209714/xntrova-wp-media/xntrova-wp-media/contact-man-ef520e947c3403b4.png"
              alt="Contact Xntrova"
              className="h-72 w-full max-w-md object-contain lg:h-96"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#001320] py-16 text-white max-md:py-[15px] sm:py-20 lg:py-24">
        <div className="mx-auto flex w-full max-w-[1100px] flex-col items-center px-5 text-center sm:px-8">
          <h2 className="text-3xl font-semibold sm:text-4xl lg:text-5xl">
            Elevate Your Brand with Digital Excellence
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">
            Get a comprehensive digital audit and discover how we can
            accelerate your business growth
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="/contact-us/"
              className="rounded-full bg-[#0075A2] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#005f83]"
            >
              Get Free Digital Audit
            </a>

            <a
              href="#"
              className="rounded-full border border-white/30 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white hover:text-[#001320]"
            >
              Download Brochure
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 max-md:py-[15px] sm:py-20 lg:py-24">
        <div className="mx-auto grid w-full max-w-[1440px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:px-10">
          <div>
            <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-[0.15em] text-[#0075A2]">
              Let's Work Together
            </span>

            <h2 className="mb-5 text-3xl font-semibold leading-tight sm:text-4xl">
              Got a Project in Mind? Contact Us
            </h2>

            <p className="max-w-md text-base leading-7 text-slate-600">
              Tell us about your goals and we'll get back to you shortly.
            </p>
          </div>

          <LeadForm />
        </div>
      </section>
    </main>
  );
}

export default AmazonMarketing;