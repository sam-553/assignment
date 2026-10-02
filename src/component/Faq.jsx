import { useState } from "react";
import { FiPlus } from "react-icons/fi";

const FAQ_ITEMS = [
  {
    question: "How long does it take to see results from digital marketing?",
    answer:
      "The timeline depends on the service and your goals. While channels like paid advertising can generate quicker results, strategies such as SEO usually require consistent effort over time.",
  },
  {
    question: "How do you create marketing strategies for businesses?",
    answer:
      "We first understand your business, target audience, competitors, goals, and current online presence. Based on these insights, we create a customised strategy focused on improving visibility, engagement, leads, and conversions.",
  },
  {
    question: "Will I receive regular updates on campaign performance?",
    answer:
      "Yes. We provide regular campaign updates and performance insights so you can understand what is working, what needs improvement, and how your marketing investment is performing.",
  },
  {
    question: "Which digital marketing service is right for my business?",
    answer:
      "It depends on your business goals, target audience, industry, and current online presence. We can recommend a combination of SEO, PPC, social media marketing, content marketing, and other services based on your specific requirements.",
  },
  {
    question: "What makes Xntrova different from other agencies?",
    answer:
      "Xntrova focuses on customised strategies, transparent communication, creative execution, and measurable business outcomes. Our approach is designed around each client's specific goals rather than using a one-size-fits-all solution.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex((current) => (current === index ? -1 : index));
  };

  return (
    <section className="mx-auto w-full max-w-[1440px] px-5 py-16 sm:px-8 lg:px-10 max-md:py-[15px]">
      {/* Heading */}
      <div className="mx-auto mb-10 max-w-2xl text-center md:mb-12">
        <h2 className="mb-3 text-2xl font-medium leading-tight text-gray-900 md:text-4xl md:font-bold">
          Frequently Asked Questions
        </h2>

        <p className="text-base font-medium leading-7 text-gray-500">
          Resolve your general queries and concerns with our FAQ section below.
        </p>
      </div>

      {/* FAQ */}
      <div className="mx-auto max-w-3xl">
        <div className="space-y-3">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={item.question}
                className="overflow-hidden rounded-md border border-gray-200 bg-white"
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
                        : "text-gray-900 hover:bg-gray-50"
                    }`}
                  >
                    <span>{item.question}</span>

                    <FiPlus
                      size={18}
                      className={`shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-45" : "rotate-0"
                      }`}
                      aria-hidden="true"
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
                    <div className="px-5 pb-4 text-sm leading-7 text-gray-500">
                      {item.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}