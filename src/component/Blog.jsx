import { useMemo, useState } from "react";
import {
  FiArrowRight,
  FiCalendar,
  FiChevronRight,
  FiClock,
  FiSearch,
} from "react-icons/fi";

const blogs = [
  {
    title: "What Is Performance Marketing?",
    category: "Blog",
    date: "",
    readTime: "10 min read",
    image:
      "https://res.cloudinary.com/di93stsbz/image/upload/f_auto,q_auto,c_limit,w_1920/v1788874353/cms-blogs/x7lgvwkqyrlcqnworwsk.png",
    slug: "/blog/what-is-performance-marketing/",
  },
  {
    title: "Difference Between SEO and SEM : Which Strategy is The Best?",
    category: "Blog",
    date: "08/03/2026",
    readTime: "5 min",
    image:
      "https://res.cloudinary.com/di93stsbz/image/upload/f_auto,q_auto,c_limit,w_1920/v1787209460/xntrova-wp-media/xntrova-wp-media/SEO-and-SEM-9ce9449129ad742c.jpg",
    slug: "/blog/difference-between-seo-and-sem/",
  },
  {
    title: "Latest Social Media Trends of 2026 You Can’t Ignore",
    category: "Social Media",
    date: "07/25/2026",
    readTime: "5 min",
    image:
      "https://res.cloudinary.com/di93stsbz/image/upload/f_auto,q_auto,c_limit,w_1920/v1787209466/xntrova-wp-media/xntrova-wp-media/Latest-Social-Media-Trends-b323f566143ff490.jpg",
    slug: "/blog/latest-social-media-trends/",
  },
  {
    title: "Top Advantages of Social Media Advertising in 2026",
    category: "Social Media",
    date: "06/26/2026",
    readTime: "5 min",
    image:
      "https://res.cloudinary.com/di93stsbz/image/upload/f_auto,q_auto,c_limit,w_1920/v1787209473/xntrova-wp-media/xntrova-wp-media/advantages-of-social-media-advertising-in-2026-a1103baa5cef82ab.webp",
    slug: "/blog/advantages-of-social-media-advertising/",
  },
  {
    title: "Top Benefits of Online Reputation Management for Businesses",
    category: "ORM",
    date: "06/23/2026",
    readTime: "5 min",
    image:
      "https://res.cloudinary.com/di93stsbz/image/upload/f_auto,q_auto,c_limit,w_1920/v1787209476/xntrova-wp-media/xntrova-wp-media/top-benefits-of-online-reputation-management-for-businesses-ea142487758235bf.webp",
    slug: "/blog/benefits-of-online-reputation-management/",
  },
  {
    title: "How to Delete Google Review: The Best Methods of 2026",
    category: "SEO",
    date: "06/17/2026",
    readTime: "5 min",
    image:
      "https://res.cloudinary.com/di93stsbz/image/upload/f_auto,q_auto,c_limit,w_1920/v1787209479/xntrova-wp-media/xntrova-wp-media/how-to-delete-google-review-the-best-methods-of-2026-f7b6ae2f5d302846.webp",
    slug: "/blog/how-to-delete-google-review/",
  },
  {
    title: "Best Time to Upload Reels on Instagram In India to Go Viral",
    category: "Social Media",
    date: "06/16/2026",
    readTime: "5 min",
    image:
      "https://res.cloudinary.com/di93stsbz/image/upload/f_auto,q_auto,c_limit,w_1920/v1787209484/xntrova-wp-media/xntrova-wp-media/best-time-to-upload-reels-on-instagram-in-india-to-go-viral-06d392ab32b468a5.webp",
    slug: "/blog/best-time-to-upload-reels-on-instagram-in-india/",
  },
  {
    title: "Predictive SEO: The Key to Long-Term Search Success",
    category: "SEO",
    date: "06/11/2026",
    readTime: "5 min",
    image:
      "https://res.cloudinary.com/di93stsbz/image/upload/f_auto,q_auto,c_limit,w_1920/v1787209487/xntrova-wp-media/xntrova-wp-media/predictive-seo-the-key-to-long-term-search-success-53081fea48afd004.webp",
    slug: "/blog/predictive-seo-the-key-to-long-term-search-success/",
  },
  {
    title: "Complete Guide to Optimize Google My Business For More Leads",
    category: "SEO",
    date: "06/03/2026",
    readTime: "5 min",
    image:
      "https://res.cloudinary.com/di93stsbz/image/upload/f_auto,q_auto,c_limit,w_1920/v1787209491/xntrova-wp-media/xntrova-wp-media/complete-guide-to-optimize-google-my-business-for-more-leads-ac81221e47f11f45.webp",
    slug: "/blog/optimize-google-my-business/",
  },
];

