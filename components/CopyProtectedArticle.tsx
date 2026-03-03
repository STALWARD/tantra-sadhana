"use client";

import { useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function CopyProtectedArticle({ content }: { content: string }) {
  useEffect(() => {
    const handleCopy = (e: ClipboardEvent) => {
      const selection = document.getSelection()?.toString();
      if (selection) {
        e.clipboardData?.setData(
          "text/plain",
          `${selection}\n\nRead more at: ${window.location.href}`
        );
        e.preventDefault();
      }
    };
    document.addEventListener("copy", handleCopy);
    return () => document.removeEventListener("copy", handleCopy);
  }, []);

  return (
    <article className="prose lg:prose-xl mx-auto px-6">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
    </article>
  );
}
