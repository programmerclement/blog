"use client";

import { MDXRemote, type MDXRemoteSerializeResult } from "next-mdx-remote";

interface Props {
  source: MDXRemoteSerializeResult;
}

export function MDXContent({ source }: Props) {
  return (
    <article className="prose max-w-none">
      <MDXRemote {...source} />
    </article>
  );
}
