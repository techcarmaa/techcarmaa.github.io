import { useParams, useNavigate } from "react-router-dom"; 
import blog1 from "../components/Blogs/blog1.html?raw";

interface Blog {
  id: string;
  slug: string;
  title: string;
  date: string;
  readTime: string;
  category: string;
  content: string;
}

const BlogPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const blogs: Blog[] = [
    {
      id: "1",
      slug: "the-art-of-choosing-the-right-tech-for-your-startup",
      title: "The Art of Choosing the Right Tech for Your Startup",
      date: "2025-10-24",
      readTime: "8 min read",
      category: "Startup Tech",
      content: blog1,
    },
  ];

  const blog = blogs.find((b) => b.slug === slug);

  if (!blog)
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        Blog not found.
      </div>
    );

  return (
    <div className="min-h-screen p-6 md:p-10 lg:p-20 bg-black text-gray-100">
      <button
        onClick={() => navigate(-1)}
        className="mb-8 text-[#4095ff] hover:text-[#63a8ff] transition"
      >
        ← Back
      </button>

      <h1 className="text-4xl md:text-6xl font-bold mb-4">{blog.title}</h1>
      <div className="text-sm text-gray-400 mb-8">
        {blog.category} • {blog.readTime} • {blog.date}
      </div>

      <div
        className="prose prose-invert max-w-4xl mx-auto prose-headings:text-white prose-p:text-gray-300 prose-a:text-blue-400 prose-a:no-underline hover:prose-a:underline"
        dangerouslySetInnerHTML={{ __html: blog.content }}
      />
    </div>
  );
};

export default BlogPage;
