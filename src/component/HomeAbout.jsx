import React from "react";
import {
  FaLightbulb,
  FaCompass,
  FaChartBar,
  FaArrowTrendUp,
  FaEye,
  FaUsers,
  FaArrowPointer,
  FaChartLine,
} from "react-icons/fa6";

const features = [
  {
    icon: FaLightbulb,
    title: "Creative Ideas",
    description: "Fresh thinking that builds powerful brand stories.",
  },
  {
    icon: FaCompass,
    title: "Strategic Planning",
    description: "Smart strategies backed by deep market insights.",
  },
  {
    icon: FaChartBar,
    title: "Data-Driven Decisions",
    description: "Decisions tied to real impact and ROI.",
  },
  {
    icon: FaArrowTrendUp,
    title: "Measurable Results",
    description: "Real results that drive growth and long-term success.",
  },
];

const resultCards = [
  {
    icon: FaEye,
    title: "Build Visibility",
    description: "Increase your reach and stand out online.",
    position:
      "absolute left-0 top-[2%] w-[132px] sm:w-[150px] lg:w-[168px]",
  },
  {
    icon: FaUsers,
    title: "Engage Audience",
    description: "Turn visitors into loyal customers.",
    position:
      "absolute right-0 top-[2%] w-[132px] sm:w-[150px] lg:w-[168px]",
  },
  {
    icon: FaArrowPointer,
    title: "Drive Conversions",
    description: "Turn clicks into customers with smart strategies.",
    position:
      "absolute left-0 bottom-[2%] w-[132px] sm:w-[150px] lg:w-[168px]",
  },
  {
    icon: FaChartLine,
    title: "Measure & Improve",
    description: "Track performance and optimize continuously.",
    position:
      "absolute right-0 bottom-[2%] w-[132px] sm:w-[150px] lg:w-[168px]",
  },
];

const logo =
  "https://res.cloudinary.com/di93stsbz/image/upload/f_auto,q_auto,c_limit,w_1920/v1788158799/cms-settings/cx4pzlnw2srdmd5ckfjp.png";

const IconCircle = ({ icon: Icon, size = 16 }) => (
  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0075a2]/10 text-[#0075a2]">
    <Icon size={size} aria-hidden="true" />
  </span>
);

