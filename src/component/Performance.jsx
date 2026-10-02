
import React from "react";

const Performance = () => {
  const image =
    "https://res.cloudinary.com/di93stsbz/image/upload/f_auto,q_auto,c_limit,w_1920/v1788347124/cms-sections/siylbkawzw1vcw8efyhi.png";

  return (
    <section className="mx-auto w-full max-w-[1440px] px-5 py-10 sm:px-8 lg:px-10 lg:py-20">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div className="h-full lg:order-1">
          <div className="relative h-72 w-full overflow-hidden rounded-lg lg:h-96">
            <img
              src={image}
              alt="Reviewing campaign performance and results"
              loading="lazy"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>

        <div className="lg:order-2">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold leading-tight text-black sm:text-4xl lg:text-[40px]">
              Turning Potential Into Performance
            </h2>

            <p className="mt-5 text-[16px] leading-7 text-[#575757]">
              Every brand has potential, but potential alone cannot drive
              growth. At Xntrova, we transform ideas into actions and
              strategies into measurable results. However, it is not our aim
              that makes us the best digital marketing company in Delhi NCR,
              but our approach.
            </p>

            <p className="mt-4 text-[16px] leading-7 text-[#575757]">
              Moreover, we use a strategic approach that combines creativity
              with data. Through this, we ensure that every campaign, piece of
              content, and marketing effort serves a clear purpose. This is one
              of the key reasons that makes us the top digital marketing agency
              in Dwarka. In addition to this, we do not rely on guesswork and
              believe in complete transparency, collaboration, and continuous
              improvement.
            </p>

            <p className="mt-4 text-[16px] leading-7 text-[#575757]">
              Therefore, whether your aim is to increase your business
              visibility, generate quality leads, or strengthen your digital
              presence, the best digital marketing agency in Delhi, Xntrova,
              will ensure that. We are committed to delivering real results and
              making every effort count.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Performance;

