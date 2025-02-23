import { Head } from "$fresh/runtime.ts";
import Page from "../../components/Page.tsx";
import PostPaging from "../../islands/PostPaging.tsx";
import { getAllPosts } from "../../utils/posts.ts";

export default async function BlogIndex() {
  return (
    <>
      <Head>
        <title>ブログ | aonosomeday.net</title>
      </Head>
      <Page>
        <h1 className="text-4xl font-semibold">ブログ</h1>
        <PostPaging allPosts={await getAllPosts()} />
      </Page>
    </>
  );
}
