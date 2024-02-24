import getPostMetadata from "@/components/getPostMetadata";
import PostPreview from "@/components/PostPreview";
import { Metadata } from "next";

export const metadata:Metadata = {
	title: "Latest Post",
	description: `Here Latest posts written by KAULBHASKAR GURU Ji.`,
};

const Latest = () => {
  const postMetadata = getPostMetadata().sort((a,b) =>
  new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, 3);
  const postPreviews = postMetadata.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));

  return (
    <main>
      <h1 className="1h-82 text-6xl text-midnightblue md:text-55xl text-center md:text-start font-extrabold ml-6
       mt-10">Latest Posts</h1>
       <div className="grid grid-cols-1 md:grid-cols-3 m-10 gap-4 ">{postPreviews}</div>
    </main>
  );
};

export default Latest;