import { useState } from "react";
import {
  FiPlus,
  FiPhone,
  FiMail,
  FiShoppingBag,
  FiFileText,
  FiMonitor,
  FiTarget,
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
  "Increased traffic and visibility",
  "Higher conversion rates",
  "Improved customer retention",
  "Data-driven growth",
  "Cross-platform reach",
  "Drive more leads",
];

const ecommerceServices = [
  {
    title: "E-Commerce SEO",
    description:
      "Boost your online store's rankings, drive organic traffic, and increase product visibility with structured keyword optimization, link building, and technical SEO.",
    image:
      "https://res.cloudinary.com/di93stsbz/image/upload/f_auto,q_auto,c_limit,w_1920/v1787210033/xntrova-wp-media/xntrova-wp-media/Rectangle-4476-4-2ecfbf129dd3304b.png",
  },
  {
    title: "E-commerce Content Marketing",
    description:
      "Our E-commerce company in Delhi is there to captivate your audience, increase organic reach, and nurture customer loyalty.",
    image:
      "https://res.cloudinary.com/di93stsbz/image/upload/f_auto,q_auto,c_limit,w_1920/v1787210036/xntrova-wp-media/xntrova-wp-media/Rectangle-4476-5-62e6ba103e1e0b4b.png",
  },
  {
    title: "Web Design for E-commerce websites",
    description:
      "Xntrova Technologies offers Web Design for E-commerce Websites that combine aesthetics, usability, and performance.",
    image:
      "https://res.cloudinary.com/di93stsbz/image/upload/f_auto,q_auto,c_limit,w_1920/v1787210038/xntrova-wp-media/xntrova-wp-media/Rectangle-4476-6-7f842db360ae9c31.png",
  },
  {
    title: "PPC Management",
    description:
      "Get instant traffic through Google Ads, Meta Ads, and shopping campaigns designed to deliver high ROI with precision targeting.",
    image:
      "https://res.cloudinary.com/di93stsbz/image/upload/f_auto,q_auto,c_limit,w_1920/v1787210041/xntrova-wp-media/xntrova-wp-media/Rectangle-4476-7-0c09427dab0d7e45.png",
  },
];

const reasons = [
  "24/7 dedicated support",
  "Transparent communication",
  "Transparent reporting",
  "Data-driven approach",
  "E-commerce experts",
  "No hidden charges",
];

const faqs = [
  {
    question: "How does content marketing improve e-commerce sales?",
    answer:
      "High-quality content builds trust, educates customers, improves SEO rankings, and guides buyers through their purchasing journey, leading to increased conversions.",
  },
  {
    question: "How often should I update my e-commerce website design?",
    answer:
      "Website design should be reviewed regularly based on customer behavior, technology changes, business goals, and performance data. Minor improvements can be made continuously while larger design updates may be planned periodically.",
  },
  {
    question: "Will my e-commerce website be optimized for mobile devices?",
    answer:
      "Yes. A responsive e-commerce website should provide a smooth experience across smartphones, tablets, laptops, and desktops, with layouts and interactions optimized for different screen sizes.",
  },
  {
    question: "Can you integrate third-party tools into my e-commerce website?",
    answer:
      "Yes. E-commerce websites can integrate payment gateways, analytics platforms, CRM systems, marketing tools, shipping solutions, inventory systems, and other third-party services based on business requirements.",
  },
  {
    question: "What types of content work best for product promotion?",
    answer:
      "Product guides, comparison content, demonstrations, customer-focused articles, product videos, buying guides, FAQs, and optimized product descriptions can all support product discovery and conversions.",
  },
  {
    question: "How do you ensure my content is SEO-optimized?",
    answer:
      "We use keyword research, search intent analysis, optimized headings, metadata, internal linking, useful content, product and category optimization, and technical SEO best practices.",
  },
  {
    question: "Is it possible to A/B test different website designs?",
    answer:
      "Yes. A/B testing can compare different page layouts, headlines, calls-to-action, product presentation, and other elements to understand which variation performs better based on measurable user behavior.",
  },
];

const inputClass =
  "w-full rounded-sm border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none transition-shadow placeholder:text-slate-400 focus:border-[#0075A2] focus:ring-2 focus:ring-[#0075A2]/20";

function LeadForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <input
        tabIndex="-1"
        autoComplete="off"
        aria-hidden="true"
        type="text"
        name="website_url"
        className="hidden"
      />

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <input
          required
          type="text"
          name="name"
          placeholder="Your Name*"
          aria-label="Your name"
          className={inputClass}
        />

        <input
          required
          type="email"
          name="email"
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
        rows="2"
        placeholder="Tell us about your business goals"
        aria-label="Tell us about your business goals"
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

function AdvantageCard({ children, index }) {
  return (
    <div
      className="h-full"
      style={{
        animationDelay: `${index * 70}ms`,
      }}
    >
      <div className="flex h-full items-center gap-3 rounded-sm border border-slate-200 bg-[#F4F9FA] px-5 py-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
        <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-[#0075A2]" />
        <p className="font-medium text-slate-900">{children}</p>
      </div>
    </div>
  );
}

function EcommerceServiceCard({ service, index }) {
  return (
    <div
      className="h-full"
      style={{
        animationDelay: `${index * 70}ms`,
      }}
    >
      <div className="flex h-full items-start gap-4 rounded-md bg-[#001F2B] p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(0,31,43,0.2)]">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#0075A2]">
          <div className="relative h-6 w-6">
            <img
              src={service.image}
              alt=""
              className="h-full w-full object-contain"
              loading="lazy"
            />
          </div>
        </div>

        <div>
          <p className="mb-1 font-semibold text-white">
            {service.title}
          </p>

          <p className="text-sm leading-relaxed text-white/70">
            {service.description}
          </p>
        </div>
      </div>
    </div>
  );
}

function RichContent() {
  return (
    <div className="text-[15px] leading-7 text-black">
      <p>
        In the e-commerce ecosystem, platforms always desire traffic that not
        only engages with their marketing campaign but also buys something from
        the brand. Xntrova offers online marketing solutions in Delhi NCR to
        assist online businesses in increasing product visibility, bringing in
        qualified customers, and improving conversions, thus generating
        revenue. Our approach uses all the above elements to build a marketing
        strategy for your business.
      </p>

      <h2 className="mb-4 mt-8 text-2xl font-bold leading-tight">
        What Is E-commerce Marketing?
      </h2>

      <p>
        For your business, you need not only traffic but the right traffic,
        high conversions, and marketing that helps you retain customers.
      </p>

      <p className="mt-4">
        Xntrova offers e-commerce marketing services in Delhi NCR that help
        online businesses increase product visibility, acquire qualified
        customers, boost conversions, and ultimately earn more money.
        E-commerce marketing services consist of e-commerce SEO, paid
        advertising, content marketing, Product listing, website optimization,
        and analytics tailored to meet your objectives. Our e-commerce services
        help your brand have a 360-degree presence online; we also help brands
        list their products on quick commerce platforms. E-commerce marketing
        is a digital marketing approach that attracts customers to an online
        store, converts visitors into buyers, and ultimately turns them into
        repeat customers.
      </p>

      <p className="mt-4">
        E-commerce marketing includes SEO, paid advertising, content, website
        optimisation, remarketing, and analytics to guide customers through the
        purchasing process. E-commerce marketing services offered by us
        include-
      </p>

      <ul className="my-5 list-disc space-y-1 pl-6">
        <li>E-commerce SEO</li>
        <li>Product and category page optimisation</li>
        <li>Google Ads and Shopping campaigns</li>
        <li>Meta advertising</li>
        <li>E-commerce content marketing</li>
        <li>Conversion rate optimization</li>
        <li>Website optimization</li>
        <li>Remarketing</li>
        <li>Performance analytics</li>
      </ul>

      <h3 className="mb-4 mt-8 text-xl font-bold">
        Why Does E-commerce Marketing Matter for Business Growth?
      </h3>

      <p>
        Even the best product will fail to drive online sales if customers
        cannot discover it and do not have enough reasons to purchase it.
      </p>

      <p className="mt-4">
        According to IBEF, India's online retail market size was US$80 billion
        during FY26, showing a 21% year-over-year growth. Furthermore, IBEF
        forecasts India's e-commerce market to grow to US$345 billion by 2030.
      </p>

      <p className="mt-4">
        In such circumstances, a business needs to develop its marketing
        strategy combining visibility and conversions. With an e-commerce
        marketing campaign, you can:
      </p>

      <ol className="my-5 list-decimal space-y-2 pl-6">
        <li>
          <strong>Acquire quality traffic:</strong> Engage people who are
          looking for the products or solutions your business offers.
        </li>
        <li>
          <strong>Drive more conversions:</strong> Optimise product pages,
          landing pages, calls-to-action, and the purchasing process to
          minimise obstacles.
        </li>
        <li>
          <strong>Develop customer loyalty:</strong> Utilise remarketing and
          customer campaigns along with product-related communication to return
          your existing clients.
        </li>
        <li>
          <strong>Optimise marketing efforts:</strong> Analyse the performance
          statistics and find which channels, campaigns, and pages help drive
          business results.
        </li>
      </ol>

      <h3 className="mb-4 mt-8 text-xl font-bold">
        How Does E-commerce Marketing Work?
      </h3>

      <p>
        Your marketing channels will be integrated along one customer path.
      </p>

      <h4 className="mb-2 mt-6 text-lg font-bold">
        Get To Know Your Business
      </h4>
      <p>
        The analysis of your products, target audience, competitors, website,
        current traffic, and business needs is done prior to developing the
        strategy.
      </p>

      <h4 className="mb-2 mt-6 text-lg font-bold">
        Build The Strategy
      </h4>
      <p>
        Based on the growth phase of your business, we'll create the optimal
        combination of SEO, paid marketing, content, website optimization, and
        remarketing strategies.
      </p>

      <h4 className="mb-2 mt-6 text-lg font-bold">
        Optimise Your Online Store
      </h4>
      <p>
        We optimise your product pages, category pages, website layout,
        navigation, content, calls-to-action, and other elements affecting
        search visibility and conversion.
      </p>

      <h4 className="mb-2 mt-6 text-lg font-bold">
        Generate Relevant Traffic
      </h4>
      <p>
        Our team uses both organic and paid channels to reach customers
        interested in buying your products.
      </p>

      <h4 className="mb-2 mt-6 text-lg font-bold">
        Increase Conversions
      </h4>
      <p>
        We analyse customer behaviour in order to fill any gaps in the
        purchase funnel and improve the website accordingly.
      </p>

      <h4 className="mb-2 mt-6 text-lg font-bold">
        Monitor And Optimize
      </h4>
      <p>
        We measure traffic, customer engagement, conversions, campaigns, and
        other relevant factors.
      </p>

      <h3 className="mb-4 mt-8 text-xl font-bold">
        Our E-commerce Marketing Services
      </h3>

      <p>
        We are giving so many E- commerce marketing services in Delhi NCR, we
        are here for you no matter how big the company size is. Because we
        believe in aspirations!
      </p>

      <h4 className="mb-2 mt-6 text-lg font-bold">
        E-commerce SEO
      </h4>
      <p>
        Enhance the visibility of your products and categories using keyword
        analysis, technical SEO, on-page optimisation, internal linking, and
        content for search.
      </p>

      <h4 className="mb-2 mt-6 text-lg font-bold">
        E-commerce Content Marketing
      </h4>
      <p>
        Develop content that helps answer customer queries, discover products,
        and attract organic traffic.
      </p>

      <h4 className="mb-2 mt-6 text-lg font-bold">
        Google Ads and Shopping
      </h4>
      <p>
        Acquire intent-driven customers using search, Shopping, and remarketing
        campaigns.
      </p>

      <h4 className="mb-2 mt-6 text-lg font-bold">
        Meta Ads
      </h4>
      <p>
        Drive product sales, reach the right audience, and retarget website
        visitors through Facebook and Instagram ads.
      </p>

      <h4 className="mb-2 mt-6 text-lg font-bold">
        Conversion Rate Optimisation
      </h4>
      <p>
        Find factors that could hamper the conversion process on product
        pages, landing pages, navigation, and checkouts.
      </p>

      <h4 className="mb-2 mt-6 text-lg font-bold">
        E-commerce Analytics
      </h4>
      <p>
        Measure the behaviour of your customers and the performance of
        marketing activities that drive traffic and conversions.
      </p>

      <h3 className="mb-4 mt-8 text-xl font-bold">
        How to Choose the Best E-commerce Marketing Company in Delhi NCR?
      </h3>

      <p>
        Do not consider only the number of services provided by the agency.
      </p>

      <p className="mt-4">
        Select an agency that knows everything about your products, target
        audience, customer’s path, and your business objectives. Inquire about
        the way they assess their performance, work with SEO and paid
        acquisition, optimize conversions, and use data.
      </p>

      <p className="mt-4">
        An e-commerce marketing agency should concentrate on results of its
        actions rather than on traffic volumes only.
      </p>

      <h3 className="mb-4 mt-8 text-xl font-bold">
        Why Choose Xntrova for E-commerce Marketing in Delhi NCR?
      </h3>

      <p>
        Xntrova integrates SEO, content, paid marketing, website optimization,
        and analytics into a single e-commerce marketing solution.
      </p>

      <p className="mt-4">
        <strong>Growth-oriented:</strong> We integrate our marketing processes
        with traffic, conversion, acquisition, and retention objectives.
      </p>

      <p className="mt-4">
        <strong>Conversion-oriented:</strong> Our approach is not just about
        driving traffic to your site but what happens after visitors land.
      </p>

      <p className="mt-4">
        <strong>Data-driven:</strong> We rely on data from our campaigns and
        customers to inform optimization and marketing.
      </p>

      <p className="mt-4">
        <strong>Content-oriented:</strong> We develop product, category, and
        supporting content that is relevant both for search and customers.
      </p>

      <p className="mt-4">
        <strong>Delhi NCR specialisation:</strong> We serve clients based in
        Delhi, Gurgaon, Noida, Ghaziabad, and Faridabad.
      </p>

      <h3 className="mb-4 mt-8 text-xl font-bold">
        Grow Your Online Business With Xntrova
      </h3>

      <p>
        Increase your visibility, get more qualified customers, and convert
        website visitors into sales.
      </p>

      <p className="mt-4">
        Speak to our e-commerce marketing consultants at Xntrova in Delhi NCR.
      </p>
    </div>
  );
}

export default function EcommerceMarketing() {
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
                "@type": "ImageObject",
                "@id":
                  "https://www.xntrova.com/e-commerce-marketing/#primaryimage",
                url: "https://res.cloudinary.com/di93stsbz/image/upload/v1787209735/xntrova-wp-media/xntrova-wp-media/Rectangle-4486-2-7ff366e812bb60d4.png",
                contentUrl:
                  "https://res.cloudinary.com/di93stsbz/image/upload/v1787209735/xntrova-wp-media/xntrova-wp-media/Rectangle-4486-2-7ff366e812bb60d4.png",
                caption:
                  "E- Commerce Marketing Company in Delhi | Xntrova Technologies",
              },
              {
                "@type": "Service",
                "@id":
                  "https://www.xntrova.com/e-commerce-marketing/#webpage",
                url: "https://www.xntrova.com/e-commerce-marketing/",
                name: "E- Commerce Marketing Company in Delhi | Xntrova Technologies",
                description:
                  "Partner with a leading e-commerce marketing Company in Delhi to enhance your digital marketing efforts and grow your brand.",
                isPartOf: {
                  "@id": "https://www.xntrova.com/#website",
                },
                primaryImageOfPage: {
                  "@id":
                    "https://www.xntrova.com/e-commerce-marketing/#primaryimage",
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
                    name: "E-Commerce Marketing",
                    item: "https://www.xntrova.com/e-commerce-marketing/",
                  },
                ],
              },
            ],
          }),
        }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#001F2B] text-white lg:flex lg:min-h-[min(58vh,620px)] lg:items-center">
        <div className="absolute inset-0">
          <img
            src="https://res.cloudinary.com/di93stsbz/image/upload/f_auto,q_auto,c_limit,w_1920/v1787226386/xntrova-wp-media/banner-images/image-91.png"
            alt=""
            fetchPriority="high"
            loading="eager"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-br from-[#001320]/72 via-[#012A3A]/50 to-[#01415A]/26" />

        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_18%_45%,rgba(0,15,26,0.55),transparent_70%)]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_60%,rgba(0,139,185,0.20),transparent_45%)]" />

        <div className="relative z-10 mx-auto w-full max-w-[1440px] px-5 py-10 sm:px-8 sm:py-12 lg:px-10 lg:py-8 max-md:py-[15px]">
          <div className="grid w-full grid-cols-1 items-center gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
            <div className="max-w-2xl">
              <h1 className="mb-3 text-[35px] font-bold leading-[1.15] tracking-tight text-white sm:text-5xl lg:text-[48px]">
                E-Commerce Marketing Specialists
              </h1>

              <div className="mb-5 h-[3px] w-[120px] rounded-full bg-[#00A7D7] [clip-path:ellipse(50%_50%_at_50%_50%)]" />

              <p className="mb-6 max-w-xl text-lg leading-relaxed text-white/90">
                Boost your online store's visibility and sales with data-driven
                e-commerce marketing strategies. From SEO and paid ads to
                conversion optimization, we help you sell smarter and faster.
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href="tel:+918683828646"
                  className="inline-flex items-center justify-center gap-2 rounded-sm border border-[#0075A2] bg-[#0075A2] px-7 py-3.5 font-semibold text-white transition-all hover:opacity-90"
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

      {/* Advantages */}
      <section className="mx-auto w-full max-w-[1440px] px-5 py-16 sm:px-8 lg:px-10 max-md:py-[15px]">
        <SectionHeading
          title="Key Advantages of E-Commerce Marketing"
          description="Whether you're launching a new store or scaling an established brand, our E-Commerce agency in Delhi combines creative strategy, data analytics, and performance marketing to help your business stand out."
        />

        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="relative h-72 w-full overflow-hidden rounded-lg ring-[3px] ring-[#DCEFF3] lg:order-1 lg:h-96">
            <img
              src="https://res.cloudinary.com/di93stsbz/image/upload/f_auto,q_auto,c_limit,w_1920/v1787210031/xntrova-wp-media/xntrova-wp-media/Rectangle-4484-4-a37a0544b106c6b0.png"
              alt="Key advantages of e-commerce marketing"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:order-2">
            {advantages.map((item, index) => (
              <AdvantageCard key={item} index={index}>
                {item}
              </AdvantageCard>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto w-full max-w-[1440px] px-5 py-16 sm:px-8 lg:px-10 max-md:py-[15px]">
        <SectionHeading
          title="Here's what we offer"
          description="Our local e-commerce marketing agency in India create a responsive and good user interface E-commerce website for users. Hire our e-commerce marketing agency in Delhi for better results."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ecommerceServices.map((service, index) => (
            <EcommerceServiceCard
              key={service.title}
              service={service}
              index={index}
            />
          ))}
        </div>
      </section>

      {/* Why Choose */}
      <section className="mx-auto w-full max-w-[1440px] px-5 py-16 sm:px-8 lg:px-10 max-md:py-[15px]">
        <SectionHeading
          title="Why choose Xntrova for your E-commerce marketing needs"
          description="As a trusted e-commerce marketing agency in Delhi, Xntrova ensures measurable growth and loyal customers to businesses. Here's why you should choose us."
        />

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {reasons.map((reason, index) => (
            <AdvantageCard key={reason} index={index}>
              {reason}
            </AdvantageCard>
          ))}
        </div>
      </section>

      {/* Long Content */}
      <section className="mx-auto w-full max-w-[1440px] px-5 py-8 sm:px-8 lg:px-10 max-md:py-[15px]">
        <div className="mx-auto max-w-3xl">
          <RichContent />
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto w-full max-w-[1440px] px-5 py-16 sm:px-8 lg:px-10 max-md:py-[15px]">
        <SectionHeading
          title="Frequently Asked Questions about E-commerce Marketing"
          description="From general queries to complex questions, our FAQ section resolve all doubts instantly. Learn more about services here."
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
                          ? "bg-[#0075A2]/10 text-[#005D80]"
                          : "text-slate-900 hover:bg-slate-50"
                      }`}
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${index}`}
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

      {/* Contact */}
      <section className="mx-auto w-full max-w-[1440px] px-5 py-16 sm:px-8 lg:px-10 max-md:py-[15px]">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h2 className="mb-3 text-2xl font-medium text-slate-900 sm:text-3xl md:text-4xl md:font-bold">
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
                className="group flex items-center gap-4 rounded-sm"
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
              alt=""
              loading="lazy"
              className="absolute inset-0 h-full w-full object-contain"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#001F2B] text-white">
        <div className="mx-auto w-full max-w-[1440px] px-5 py-16 text-center sm:px-8 lg:px-10 max-md:py-[15px]">
          <h2 className="mb-4 text-2xl font-medium text-white sm:text-3xl md:text-4xl md:font-bold">
            Elevate Your Brand with Digital Excellence
          </h2>

          <p className="mx-auto mb-8 max-w-2xl text-white/80">
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

      {/* Final Contact Form */}
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