const BlogCard = ({ blog, index }) => {
  return (
    <a
      href={blog.slug}
      className="group block overflow-hidden rounded-[20px] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0075a2] focus-visible:ring-offset-2"
      style={{
        animationDelay: `${index * 55}ms`,
      }}
    >
      <article className="overflow-hidden rounded-[20px] border border-[#e4e9eb] bg-white shadow-[0_8px_30px_rgba(0,23,32,0.04)] transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_16px_40px_rgba(0,23,32,0.09)]">
        <div className="relative h-[200px] w-full overflow-hidden">
          <img
            src={blog.image}
            alt={blog.title}
            loading={index === 0 ? "eager" : "lazy"}
            className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
          />

          <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent" />
        </div>

        <div className="p-5">
          <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-[#0075a2]">
            {blog.category}
          </span>

          <h2 className="mt-2 line-clamp-2 text-base font-semibold leading-snug tracking-tight text-black">
            {blog.title}
          </h2>

          <div className="mt-4 flex items-center gap-4 text-xs tabular-nums text-[#555] opacity-70">
            {blog.date && (
              <span className="flex items-center gap-1.5">
                <FiCalendar size={11} />
                {blog.date}
              </span>
            )}

            <span className="flex items-center gap-1.5">
              <FiClock size={11} />
              {blog.readTime}
            </span>
          </div>

          <div className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#0075a2] opacity-75 transition-opacity group-hover:opacity-100">
            Read Article

            <FiArrowRight
              size={13}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </div>
        </div>
      </article>
    </a>
  );
};

const Blog = () => {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const articlesPerPage = 6;

  const filteredBlogs = useMemo(() => {
    const value = search.toLowerCase().trim();

    if (!value) {
      return blogs;
    }

    return blogs.filter(
      (blog) =>
        blog.title.toLowerCase().includes(value) ||
        blog.category.toLowerCase().includes(value)
    );
  }, [search]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredBlogs.length / articlesPerPage)
  );

  const currentPage = Math.min(page, totalPages);

  const paginatedBlogs = useMemo(() => {
    const startIndex = (currentPage - 1) * articlesPerPage;

    return filteredBlogs.slice(
      startIndex,
      startIndex + articlesPerPage
    );
  }, [filteredBlogs, currentPage]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
    setPage(1);
  };

  const handlePageChange = (number) => {
    setPage(number);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <main className="min-h-screen bg-white font-['Poppins',system-ui,sans-serif] text-[#575757]">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#f2f7f9] pb-6 pt-8 md:pb-10 md:pt-12">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,117,162,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,117,162,0.05) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-32 -top-32 h-[560px] w-[560px] rounded-full opacity-35"
          style={{
            background:
              "radial-gradient(circle, rgba(0,117,162,0.16), transparent 70%)",
          }}
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 top-8 h-[400px] w-[400px] rounded-full opacity-20"
          style={{
            background:
              "radial-gradient(circle, rgba(250,174,57,0.14), transparent 70%)",
          }}
        />

        <div className="relative mx-auto w-full max-w-[1440px] px-5 text-center sm:px-8 lg:px-10">
          <div className="animate-fade-up">
            <span className="mb-6 inline-flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#555]">
              <span className="h-px w-6 bg-[#555]" />

              Insights &amp; Ideas

              <span className="h-px w-6 bg-[#555]" />
            </span>
          </div>

          <h1 className="mx-auto max-w-[640px] text-[2rem] font-medium leading-[1.1] tracking-tighter text-black md:text-[3rem] lg:text-[3.5rem]">
            The Xntrova Blog
          </h1>

          <p className="mx-auto mt-5 max-w-[480px] text-base leading-[1.75] text-[#555]">
            Tips, trends, and insights from Xntrova&apos;s digital marketing
            experts.
          </p>
        </div>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-white"
        />
      </section>

      {/* Breadcrumb */}
      <div className="mx-auto w-full max-w-[1440px] px-5 pt-6 sm:px-8 lg:px-10">
        <nav
          aria-label="Breadcrumb"
          className="flex flex-wrap items-center gap-2 text-xs font-medium"
        >
          <a
            href="/"
            className="text-[#555] transition hover:text-[#0075a2]"
          >
            Home
          </a>

          <FiChevronRight
            size={12}
            className="text-[#e4e9eb]"
          />

          <span className="text-black">Blog</span>
        </nav>
      </div>

      {/* Search */}
      <section className="w-full px-5 pt-8 sm:px-8 lg:px-10">
        <div className="mx-auto w-full max-w-[640px]">
          <div className="flex items-center gap-3 rounded-full border border-[#e4e9eb] bg-white px-5 py-3.5 shadow-sm transition focus-within:border-[#0075a2] focus-within:ring-1 focus-within:ring-[#0075a2]/20">
            <FiSearch
              size={15}
              className="shrink-0 text-[#555]"
            />

            <input
              type="text"
              value={search}
              onChange={handleSearch}
              placeholder="Search articles..."
              className="w-full bg-transparent text-sm text-black outline-none placeholder:text-[#999]"
            />
          </div>
        </div>
      </section>

      {/* Blog List */}
      <section className="mx-auto w-full max-w-[1440px] px-5 pt-10 sm:px-8 md:pt-12 lg:px-10">
        <div className="mb-8 text-xs font-medium tabular-nums text-[#555]">
          {filteredBlogs.length > 0
            ? `${filteredBlogs.length} ${
                filteredBlogs.length === 1
                  ? "article"
                  : "articles"
              } found`
            : "No articles found"}
        </div>

        {filteredBlogs.length > 0 ? (
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {paginatedBlogs.map((blog, index) => (
              <BlogCard
                key={blog.slug}
                blog={blog}
                index={index}
              />
            ))}
          </div>
        ) : (
          <div className="rounded-[20px] border border-[#e4e9eb] bg-[#f2f7f9] px-6 py-16 text-center">
            <FiSearch
              size={30}
              className="mx-auto mb-4 text-[#0075a2]"
            />

            <h2 className="text-lg font-semibold text-black">
              No articles found
            </h2>

            <p className="mt-2 text-sm text-[#555]">
              Try searching with a different keyword.
            </p>
          </div>
        )}

        {/* Pagination */}
        {filteredBlogs.length > articlesPerPage && (
          <div className="mt-12 flex flex-wrap items-center justify-center gap-2 pb-12">
            <button
              type="button"
              disabled={currentPage === 1}
              onClick={() =>
                handlePageChange(
                  Math.max(1, currentPage - 1)
                )
              }
              className="inline-flex items-center justify-center rounded-full border border-[#e4e9eb] bg-white px-5 py-2.5 text-sm font-semibold text-[#555] transition hover:-translate-y-px disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:translate-y-0"
            >
              Previous
            </button>

            <div className="flex flex-wrap items-center gap-1.5">
              {Array.from(
                { length: totalPages },
                (_, index) => index + 1
              ).map((number) => (
                <button
                  key={number}
                  type="button"
                  onClick={() =>
                    handlePageChange(number)
                  }
                  className={`flex h-9 min-w-9 items-center justify-center rounded-full px-3 text-sm font-semibold transition hover:-translate-y-px ${
                    currentPage === number
                      ? "bg-[#0075a2] text-white shadow-[0_4px_14px_rgba(0,117,162,0.35)]"
                      : "border border-[#e4e9eb] bg-white text-[#555]"
                  }`}
                >
                  {number}
                </button>
              ))}
            </div>

            <button
              type="button"
              disabled={currentPage === totalPages}
              onClick={() =>
                handlePageChange(
                  Math.min(
                    totalPages,
                    currentPage + 1
                  )
                )
              }
              className="inline-flex items-center justify-center rounded-full border border-[#e4e9eb] bg-white px-5 py-2.5 text-sm font-semibold text-[#555] transition hover:-translate-y-px disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:translate-y-0"
            >
              Next
            </button>
          </div>
        )}
      </section>
    </main>
  );
};

export default Blog;