import React from "react";
import Image from "next/image";
import Moment from "react-moment";
import ReactMarkDown from "react-markdown";

import { Layout, Seo } from "@/components";
import { fetchAPI } from "../api";
import { IArticle, ICategory } from "../../types";
import { getStrapiMedia } from "../api/media";
import Link from "next/link";

interface IProps {
  article: IArticle;
  categories: ICategory[];
}

const Article = ({ article, categories }: IProps) => {
  const author = article.attributes.author;
  const category = article.attributes.category;

  const seo = {
    metaTitle: article.attributes.title,
    metaDescription: article.attributes.description,
    shareImage: article.attributes.image,
    article: true,
  };

  return (
    <Layout categories={categories}>
      <Seo seo={seo} />
      <div className="flex justify-between p-4 mx-auto max-w-screen-xl ">
        <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
          <header className="mb-4 lg:mb-6 not-format">
            <address className="flex items-center mb-6 not-italic">
              <Link
                href={`/author/${author.data.attributes.slug}`}
                className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white"
              >
                <Image
                  className="mr-4 w-16 h-16 rounded-full"
                  src={getStrapiMedia(author.data.attributes.picture)}
                  alt={author.data.attributes.name}
                  width={64}
                  height={64}
                />
                <div>
                  <p
                    rel="author"
                    className="text-xl font-bold text-gray-900 dark:text-white"
                  >
                    {author.data.attributes.name}
                  </p>
                  <p className="text-base font-light text-gray-500 dark:text-gray-400">
                    {author.data.attributes.email}
                  </p>
                  <p className="text-base font-light text-gray-500 dark:text-gray-400">
                    <Moment format="MMM Do YYYY">
                      {article.attributes.publishedAt}
                    </Moment>
                  </p>
                </div>
              </Link>
            </address>
            <Link
              href={`/category/${category.data.attributes.slug}`}
              className="bg-primary-100 text-primary-800 text-md font-medium inline-flex items-center rounded dark:bg-primary-200 dark:text-primary-800 capitalize text-gray-500 mb-2"
            >
              <svg
                className="mr-1 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
              </svg>
              {category.data.attributes.name}
            </Link>
            <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-5xl dark:text-white">
              {article.attributes.title}
            </h1>
          </header>

          <Image
            className="mb-5"
            src={getStrapiMedia(article.attributes.image)}
            width={672}
            height={353}
            alt={article.attributes.image.data.attributes.alternativeText}
          />

          <ReactMarkDown className="prose lg:prose-xl">
            {article.attributes.content}
          </ReactMarkDown>
        </article>
      </div>
    </Layout>
  );
};

export async function getStaticPaths() {
  const articlesRes = await fetchAPI("/articles", { fields: ["slug"] });

  return {
    paths: articlesRes.data.map((article: IArticle) => ({
      params: {
        slug: article.attributes.slug,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const articlesRes = await fetchAPI("/articles", {
    filters: {
      slug: params.slug,
    },
    populate: ["image", "category", "author.picture"],
  });

  const categoriesRes = await fetchAPI("/categories");

  return {
    props: { article: articlesRes.data[0], categories: categoriesRes.data },
    revalidate: 1,
  };
}

export default Article;
