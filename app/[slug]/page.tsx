import fs from "fs";
import matter from "gray-matter";
import getPostMetadata from "@/components/getPostMetadata";
import Image from "next/image";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Link from "next/link";
import CopyProtectedArticle from "@/components/CopyProtectedArticle"; // client component

// FORCE NEXT.JS TO BYPASS THE CACHE
export const dynamic = "force-dynamic";
export const revalidate = 0;

// --- Utility function ---
const getPostContent = (slug: string) => {
  const folder = "posts/";
  const file = `${folder}${slug}.md`;
  if (!fs.existsSync(file)) throw new Error(`Post not found: ${slug}`);
  const content = fs.readFileSync(file, "utf8");
  const { data, content: body } = matter(content);
  return JSON.parse(JSON.stringify({ data, content: body }));
};

export const generateStaticParams = async () => {
  const posts = getPostMetadata();
  return posts.map((post) => ({ slug: post.slug }));
};

export default async function BlogPage({ 
  params, 
  searchParams 
}: { 
  params: Promise<{ slug: string }>,
  searchParams: Promise<{ error?: string }> 
}) {
  const { slug } = await params;
  const { error } = await searchParams;
  const post = getPostContent(slug);

  const cookieStore = await cookies();
  const isAuthenticated = cookieStore.get(`auth_${slug}`)?.value === "true";
  const isProtected = !!post.data.password;

  if (isProtected && !isAuthenticated) {
    // restricted access form...
  }

  return (
    <div className="mx-auto px-6 py-8 bg-linear-to-r from-pink-500 via-indigo-500 to-green-500">
      <Link href="/blog" className="text-sm text-black hover:text-white mb-8 block transition-colors">
        ← Back to Blog
      </Link>
      <div className="my-12 text-center">
        <h1 className="text-4xl font-bold text-black px-4">{post.data.title}</h1>
        <p className="text-white mt-2 font-medium">{post.data.authorName}</p>
        <p className="text-black mt-2">{post.data.date}</p>
      </div>

      {/* ✅ Protected article */}
      <CopyProtectedArticle content={post.content} />

      <footer className="mt-16 pt-8 border-t text-center text-black italic mb-12">
        End of Post
      </footer>
      {/* author box... */}
    </div>
  );
}
