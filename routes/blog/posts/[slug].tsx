import { Head } from "$fresh/runtime.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import { CSS } from "@deno/gfm";
import Page from "../../../components/Page.tsx";
import { getPost, Post } from "../../../utils/posts.ts";

export const handler: Handlers = {
  async GET(_req, ctx) {
    const post = await getPost(ctx.params.slug);
    if (post == null) {
      return ctx.renderNotFound();
    }
    return ctx.render(post);
  },
};

export default function PostPage(props: PageProps<Post>) {
  const post = props.data;

  return (
    <>
      <Head>
        <title>{ post.title } | aonosomeday.net</title>
        <style dangerouslySetInnerHTML={{ __html: CSS }} />
      </Head>
      <Page>
        <article>
          <h1 className="text-5xl font-bold mb-2">{post.title}</h1>
          <time className="text-gray-500">
            {new Date(post.publishedAt).toLocaleString("ja-jp", {
              timeZone: "Asia/Tokyo",
              timeZoneName: "shortOffset",
            })}
          </time>
          <div
            className="mt-6 markdown-body"
            style="background-color: inherit;"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      </Page>
    </>
  );
}
