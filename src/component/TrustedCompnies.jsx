import React from "react";

const companies = [
  {
    name: "Google",
    logo: "https://cdn.simpleicons.org/google",
  },
  {
    name: "Microsoft",
    logo: "https://cdn.simpleicons.org/microsoft",
  },
  {
    name: "Amazon",
    logo: "https://cdn.simpleicons.org/amazon",
  },
  {
    name: "Meta",
    logo: "https://cdn.simpleicons.org/meta",
  },
  {
    name: "Netflix",
    logo: "https://cdn.simpleicons.org/netflix",
  },
  {
    name: "Adobe",
    logo: "https://cdn.simpleicons.org/adobe",
  },
  {
    name: "Spotify",
    logo: "https://cdn.simpleicons.org/spotify",
  },
  {
    name: "Slack",
    logo: "https://cdn.simpleicons.org/slack",
  },
  {
    name: "Dropbox",
    logo: "https://cdn.simpleicons.org/dropbox",
  },
  {
    name: "Shopify",
    logo: "https://cdn.simpleicons.org/shopify",
  },
];

const LogoCard = ({ company }) => {
  return (
    <div
      className="
        group
        flex
        h-20
        w-44
        shrink-0
        items-center
        justify-center
        rounded-2xl
        border
        border-[#e4e9eb]
        bg-white
        px-7
        shadow-[0_4px_20px_rgba(0,0,0,0.04)]
        transition-all
        duration-300
        sm:h-24
        sm:w-52
      "
    >
      <img
        src={company.logo}
        alt={company.name}
        className="
          max-h-9
          max-w-[120px]
          object-contain
          opacity-70
          grayscale
          transition-all
          duration-300
          group-hover:opacity-100
          group-hover:grayscale-0
          sm:max-w-[140px]
        "
      />
    </div>
  );
};

const LogoRow = ({ direction = "left", items }) => {
  // Duplicate the logos to create a seamless infinite marquee.
  const duplicatedItems = [...items, ...items];

  return (
    <div className="relative w-full overflow-hidden">
      {/* Left fade */}
      <div
        className="
          pointer-events-none
          absolute
          left-0
          top-0
          z-10
          h-full
          w-16
          bg-gradient-to-r
          from-[#f2f7f9]
          to-transparent
          sm:w-24
        "
      />

      {/* Right fade */}
      <div
        className="
          pointer-events-none
          absolute
          right-0
          top-0
          z-10
          h-full
          w-16
          bg-gradient-to-l
          from-[#f2f7f9]
          to-transparent
          sm:w-24
        "
      />

      <div
        className={`
          flex
          w-max
          gap-4
          sm:gap-6
          ${
            direction === "left"
              ? "animate-marquee-left"
              : "animate-marquee-right"
          }
        `}
      >
        {duplicatedItems.map((company, index) => (
          <LogoCard
            key={`${company.name}-${index}`}
            company={company}
          />
        ))}
      </div>
    </div>
  );
};

export default function TrustedCompanies() {
  return (
    <section className="overflow-hidden bg-[#f2f7f9] py-12 sm:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-10">
        
        {/* Heading */}
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12 lg:mb-14">
          <span
            className="
              mb-3
              inline-flex
              items-center
              rounded-full
              bg-[#0075a2]/10
              px-4
              py-1.5
              text-xs
              font-semibold
              uppercase
              tracking-[0.15em]
              text-[#0075a2]
              sm:text-sm
            "
          >
            Trusted Partners
          </span>

          <h2
            className="
              text-3xl
              font-bold
              leading-tight
              tracking-tight
              text-[#001720]
              sm:text-4xl
              lg:text-5xl
            "
          >
            Trusted by thousands of companies
          </h2>

          <p
            className="
              mx-auto
              mt-4
              max-w-2xl
              text-sm
              leading-7
              text-[#575757]
              sm:text-base
            "
          >
            Businesses of all sizes trust our platform to build,
            grow and scale their digital presence.
          </p>
        </div>

        {/* Three Animated Rows */}
        <div className="space-y-5 sm:space-y-6">
          
          {/* Row 1: Right → Left */}
          <LogoRow
            direction="left"
            items={companies.slice(0, 6)}
          />

          {/* Row 2: Left → Right */}
          <LogoRow
            direction="right"
            items={companies.slice(4, 10)}
          />

          {/* Row 3: Right → Left */}
          <LogoRow
            direction="left"
            items={[
              ...companies.slice(2, 8),
            ]}
          />

        </div>
      </div>
    </section>
  );
}