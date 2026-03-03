import getPostMetadata from "@/components/getPostMetadata";
import PostPreview from "@/components/PostPreview";
import { Metadata } from "next";
import Link from "next/link";

// ✅ 1. DYNAMIC METADATA: Handles page numbers and canonical URLs for SEO
export async function generateMetadata({ 
  searchParams 
}: { 
  searchParams: Promise<{ page?: string }> 
}): Promise<Metadata> {
  const { page } = await searchParams;
  const currentPage = Number(page) || 1;
  const pageSuffix = currentPage > 1 ? ` - Page ${currentPage}` : "";

  return {
    title: `Spiritual Blog | Wisdom of Sri Kaulbhaskar Guru Ji${pageSuffix}`,
    description: `Explore spiritual insights, Tantra, and Astrology through the writings of Sri Kaulbhaskar Guru Ji. Deepen your understanding of ancient teachings.${pageSuffix}`,
    keywords: 'Tantra blog, Astrology articles, Kaulbhaskar Guru Ji, spiritual wisdom',
    alternates: {
      canonical: `/blog${currentPage > 1 ? `?page=${currentPage}` : ""}`,
    },
    robots: {
      index: true,
      follow: true,
    }
  };
}

const POSTS_PER_PAGE = 9;

const Blog = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  // Await searchParams (Required in Next.js 15)
  const params = await searchParams;
  const currentPage = Number(params?.page) || 1;

  // Fetch and sort posts
  const postMetadata = getPostMetadata().sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  // Pagination Logic
  const totalPosts = postMetadata.length;
  const totalPages = Math.ceil(totalPosts / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const paginatedPosts = postMetadata.slice(startIndex, startIndex + POSTS_PER_PAGE);

  // ✅ 2. STRUCTURED DATA (JSON-LD): Helps Google index the list of articles
  const blogListLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Spiritual Blog by Kaulbhaskar",
    "description": "A collection of articles on Tantra and Astrology.",
    "numberOfItems": totalPosts,
    "itemListElement": paginatedPosts.map((post, index) => ({
      "@type": "ListItem",
      "position": startIndex + index + 1,
      "url": `https://www.tantrasadhana.org{post.slug}`,
      "name": post.title,
      // If your post metadata includes images, add: "image": post.image
    }))
  };

  const postPreviews = paginatedPosts.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));

  return (
    <main className="max-w-6xl mx-auto">
      {/* Render the JSON-LD Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogListLd) }}
      />

      <h1 className="bold-32 md:bold-40 lg:bold-64 text-center justify-center mt-10 bg-linear-to-r from-pink-400 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
        BLOG
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
          aria-disabled={currentPage <= 1}
          className={`px-4 py-2 bg-gray-200 rounded-md transition-colors ${
            currentPage <= 1 ? "pointer-events-none opacity-50" : "hover:bg-gray-300"
          }`}
        >
          Previous
        </Link>

        <span className="font-semibold text-gray-700">
          Page {currentPage} of {totalPages}
        </span>

        <Link
          href={`/blog?page=${currentPage + 1}`}
          aria-disabled={currentPage >= totalPages}
          className={`px-4 py-2 bg-gray-200 rounded-md transition-colors ${
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
