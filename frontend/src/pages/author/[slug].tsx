import { Layout, Seo } from "@/components";
import Image from "next/image";
import React from "react";
import { getStrapiMedia } from "../api/media";
import { fetchAPI } from "../api";
import { IAuthor, ICategory } from "../../../types";

interface IProps {
  author: IAuthor;
  categories: ICategory[];
}

const Author = ({ author, categories }: IProps) => {
  const seo = {
    metaTitle: author.attributes.name,
    metaDescription: `${author.attributes.name} author description`,
  };

  return (
    <Layout categories={categories}>
      <Seo seo={seo} />
      <div className="flex justify-between p-4 mx-auto max-w-screen-xl ">
        <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
          <header className="not-format">
            <address className="flex items-center not-italic h-screen mt-[-64px]">
              <div className="flex flex-col items-center text-sm text-gray-900 dark:text-white text-center">
                <Image
                  className="mb-6 w-[128px] h-[128px] rounded-full"
                  src={getStrapiMedia(author.attributes.picture)}
                  alt={author.attributes.name}
                  width={128}
                  height={128}
                />
                <div>
                  <h1
                    rel="author"
                    className="mb-4 text-6xl font-bold text-gray-900 dark:text-white"
                  >
                    {author.attributes.name}
                  </h1>
                  <p className="text-2xl font-light text-gray-500 dark:text-gray-400">
                    {author.attributes.email}
                  </p>
                </div>
              </div>
            </address>
          </header>
        </article>
      </div>
    </Layout>
  );
};

export async function getStaticPaths() {
  const authorsRes = await fetchAPI("/writers", { fields: ["slug"] });

  return {
    paths: authorsRes.data.map((author: IAuthor) => ({
      params: {
        slug: author.attributes.slug,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const matchingAuthors = await fetchAPI("/writers", {
    filters: { slug: params.slug },
    populate: ["name", "email", "picture"],
  });

  const allCategories = await fetchAPI("/categories");

  return {
    props: {
      author: matchingAuthors.data[0],
      categories: allCategories.data,
    },
  };
}

export default Author;
