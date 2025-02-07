import Page from "../components/Page.tsx";

export default function Profile() {
  return (
    <Page>
      <h1 className="text-4xl font-bold mb-2">プロフィール</h1>

      <section className="flex justify-between">
        <ul className="list-disc ml-4">
          <li>名前: 青野咲夢 (アオノサクラ)</li>
          <li>居住地: 日本</li>
          <li>趣味: ベース</li>
          <li>言語: 日本語、英語、JavaScript、Kotlin</li>
        </ul>

        <img
          className="rounded-full w-auto h-32"
          alt="青野咲夢のアイコン"
          src="/avatar.jpg"
        />
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-2">SNSなど</h2>

        <ul className="list-disc ml-4">
          <li>
            <a
              className="decoration-solid"
              href="https://twitter.com/aonosomeday"
            >
              Twitter
            </a>
          </li>
          <li>
            <a href="https://github.com/aonosomeday">GitHub</a>
          </li>
          <li>
            <a href="https://keybase.io/aonosomeday">Keybase</a>
          </li>
          <li>
            <a href="https://keybase.io/aonosomeday/pgp_keys.asc">PGP Keys</a>
          </li>
        </ul>
      </section>
    </Page>
  );
}
