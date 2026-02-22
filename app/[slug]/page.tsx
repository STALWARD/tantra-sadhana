import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getPostMetadata from "@/components/getPostMetadata";
import Image from "next/image";

const getPostContent = (slug: string) => {
  const folder = "posts/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
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
  const post = await getPostContent(slug)
  const canonicalUrl = `https://www.tantrasadhana.org/${slug}`; // Build JSON-LD object using your front matter 
  const jsonLd = { 
    "@context": "https://schema.org", 
    "@type": "BlogPosting", 
    headline: post.data.title, 
    description: post.data.excerpt, 
    datePublished: post.data.date, 
    author: { 
      "@type": "Person", 
      name: post.data.authorName, 
      description: post.data.authorBio, 
      image: post.data.authorAvatar, 
    }, 
    image: [post.data.featuredImage], 
    url: canonicalUrl, 
    publisher: { 
      "@type": "Organization", 
      name: "My Blog", 
      logo: { 
        "@type": "ImageObject", 
        url: "https://www.tantrasadhana.org/images/logo.png", 
      } , 
    }, 
  };
  return (
    <div>
      <div className="my-12 text-center">
        <h1 className="text-2xl text-black">{post.data.title}</h1>
        <p className="text-red mt-2">{post.data.authorName}</p>
        <p className="text-gold mt-2">{post.data.date}</p>
      </div>
      <article className="lg:regular-20 m-10">
        <Markdown>{post.content}</Markdown>
      </article>
      <div className="flex items-center gap-4 bg-yellow-300 rounded-lg border p-6 mt-16">
        {post.data.authorAvatar && (
          <div className="relative h-16 w-16 shrink-0">
            <Image
              src={post.data.authorAvatar}
              alt={post.data.authorName}
              fill
              className="rounded-full object-cover"
            />
          </div>
        )}
        <div>
          <h3 className="font-semibold">{post.data.authorName}</h3>
          {post.data.authorBio && (
            <p className="text-sm text-muted-foreground">{post.data.authorBio}</p>
          )}
        </div>
      </div>
    </div>
  )
}
