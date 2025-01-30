import Footer from "./Footer.tsx";
import Header from "./Header.tsx";
import { ComponentChildren } from "preact/src/index.d.ts";

export default function Page({ children }: { children: ComponentChildren }) {
  return (
    <div class="w-full">
      <Header />
      <main className="m-6">
        { children }
      </main>
      <Footer />
    </div>
  );
}
