"use client";

import { useRouter } from "next/navigation";

export default function BackButton({ className = "" }: { className?: string }) {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className={`text-lg text-black hover:text-white transition-colors underline underline-offset-4 mt-2 block cursor-pointer bg-transparent border-none text-left ${className}`}
    >
      ← Back to Blog
    </button>
  );
}
