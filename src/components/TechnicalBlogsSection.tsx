import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import blog1 from "./Blogs/blog1.html?raw";
import blog1Image from "../assets/team/blog1.png";

interface Blog {
  id: number;
  title: string;
  slug: string;
  image: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  content: string;
}

const TechnicalBlogsSection: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.overflow = selectedBlog ? "hidden" : "auto";
  }, [selectedBlog]);

  const technicalBlogs: Blog[] = [
    {
      id: 1,
      title: "The Art of Choosing the Right Tech for Your Startup",
      slug: "the-art-of-choosing-the-right-tech-for-your-startup",
      image: blog1Image,
      excerpt:
        "A practical guide for startup founders on how to choose the right technology stack — focusing on validation, speed, and business goals instead of hype.",
      category: "Startup Tech",
      readTime: "8 min read",
      date: "2025-10-24",
      content: blog1,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="mt-32 mb-16 md:mt-40 md:mb-24"
      ref={scrollRef}
    >
      {/* Heading */}
      <div className="text-center mb-16">
        <h3 className="text-4xl md:text-6xl font-bold mb-6 text-white">
          Technical Blogs
        </h3>
        <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
          Insights, tutorials, and deep dives into the latest technologies and
          development practices from our engineering team.
        </p>
      </div>

      {/* Featured Blog */}
      <div
        className="group rounded-2xl overflow-hidden border border-white/10 bg-black hover:border-blue-500/30 transition-all duration-500 cursor-pointer"
        onClick={() =>
          navigate(`/blog/${technicalBlogs[0].slug}`) // ✅ Navigate using slug
        }
      >
        <div className="grid lg:grid-cols-2 items-stretch h-[300px] sm:h-[340px] lg:h-[380px]">
          {/* Left Image */}
          <div className="relative overflow-hidden">
            <img
              src={technicalBlogs[0].image}
              alt={technicalBlogs[0].title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          {/* Right Content */}
          <div className="p-8 md:p-12 flex flex-col justify-center bg-gradient-to-b from-black/90 via-black/70 to-black">
            {/* FEATURED pill + read time */}
            <div className="flex items-center gap-4 mb-3">
              <span
                className="
                  inline-flex items-center rounded-full
                  bg-[#0d2346] px-3 py-1
                  text-[13px] font-semibold tracking-wide
                "
              >
                <span className="text-[#c9d6f0] uppercase">FEATURED</span>
                <span className="mx-1 text-[#6ea8ff]">•</span>
                <span className="text-[#6ea8ff] underline underline-offset-2">
                  {technicalBlogs[0].category}
                </span>
              </span>

              <span className="text-sm text-[#e8dcb8]">
                {technicalBlogs[0].readTime}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-2xl md:text-4xl font-extrabold mb-3 leading-tight text-white">
              {technicalBlogs[0].title}
            </h3>

            {/* Excerpt */}
            <p className="text-gray-400 text-base md:text-lg mb-6 leading-relaxed">
              {technicalBlogs[0].excerpt}
            </p>

            {/* Date + CTA */}
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">
                {technicalBlogs[0].date}
              </span>

              <motion.button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  navigate(`/blog/${technicalBlogs[0].slug}`); // ✅ Use slug here too
                }}
                className="text-[#4095ff] hover:text-[#63a8ff] font-semibold text-[17px] flex items-center gap-1 cursor-pointer select-none"
                whileHover={{ x: 5 }}
              >
                <span>Read Full Article</span>
                <span>→</span>
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TechnicalBlogsSection;
