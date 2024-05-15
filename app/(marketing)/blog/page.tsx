import { BASE_URL } from "@/constants/envs";

import { getBlogpostsData } from "@/services/getBlogposts";

import { Layout } from "@/components/Layout";

import { Hero } from "./components/Hero";
import { Articles } from "./components/Articles";

export const metadata = {
  metadataBase: BASE_URL,
  title: "Blog | Growly",
  description: "",
  alternates: {
    canonical: "/blog",
  },
};

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
