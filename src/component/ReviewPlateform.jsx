import {
  SiTrustpilot,
  SiGlassdoor,
  SiGoogle,
} from "react-icons/si";

const logos = [
  {
    name: "Clutch",
    type: "image",
    src: "https://res.cloudinary.com/di93stsbz/image/upload/v1788251111/xntrova-wp-media/brand-logos/clutch.svg",
  },
  {
    name: "Trustpilot",
    type: "icon",
    Icon: SiTrustpilot,
    color: "#00B67A",
  },
  {
    name: "GoodFirms",
    type: "image",
    src: "https://res.cloudinary.com/di93stsbz/image/upload/f_auto,q_auto,c_limit,w_256/v1788251114/xntrova-wp-media/brand-logos/goodfirms.jpg",
  },
  {
    name: "DesignRush",
    type: "image",
    src: "https://res.cloudinary.com/di93stsbz/image/upload/f_auto,q_auto,c_limit,w_256/v1788251112/xntrova-wp-media/brand-logos/designrush.png",
  },
  {
    name: "Glassdoor",
    type: "icon",
    Icon: SiGlassdoor,
    color: "#0CAA41",
  },
  {
    name: "Google Reviews",
    type: "icon",
    Icon: SiGoogle,
    color: "#4285F4",
  },
];

const LogoSet = ({ hidden = false }) => {
  return (
    <div
      aria-hidden={hidden}
      className="
        flex shrink-0 items-center
        gap-[26px] pe-[26px]
        sm:gap-[40px] sm:pe-[40px]
        lg:gap-[56px] lg:pe-[56px]
      "
    >
      {logos.map((logo) => {
        const Icon = logo.Icon;

        return (
          <div
            key={logo.name}
            className="
              flex h-9 shrink-0
              max-w-[150px]
              items-center justify-center
              sm:h-10
              lg:h-11
            "
          >
            {logo.type === "image" ? (
              <img
                src={logo.src}
                alt={logo.name}
                className="
                  h-full w-auto
                  max-w-[150px]
                  shrink-0
                  object-contain
                "
              />
            ) : (
              <Icon
                aria-label={logo.name}
                title={logo.name}
                className="h-full w-auto max-w-[150px]"
                style={{ color: logo.color }}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default function ReviewsPlatform() {
  return (
    <section className="py-7 max-md:py-[15px]">
      {/* Heading */}
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-10">
        <div className="mx-auto mb-10 max-w-2xl text-center md:mb-12">
          <h2 className="mb-3 font-medium md:font-bold">
            Reviews Platform
          </h2>
        </div>
      </div>

      {/* Marquee */}
      <div className="mt-6 space-y-[25px]">
        <div className="w-full overflow-hidden">
          <div
            className="
              flex w-max
              animate-[marquee_72s_linear_infinite]
              hover:[animation-play-state:paused]
            "
          >
            <LogoSet />
            <LogoSet hidden />
            <LogoSet hidden />
            <LogoSet hidden />
          </div>
        </div>
      </div>
    </section>
  );
}