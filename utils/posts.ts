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
