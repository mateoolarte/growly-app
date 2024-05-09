import { getBlogpostsData } from "@/services/getBlogposts";

import { Layout } from "@/components/Layout";

import { Hero } from "./components/Hero";
import { Articles } from "./components/Articles";

export default async function Blog() {
  const data = await getBlogpostsData();

  return (
    <Layout>
      <main className="blog container-box">
        <Hero />
        <Articles data={data} />
      </main>
    </Layout>
  );
}
