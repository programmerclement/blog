import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeHighlight from "rehype-highlight";
import rehypeStringify from "rehype-stringify";

const BLOG_DIR = path.join(process.cwd(), "content/blog");

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
  category: string;
  tags: string[];
  coverImage: string;
  featured: boolean;
  content: string;
  contentHtml?: string;
}

export async function markdownToHtml(content: string): Promise<string> {
  const result = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeHighlight)
    .use(rehypeStringify, { allowDangerousHtml: true })
    .process(content);
  return result.toString();
}

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".mdx"));

  const posts = files.map((filename) => {
    const slug = filename.replace(".mdx", "");
    const filePath = path.join(BLOG_DIR, filename);
    const rawContent = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(rawContent);
    const rt = readingTime(content);

    return {
      slug,
      title: data.title ?? "Untitled",
      excerpt: data.excerpt ?? "",
      date: data.date ?? new Date().toISOString(),
      readingTime: rt.text,
      category: data.category ?? "General",
      tags: (data.tags as string[]) ?? [],
      coverImage: (data.coverImage as string) ?? "/blog/default.jpg",
      featured: (data.featured as boolean) ?? false,
      content,
    } satisfies BlogPost;
  });

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getPostBySlug(slug: string): BlogPost | null {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const rawContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(rawContent);
  const rt = readingTime(content);

  return {
    slug,
    title: data.title ?? "Untitled",
    excerpt: data.excerpt ?? "",
    date: data.date ?? new Date().toISOString(),
    readingTime: rt.text,
    category: data.category ?? "General",
    tags: (data.tags as string[]) ?? [],
    coverImage: (data.coverImage as string) ?? "/blog/default.jpg",
    featured: (data.featured as boolean) ?? false,
    content,
  };
}

export function getCategories(posts: BlogPost[]): string[] {
  const cats = new Set(posts.map((p) => p.category));
  return ["All", ...Array.from(cats)];
}
