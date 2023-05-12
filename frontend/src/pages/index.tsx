import Image from "next/image";
import { Inter } from "next/font/google";
import { Navbar, NewsList } from "@/components";
import { fetchAPI } from "./api";
import { IArticle, ICategory, IHomePage } from "../../types";

const inter = Inter({ subsets: ["latin"] });

interface IProps {
  categories: ICategory[];
  homepage: IHomePage;
  articles: IArticle[];
}

export default function Home({ categories, homepage, articles }: IProps) {
  console.log(articles);

  return (
    <main
      className={`flex min-h-screen flex-col items-center ${inter.className}`}
    >
      <Navbar categories={categories} />
      <NewsList
        title={homepage.attributes.main.title}
        description={homepage.attributes.main.description}
        articles={articles}
      />
    </main>
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
