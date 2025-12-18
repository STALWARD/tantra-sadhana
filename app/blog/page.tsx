import getPostMetadata from "@/components/getPostMetadata";
import PostPreview from "@/components/PostPreview";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog",
  description: `Here are posts written by KAULBHASKAR GURU Ji.`,
};

// ✅ Server Component with searchParams
const Blog = ({ searchParams }: { searchParams: { page?: string } }) => {
  const page = parseInt(searchParams.page || "1", 10);
  const postsPerPage = 12; // adjust as needed

  // Sort posts by date
  const postMetadata = getPostMetadata().sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const totalPages = Math.ceil(postMetadata.length / postsPerPage);

  // Slice posts for current page
  const start = (page - 1) * postsPerPage;
  const paginatedPosts = postMetadata.slice(start, start + postsPerPage);

  return (
    <main>
      <h1 className="text-4xl text-center text-black justify-center font-extrabold mt-10">
        BLOG
      </h1>
      <p className="text-xl text-center text-black justify-center font-semibold mt-5">
        All the posts here are writings of Sri KAULBHASKAR Guru Ji
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 m-10 gap-4">
        {paginatedPosts.map((post) => (
          <PostPreview key={post.slug} {...post} />
        ))}
      </div>

      {/* ✅ Pagination Controls */}
      <div className="flex justify-center gap-4 mb-10">
        {page > 1 && (
          <Link
            href={`/blog?page=${page - 1}`}
            className="px-4 py-2 bg-gray-200 rounded"
          >
            Previous
          </Link>
        )}
        <span className="px-4 py-2">Page {page} of {totalPages}</span>
        {page < totalPages && (
          <Link
            href={`/blog?page=${page + 1}`}
            className="px-4 py-2 bg-gray-200 rounded"
          >
            Next
          </Link>
        )}
      </div>
    </main>
  );
};

export default Blog;
