import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getPostMetadata from "@/components/getPostMetadata";

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

const BlogPage = (props: any) => {
  const slug = props.params.slug;
  const post = getPostContent(slug);
  return (
    <div>
      <div className="my-12 text-center">
        <h1 className="text-2xl text-black">{post.data.title}</h1>
        <p className="text-red mt-2">{post.data.author}</p>
        <p className="text-gold mt-2">{post.data.date}</p>
      </div>

      <article className="lg:regular-20 m-10">
        <Markdown>{post.content}</Markdown>
      </article>
    </div>
  );
};

export default BlogPage;
