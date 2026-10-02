import { useState } from "react";
import { FiPlus } from "react-icons/fi";

const FAQ_ITEMS = [
  {
    title: "Digital Marketing Services in Delhi",
    content:
      "At Xntrova, we offer performance-driven digital marketing services to boost your brand growth and achieve success. Contact us now.",
  },
  {
    title: "SEO Services in Delhi",
    content:
      "Our SEO services are designed to improve search visibility, attract relevant traffic, and help your business reach potential customers organically.",
  },
  {
    title: "PPC Services in Delhi",
    content:
      "We create targeted PPC campaigns focused on reaching the right audience, generating qualified leads, and improving your advertising performance.",
  },
  {
    title: "Website Development Services in Delhi",
    content:
      "Our website development services focus on creating fast, responsive, user-friendly, and conversion-focused websites tailored to your business needs.",
  },
];

export default function BrandGrowth() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex((current) => (current === index ? -1 : index));
  };

  return (
    <section className="mx-auto w-full max-w-[1440px] px-5 py-16 sm:px-8 lg:px-10 max-md:py-[15px]">
      {/* Heading */}
      <div className="mx-auto mb-10 max-w-2xl text-center md:mb-12">
        <h2 className="mb-3 text-2xl font-medium leading-tight text-gray-900 md:text-4xl md:font-bold">
          Boost your brand growth with the Best Digital Marketing Company in
          Delhi
        </h2>

        <p className="text-base font-medium leading-7 text-gray-500">
          We aim at improving your online visibility, so you can reach your
          potential customers and boost conversions.
        </p>
      </div>

      {/* Content */}
      <div className="grid items-center gap-10 lg:grid-cols-2">
        {/* Image */}
        <div className="order-2 lg:order-1">
          <div className="relative h-72 min-h-[320px] overflow-hidden rounded-lg lg:h-full">
            <img
              src="https://res.cloudinary.com/di93stsbz/image/upload/f_auto,q_auto,c_limit,w_1920/v1788347089/cms-sections/psjgenlsy9xktbv8odoj.png"
              alt="Digital marketing services"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Accordion */}
        <div className="order-1 lg:order-2">
          <div className="space-y-3">
            {FAQ_ITEMS.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={item.title}
                  className="overflow-hidden rounded-md border border-gray-200"
                >
                  <h3>
                    <button
                      type="button"
                      onClick={() => toggleFAQ(index)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${index}`}
                      className={`flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-semibold transition-colors duration-200 ${
                        isOpen
                          ? "bg-[#0075a2]/10 text-[#005a7d]"
                          : "bg-white text-gray-900 hover:bg-gray-50"
                      }`}
                    >
                      <span>{item.title}</span>

                      <FiPlus
                        size={18}
                        aria-hidden="true"
                        className={`shrink-0 transition-transform duration-300 ${
                          isOpen ? "rotate-45" : "rotate-0"
                        }`}
                      />
                    </button>
                  </h3>

                  <div
                    id={`faq-panel-${index}`}
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-5 pb-4 text-sm leading-6 text-gray-500">
                        {item.content}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}