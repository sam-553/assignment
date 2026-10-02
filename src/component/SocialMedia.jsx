
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaPhone,
  FaEnvelope,
  FaCheck,
  FaPlus,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaArrowRight,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const HERO_IMAGE =
  "https://res.cloudinary.com/di93stsbz/image/upload/f_auto,q_auto,c_limit,w_1920/v1787226407/xntrova-wp-media/banner-images/image-93.png";

const ADVANTAGE_IMAGE =
  "https://res.cloudinary.com/di93stsbz/image/upload/f_auto,q_auto,c_limit,w_1920/v1787209839/xntrova-wp-media/xntrova-wp-media/Rectangle-4484-6-b3008cc0f844739a.png";

const CONTACT_IMAGE =
  "https://res.cloudinary.com/di93stsbz/image/upload/f_auto,q_auto,c_limit,w_1920/v1787209714/xntrova-wp-media/xntrova-wp-media/contact-man-ef520e947c3403b4.png";

const SERVICE_ITEMS = [
  {
    icon: FaFacebookF,
    title: "Facebook Optimization",
    text: "We optimize your business Facebook page with compelling visuals, SEO-friendly descriptions, and targeted content strategies to boost engagement.",
  },
  {
    icon: FaInstagram,
    title: "Instagram Optimization",
    text: "Our Instagram Optimization focuses on crafting a cohesive and appealing feed, strategic hashtag use, story highlights, and influencer collaborations.",
  },
  {
    icon: FaYoutube,
    title: "YouTube Optimization",
    text: "Xntrova's YouTube Optimization services include SEO-driven video titles, descriptions, and tags to enhance discoverability.",
  },
  {
    icon: FaLinkedinIn,
    title: "LinkedIn Optimization",
    text: "Our LinkedIn Optimization service enhances personal and company profiles with keyword-optimized descriptions, consistent branding, and engaging content.",
  },
];

const ADVANTAGES = [
  "Drives engagement",
  "Boost brand awareness",
  "Enhanced customer engagement",
  "Improved search engine rankings",
  "Cost-effective approach",
  "Attracts organic traffic",
];

const WHY_XNTROVA = [
  "Experienced team",
  "Transparent monthly reporting",
  "Multi-platform expertise",
  "Strategic content creation",
  "No hidden charges",
  "Open communication",
  "Customized approach",
];

const FAQS = [
  {
    question: "What is Social Media Optimization?",
    answer:
      "It's the process of enhancing your social profiles and content to increase visibility, engagement, and website referrals.",
  },
  {
    question: "How is SMO different from social media marketing (SMM)?",
    answer:
      "SMO focuses on optimizing social profiles, content, discoverability, and engagement opportunities, while SMM can include broader organic and paid social media campaigns.",
  },
  {
    question: "Which social media platforms do you optimize?",
    answer:
      "We can optimize major platforms such as Facebook, Instagram, YouTube, LinkedIn, and other platforms based on your audience and business goals.",
  },
  {
    question: "How long does it take to see results from SMO?",
    answer:
      "Results depend on your industry, current online presence, content quality, audience, and consistency. Improvements in visibility and engagement generally build progressively over time.",
  },
  {
    question: "Can SMO improve my website's search engine ranking?",
    answer:
      "A strong social presence can support brand visibility, content distribution, referral traffic, and other signals that complement a broader SEO strategy.",
  },
  {
    question: "Will you create content for my social media pages?",
    answer:
      "Yes. Social content can be planned and created around your brand identity, audience, campaigns, products, and business objectives.",
  },
  {
    question: "How often do you provide performance reports?",
    answer:
      "Performance reporting can be provided monthly, with important metrics and insights used to understand campaign progress and identify optimization opportunities.",
  },
];

