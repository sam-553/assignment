import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import {
  FaXTwitter,
  FaPhone,
  FaEnvelope,
  FaGlobe,
  FaBars,
  FaXmark,
  FaChevronDown,
  FaMagnifyingGlass,
  FaBullhorn,
  FaShareNodes,
  FaCartShopping,
  FaPalette,
  FaPenNib,
  FaCode,
} from "react-icons/fa6";

const serviceGroups = [
  {
    title: "SEO Services",
    icon: <FaMagnifyingGlass size={14} />,
    items: [
      { name: "Search Engine Optimization", to: "/seo-service" },
      { name: "Local SEO", to: "/local-seo" },
      { name: "SEO Packages", to: "/seo-packages" },
    ],
  },
  {
    title: "Performance Marketing",
    icon: <FaBullhorn size={14} />,
    items: [
      { name: "Paid Advertising (PPC)", to: "/paid-advertise" },
    ],
  },
  {
    title: "Social Media Marketing",
    icon: <FaShareNodes size={14} />,
    items: [
      { name: "Social Media Optimization", to: "/social-media" },
      { name: "Online Reputation Management", to: "/online-reputation" },
    ],
  },
  {
    title: "Ecommerce",
    icon: <FaCartShopping size={14} />,
    items: [
      { name: "E-Commerce Marketing", to: "/e-marketing" },
      { name: "Amazon Marketing", to: "/amazon-marketing" },
    ],
  },
  {
    title: "Studio",
    icon: <FaPalette size={14} />,
    items: [
      { name: "Graphic Design", to: "/graphic-design" },
    ],
  },
  {
    title: "Marketing",
    icon: <FaPenNib size={14} />,
    items: [
      { name: "Content Marketing", to: "/content-marketing" },
      { name: "Email Marketing", to: "/email-marketing" },
      { name: "Video Marketing", to: "/video-marketing" },
    ],
  },
  {
    title: "Development",
    icon: <FaCode size={14} />,
    items: [
      { name: "Website Development", to: "/web-development" },
      { name: "Website Packages", to: "/web-packages" },
    ],
  },
];

const regions = ["India", "Australia", "Canada"];

