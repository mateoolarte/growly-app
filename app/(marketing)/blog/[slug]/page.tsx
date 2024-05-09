import Image from "next/image";
import dayjs from "dayjs";

import { getArticleData } from "@/services/getArticleData";
import { parseMediaField } from "@/utils/parseMediaField";

import { Layout } from "@/components/Layout";
import { BlocksRenderer } from "@/components/BlocksRenderer";

import { parseCategories } from "../utils/parseCategories";

import { Actions } from "./components/Actions";

import "./article.scss";

export default async function Article(props) {
  const { params } = props;
  const { slug } = params;

  const data = await getArticleData(slug);

  if (!data) return <p>Article not found</p>;

  const { title, publishedAt, categories, cover, content } = data;
  const formattedDate = dayjs(publishedAt).format("DD/MM/YYYY");
  const image = parseMediaField(cover?.data);
  const parsedCategories = parseCategories(categories?.data);
  const hasCategories = parsedCategories && parseCategories.length;

  return (
    <Layout>
      <main className="article">
        <Actions slug={slug} />
        <h1 className="article-title">{title}</h1>
        <div className="article-info">
          <time className="article-date">{formattedDate}</time>

          {hasCategories && (
            <ul className="article-categories">
              {parsedCategories.map((item) => {
                return (
                  <li key={item.id} className="article-category">
                    {item.name}
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        {image && (
          <Image
            src={image.url}
            width={image.width}
            height={image.height}
            alt={title}
            className="article-cover"
          />
        )}

        <BlocksRenderer data={content} className="article-content" />
      </main>
    </Layout>
  );
}
