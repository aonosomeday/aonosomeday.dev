import Card from "../components/Card.tsx";
import Page from "../components/Page.tsx";

export default function Home() {
  return (
    <Page>
      <section className="p-8">
        <h1 className="text-4xl py-4">aonosomeday.dev</h1>
        <p>青野咲夢(@aonosomeday)のホームページ。</p>
      </section>

      <Card title="プロフィール" description="青野咲夢について"/>
      <Card title="ブログ" description="青野咲夢の個人ブログ"/>
    </Page>
  );
}
