import Card from "../components/Card.tsx";
import Page from "../components/Page.tsx";

export default function Home() {
  return (
    <Page>
      <section className="p-8">
        <h1 className="text-4xl py-4">aonosomeday.net</h1>
        <p>青野咲夢(@aonosomeday)のホームページ。</p>
      </section>

      <Card href="/profile" title="プロフィール" description="青野咲夢について"/>
      <Card href="/blog" title="ブログ" description="青野咲夢の個人ブログ"/>
    </Page>
  );
}
