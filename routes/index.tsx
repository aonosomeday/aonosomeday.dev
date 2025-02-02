import Card from "../components/Card.tsx";
import Page from "../components/Page.tsx";

export default function Home() {
  return (
    <Page>
      <section className="mb-12 ml-2 mr-2 md:ml-12 md:mr-12">
        <h1 className="text-4xl">aonosomeday.net</h1>
        <p>青野咲夢(@aonosomeday)のホームページ。</p>
      </section>

      <Card href="/profile" title="プロフィール" description="青野咲夢について" imgPath="/avatar.jpg"/>
      <Card href="/blog" title="ブログ" description="青野咲夢の個人ブログ"/>
    </Page>
  );
}
