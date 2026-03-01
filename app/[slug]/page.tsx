import fs from "fs";
import matter from "gray-matter";
import getPostMetadata from "@/components/getPostMetadata";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const getPostContent = (slug: string) => {
  const folder = "posts/";
  const file = `${folder}${slug}.md`;
  
  if (!fs.existsSync(file)) {
    throw new Error(`Post not found: ${slug}`);
  }

  const content = fs.readFileSync(file, "utf8");
  const { data, content: body } = matter(content);

  // Force clean serialization
  return JSON.parse(JSON.stringify({ data, content: body }));
};

export const generateStaticParams = async () => {
  const posts = getPostMetadata();
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

type Params = Promise<{ slug: string }>;

export default async function BlogPage({ params }: { params: Params }) {
  const { slug } = await params;
  const post = getPostContent(slug);

  const canonicalUrl = `https://www.tantrasadhana.org{slug}`;
  
  const jsonLd = { 
    "@context": "https://schema.org", 
    "@type": "BlogPosting", 
    headline: post.data.title || "Blog Post", 
    description: post.data.excerpt || "", 
    datePublished: post.data.date || "", 
    author: { 
      "@type": "Person", 
      name: post.data.authorName || "Admin", 
      image: post.data.authorAvatar || "", 
    }, 
    image: post.data.featuredImage ? [post.data.featuredImage] : [], 
    url: canonicalUrl, 
  };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="my-12 text-center">
        <h1 className="text-4xl font-bold text-black">{post.data.title}</h1>
        <p className="text-red-600 mt-2">{post.data.authorName}</p>
        <p className="text-gray-500 mt-2">{post.data.date}</p>
      </div>

      {/* 
          Using react-markdown with remarkGfm for tables/links support.
          Adding 'prose' class for automatic styling (requires @tailwindcss/typography)
      */}
      <article className="prose lg:prose-xl mx-auto px-6">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {post.content}
        </ReactMarkdown>
      </article>

      <div className="flex items-center gap-4 bg-yellow-400 rounded-lg border border-yellow-200 p-6 mt-16 mx-10">
        {post.data.authorAvatar && (
          <div className="relative h-16 w-16 shrink-0">
            <Image
              src={post.data.authorAvatar}
              alt={post.data.authorName || "Author"}
              fill
              className="rounded-full object-cover"
            />
          </div>
        )}
        <div>
          <h3 className="font-semibold">{post.data.authorName}</h3>
          {post.data.authorBio && (
            <p className="text-sm text-gray-600">{post.data.authorBio}</p>
          )}
        </div>
      </div>
    </div>
  );
}