const Form = ({ compact = false }) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    if (formData.get("website_url")) {
      return;
    }

    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div
        className={`flex flex-col items-center justify-center text-center ${
          compact ? "min-h-[400px]" : "min-h-[350px]"
        } rounded-lg bg-white p-8`}
      >
        <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#0075a2] text-2xl text-white">
          <FaCheck />
        </div>

        <h3 className="mb-2 text-2xl font-bold text-[#001F2B]">
          Thank You!
        </h3>

        <p className="max-w-md text-gray-600">
          Your enquiry has been received successfully. Our team will get back
          to you shortly.
        </p>
      </div>
    );
  }

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
          className="w-full rounded-sm border border-[#e4e9eb] px-4 py-2.5 text-sm text-[#001F2B] outline-none transition-shadow focus:ring-2 focus:ring-[#0075a2]"
          type="text"
          name="name"
        />

        <input
          placeholder="you@company.com*"
          aria-label="Your email address"
          required
          className="w-full rounded-sm border border-[#e4e9eb] px-4 py-2.5 text-sm text-[#001F2B] outline-none transition-shadow focus:ring-2 focus:ring-[#0075a2]"
          type="email"
          name="email"
        />
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <input
          placeholder="+91 98765 43210"
          aria-label="Your phone number"
          pattern="^\\+?[0-9]{10,15}$"
          className="w-full rounded-sm border border-[#e4e9eb] px-4 py-2.5 text-sm text-[#001F2B] outline-none transition-shadow focus:ring-2 focus:ring-[#0075a2]"
          type="tel"
          name="phone"
        />

        <input
          placeholder="Company Name"
          aria-label="Your company name"
          className="w-full rounded-sm border border-[#e4e9eb] px-4 py-2.5 text-sm text-[#001F2B] outline-none transition-shadow focus:ring-2 focus:ring-[#0075a2]"
          type="text"
          name="company"
        />
      </div>

      <select
        name="service"
        aria-label="Which service are you interested in"
        className="w-full rounded-sm border border-[#e4e9eb] px-4 py-2.5 text-sm text-[#001F2B] outline-none transition-shadow focus:ring-2 focus:ring-[#0075a2]"
        defaultValue=""
      >
        <option value="" disabled>
          Which service are you interested in?
        </option>
        <option value="SEO (Search Engine Optimisation)">
          SEO (Search Engine Optimisation)
        </option>
        <option value="PPC (Pay-Per-Click)">PPC (Pay-Per-Click)</option>
        <option value="Social Media Marketing">
          Social Media Marketing
        </option>
        <option value="E-Commerce Marketing">E-Commerce Marketing</option>
        <option value="Content Marketing">Content Marketing</option>
        <option value="Web Development">Web Development</option>
        <option value="Email Marketing">Email Marketing</option>
        <option value="Performance Marketing">Performance Marketing</option>
        <option value="Other">Other</option>
      </select>

      <textarea
        name="message"
        placeholder="Tell us about your business goals"
        aria-label="Tell us about your business goals"
        rows="2"
        className="w-full resize-none rounded-sm border border-[#e4e9eb] px-4 py-2.5 text-sm text-[#001F2B] outline-none transition-shadow focus:ring-2 focus:ring-[#0075a2]"
      />

      <button
        type="submit"
        className="w-full rounded-sm bg-gradient-to-r from-[#001F2B] to-[#0075a2] px-6 py-3 font-semibold text-white transition-opacity hover:opacity-90"
      >
        Submit
      </button>
    </form>
  );
};