const Header = () => {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [regionOpen, setRegionOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState("India");

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setServicesOpen(false);
    setRegionOpen(false);
  };

  const handleRegionSelect = (region) => {
    setSelectedRegion(region);
    setRegionOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-[#e4e9eb] bg-white">
      <div className="hidden border-b border-[#e4e9eb] bg-[#f2f7f9] lg:block">
        <div className="mx-auto flex h-11 w-full max-w-[1440px] items-center justify-between gap-6 px-5 sm:px-8 lg:px-10">
          <div className="flex items-center gap-2.5">
            <Link
              to="/social/facebook"
              aria-label="Facebook"
              className="flex h-6 w-6 items-center justify-center rounded-full bg-[#1877f2] text-white transition-transform hover:scale-105"
            >
              <FaFacebookF size={12} />
            </Link>

            <Link
              to="/social/instagram"
              aria-label="Instagram"
              className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white transition-transform hover:scale-105"
            >
              <FaInstagram size={12} />
            </Link>

            <Link
              to="/social/linkedin"
              aria-label="LinkedIn"
              className="flex h-6 w-6 items-center justify-center rounded-full bg-[#0a66c2] text-white transition-transform hover:scale-105"
            >
              <FaLinkedinIn size={12} />
            </Link>

            <Link
              to="/social/x"
              aria-label="X"
              className="flex h-6 w-6 items-center justify-center rounded-full bg-black text-white transition-transform hover:scale-105"
            >
              <FaXTwitter size={11} />
            </Link>
          </div>

          <div className="flex items-center gap-4 text-sm text-[#575757]">
            <Link
              to="/contact-us"
              className="flex items-center gap-1.5 transition-colors hover:text-[#0075a2]"
            >
              <FaPhone size={13} className="text-[#0075a2]" />
              <span>+91 868-382-8646</span>
            </Link>

            <span className="h-3.5 w-px bg-[#e4e9eb]" />

            <Link
              to="/contact-us"
              className="flex items-center gap-1.5 transition-colors hover:text-[#0075a2]"
            >
              <FaEnvelope size={14} className="text-[#0075a2]" />
              <span>info@xntrova.com</span>
            </Link>

            <Link
              to="/contact-us"
              className="ml-1 inline-flex rounded-sm bg-[#faae39] px-5 py-2 text-xs font-semibold uppercase tracking-wide text-[#001720] transition-opacity hover:opacity-90"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      <div className="mx-auto flex h-16 w-full max-w-[1440px] items-center justify-between gap-6 px-5 sm:px-8 lg:h-[4.5rem] lg:px-10">
        <Link
          to="/"
          onClick={closeMobileMenu}
          className="flex shrink-0 items-center"
        >
          <img
            src="https://res.cloudinary.com/di93stsbz/image/upload/f_auto,q_auto,c_limit,w_384/v1788158799/cms-settings/cx4pzlnw2srdmd5ckfjp.png"
            srcSet="
              https://res.cloudinary.com/di93stsbz/image/upload/f_auto,q_auto,c_limit,w_256/v1788158799/cms-settings/cx4pzlnw2srdmd5ckfjp.png 1x,
              https://res.cloudinary.com/di93stsbz/image/upload/f_auto,q_auto,c_limit,w_384/v1788158799/cms-settings/cx4pzlnw2srdmd5ckfjp.png 2x
            "
            alt="Xntrova"
            width="160"
            height="40"
            loading="eager"
            className="h-8 w-auto object-contain lg:h-10"
          />
        </Link>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-1 lg:flex"
        >
          <NavLink to="/">Home</NavLink>

          <NavLink to="/about-us">About Us</NavLink>

          <div
            className="group relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              type="button"
              aria-haspopup="true"
              aria-expanded={servicesOpen}
              onClick={() => setServicesOpen(!servicesOpen)}
              className="relative flex items-center gap-1.5 rounded-sm px-5 py-2 text-sm font-medium text-[#000] transition-colors hover:text-[#0075a2]"
            >
              <span>Services</span>

              <FaChevronDown
                size={9}
                className={`transition-transform duration-200 ${
                  servicesOpen ? "rotate-180" : ""
                }`}
              />

              <span className="pointer-events-none absolute bottom-0 left-5 right-5 h-0.5 origin-left scale-x-0 rounded-full bg-[#faae39] transition-transform duration-200 group-hover:scale-x-100" />
            </button>

           {servicesOpen && (
  <div className="absolute left-1/2 top-full z-50 w-[850px] -translate-x-1/2">
    <div className="overflow-hidden rounded-xl border border-[#e4e9eb] bg-white shadow-[0_20px_60px_rgba(0,19,32,0.16)]">
      <div className="grid grid-cols-3 gap-x-8 gap-y-7 p-7">
        {serviceGroups.map((group) => (
          <div key={group.title}>
            <div className="mb-3 flex items-center gap-2 text-[#001720]">
              <span className="flex h-7 w-7 items-center justify-center rounded-md bg-[#f2f7f9] text-[#0075a2]">
                {group.icon}
              </span>

              <h3 className="text-sm font-bold">
                {group.title}
              </h3>
            </div>

            <div className="space-y-1">
              {group.items.map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  onClick={() => setServicesOpen(false)}
                  className="group/item block rounded-md px-2 py-1.5 text-[13px] text-[#575757] transition-all hover:bg-[#f2f7f9] hover:pl-3 hover:text-[#0075a2]"
                >
                  <span className="flex items-center justify-between">
                    {item.name}

                    <span className="translate-x-[-4px] opacity-0 transition-all group-hover/item:translate-x-0 group-hover/item:opacity-100">
                      →
                    </span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between gap-6 border-t border-[#e4e9eb] bg-[#f2f7f9] px-7 py-5">
        <div>
          <h3 className="mb-1 text-sm font-bold text-[#001720]">
            Services
          </h3>

          <p className="max-w-[590px] text-xs leading-5 text-[#575757]">
            One team across SEO, performance, social, commerce and web —
            built around where your customers are actually searching.
          </p>
        </div>

        <Link
          to="/services"
          onClick={() => setServicesOpen(false)}
          className="inline-flex shrink-0 items-center gap-2 rounded-sm bg-[#0075a2] px-5 py-2.5 text-xs font-semibold text-white transition-all hover:bg-[#005f82]"
        >
          View All Services
          <span>→</span>
        </Link>
      </div>
    </div>
  </div>
)}
          </div>

          <NavLink to="/blog">Blog</NavLink>

          <NavLink to="/careers">Careers</NavLink>
        </nav>

        <div className="flex items-center gap-3">
          <div className="relative hidden lg:block">
            <button
              type="button"
              aria-haspopup="true"
              aria-expanded={regionOpen}
              aria-label={`Region: ${selectedRegion}. Change region`}
              onClick={() => setRegionOpen(!regionOpen)}
              className="inline-flex items-center gap-2 rounded-sm border border-[#e4e9eb] bg-white px-3 py-2 text-sm font-medium text-[#000] transition-colors hover:border-[#0075a2] hover:text-[#0075a2]"
            >
              <FaGlobe size={15} className="text-[#0075a2]" />

              <span>{selectedRegion}</span>

              <FaChevronDown
                size={10}
                className={`transition-transform duration-200 ${
                  regionOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {regionOpen && (
              <div className="absolute right-0 top-full z-50 mt-2 w-40 overflow-hidden rounded-md border border-[#e4e9eb] bg-white shadow-lg">
                {regions.map((region) => (
                  <button
                    key={region}
                    type="button"
                    onClick={() => handleRegionSelect(region)}
                    className={`flex w-full items-center px-4 py-2.5 text-left text-sm transition-colors hover:bg-[#f2f7f9] hover:text-[#0075a2] ${
                      selectedRegion === region
                        ? "bg-[#f2f7f9] font-semibold text-[#0075a2]"
                        : "text-[#000]"
                    }`}
                  >
                    {region}
                  </button>
                ))}
              </div>
            )}
          </div>

          <Link
            to="/contact-us"
            onClick={closeMobileMenu}
            className="hidden rounded-sm bg-[#faae39] px-6 py-3 text-sm font-semibold text-[#001720] transition-opacity hover:opacity-90 sm:inline-flex lg:hidden"
          >
            Contact Us
          </Link>

          <div className="lg:hidden">
            <button
              type="button"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-controls="mobile-nav-panel"
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="rounded-sm p-2 text-[#000] transition-colors hover:text-[#0075a2]"
            >
              {mobileMenuOpen ? (
                <FaXmark size={24} />
              ) : (
                <FaBars size={24} />
              )}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div
          id="mobile-nav-panel"
          className="border-t border-[#e4e9eb] bg-white lg:hidden"
        >
          <nav className="mx-auto flex max-w-[1440px] flex-col px-5 py-4 sm:px-8">
            <MobileNavLink
              to="/"
              onClick={closeMobileMenu}
            >
              Home
            </MobileNavLink>

            <MobileNavLink
              to="/about-us"
              onClick={closeMobileMenu}
            >
              About Us
            </MobileNavLink>

            <MobileNavLink
              to="/services"
              onClick={closeMobileMenu}
            >
              Services
            </MobileNavLink>

            <MobileNavLink
              to="/blog"
              onClick={closeMobileMenu}
            >
              Blog
            </MobileNavLink>

            <MobileNavLink
              to="/careers"
              onClick={closeMobileMenu}
            >
              Careers
            </MobileNavLink>

            <Link
              to="/contact-us"
              onClick={closeMobileMenu}
              className="mt-3 flex w-full items-center justify-center rounded-sm bg-[#faae39] px-6 py-3 text-sm font-semibold text-[#001720] transition-opacity hover:opacity-90"
            >
              Contact Us
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

const NavLink = ({ to, children }) => {
  return (
    <Link
      to={to}
      className="group relative rounded-sm px-5 py-2 text-sm font-medium text-[#000] transition-colors hover:text-[#0075a2]"
    >
      {children}

      <span className="pointer-events-none absolute bottom-0 left-5 right-5 h-0.5 origin-left scale-x-0 rounded-full bg-[#faae39] transition-transform duration-200 group-hover:scale-x-100" />
    </Link>
  );
};

const MobileNavLink = ({ to, children, onClick }) => {
  return (
    <Link
      to={to}
      onClick={onClick}
      className="border-b border-[#e4e9eb] px-2 py-4 text-sm font-medium text-[#000] transition-colors hover:text-[#0075a2]"
    >
      {children}
    </Link>
  );
};

export default Header;