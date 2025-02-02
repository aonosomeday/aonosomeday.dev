import Footer from "./Footer.tsx";
import Header from "./Header.tsx";
import { ComponentChildren } from "preact/src/index.d.ts";

export default function Page({ children }: { children: ComponentChildren }) {
  return (
    <>
      <Header />
      <main className="w-3/4 min-w-0.5 m-auto mt-8 space-y-3">
        {children}
      </main>
      <Footer />
    </>
  );
}
