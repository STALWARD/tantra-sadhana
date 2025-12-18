import getPostMetadata from "@/components/getPostMetadata";
import PostPreview from "@/components/PostPreview";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog",
  description: `Here are posts written by Kaulbhaskar Guru Ji.`,
};

// Define the number of posts to show per page
const POSTS_PER_PAGE = 9;

const Blog = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  // Await searchParams in Next.js 15
  const params = await searchParams;
  const currentPage = Number(params?.page) || 1;

  // 1. Fetch and sort metadata
  const postMetadata = getPostMetadata().sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  // 2. Pagination Logic
  const totalPosts = postMetadata.length;
  const totalPages = Math.ceil(totalPosts / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const paginatedPosts = postMetadata.slice(startIndex, startIndex + POSTS_PER_PAGE);

  const postPreviews = paginatedPosts.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));

  return (
    <main className="max-w-6xl mx-auto">
      <h1 className="text-4xl text-center text-black justify-center font-extrabold mt-10">
        Blog
      </h1>
      <p className="text-xl text-center text-black justify-center font-semibold mt-5">
        All the posts here are writings of Sri Kaulbhaskar Guru Ji
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 m-10 gap-4">
        {postPreviews}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center gap-4 mb-10">
        <Link
          href={`/blog?page=${currentPage - 1}`}
          className={`px-4 py-2 bg-gray-200 rounded-md ${
            currentPage <= 1 ? "pointer-events-none opacity-50" : "hover:bg-gray-300"
          }`}
        >
          Previous
        </Link>

        <span className="font-semibold">
          Page {currentPage} of {totalPages}
        </span>

        <Link
          href={`/blog?page=${currentPage + 1}`}
          className={`px-4 py-2 bg-gray-200 rounded-md ${
            currentPage >= totalPages ? "pointer-events-none opacity-50" : "hover:bg-gray-300"
          }`}
        >
          Next
        </Link>
      </div>
    </main>
  );
};

export default Blog;
