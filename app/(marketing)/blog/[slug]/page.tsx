import Image from "next/image";

import { Layout } from "@/components/Layout";

import { Actions } from "./components/Actions";

import "./article.scss";

export default function Article() {
  return (
    <Layout>
      <main className="article">
        <Actions />
        <h1 className="article-title">
          How to choose the right colors when creating a website?
        </h1>
        <div className="article-info">
          <time className="article-date">03/03/2023</time>
          <ul className="article-categories">
            <li className="article-category">Marketing</li>
            <li className="article-category">E-commerce</li>
          </ul>
        </div>
        <Image src="" alt="" className="article-cover" />
        <div className="article-content">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
            quisquam.
          </p>
        </div>
      </main>
    </Layout>
  );
}
