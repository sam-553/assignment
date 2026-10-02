import { useRef } from "react";
import { FaStar } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const TESTIMONIALS = [
  {
    name: "Amit Verma",
    role: "Founder",
    color: "#faae39",
    quote:
      "What impressed us most about Xntrova was their strategic mindset. Unlike other digital marketing agencies in Delhi, Xntrova didn’t give us a one-size-fits-all solution; instead, they created customised strategies for our business. Their proactive communication and data-driven approach gave us confidence in every decision we made together.",
  },
  {
    name: "Neha Kapoor",
    role: "Director",
    color: "#005a7d",
    quote:
      "Xntrova is truly the best digital marketing agency in Delhi. Their team brought fresh ideas and clear directions for our business. They listened to all of our concerns and created their strategies accordingly, and the results they delivered were beyond expectations.",
  },
  {
    name: "Rahul Sharma",
    role: "CEO",
    color: "#0075a2",
    quote:
      "What sets Xntrova apart is the way they combine expertise with a human touch. They celebrate your wins, tackle challenges alongside you, and remain focused on creating long-term value. It’s the kind of partnership every growing business hopes to find.",
  },
  {
    name: "Ankit Gupta",
    role: "Founder",
    color: "#0a4257",
    quote:
      "What started as a simple project quickly turned into a long-term partnership. The team of Xntrova was approachable, proactive, and always willing to explore new ideas. Their dedication and attention to detail gave us confidence that our brand was in the right hands.",
  },
  {
    name: "Priya",
    role: "CEO",
    color: "#faae39",
    quote:
      "Xntrova combines creativity with practicality in a way that’s hard to find. Every recommendation had a purpose, and every conversation left us with greater confidence in our direction. They don’t just deliver services; instead, they bring real value to the table.",
  },
  {
    name: "Rohan Mehta",
    role: "Co-Founder",
    color: "#0075a2",
    quote:
      "The Xntrova team understood our business goals from day one and built a clear digital strategy around them. Their regular updates, creative execution, and attention to performance made the entire process smooth and effective.",
  },
  {
    name: "Sneha Malhotra",
    role: "Marketing Head",
    color: "#faae39",
    quote:
      "Working with Xntrova has been a great experience. They combine creativity, strategy, and analytics to deliver meaningful results. Their team is responsive, professional, and genuinely invested in helping our business grow.",
  },
  {
    name: "Vikas Arora",
    role: "Business Owner",
    color: "#005a7d",
    quote:
      "Xntrova helped us improve our online presence with a strategy that was specifically designed for our brand. The team was transparent throughout the project and always explained the reasoning behind their recommendations.",
  },
  {
    name: "Karan Bhatia",
    role: "Managing Director",
    color: "#0a4257",
    quote:
      "From strategy to execution, the Xntrova team maintained a high level of professionalism. Their ideas were practical, their communication was excellent, and their focus on measurable growth made them a valuable partner for our business.",
  },
  {
    name: "Pooja Sharma",
    role: "Founder",
    color: "#0075a2",
    quote:
      "We were looking for a digital marketing partner who could understand our vision and turn it into action. Xntrova exceeded our expectations with their customised approach, creative campaigns, and consistent support.",
  },
];
function TestimonialCard({
  name,
  role,
  color,
  quote,
  rating = 5,
}) {
  return (
    <div className="snap-start shrink-0 w-[82%] sm:w-[48%] lg:w-[calc(25%-18px)]">
      <figure className="h-full min-h-[270px] rounded-lg border border-gray-200 bg-white p-5 flex flex-col gap-3 shadow-[0_1px_2px_rgba(16,24,40,0.04),0_8px_24px_rgba(16,24,40,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(16,24,40,0.10)]">
        <figcaption className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3 min-w-0">
            <span
              aria-hidden="true"
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-semibold text-white"
              style={{ backgroundColor: color }}
            >
              {name.charAt(0)}
            </span>

            <p className="truncate text-sm font-semibold leading-tight text-gray-900">
              {name}, {role}
            </p>
          </div>

          <FcGoogle
            size={18}
            className="mt-0.5 shrink-0"
            title="Google review"
            aria-label="Google review"
          />
        </figcaption>

        <div
          className="flex items-center gap-1 text-[#faae39]"
          role="img"
          aria-label={`${rating} out of 5 stars`}
        >
          {Array.from({ length: rating }, (_, index) => (
            <FaStar
              key={index}
              size={13}
              aria-hidden="true"
            />
          ))}
        </div>

        <blockquote className="flex-1 text-sm leading-6 text-gray-600 line-clamp-5">
          “{quote}”
        </blockquote>
      </figure>
    </div>
  );
}

