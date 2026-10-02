import React, { useState } from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const About = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
    website_url: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.website_url) return;

    console.log("Form submitted:", formData);
  };

  const services = [
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

  const mission = [
    {
      title: "Customized strategies",
      description:
        "Deliver personalized and data-driven digital marketing strategies tailored to each client's unique goals and challenges.",
    },
    {
      title: "Impactful campaigns",
      description:
        "We, being the leading digital marketing agency in Delhi, create impactful campaigns that engage audiences, build brand loyalty, and drive measurable business growth.",
    },
    {
      title: "Transparent communication",
      description:
        "We foster transparent communication and collaboration to ensure client success and satisfaction at every step.",
    },
    {
      title: "High-end technology",
      description:
        "At Xntrova, we utilize high-end technology and stay updated with the latest algorithms to accelerate your business growth.",
    },
  ];

  const commitment = [
    {
      title: "Client-oriented approach",
      description:
        "We prioritize understanding your unique business needs and goals to deliver marketing solutions that truly align with your vision.",
    },
    {
      title: "Data-driven excellence",
      description:
        "Our strategies are backed by data and analytics to ensure continuous optimization and measurable success.",
    },
    {
      title: "Quality",
      description:
        "What makes Xntrova different from others is our quality of work. We never sacrifice our ethics, professionalism, and work quality just to deliver the work. At Xntrova, we bring customers to your brand, not just traffic.",
    },
  ];

  const Form = () => (
    <form onSubmit={handleSubmit} className="space-y-3">
      <input
        tabIndex="-1"
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
        type="text"
        name="website_url"
        value={formData.website_url}
        onChange={handleChange}
      />

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <input
          placeholder="Your Name*"
          aria-label="Your name"
          required
          className="w-full rounded-sm border border-[#e4e9eb] px-4 py-2.5 text-sm text-black outline-none transition-shadow focus:ring-2 focus:ring-[#0075a2]"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />

        <input
          placeholder="you@company.com*"
          aria-label="Your email address"
          required
          className="w-full rounded-sm border border-[#e4e9eb] px-4 py-2.5 text-sm text-black outline-none transition-shadow focus:ring-2 focus:ring-[#0075a2]"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <input
          placeholder="+91 98765 43210"
          aria-label="Your phone number"
          pattern="^\+?[0-9]{10,15}$"
          className="w-full rounded-sm border border-[#e4e9eb] px-4 py-2.5 text-sm text-black outline-none transition-shadow focus:ring-2 focus:ring-[#0075a2]"
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />

        <input
          placeholder="Company Name"
          aria-label="Your company name"
          className="w-full rounded-sm border border-[#e4e9eb] px-4 py-2.5 text-sm text-black outline-none transition-shadow focus:ring-2 focus:ring-[#0075a2]"
          type="text"
          name="company"
          value={formData.company}
          onChange={handleChange}
        />
      </div>

      <select
        name="service"
        aria-label="Which service are you interested in"
        value={formData.service}
        onChange={handleChange}
        className="w-full rounded-sm border border-[#e4e9eb] px-4 py-2.5 text-sm text-black outline-none transition-shadow focus:ring-2 focus:ring-[#0075a2]"
      >
        <option value="" disabled>
          Which service are you interested in?
        </option>

        {services.map((service) => (
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
        value={formData.message}
        onChange={handleChange}
        className="w-full rounded-sm border border-[#e4e9eb] px-4 py-2.5 text-sm text-black outline-none transition-shadow focus:ring-2 focus:ring-[#0075a2]"
      />

      <button
        type="submit"
        className="w-full rounded-sm bg-gradient-to-r from-[#001720] to-[#0075a2] px-6 py-3 font-semibold text-white transition-opacity hover:opacity-90"
      >
        Submit
      </button>
    </form>
  );

  return (
    <main className="font-[Poppins,sans-serif] text-[#575757]">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#001F2B] text-white lg:flex lg:min-h-[min(58vh,620px)] lg:items-center">
        <div className="absolute inset-0">
          <img
            src="https://res.cloudinary.com/di93stsbz/image/upload/f_auto,q_auto,c_limit,w_1920/v1787226374/xntrova-wp-media/banner-images/image-81-1.png"
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
              <h1 className="mb-3 text-[35px] font-bold leading-[1.15] tracking-tight sm:text-5xl">
                Who We Are
              </h1>

              <div className="mb-5 h-[10px] w-[120px]">
                <svg
                  width="120"
                  height="10"
                  viewBox="0 0 120 10"
                  fill="none"
                  aria-hidden="true"
                  className="text-[#faae39]"
                >
                  <path
                    d="M2 7C24 2 96 2 118 7"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              <p className="mb-6 max-w-xl text-lg leading-7 text-white/90">
                Driven by creativity, guided by strategy we combine innovation
                and expertise to help brands grow and connect with their
                audiences.
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href="tel:+918683828646"
                  className="inline-flex items-center justify-center gap-2 rounded-sm border border-[#0075a2] bg-[#0075a2] px-7 py-3.5 font-semibold text-white transition-colors hover:opacity-90"
                >
                  Chat with us
                </a>
              </div>
            </div>

            <div
              id="quote"
              className="w-full max-w-md justify-self-center rounded-lg border border-[#e4e9eb] bg-white/95 p-6 text-black shadow-[0_20px_50px_rgba(0,19,32,0.35)] backdrop-blur-sm lg:justify-self-end"
            >
              <p className="mb-1 text-xl font-bold text-black">
                Get a Free Digital Audit
              </p>

              <p className="mb-3 text-sm text-[#575757]">
                Tell us about your business and we’ll get back to you shortly.
              </p>

              <Form />
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#001F2B]/30 to-transparent" />
      </section>

      {/* Mission */}
      <section className="mx-auto w-full max-w-[1440px] px-5 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto mb-10 max-w-2xl text-center md:mb-12">
          <h2 className="mb-3 text-2xl font-medium text-black md:text-3xl md:font-bold">
            Our Mission
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {mission.map((item, index) => (
            <div key={item.title}>
              <div className="flex h-full items-start gap-4 rounded-md bg-[#0a4257] p-6">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#0075a2] font-bold text-white">
                  {index + 1}
                </div>

                <div>
                  <p className="mb-1 font-semibold text-white">
                    {item.title}
                  </p>

                  <p className="text-sm leading-relaxed text-white/70">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Commitment */}
      <section className="mx-auto w-full max-w-[1440px] px-5 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto mb-10 max-w-2xl text-center md:mb-12">
          <h2 className="mb-3 text-2xl font-medium text-black md:text-3xl md:font-bold">
            Our Commitment
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {commitment.map((item, index) => (
            <div key={item.title}>
              <div className="flex h-full items-start gap-4 rounded-md bg-[#0a4257] p-6">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#0075a2] font-bold text-white">
                  {index + 1}
                </div>

                <div>
                  <p className="mb-1 font-semibold text-white">
                    {item.title}
                  </p>

                  <p className="text-sm leading-relaxed text-white/70">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Information */}
      <section className="mx-auto w-full max-w-[1440px] px-5 py-16 sm:px-8 lg:px-10">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h2 className="mb-3 text-3xl font-bold text-black">
              We're Here—Come Say Hello
            </h2>

            <p className="mb-8 text-[#555]">
              We'd love to hear from you.
            </p>

            <div className="space-y-4">
              <a
                href="https://www.google.com/maps/place/Xntrova+Technologies"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0075a2]"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#0075a2]/10 text-[#0075a2]">
                  <FaMapMarkerAlt size={20} />
                </span>

                <span>
                  <span className="block text-sm text-[#555]">Address</span>
                  <span className="block font-semibold text-black group-hover:underline">
                    A107, 2nd Floor, Sector 8, Dwarka New Delhi - 110077
                  </span>
                </span>
              </a>

              <a
                href="tel:+918683828646"
                className="group flex items-center gap-4 rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0075a2]"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#0075a2]/10 text-[#0075a2]">
                  <FaPhoneAlt size={18} />
                </span>

                <span>
                  <span className="block text-sm text-[#555]">
                    Call For Advice
                  </span>

                  <span className="block font-semibold text-black group-hover:underline">
                    +918683828646
                  </span>
                </span>
              </a>

              <a
                href="mailto:info@xntrova.com"
                className="group flex items-center gap-4 rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0075a2]"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#0075a2]/10 text-[#0075a2]">
                  <FaEnvelope size={19} />
                </span>

                <span>
                  <span className="block text-sm text-[#555]">Mail Us</span>

                  <span className="block font-semibold text-black group-hover:underline">
                    info@xntrova.com
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
              className="absolute inset-0 h-full w-full object-contain"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#171717] text-white">
        <div className="mx-auto w-full max-w-[1440px] px-5 py-16 text-center sm:px-8 lg:px-10">
          <h2 className="mb-4 text-2xl font-medium text-white md:text-3xl md:font-bold">
            Elevate Your Brand with Digital Excellence
          </h2>

          <p className="mx-auto mb-8 max-w-2xl text-white/80">
            Get a comprehensive digital audit and discover how we can
            accelerate your business growth
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/contact-us/"
              className="inline-flex items-center justify-center gap-2 rounded-sm border border-[#0075a2] bg-[#0075a2] px-7 py-3.5 font-semibold text-white transition-colors hover:opacity-90"
            >
              Get Free Digital Audit
            </a>

            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 rounded-sm border border-white/70 bg-transparent px-7 py-3.5 font-semibold text-white transition-colors hover:bg-white/10"
            >
              Download Brochure
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section
        id="contact"
        className="mx-auto w-full max-w-[1440px] px-5 py-16 sm:px-8 lg:px-10"
      >
        <div className="mx-auto mb-10 max-w-2xl text-center md:mb-12">
          <h2 className="mb-3 text-2xl font-medium text-black md:text-3xl md:font-bold">
            Got a Project in Mind? Contact Us
          </h2>

          <p className="text-lg font-medium text-[#555]">
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

export default About;