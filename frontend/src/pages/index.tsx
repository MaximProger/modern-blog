import Image from "next/image";
import { Inter } from "next/font/google";
import { Hero, Layout, NewsList, Seo } from "@/components";
import { fetchAPI } from "./api";
import { IArticle, ICategory, IHomePage } from "../../types";

interface IProps {
  categories: ICategory[];
  homepage: IHomePage;
  articles: IArticle[];
}

export default function Home({ categories, homepage, articles }: IProps) {
  return (
    <Layout categories={categories}>
      <Seo seo={homepage.attributes.seo} />
      <Hero
        title={homepage.attributes.main.title}
        description={homepage.attributes.main.description}
      >
        <NewsList articles={articles} />
      </Hero>
    </Layout>
  );
}

export async function getStaticProps() {
  const [articlesRes, categoriesRes, homepageRes] = await Promise.all([
    fetchAPI("/articles", {
      populate: ["image", "category", "author.picture"],
    }),
    fetchAPI("/categories", { populate: "*" }),
    fetchAPI("/homepage", {
      populate: {
        main: "*",
        seo: { populate: "*" },
      },
    }),
  ]);

  return {
    props: {
      articles: articlesRes.data,
      categories: categoriesRes.data,
      homepage: homepageRes.data,
    },
    revalidate: 1,
  };
}
