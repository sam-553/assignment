import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const services = [
    {
      name: "SEO (Search Engine Optimisation)",
      href: "/search-engine-optimization/",
    },
    {
      name: "PPC (Pay-Per-Click)",
      href: "/paid-advertising/",
    },
    {
      name: "Social Media Marketing",
      href: "/social-media-optimization/",
    },
    {
      name: "E-Commerce Marketing",
      href: "/e-commerce-marketing/",
    },
    {
      name: "Content Marketing",
      href: "/content-marketing/",
    },
    {
      name: "Web Development",
      href: "/website-development/",
    },
    {
      name: "Email Marketing",
      href: "/email-marketing/",
    },
  ];

  const companyLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about-us/" },
    { name: "Contact Us", href: "/contact-us/" },
    { name: "Services", href: "/services/" },
    { name: "Blog", href: "/blog/" },
    { name: "Careers", href: "/careers/" },
  ];

  const legalLinks = [
    {
      name: "Privacy Policy",
      href: "/privacy-policy/",
    },
    {
      name: "Terms & Conditions",
      href: "/terms-and-conditions/",
    },
    {
      name: "Cookie Policy",
      href: "/cookie-policy/",
    },
    {
      name: "Disclaimer",
      href: "/disclaimer/",
    },
    {
      name: "Refund & Cancellation Policy",
      href: "/refund-cancellation-policy/",
    },
    {
      name: "Copyright Policy",
      href: "/copyright-policy/",
    },
  ];

  return (
    <footer className="bg-[#364e55] text-white/80">
      {/* Main Footer */}
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-10 px-5 py-16 sm:px-8 md:grid-cols-4 lg:px-10">
        {/* Brand */}
        <div>
          <a href="/" aria-label="Xntrova Home">
            <img
              src="https://res.cloudinary.com/di93stsbz/image/upload/f_auto,q_auto,c_limit,w_256/v1788158799/cms-settings/cx4pzlnw2srdmd5ckfjp.png"
              alt="Xntrova"
              loading="lazy"
              width="120"
              height="32"
              className="mb-4 h-8 w-auto object-contain brightness-0 invert"
            />
          </a>

          <p className="text-sm leading-relaxed text-white/70">
            India’s premier B2B digital marketing agency, delivering
            growth-focused solutions for businesses across Delhi and beyond.
          </p>

          {/* Social Icons */}
          <div className="mt-5 flex gap-3">
            <a
              href="https://www.facebook.com/xntrova/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/80 transition-colors hover:bg-white/20 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <FaFacebookF size={16} />
            </a>

            <a
              href="https://www.instagram.com/xntrova.agency/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/80 transition-colors hover:bg-white/20 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <FaInstagram size={16} />
            </a>

            <a
              href="https://www.linkedin.com/company/xntrova/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/80 transition-colors hover:bg-white/20 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <FaLinkedinIn size={16} />
            </a>

            <a
              href="https://x.com/xntrova"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/80 transition-colors hover:bg-white/20 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <FaXTwitter size={16} />
            </a>
          </div>
        </div>

        {/* Services */}
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-white">
            Services
          </p>

          <ul className="space-y-2.5">
            {services.map((service) => (
              <li key={service.href}>
                <a
                  href={service.href}
                  className="rounded-sm text-sm text-white/70 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  {service.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-white">
            Company
          </p>

          <ul className="space-y-2.5">
            {companyLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="rounded-sm text-sm text-white/70 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-white">
            Get in touch
          </p>

          <p className="mb-2 text-sm text-white/70">
            A107, 2nd Floor, Sector 8, Dwarka New Delhi - 110077
          </p>

          <p className="mb-2 text-sm">
            <a
              href="tel:+918683828646"
              className="text-white/70 transition-colors hover:text-white"
            >
              +91 868-382-8646
            </a>
          </p>

          <p className="text-sm">
            <a
              href="mailto:info@xntrova.com"
              className="text-white/70 transition-colors hover:text-white"
            >
              info@xntrova.com
            </a>
          </p>
        </div>
      </div>

      {/* Copyright / Legal */}
      <div className="bg-[#2b3e44]">
        <div className="mx-auto flex w-full max-w-[1440px] flex-wrap items-center gap-x-6 gap-y-2 px-5 py-4 text-xs text-white/70 sm:px-8 lg:px-10">
          <span>© 2026 Xntrova. All rights reserved.</span>

          <nav
            aria-label="Legal"
            className="flex flex-wrap items-center gap-x-5 gap-y-1.5"
          >
            {legalLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-sm text-xs text-white/70 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;