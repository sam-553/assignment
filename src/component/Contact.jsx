import React from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

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

const locations = ["Delhi", "Mumbai", "Kolkata", "Jaipur", "Lucknow"];

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <main className="w-full">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#001F2B] text-white lg:flex lg:items-center lg:min-h-[min(58vh,620px)]">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://res.cloudinary.com/di93stsbz/image/upload/f_auto,q_auto,c_limit,w_1920/v1787226383/xntrova-wp-media/banner-images/image-85.png"
            alt=""
            fetchPriority="high"
            loading="eager"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#001320]/72 via-[#012A3A]/50 to-[#01415A]/26" />

        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_18%_45%,rgba(0,15,26,0.55),transparent_70%)]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_60%,rgba(0,139,185,0.20),transparent_45%)]" />

        {/* Content */}
        <div className="relative z-10 mx-auto w-full max-w-[1440px] px-5 py-10 sm:px-8 sm:py-12 lg:px-10 lg:py-8">
          <div className="grid w-full grid-cols-1 items-center gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
            {/* Left */}
            <div className="max-w-2xl">
              <h1 className="mb-3 text-[35px] font-bold leading-[1.15] tracking-tight text-white sm:text-5xl">
                Get in Touch
              </h1>

              <div className="mb-5">
                <svg
                  width="120"
                  height="10"
                  viewBox="0 0 120 10"
                  fill="none"
                  aria-hidden="true"
                  className="text-[#0075a2]"
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
                We'd love to hear from you! Whether you're ready to start a
                project or just exploring ideas, our team is here to help.
                Let's build something great together.
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href="tel:+918683828646"
                  className="inline-flex items-center justify-center gap-2 rounded-sm border border-[#0075a2] bg-[#0075a2] px-7 py-3.5 font-semibold text-white transition-colors hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-white"
                >
                  Chat with us
                </a>
              </div>
            </div>

            {/* Audit Form */}
            <div
              id="quote"
              className="w-full max-w-md justify-self-center rounded-lg border border-[#e4e9eb] bg-white/95 p-6 text-[#000] shadow-[0_20px_50px_rgba(0,19,32,0.35)] backdrop-blur-sm lg:justify-self-end"
            >
              <p className="mb-1 text-xl font-bold">
                Get a Free Digital Audit
              </p>

              <p className="mb-3 text-sm text-[#575757]">
                Tell us about your business and we’ll get back to you shortly.
              </p>

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
                    aria-label="Your name"
                    placeholder="Your Name*"
                    className="w-full rounded-sm border border-[#e4e9eb] px-4 py-2.5 text-sm outline-none transition-shadow focus:ring-2 focus:ring-[#0075a2]"
                  />

                  <input
                    required
                    type="email"
                    name="email"
                    aria-label="Your email address"
                    placeholder="you@company.com*"
                    className="w-full rounded-sm border border-[#e4e9eb] px-4 py-2.5 text-sm outline-none transition-shadow focus:ring-2 focus:ring-[#0075a2]"
                  />
                </div>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <input
                    type="tel"
                    name="phone"
                    aria-label="Your phone number"
                    placeholder="+91 98765 43210"
                    pattern="^\+?[0-9]{10,15}$"
                    className="w-full rounded-sm border border-[#e4e9eb] px-4 py-2.5 text-sm outline-none transition-shadow focus:ring-2 focus:ring-[#0075a2]"
                  />

                  <input
                    type="text"
                    name="company"
                    aria-label="Your company name"
                    placeholder="Company Name"
                    className="w-full rounded-sm border border-[#e4e9eb] px-4 py-2.5 text-sm outline-none transition-shadow focus:ring-2 focus:ring-[#0075a2]"
                  />
                </div>

                <select
                  name="service"
                  aria-label="Which service are you interested in"
                  defaultValue=""
                  className="w-full rounded-sm border border-[#e4e9eb] px-4 py-2.5 text-sm text-[#000] outline-none transition-shadow focus:ring-2 focus:ring-[#0075a2]"
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
                  rows="2"
                  aria-label="Tell us about your business goals"
                  placeholder="Tell us about your business goals"
                  className="w-full resize-none rounded-sm border border-[#e4e9eb] px-4 py-2.5 text-sm outline-none transition-shadow focus:ring-2 focus:ring-[#0075a2]"
                />

                <button
                  type="submit"
                  className="w-full rounded-sm bg-gradient-to-r from-[#001720] to-[#0075a2] px-6 py-3 font-semibold text-white transition-opacity hover:opacity-90"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#001F2B]/30 to-transparent" />
      </section>

      {/* Contact Information */}
      <section className="bg-[#f2f7f9]">
        <div className="mx-auto w-full max-w-[1440px] px-5 py-16 sm:px-8 lg:px-10">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <h2 className="mb-3 text-3xl font-semibold text-[#000]">
              We're Here—Come Say Hello
            </h2>

            <p className="text-[#555]">
              We'd love to hear from you.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2 lg:items-stretch">
            {/* Company Info */}
            <div className="rounded-lg bg-[#001720] p-7 text-white sm:p-9">
              <p className="text-xl font-bold">
                Xntrova Technologies
              </p>

              <p className="mb-4 mt-6 text-xs font-semibold uppercase tracking-wide text-white/60">
                Contact Info
              </p>

              <ul className="space-y-4">
                <li>
                  <a
                    href="https://www.google.com/maps/place/Xntrova+Technologies"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-start gap-3 text-sm text-white/90 hover:text-white"
                  >
                    <FaMapMarkerAlt className="mt-1 shrink-0 text-white/70" />

                    <span>
                      <span className="block text-white/50">
                        Address
                      </span>

                      <span className="block font-medium">
                        A107, 2nd Floor, Sector 8, Dwarka New Delhi - 110077
                      </span>
                    </span>
                  </a>
                </li>

                <li>
                  <a
                    href="tel:+918683828646"
                    className="flex items-start gap-3 text-sm text-white/90 hover:text-white"
                  >
                    <FaPhoneAlt className="mt-1 shrink-0 text-white/70" />

                    <span>
                      <span className="block text-white/50">
                        Call For Advice
                      </span>

                      <span className="block font-medium">
                        +91 868-382-8646
                      </span>
                    </span>
                  </a>
                </li>

                <li>
                  <a
                    href="mailto:info@xntrova.com"
                    className="flex items-start gap-3 text-sm text-white/90 hover:text-white"
                  >
                    <FaEnvelope className="mt-1 shrink-0 text-white/70" />

                    <span>
                      <span className="block text-white/50">
                        Mail Us
                      </span>

                      <span className="block font-medium">
                        info@xntrova.com
                      </span>
                    </span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Locations */}
            <div className="rounded-lg border border-[#e4e9eb] bg-white p-7 sm:p-9">
              <p className="mb-5 text-xl font-bold text-[#000]">
                Our services available at
              </p>

              <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {locations.map((location) => (
                  <li
                    key={location}
                    className="flex items-center gap-2 rounded-sm border border-[#e4e9eb] bg-[#f2f7f9] px-3 py-2.5 text-sm font-medium text-[#000]"
                  >
                    <FaMapMarkerAlt className="shrink-0 text-[#0075a2]" />
                    {location}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Google Map */}
          <div className="mt-8 overflow-hidden rounded-lg border border-[#e4e9eb]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4174.597226931838!2d77.070837!3d28.5720379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1be996551767%3A0xb2f7b290665076b9!2sXntrova%20Technologies%20%E2%80%93%20Best%20Digital%20Marketing%20Agency%20in%20Delhi%20%7C%20SEO%20Services%20in%20Delhi!5e0!3m2!1sen!2sin!4v1760088370890!5m2!1sen!2sin"
              title="Xntrova Delhi office location on Google Maps"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              className="block h-72 w-full border-0 sm:h-80 lg:h-[28rem]"
            />
          </div>
        </div>
      </section>

      {/* Expert Contact Section */}
      <section className="bg-white">
        <div className="mx-auto w-full max-w-[1440px] px-5 py-16 sm:px-8 lg:px-10">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <h2 className="mb-3 text-3xl font-semibold text-[#000]">
                Get in touch with us
              </h2>

              <p className="mb-8 text-[#555]">
                Get in touch with our experts and seek further assistance.
              </p>

              <div className="space-y-4">
                <a
                  href="tel:+918683828646"
                  className="group flex items-center gap-4"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#0075a2]/10 text-[#0075a2]">
                    <FaPhoneAlt />
                  </span>

                  <span>
                    <span className="block text-sm text-[#555]">
                      Call For Advice
                    </span>

                    <span className="block font-semibold text-[#000] group-hover:underline">
                      +91 868-382-8646
                    </span>
                  </span>
                </a>

                <a
                  href="mailto:info@xntrova.com"
                  className="group flex items-center gap-4"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#0075a2]/10 text-[#0075a2]">
                    <FaEnvelope />
                  </span>

                  <span>
                    <span className="block text-sm text-[#555]">
                      Mail Us
                    </span>

                    <span className="block font-semibold text-[#000] group-hover:underline">
                      info@xntrova.com
                    </span>
                  </span>
                </a>
              </div>
            </div>

            <div className="relative h-72 w-full overflow-hidden rounded-lg lg:h-96">
              <img
                src="https://res.cloudinary.com/di93stsbz/image/upload/f_auto,q_auto,c_limit,w_1920/v1787209714/xntrova-wp-media/xntrova-wp-media/contact-man-ef520e947c3403b4.png"
                alt="An Xntrova client advisor ready to help"
                loading="lazy"
                className="h-full w-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Final Contact Form */}
      <section
        id="contact"
        className="mx-auto w-full max-w-[1440px] px-5 py-16 sm:px-8 lg:px-10"
      >
        <div className="mx-auto mb-10 max-w-2xl text-center md:mb-12">
          <h2 className="mb-3 text-3xl font-bold text-[#000]">
            Got a Project in Mind? Contact Us
          </h2>

          <p className="text-lg font-medium text-[#555]">
            Tell us about your goals and we'll get back to you shortly.
          </p>
        </div>

        <div className="mx-auto max-w-2xl">
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
                className="w-full rounded-sm border border-[#e4e9eb] px-4 py-2.5 text-sm outline-none transition-shadow focus:ring-2 focus:ring-[#0075a2]"
              />

              <input
                required
                type="email"
                name="email"
                placeholder="you@company.com*"
                aria-label="Your email address"
                className="w-full rounded-sm border border-[#e4e9eb] px-4 py-2.5 text-sm outline-none transition-shadow focus:ring-2 focus:ring-[#0075a2]"
              />
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <input
                type="tel"
                name="phone"
                placeholder="+91 98765 43210"
                pattern="^\+?[0-9]{10,15}$"
                aria-label="Your phone number"
                className="w-full rounded-sm border border-[#e4e9eb] px-4 py-2.5 text-sm outline-none transition-shadow focus:ring-2 focus:ring-[#0075a2]"
              />

              <input
                type="text"
                name="company"
                placeholder="Company Name"
                aria-label="Your company name"
                className="w-full rounded-sm border border-[#e4e9eb] px-4 py-2.5 text-sm outline-none transition-shadow focus:ring-2 focus:ring-[#0075a2]"
              />
            </div>

            <select
              name="service"
              defaultValue=""
              aria-label="Which service are you interested in"
              className="w-full rounded-sm border border-[#e4e9eb] px-4 py-2.5 text-sm text-[#000] outline-none transition-shadow focus:ring-2 focus:ring-[#0075a2]"
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
              rows="2"
              placeholder="Tell us about your business goals"
              aria-label="Tell us about your business goals"
              className="w-full resize-none rounded-sm border border-[#e4e9eb] px-4 py-2.5 text-sm outline-none transition-shadow focus:ring-2 focus:ring-[#0075a2]"
            />

            <button
              type="submit"
              className="w-full rounded-sm bg-gradient-to-r from-[#001720] to-[#0075a2] px-6 py-3 font-semibold text-white transition-opacity hover:opacity-90"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Contact;