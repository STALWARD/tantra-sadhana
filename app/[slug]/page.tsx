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

// 1. Server Action: Create a very short-lived session
async function verifyPassword(formData: FormData) {
  "use server";
  const password = formData.get("password");
  const correctPassword = formData.get("correctPassword");
  const slug = formData.get("slug");

  if (password === correctPassword) {
    const cookieStore = await cookies();
    // maxAge: 1 means the cookie expires almost instantly. 
    // It lasts just long enough for the following redirect/render to read it.
    cookieStore.set(`auth_${slug}`, "true", { 
      httpOnly: true, 
      secure: true, 
      sameSite: "strict",
      maxAge: 1 
    });
    return; 
  }
  redirect(`/${slug}?error=1`);
}

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

  // 2. Access Control: If protected and the 1-second cookie is gone, show form
  if (isProtected && !isAuthenticated) {
    return (
      <div className="max-w-md mx-auto my-32 p-8 border rounded-xl bg-white shadow-xl text-center">
        <h2 className="text-2xl font-bold mb-2">Restricted Access</h2>
        <p className="mb-6 text-gray-600">This Sadhana requires a password for every visit.</p>
        <form action={verifyPassword} className="flex flex-col gap-4">
          <input type="hidden" name="slug" value={slug} />
          <input type="hidden" name="correctPassword" value={post.data.password} />
          <input 
            type="password" 
            name="password" 
            placeholder="Enter password" 
            className={`p-3 border rounded-lg focus:outline-none focus:ring-2 ${error ? 'border-red-500 ring-red-200' : 'border-gray-300 focus:ring-blue-200'}`}
            autoFocus
            required 
          />
          {error && <p className="text-red-500 text-sm font-medium">Incorrect password.</p>}
          <button type="submit" className="bg-black text-white p-3 rounded-lg font-bold hover:bg-gray-800 transition-all active:scale-95">
            Unlock Content
          </button>
           {/* New Back Button */}
          <a 
            href="/blog" 
            className="text-sm text-gray-500 hover:text-black transition-colors underline underline-offset-4 mt-2"
          >
            ← Back to Blog List
          </a>
        </form>
      </div>
    );
  }

  // 3. Authenticated View
  return (
    <div className=" mx-auto px-6 py-8 bg-linear-to-r from-pink-500 via-indigo-500 to-green-500">
      <Link href="/blog" className="text-sm text-black hover:text-white mb-8 block transition-colors">
        ← Back to Blog
      </Link>
      <div className="my-12 text-center">
        <h1 className="text-4xl font-bold text-black px-4">{post.data.title}</h1>
        <p className="text-white mt-2 font-medium">{post.data.authorName}</p>
        <p className="text-black mt-2">{post.data.date}</p>
      </div>
      
       {/* ✅ Protected article */}
      <article className="prose lg:prose-xl mx-auto px-6">
        <CopyProtectedArticle content={post.content} />
      </article>
      <footer className="mt-16 pt-8 border-t text-center text-black italic mb-12">
        End of Post
      </footer>
      <div className="flex items-center gap-4 bg-yellow-400 rounded-lg border border-yellow-200 p-6 mt-16 mx-10">
        {post.data.authorAvatar && (
          <div className="relative h-16 w-16 shrink-0">
            <Image src={post.data.authorAvatar} alt={post.data.authorName || "Author"} fill className="rounded-full object-cover" />
          </div>
        )}
        <div>
          <h3 className="font-semibold">{post.data.authorName}</h3>
          {post.data.authorBio && <p className="text-sm text-gray-800">{post.data.authorBio}</p>}
        </div>
      </div>
      
    </div>
  );
}
