import { Head } from "$fresh/runtime.ts";
import Page from "../../components/Page.tsx";
import PostCard from "../../components/PostCard.tsx";
import { getPosts } from "../../utils/posts.ts";

export default async function BlogIndex() {
  return (
    <>
      <Head>
        <title>ブログ | aonosomeday.net</title>
      </Head>
      <Page>
        <h1 className="text-4xl font-semibold">ブログ</h1>
      {(await getPosts()).map((post) => <PostCard post={post} key={post.slug}/>)}
      </Page>
    </>
  );
}
