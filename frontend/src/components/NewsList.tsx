import React from "react";
import NewsCard from "./NewsCard";
import { IArticle } from "../../types";

interface IProps {
  articles: IArticle[];
}

const NewsList = ({ articles }: IProps) => {
  return (
    <div className="grid gap-8 lg:grid-cols-2">
      {articles.map((article) => (
        <NewsCard key={article.id} article={article} />
      ))}
    </div>
  );
};

export default NewsList;
