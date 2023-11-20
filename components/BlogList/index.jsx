import React from "react";
import articles from "../../constants/articles";

function BlogCard() {
  return (
    <>
      {articles.map((article) => (
        <>
          <Article key={article.author} {...article} />
        </>
      ))}
    </>
  );
}

const Article = ({
  category,
  date,
  title,
  content,
  author,
  avatarUrl,
  readMoreLink,
}) => {
  return (
    <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <div className="flex justify-between items-center mb-5 text-gray-500">
        <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
          <svg
            className="mr-1 w-3 h-3"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          />

          {category}
        </span>
        <span className="text-sm">{date}</span>
      </div>
      <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        <a href={readMoreLink}>{title}</a>
      </h2>
      <p className="mb-5 font-light text-gray-500 dark:text-gray-400">
        {content}
      </p>
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <img
            className="w-7 h-7 rounded-full"
            src={avatarUrl}
            alt="Author avatar"
          />
          <span className="font-medium dark:text-white">{author}</span>
        </div>
        <a
          href={readMoreLink}
          className="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline"
        >
          Devamını Gör
          <svg
            className="ml-2 w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          />
        </a>
      </div>
    </article>
  );
};

const BlogList = () => {
  return (
    <>
      <section className="bg-white dark:bg-gray-800">
        <div className="py-4 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="grid gap-8 lg:grid-cols-2">
            <BlogCard />
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogList;
