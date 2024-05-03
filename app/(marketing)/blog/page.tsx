import { Layout } from "@/components/Layout";

import { Hero } from "./components/Hero";
import { Articles } from "./components/Articles";

export default function Blog() {
  return (
    <Layout>
      <main className="blog container-box">
        <Hero />
        <Articles />
      </main>
    </Layout>
  );
}
