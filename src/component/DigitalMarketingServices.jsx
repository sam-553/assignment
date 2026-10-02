
import React from "react";
import { FaArrowRight } from "react-icons/fa";


const services = [
  {
    title: "Search Engine Optimization",
    image:
      "https://res.cloudinary.com/di93stsbz/image/upload/f_auto,q_auto,c_limit,w_1920/v1787209757/xntrova-wp-media/xntrova-wp-media/Rectangle-4486-9-5504a7125cea09c8.png",
    description:
      "Achieve higher visibility and long-term organic growth. Our SEO services in Delhi integrate keyword optimization, on-page and off-page factors, and technical improvements that drive traffic, enhance ranking, and strengthen your brand authority.",
    link: "/search-engine-optimization/",
  },
  {
    title: "Paid Advertising",
    image:
      "https://res.cloudinary.com/di93stsbz/image/upload/f_auto,q_auto,c_limit,w_1920/v1787209759/xntrova-wp-media/xntrova-wp-media/Rectangle-4486-10-6264d1c8ec9d3fac.png",
    description:
      "Accelerate results with targeted advertising across Google, Meta, and other leading platforms. We craft high-performance PPC campaigns that deliver measurable returns by reaching the right audience, at the right time, with the right message.",
    link: "/paid-advertising/",
  },
  {
    title: "Social Media Optimization",
    image:
      "https://res.cloudinary.com/di93stsbz/image/upload/f_auto,q_auto,c_limit,w_1920/v1787209740/xntrova-wp-media/xntrova-wp-media/Rectangle-4486-4-715a3dab082f4239.png",
    description:
      "Optimize your social media presence with our digital marketing company in Delhi. We elevate your social media impact through creative storytelling, influencer collaborations, and analytics-driven strategies, thus building relationships, engagement, and community growth.",
    link: "/social-media-optimization/",
  },
  {
    title: "E-Commerce Marketing",
    image:
      "https://res.cloudinary.com/di93stsbz/image/upload/f_auto,q_auto,c_limit,w_1920/v1787209735/xntrova-wp-media/xntrova-wp-media/Rectangle-4486-2-7ff366e812bb60d4.png",
    description:
      "Boost your online sales with tailored e-commerce marketing strategies. From product optimization and PPC campaigns to remarketing and conversion rate improvement, our digital marketing agency in Delhi helps turn visitors into loyal customers through data-driven performance tactics.",
    link: "/e-commerce-marketing/",
  },
  {
    title: "Content Marketing",
    image:
      "https://res.cloudinary.com/di93stsbz/image/upload/f_auto,q_auto,c_limit,w_1920/v1787209741/xntrova-wp-media/xntrova-wp-media/Rectangle-4486-5-19f726b3c1690da8.png",
    description:
      "Build your brand authority with Xntrova's content marketing services. Our team delivers blogs, articles, infographics, and storytelling campaigns that align with your brand voice and strengthen your digital footprint while improving SEO performance.",
    link: "/content-marketing/",
  },
  {
    title: "Website Development",
    image:
      "https://res.cloudinary.com/di93stsbz/image/upload/f_auto,q_auto,c_limit,w_1920/v1787209762/xntrova-wp-media/xntrova-wp-media/Rectangle-4486-11-c13ae712a8c5d68f.png",
    description:
      "Create a robust digital presence with responsive, SEO-ready websites that deliver performance and aesthetics. Our website design company in Delhi creates sites that are fast, functional, and aligned perfectly with your goals, thus ensuring seamless user experiences.",
    link: "/website-development/",
  },
];

const DigitalMarketingServices = () => {
  return (
    <section className="bg-[#f2f7f9]">
      <div className="mx-auto w-full max-w-[1440px] px-5 py-8 sm:px-8 lg:px-10 max-md:py-[15px]">

        {/* Heading */}
        <div className="mx-auto mb-10 max-w-2xl text-center md:mb-12">
          <h2 className="mb-3 text-[26px] font-medium leading-[1.2] text-black md:text-[34px] md:font-bold">
            Best Digital Marketing Services in Delhi for Sustainable Business
            Growth
          </h2>

          <p className="text-[16px] font-medium leading-[1.7] text-[#555]">
            Being the best creative digital marketing agency in New Delhi, we
            offer solutions that help you unlock long-term growth for your
            business.
          </p>
        </div>

        {/* Cards */}
        <div className="relative">
          <div
            className="
              flex gap-6 overflow-x-auto scroll-smooth
              snap-x snap-mandatory
              [scrollbar-width:none]
              [-ms-overflow-style:none]
              [&::-webkit-scrollbar]:hidden

              lg:grid lg:grid-cols-3
              lg:gap-6 lg:overflow-visible
            "
          >
            {services.map((service) => (
              <div
                key={service.title}
                className="
                  shrink-0 snap-start
                  basis-[82%]
                  sm:basis-[45%]
                  lg:basis-auto
                "
              >
                <div
                  className="
                    flex h-full flex-col gap-3
                    rounded-md border border-[#e4e9eb]
                    bg-white p-6

                    shadow-[0_1px_2px_rgba(16,24,32,0.04),0_8px_24px_rgba(16,24,32,0.06)]

                    transition-shadow duration-300
                    hover:shadow-[0_4px_16px_rgba(16,24,32,0.1)]
                  "
                >
                  {/* Image */}
                  <div className="relative -mx-1 -mt-1 h-80 w-full overflow-hidden rounded-sm">
                    <img
                      src={service.image}
                      alt={service.title}
                      loading="lazy"
                      decoding="async"
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  </div>

                  {/* Title */}
                  <p className="font-semibold text-black">
                    {service.title}
                  </p>

                  {/* Description */}
                  <p className="flex-1 text-[14px] leading-[1.7] text-[#575757]">
                    {service.description}
                  </p>

                  {/* Learn More */}
                  <a
                    href={service.link}
                    className="
                      inline-flex
                      items-center
                      justify-center
                      gap-2
                      self-start
                      rounded-sm
                      border
                      border-transparent
                      px-0
                      py-0
                      font-semibold
                      text-[#0075a2]
                      transition-colors
                      hover:underline

                      focus-visible:outline
                      focus-visible:outline-2
                      focus-visible:outline-offset-2
                      focus-visible:outline-[#0075a2]
                    "
                  >
                    Learn More

                    <span className="sr-only">
                      about {service.title}
                    </span>

                    <FaArrowRight
                      size={16}
                      strokeWidth={2}
                      aria-hidden="true"
                    />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default DigitalMarketingServices;
