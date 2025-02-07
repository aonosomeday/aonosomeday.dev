import { render } from "@deno/gfm";
import { extractYaml } from "@std/front-matter";
import { Post } from "./utils/posts.ts";
import { join } from "$std/path/join.ts";
import { parse } from "$std/path/parse.ts";

const POSTS_PATH = "./posts";
const kv = await Deno.openKv(Deno.env.get("KV_PATH"));

// Delete all posts from KV store
for await (const entry of kv.list({ prefix: ["post"] })) {
  await kv.delete(entry.key);
  console.log(`Deleted ${entry.key}`);
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
    content: render(data.body),
    snippet: data.attrs.snippet,
  };

  const key = ["post", post.slug];

  await kv.set(key, post);
  console.log(`Added ${key}`);
}
