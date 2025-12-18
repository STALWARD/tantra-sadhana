import getPostMetadata from "@/components/getPostMetadata";
import PostPreview from "@/components/PostPreview";
import { Metadata } from "next";

export const metadata:Metadata = {
  title: "Blog",
  description: `Here are posts written by KAULBHASKAR GURU Ji.`,
};

const Blog = () => {
  const postMetadata = getPostMetadata().sort((a,b) =>
  new Date(b.date).getTime() - new Date(a.date).getTime());
  const postPreviews = postMetadata.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));

  return (
    <main>
      <h1 className="text-4xl text-center text-black justify-center font-extrabold mt-10">BLOG</h1>
      <p className="text-xl text-center text-black justify-center font-semibold mt-5" >All the posts here are writtings of Sri KAULBHASKAR Guru Ji</p>
      <div className="grid grid-cols-1 md:grid-cols-3 m-10 gap-4 ">{postPreviews}</div>
    </main>
  );
};

export default Blog;
