import { render } from "@deno/gfm";
import { extractYaml } from "@std/front-matter";
import { join } from "$std/path/join.ts";
import { parse } from "$std/path/parse.ts";
// @ts-types="@types/sanitize-html"
import sanitizeHtml from "sanitize-html";

const POSTS_PATH = "./posts";
const kv = await Deno.openKv(Deno.env.get("KV_PATH"));

export interface Post {
  slug: string;
  title: string;
  publishedAt: Date;
  snippet: string;
  content: string;
}

export async function getPost(slug: string): Promise<Post | null> {
  const post = await kv.get<Post>(["post", slug]);
  return post.value;
}

export async function getAllPosts(): Promise<Post[]> {
  const postsIter = kv.list<Post>({ prefix: ["post"] });
  const posts: Post[] = [];

  for await (const post of postsIter) {
    posts.push(post.value);
  }

  // Sort posts with date
  posts.sort((a, b) => {
    if (a.publishedAt > b.publishedAt) {
      return -1;
    } else if (a.publishedAt < b.publishedAt) {
      return 1;
    }

    return 0;
  });

  return posts;
}

/**
 * Generate HTML data from markdown and write them to Deno KV
 */
export async function applyPostsToDatabase(): Promise<void> {
  // Delete all posts from KV store
  for await (const entry of kv.list({ prefix: ["post"] })) {
    await kv.delete(entry.key);
  }

  // Add all posts to KV store
  for await (const entry of Deno.readDir(`${POSTS_PATH}`)) {
    const data = extractYaml<
      { title: string; published_at: string; snippet: string }
    >(await Deno.readTextFile(join(POSTS_PATH, entry.name)));

    const post: Post = {
      slug: parse(entry.name).name,
      title: data.attrs.title,
      publishedAt: new Date(data.attrs.published_at),
      content: sanitizeHtml(render(data.body)),
      snippet: data.attrs.snippet,
    };

    const key = ["post", post.slug];

    await kv.set(key, post);
  }

  const sortedPosts = await getAllPosts();
  const sortedSlugs = sortedPosts.map((post) => post.slug);
  await kv.set(["sortedSlugs"], sortedSlugs);
}