export default function Testimonials({
  items = TESTIMONIALS,
}) {
  const trackRef = useRef(null);

  const scrollByCard = (direction) => {
    const container = trackRef.current;

    if (!container) return;

    const card = container.firstElementChild;

    if (!card) return;

    const cardWidth = card.getBoundingClientRect().width;
    const scrollAmount = cardWidth + 24;

    const maxScroll =
      container.scrollWidth - container.clientWidth;

    const isAtStart = container.scrollLeft <= 5;
    const isAtEnd =
      container.scrollLeft >= maxScroll - 5;

    if (direction > 0) {
      if (isAtEnd) {
        container.scrollTo({
          left: 0,
          behavior: "smooth",
        });
      } else {
        container.scrollBy({
          left: scrollAmount,
          behavior: "smooth",
        });
      }
    } else {
      if (isAtStart) {
        container.scrollTo({
          left: maxScroll,
          behavior: "smooth",
        });
      } else {
        container.scrollBy({
          left: -scrollAmount,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <section
      className="w-full bg-white py-16 max-md:py-10 overflow-hidden"
      aria-labelledby="testimonials-title"
    >
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-10">
        <div className="mx-auto mb-10 max-w-2xl text-center md:mb-12">
          <h2
            id="testimonials-title"
            className="text-2xl font-medium leading-tight text-gray-900 sm:text-3xl md:text-4xl md:font-bold"
          >
            Words from Our Valued Clients
          </h2>

          <p className="mt-3 text-sm leading-6 text-gray-500 sm:text-base">
            See what our clients have to say about working with Xntrova.
          </p>
        </div>

        <div className="relative">
          <button
            type="button"
            aria-label="Previous testimonials"
            onClick={() => scrollByCard(-1)}
            className="absolute left-0 top-1/2 z-10 hidden h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-800 shadow-[0_2px_8px_rgba(16,24,40,0.08)] transition-all duration-200 hover:bg-gray-50 hover:text-[#0075a2] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#0075a2] sm:flex"
          >
            <FiChevronLeft size={20} aria-hidden="true" />
          </button>

          <div
            ref={trackRef}
            className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
            {items.map((testimonial, index) => (
              <TestimonialCard
                key={`${testimonial.name}-${index}`}
                {...testimonial}
              />
            ))}
          </div>

          <button
            type="button"
            aria-label="Next testimonials"
            onClick={() => scrollByCard(1)}
            className="absolute right-0 top-1/2 z-10 hidden h-10 w-10 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-800 shadow-[0_2px_8px_rgba(16,24,40,0.08)] transition-all duration-200 hover:bg-gray-50 hover:text-[#0075a2] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#0075a2] sm:flex"
          >
            <FiChevronRight size={20} aria-hidden="true" />
          </button>
        </div>

        <div className="mt-5 flex justify-center sm:hidden">
          <div className="flex items-center gap-2 text-xs text-gray-400">
            <FiChevronLeft size={14} />
            <span>Swipe to see more reviews</span>
            <FiChevronRight size={14} />
          </div>
        </div>
      </div>
    </section>
  );
}