const HomeAbout = () => {
  return (
    <section className="mx-auto w-full max-w-[1440px] overflow-hidden px-5 py-8 sm:px-8 md:py-20 lg:px-10 lg:py-24">
      <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-10">
        <div>
          <span className="inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.16em] text-[#0075a2]">
            <span className="h-px w-6 bg-[#0075a2]/50" />
            About Xntrova
          </span>

          <h2 className="mt-4 text-[30px] font-medium leading-[1.2] text-black sm:text-[34px] md:text-[40px] md:font-bold">
            <span className="block">Driven By Ideas.</span>

            <span className="block">
              Focused on <span className="text-[#0075a2]">Results</span>
            </span>
          </h2>

          <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-[#575757]">
            At Xntrova, we believe that the key to great marketing is
            understanding people. Each of our strategies is rooted in fresh
            ideas, robust planning, and a clear focus on what truly matters.
            We combine creativity with data-driven decisions to create
            meaningful experiences that connect, engage, and inspire action.
          </p>

          <p className="mt-4 max-w-xl border-l-2 border-[#0075a2]/30 pl-4 text-[13px] leading-relaxed text-[#555]">
            Whether you want to shape your brand story, improve visibility, or
            drive conversion, we take a creative and data-driven approach to
            ensure the best possible results. Standing as the best digital
            marketing agency in Delhi NCR, we aim to create work that delivers
            measurable results and helps your business climb the competitive
            ladder with confidence.
          </p>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="group flex items-start gap-3"
                >
                  <IconCircle icon={Icon} />

                  <div>
                    <p className="text-[13px] font-semibold text-black transition-colors duration-300 group-hover:text-[#0075a2]">
                      {feature.title}
                    </p>

                    <p className="mt-0.5 text-[11px] leading-snug text-[#555]">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-9">
            <a
              href="#quote"
              className="inline-flex items-center justify-center rounded-sm border border-[#0075a2] bg-[#0075a2] px-7 py-3.5 text-[16px] font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#005f83] hover:shadow-lg hover:shadow-[#0075a2]/20"
            >
              Let's Grow Together
            </a>
          </div>
        </div>

        <div>
          <div className="relative mx-auto hidden aspect-square w-full max-w-[420px] sm:block lg:max-w-[480px]">
            <div className="absolute left-1/2 top-1/2 h-[72%] w-[72%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#0075a2]/20" />

            <div className="absolute inset-0 m-auto h-[90%] w-[90%] animate-[spin_20s_linear_infinite] rounded-full border border-dashed border-[#0075a2]/15" />

            <div className="absolute inset-[12%] rounded-full border border-[#0075a2]/10" />

            <svg
              viewBox="0 0 100 100"
              className="pointer-events-none absolute inset-0 h-full w-full"
              preserveAspectRatio="none"
            >
              <line
                x1="50"
                y1="50"
                x2="16"
                y2="14"
                stroke="#0075a2"
                strokeOpacity="0.25"
                strokeWidth="1"
                strokeDasharray="3 3"
              />

              <line
                x1="50"
                y1="50"
                x2="84"
                y2="14"
                stroke="#0075a2"
                strokeOpacity="0.25"
                strokeWidth="1"
                strokeDasharray="3 3"
              />

              <line
                x1="50"
                y1="50"
                x2="16"
                y2="86"
                stroke="#0075a2"
                strokeOpacity="0.25"
                strokeWidth="1"
                strokeDasharray="3 3"
              />

              <line
                x1="50"
                y1="50"
                x2="84"
                y2="86"
                stroke="#0075a2"
                strokeOpacity="0.25"
                strokeWidth="1"
                strokeDasharray="3 3"
              />
            </svg>

            <div className="absolute inset-0 m-auto flex h-28 w-28 flex-col items-center justify-center gap-1.5 rounded-full border border-[#e4e9eb] bg-white p-4 text-center shadow-[0_8px_30px_rgba(0,117,162,0.18)] transition-transform duration-500 hover:scale-105 sm:h-32 sm:w-32 lg:h-36 lg:w-36">
              <div className="relative h-6 w-20 sm:h-7 sm:w-24">
                <img
                  src={logo}
                  alt="Xntrova"
                  className="absolute inset-0 h-full w-full object-contain"
                />
              </div>

              <span className="text-[9px] font-semibold uppercase tracking-[0.14em] text-[#555]">
                Driven by Results
              </span>
            </div>

            {resultCards.map((card) => {
              const Icon = card.icon;

              return (
                <div
                  key={card.title}
                  className={`${card.position} transition-all duration-500`}
                >
                  <div className="rounded-md border border-[#e4e9eb] bg-white p-3 shadow-[0_1px_2px_rgba(16,24,32,0.04),0_8px_24px_rgba(16,24,32,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-[#0075a2]/30 hover:shadow-[0_4px_10px_rgba(16,24,32,0.06),0_14px_32px_rgba(16,24,32,0.12)]">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0075a2]/10 text-[#0075a2]">
                      <Icon size={15} />
                    </span>

                    <p className="mt-2 text-[11px] font-semibold leading-tight text-black">
                      {card.title}
                    </p>

                    <p className="mt-1 hidden text-[11px] leading-snug text-[#555] sm:block">
                      {card.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="sm:hidden">
            <div className="relative mx-auto h-28 w-28">
              <div className="absolute inset-0 animate-[spin_12s_linear_infinite] rounded-full border border-dashed border-[#0075a2]/20" />

              <div className="absolute inset-0 flex h-28 w-28 flex-col items-center justify-center gap-1.5 rounded-full border border-[#e4e9eb] bg-white p-4 text-center shadow-[0_8px_30px_rgba(0,117,162,0.18)]">
                <img
                  src={logo}
                  alt="Xntrova"
                  className="h-6 w-20 object-contain"
                />

                <span className="text-[9px] font-semibold uppercase tracking-[0.14em] text-[#555]">
                  Driven by Results
                </span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              {resultCards.map((card) => {
                const Icon = card.icon;

                return (
                  <div
                    key={card.title}
                    className="rounded-md border border-[#e4e9eb] bg-white p-3 shadow-[0_1px_2px_rgba(16,24,32,0.04),0_8px_24px_rgba(16,24,32,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[#0075a2]/30 hover:shadow-lg"
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0075a2]/10 text-[#0075a2]">
                      <Icon size={15} />
                    </span>

                    <p className="mt-2 text-[11px] font-semibold leading-tight text-black">
                      {card.title}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mx-auto mt-6 sm:mt-8 sm:max-w-xs">
            <div className="rounded-md border border-[#e4e9eb] bg-white p-4 shadow-[0_1px_2px_rgba(16,24,32,0.04),0_8px_24px_rgba(16,24,32,0.08)]">
              <div className="flex items-center justify-between gap-3">
                <p className="text-[13px] font-semibold text-black">
                  Performance Overview
                </p>

                <span className="inline-flex items-center gap-1 rounded-sm bg-[#0075a2]/10 px-2 py-0.5 text-[10px] font-semibold text-[#0075a2]">
                  <FaArrowTrendUp size={11} />
                  Growing
                </span>
              </div>

              <svg
                viewBox="0 0 120 52"
                className="mt-3 h-14 w-full"
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient
                    id="chartGradient"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop
                      offset="0%"
                      stopColor="#0075a2"
                      stopOpacity="0.25"
                    />

                    <stop
                      offset="100%"
                      stopColor="#0075a2"
                      stopOpacity="0"
                    />
                  </linearGradient>
                </defs>

                <path
                  d="M2 46 C 20 44, 30 34, 42 36 S 62 24, 74 22 S 96 8, 118 6 L118 52 L2 52 Z"
                  fill="url(#chartGradient)"
                />

                <path
                  d="M2 46 C 20 44, 30 34, 42 36 S 62 24, 74 22 S 96 8, 118 6"
                  fill="none"
                  stroke="#0075a2"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />

                <circle
                  cx="118"
                  cy="6"
                  r="2.5"
                  fill="#0075a2"
                />
              </svg>

              <dl className="mt-3 grid grid-cols-3 gap-2 border-t border-[#e4e9eb] pt-3">
                <div>
                  <dt className="text-[10px] text-[#555]">
                    Organic Traffic
                  </dt>

                  <dd className="mt-0.5 text-[13px] font-bold text-black">
                    +250%
                  </dd>
                </div>

                <div>
                  <dt className="text-[10px] text-[#555]">
                    Projects Delivered
                  </dt>

                  <dd className="mt-0.5 text-[13px] font-bold text-black">
                    120+
                  </dd>
                </div>

                <div>
                  <dt className="text-[10px] text-[#555]">
                    Happy Clients
                  </dt>

                  <dd className="mt-0.5 text-[13px] font-bold text-black">
                    500+
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;