const SocialMedia = () => {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <main className="overflow-hidden bg-white text-[#001F2B]">
      <section className="relative overflow-hidden bg-[#001F2B] text-white lg:flex lg:min-h-[min(58vh,620px)] lg:items-center">
        <div className="absolute inset-0">
          <img
            src={HERO_IMAGE}
            alt=""
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
                Social Media Marketing
              </h1>

              <svg
                width="120"
                height="10"
                viewBox="0 0 120 10"
                fill="none"
                aria-hidden="true"
                className="mb-5 text-[#faae39]"
              >
                <path
                  d="M2 7C24 2 96 2 118 7"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>

              <p className="mb-6 max-w-xl text-base leading-relaxed text-white/90 sm:text-lg">
                Engage audiences and grow your brand across every platform. We
                combine creativity and analytics to build campaigns that drive
                reach, engagement, and loyal communities.
              </p>

              <Link
                to="/contact-us"
                className="inline-flex items-center justify-center gap-2 rounded-sm border border-[#0075a2] bg-[#0075a2] px-7 py-3.5 font-semibold text-white transition hover:opacity-90"
              >
                Chat with us
                <FaArrowRight className="text-sm" />
              </Link>
            </div>

            <div
              id="quote"
              className="w-full max-w-md justify-self-center rounded-lg border border-white/30 bg-white/95 p-6 text-[#001F2B] shadow-[0_20px_50px_rgba(0,19,32,0.35)] backdrop-blur-sm lg:justify-self-end"
            >
              <p className="mb-1 text-2xl font-bold">Get a Free Digital Audit</p>

              <p className="mb-4 text-sm text-gray-600">
                Tell us about your business and we’ll get back to you shortly.
              </p>

              <Form compact />
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#001F2B]/30 to-transparent" />
      </section>

      <section className="mx-auto w-full max-w-[1440px] px-5 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto mb-10 max-w-2xl text-center md:mb-12">
          <h2 className="mb-3 text-2xl font-medium md:text-3xl md:font-bold">
            Social Media Optimization for Measurable Business Growth
          </h2>

          <p className="text-base font-medium leading-relaxed text-gray-600 md:text-lg">
            At Xntrova, we specialize in the best-in-class Social Media
            Optimization (SMO) services that enhance your brand visibility,
            foster meaningful interactions, and drive sustainable growth.
            Schedule a free consultation with us and amplify your brand voice.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Contact us now",
              text: "Fill the form with all required information and get in touch with our experts at the best digital marketing company in Delhi NCR.",
            },
            {
              title: "Speak to our professionals",
              text: "Our seasoned experts will look into your requirements and provide a digital roadmap to success.",
            },
            {
              title: "Enhance your online presence",
              text: "Attain measurable growth with our performance-driven strategies and customizable solutions. We will take care of your marketing needs.",
            },
          ].map((item, index) => (
            <div
              key={item.title}
              className="rounded-md bg-[#001F2B] p-6 shadow-sm transition duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 70}ms` }}
            >
              <div className="flex h-full items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#0075a2] text-white">
                  <FaCheck />
                </div>

                <div>
                  <p className="mb-1 font-semibold text-white">{item.title}</p>

                  <p className="text-sm leading-relaxed text-white/70">
                    {item.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1440px] px-5 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto mb-10 max-w-2xl text-center md:mb-12">
          <h2 className="mb-3 text-2xl font-medium md:text-3xl md:font-bold">
            Key Advantages of Social Media Optimization
          </h2>

          <p className="text-base font-medium leading-relaxed text-gray-600 md:text-lg">
            SMO services help in raising the visibility of your brand and
            helps in creating a clean and influencing reputation in the market.
          </p>
        </div>

        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="relative h-72 w-full overflow-hidden rounded-lg ring-[3px] ring-[#e4e9eb] lg:h-96">
            <img
              src={ADVANTAGE_IMAGE}
              alt="Key advantages of social media optimization"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {ADVANTAGES.map((item, index) => (
              <div
                key={item}
                className="flex h-full items-center gap-3 rounded-sm border border-[#e4e9eb] bg-[#f2f7f9] px-5 py-4 transition duration-300 hover:-translate-y-1 hover:shadow-md"
                style={{ animationDelay: `${index * 70}ms` }}
              >
                <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-[#0075a2]" />

                <p className="font-medium text-[#001F2B]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f2f7f9]">
        <div className="mx-auto w-full max-w-[1440px] px-5 py-16 sm:px-8 lg:px-10">
          <div className="mx-auto mb-10 max-w-2xl text-center md:mb-12">
            <h2 className="mb-3 text-2xl font-medium md:text-3xl md:font-bold">
              Here's what we offer
            </h2>

            <p className="text-base font-medium leading-relaxed text-gray-600 md:text-lg">
              Xntrova offers a range of social media optimization services to
              amplify your brand's voice. Here's what we have in store for you.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICE_ITEMS.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-md bg-[#001F2B] p-6 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                  style={{ animationDelay: `${index * 70}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#0075a2] text-white">
                      <Icon />
                    </div>

                    <div>
                      <p className="mb-1 font-semibold text-white">
                        {item.title}
                      </p>

                      <p className="text-sm leading-relaxed text-white/70">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1440px] px-5 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto mb-10 max-w-2xl text-center md:mb-12">
          <h2 className="mb-3 text-2xl font-medium md:text-3xl md:font-bold">
            Why Xntrova is the top social media optimization company in Delhi
          </h2>

          <p className="text-base font-medium leading-relaxed text-gray-600 md:text-lg">
            With a skilled team of certified experts, Xntrova optimizes social
            profiles and content across major platforms with precision and
            creativity. Here's what makes us stand out.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {WHY_XNTROVA.map((item, index) => (
            <div
              key={item}
              className="flex h-full items-center gap-3 rounded-sm border border-[#e4e9eb] bg-[#f2f7f9] px-5 py-4 transition duration-300 hover:-translate-y-1 hover:shadow-md"
              style={{ animationDelay: `${index * 70}ms` }}
            >
              <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-[#0075a2]" />

              <p className="text-sm font-medium text-[#001F2B] sm:text-base">
                {item}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1440px] px-5 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto mb-10 max-w-2xl text-center md:mb-12">
          <h2 className="mb-3 text-2xl font-medium md:text-3xl md:font-bold">
            Frequently Asked Questions About Our Social Media Optimization
          </h2>

          <p className="text-base font-medium leading-relaxed text-gray-600 md:text-lg">
            Resolve all your general questions and queries with the FAQ below.
          </p>
        </div>

        <div className="mx-auto max-w-3xl space-y-3">
          {FAQS.map((faq, index) => {
            const isOpen = openFaq === index;

            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-md border border-[#e4e9eb]"
              >
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? -1 : index)}
                    className={`flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-semibold transition ${
                      isOpen
                        ? "bg-[#0075a2]/10 text-[#0075a2]"
                        : "bg-white text-[#001F2B]"
                    }`}
                    aria-expanded={isOpen}
                  >
                    <span>{faq.question}</span>

                    <FaPlus
                      className={`shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    />
                  </button>
                </h3>

                <div
                  className={`grid transition-all duration-300 ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-4 text-sm leading-relaxed text-gray-600">
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
            <h2 className="mb-3 text-3xl font-bold">Get in touch with us</h2>

            <p className="mb-8 text-gray-600">
              Get in touch with our experts and seek further assistance
            </p>

            <div className="space-y-4">
              <Link
                to="/contact-us"
                className="group flex items-center gap-4 rounded-sm"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#0075a2]/10 text-[#0075a2]">
                  <FaPhone />
                </span>

                <span>
                  <span className="block text-sm text-gray-500">
                    Call For Advice
                  </span>

                  <span className="block font-semibold text-[#001F2B] group-hover:underline">
                    +91 868-382-8646
                  </span>
                </span>
              </Link>

              <Link
                to="/contact-us"
                className="group flex items-center gap-4 rounded-sm"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#0075a2]/10 text-[#0075a2]">
                  <FaEnvelope />
                </span>

                <span>
                  <span className="block text-sm text-gray-500">
                    Mail Us
                  </span>

                  <span className="block font-semibold text-[#001F2B] group-hover:underline">
                    sales@xntrova.com
                  </span>
                </span>
              </Link>
            </div>
          </div>

          <div className="relative h-72 w-full overflow-hidden rounded-lg lg:h-96">
            <img
              src={CONTACT_IMAGE}
              alt=""
              className="h-full w-full object-contain"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#001720] text-white">
        <div className="mx-auto w-full max-w-[1440px] px-5 py-16 text-center sm:px-8 lg:px-10">
          <h2 className="mb-4 text-2xl font-medium md:text-3xl md:font-bold">
            Elevate Your Brand with Digital Excellence
          </h2>

          <p className="mx-auto mb-8 max-w-2xl text-white/80">
            Get a comprehensive digital audit and discover how we can
            accelerate your business growth
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact-us"
              className="inline-flex items-center justify-center gap-2 rounded-sm border border-[#0075a2] bg-[#0075a2] px-7 py-3.5 font-semibold text-white transition hover:opacity-90"
            >
              Get Free Digital Audit
              <FaArrowRight />
            </Link>

            <Link
              to="/contact-us"
              className="inline-flex items-center justify-center gap-2 rounded-sm border border-white/70 bg-transparent px-7 py-3.5 font-semibold text-white transition hover:bg-white/10"
            >
              Contact Us
            </Link>
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

          <p className="text-base font-medium leading-relaxed text-gray-600 md:text-lg">
            Tell us about your goals and we'll get back to you shortly.
          </p>
        </div>

        <div className="mx-auto max-w-2xl">
          <Form />
        </div>
      </section>
    </main>
  );
};

export default SocialMedia
