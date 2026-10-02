
import React from "react";
import { Link, useLocation } from "react-router-dom";

const ThankYou = () => {
  const location = useLocation();

  const formData = location.state?.formData;

  return (
    <main className="min-h-screen bg-gray-50">
   
      <section className="relative overflow-hidden bg-[#001720] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(0,117,162,0.25),transparent_55%)]" />

        <div className="relative z-10 mx-auto flex min-h-[55vh] w-full max-w-[900px] items-center justify-center px-5 py-16 text-center sm:px-8">
          <div className="w-full">

            {/* Icon */}
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#0075a2]/20">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#0075a2] text-3xl">
                ✓
              </div>
            </div>

            {/* Heading */}
            <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
              🎉 Thank You
              {formData?.name ? `, ${formData.name}` : ""}!
            </h1>

       
            <p className="mx-auto mb-3 max-w-2xl text-lg leading-8 text-white/80">
              Your request has been submitted successfully.
            </p>

            <p className="mx-auto mb-8 max-w-xl text-sm leading-7 text-white/60">
              Our team has received your details and will get back to you
              shortly.
            </p>

          
            {formData && (
              <div className="mx-auto mb-8 max-w-lg rounded-lg border border-white/10 bg-white/5 p-5 text-left backdrop-blur-sm">
                <h2 className="mb-4 text-lg font-semibold text-white">
                  Your Request
                </h2>

                <div className="space-y-3 text-sm">
                  {formData.email && (
                    <div className="flex justify-between gap-4 border-b border-white/10 pb-3">
                      <span className="text-white/50">Email</span>
                      <span className="text-right text-white">
                        {formData.email}
                      </span>
                    </div>
                  )}

                  {formData.phone && (
                    <div className="flex justify-between gap-4 border-b border-white/10 pb-3">
                      <span className="text-white/50">Phone</span>
                      <span className="text-right text-white">
                        {formData.phone}
                      </span>
                    </div>
                  )}

                  {formData.company && (
                    <div className="flex justify-between gap-4 border-b border-white/10 pb-3">
                      <span className="text-white/50">Company</span>
                      <span className="text-right text-white">
                        {formData.company}
                      </span>
                    </div>
                  )}

                  {formData.service && (
                    <div className="flex justify-between gap-4">
                      <span className="text-white/50">Service</span>
                      <span className="text-right text-white">
                        {formData.service}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            )}

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/"
                className="inline-flex items-center justify-center rounded-sm border border-[#0075a2] bg-[#0075a2] px-7 py-3.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              >
                Back to Home
              </Link>

              <Link
                to="/contact-us"
                className="inline-flex items-center justify-center rounded-sm border border-white/30 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/20"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      
      <section className="bg-white px-5 py-14 text-center sm:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="mb-3 text-2xl font-bold text-[#001720]">
            We’re excited to hear about your business!
          </h2>

          <p className="text-gray-600">
            Our digital marketing team will review your requirements and
            contact you as soon as possible.
          </p>
        </div>
      </section>
    </main>
  );
};

export default ThankYou;

