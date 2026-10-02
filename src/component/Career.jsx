import { FiChevronRight } from "react-icons/fi";

const Careers = () => {
  return (
    <main className="min-h-screen bg-white font-['Poppins',system-ui,sans-serif] text-[#575757]">
   
      
      {/* Hero */}
      <section className="bg-[#f2f7f9]">
        <div className="mx-auto w-full max-w-[1440px] px-5 py-14 sm:px-8 lg:px-10 lg:py-20">
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="mb-4 flex items-center gap-1 text-xs font-medium text-[#555]"
          >
            <a
              href="/"
              className="transition-colors hover:text-[#0075a2]"
            >
              Home
            </a>

            <FiChevronRight
              size={13}
              className="shrink-0"
              aria-hidden="true"
            />

            <span className="text-black">Careers</span>
          </nav>

          {/* Heading */}
          <h1 className="max-w-3xl text-[clamp(2rem,1.75rem+1.2vw,2.75rem)] font-bold leading-[1.15] text-black">
            Careers at Xntrova
          </h1>

          {/* Description */}
          <p className="mt-4 max-w-2xl text-base leading-[1.7] text-[#575757]">
            Join our team and build meaningful digital experiences. Browse our
            current openings below — applying online only takes a few minutes.
          </p>
        </div>
      </section>

      {/* Careers Content */}
      <section className="mx-auto w-full max-w-[1440px] px-5 py-14 sm:px-8 lg:px-10 lg:py-16">
        <div className="mx-auto max-w-xl rounded-lg border border-dashed border-[#e4e9eb] px-6 py-16 text-center">
          <h2 className="text-[clamp(1.125rem,1.05rem+0.3vw,1.25rem)] font-semibold leading-[1.3] text-black">
            No open positions right now
          </h2>

          <p className="mt-2 text-sm text-[#555]">
            Currently, we don&apos;t have any open positions. Please check back
            soon.
          </p>

          <a
            href="/contact-us/"
            className="mt-4 inline-flex text-sm font-semibold text-[#0075a2] transition hover:underline"
          >
            Get in touch anyway
          </a>
        </div>
      </section>
    </main>
  );
};

export default Careers;