import React, { useState } from "react";

const Hero = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form Data:", formData);
  };

  return (
    <section className="relative overflow-hidden bg-[#001F2B] text-white lg:flex lg:min-h-[min(58vh,620px)] lg:items-center">
   
      <div className="absolute inset-0">
        <img
          src="https://res.cloudinary.com/di93stsbz/image/upload/f_auto,q_auto,c_limit,w_1920/v1788261844/cms-sections/boqim5njgmm9pfzyo8ne.jpg"
          alt=""
          fetchPriority="high"
          loading="eager"
          className="h-full w-full object-cover"
        />
      </div>

     
      <div className="absolute inset-0 bg-gradient-to-br from-[#001320]/72 via-[#012A3A]/50 to-[#01415A]/26" />

  
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_18%_45%,rgba(0,15,26,0.55),transparent_70%)]" />

     
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_60%,rgba(0,139,185,0.20),transparent_45%)]" />

      
      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-5 py-10 sm:px-8 sm:py-12 lg:px-10 lg:py-8">
        <div className="grid w-full grid-cols-1 items-center gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
          
          <div className="max-w-2xl">
            <h1 className="mb-3 text-[35px]/[1.15] font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Scale Your Business With The Best Digital Marketing Agency in
              Delhi
            </h1>

           
            <svg
              width="120"
              height="10"
              viewBox="0 0 120 10"
              fill="none"
              aria-hidden="true"
              className="mb-5 text-[#faae39]"
            >
              <path
                d="M2 7C24 2 96 2 118 7"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>

            <p className="mb-6 hidden max-w-xl text-lg leading-8 text-white/90 md:block">
              Unlock your business potential and connect with your targeted
              customers by partnering with Xntrova, the best digital marketing
              agency in Delhi.
            </p>

           
            <div className="hidden flex-wrap gap-3 md:flex">
              <a
                href="/contact-us/"
                className="inline-flex items-center justify-center gap-2 rounded-sm border border-[#0075a2] bg-[#0075a2] px-7 py-3.5 font-semibold text-white transition-opacity hover:opacity-90"
              >
                Get Free Digital Audit
              </a>
            </div>
          </div>

        
          <div
            id="quote"
            className="w-full max-w-md justify-self-center rounded-lg border border-gray-200 bg-white/95 p-6 text-gray-900 shadow-[0_20px_50px_rgba(0,19,32,0.35)] backdrop-blur-sm lg:justify-self-end"
          >
            <p className="mb-1 text-2xl font-bold text-gray-900">
              Get a Free Digital Audit
            </p>

            <p className="mb-3 text-sm text-gray-600">
              Tell us about your business and we’ll get back to you shortly.
            </p>

            <form onSubmit={handleSubmit} className="space-y-3">
           
              <input
                type="text"
                tabIndex="-1"
                autoComplete="off"
                name="website_url"
                className="hidden"
                aria-hidden="true"
              />

            
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name*"
                  aria-label="Your name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full rounded-sm border border-gray-200 px-4 py-2.5 text-sm text-gray-900 outline-none transition-shadow placeholder:text-gray-500 focus:ring-2 focus:ring-[#0075a2]"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="you@company.com*"
                  aria-label="Your email address"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-sm border border-gray-200 px-4 py-2.5 text-sm text-gray-900 outline-none transition-shadow placeholder:text-gray-500 focus:ring-2 focus:ring-[#0075a2]"
                />
              </div>

             
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <input
                  type="tel"
                  name="phone"
                  placeholder="+91 98765 43210"
                  aria-label="Your phone number"
                  pattern="^\+?[0-9]{10,15}$"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full rounded-sm border border-gray-200 px-4 py-2.5 text-sm text-gray-900 outline-none transition-shadow placeholder:text-gray-500 focus:ring-2 focus:ring-[#0075a2]"
                />

                <input
                  type="text"
                  name="company"
                  placeholder="Company Name"
                  aria-label="Your company name"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full rounded-sm border border-gray-200 px-4 py-2.5 text-sm text-gray-900 outline-none transition-shadow placeholder:text-gray-500 focus:ring-2 focus:ring-[#0075a2]"
                />
              </div>

            
              <select
                name="service"
                aria-label="Which service are you interested in"
                value={formData.service}
                onChange={handleChange}
                className="w-full rounded-sm border border-gray-200 px-4 py-2.5 text-sm text-gray-900 outline-none transition-shadow focus:ring-2 focus:ring-[#0075a2]"
              >
                <option value="" disabled>
                  Which service are you interested in?
                </option>

                <option value="SEO (Search Engine Optimisation)">
                  SEO (Search Engine Optimisation)
                </option>

                <option value="PPC (Pay-Per-Click)">
                  PPC (Pay-Per-Click)
                </option>

                <option value="Social Media Marketing">
                  Social Media Marketing
                </option>

                <option value="E-Commerce Marketing">
                  E-Commerce Marketing
                </option>

                <option value="Content Marketing">
                  Content Marketing
                </option>

                <option value="Web Development">
                  Web Development
                </option>

                <option value="Email Marketing">
                  Email Marketing
                </option>

                <option value="Performance Marketing">
                  Performance Marketing
                </option>

                <option value="Other">Other</option>
              </select>

        
              <textarea
                name="message"
                rows="2"
                placeholder="Tell us about your business goals"
                aria-label="Tell us about your business goals"
                value={formData.message}
                onChange={handleChange}
                className="w-full resize-none rounded-sm border border-gray-200 px-4 py-2.5 text-sm text-gray-900 outline-none transition-shadow placeholder:text-gray-500 focus:ring-2 focus:ring-[#0075a2]"
              />

              
              <button
                type="submit"
                className="w-full rounded-sm bg-gradient-to-r from-[#001720] to-[#0075a2] px-6 py-3 font-semibold text-white transition-opacity hover:opacity-90"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

    
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#001F2B]/30 to-transparent" />
    </section>
  );
};

export default Hero;