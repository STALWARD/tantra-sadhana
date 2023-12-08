import Link from "next/link";
import { PostMetadata } from "./PostMetadata";

const PostPreview = (props: PostMetadata) => {
  return (
    <div
      className=" border border-red p-10 rounded-md shadow-sm bg-yellow-300" >
      <p className="text-sm mb-4 text-slate-900">{props.date}</p>

      <Link href={`${props.slug}`}>
        <h2 className=" text-violet-800 hover:text-xl hover:underline hover:text-red mb-4">{props.title}</h2>
      </Link>
      <p className="text-black">{props.author}</p>
    </div>
  );
};

export default PostPreview;
