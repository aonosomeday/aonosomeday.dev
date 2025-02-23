import { join } from "$std/path/join.ts";

for (let i = 10; i < 50; i++) {
  Deno.writeTextFileSync(
    join("posts", `${i}-test-post.md`),
    `---
title: No.${i} Post
published_at: 2025-02-07T14:00:${i}.000Z
snippet: これは${i}番目の記事です。
---

# こんにちは!

これは初めての投稿です。
    `,
  );
}
