import Link from "next/link";
import { PostMetadata } from "./PostMetadata";
import Image from "next/image";

const PostPreview = (props: PostMetadata) => {
  return (
    <div
      className=" border border-red p-10 bg-yellow-300 overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:bg-white" >
      <Link href={`${props.slug}`}>
    <div>
    <div>
      <Image 
        src={props.featuredImage}
        alt={props.title}
        width={500}
        height={500}
      />
    </div>
    </div>
      <h2 className=" text-violet-800 hover:text-xl hover:underline hover:text-red mb-4">{props.title}</h2>
      </Link>
      <p className="text-black">{props.excerpt}</p>
      <div className="flex items-center mt-4 space-x-2 text-sm dark:text-black">
        <time dateTime={props.date}>
         {new Date(props.date).toLocaleDateString()}
        </time>
        <span>|</span>
        <span>by {props.authorName}</span>
      </div>
    </div>
  );
};

export default PostPreview;
