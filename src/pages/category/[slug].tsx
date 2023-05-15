import { Hero, Layout, NewsList, Seo } from "@/components";
import { fetchAPI } from "@/pages/api";
import { IArticle, ICategory, IHomePage } from "../../types";

interface IProps {
  category: ICategory;
  categories: ICategory[];
}

export default function Category({ category, categories }: IProps) {
  const seo = {
    metaTitle: category.attributes.name,
    metaDescription: `All ${category.attributes.name} articles`,
  };

  return (
    <Layout categories={categories}>
      <Seo seo={seo} />
      <Hero title={category.attributes.name}>
        <NewsList articles={category.attributes.articles.data} />
      </Hero>
    </Layout>
  );
}

export async function getStaticPaths() {
  const categoriesRes = await fetchAPI("/categories", { fields: ["slug"] });

  return {
    paths: categoriesRes.data.map((category: ICategory) => ({
      params: {
        slug: category.attributes.slug,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const matchingCategories = await fetchAPI("/categories", {
    filters: { slug: params.slug },
    populate: [
      "category",
      "articles",
      "articles.category",
      "articles.author.picture",
    ],
  });
  const allCategories = await fetchAPI("/categories");

  return {
    props: {
      category: matchingCategories.data[0],
      categories: allCategories.data,
    },
    revalidate: 1,
  };
}
