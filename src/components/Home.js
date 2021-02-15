import React, { useState } from "react";
import { useEffect } from "react";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";

import Header from "./Header";

function Home() {
  const [articles, setArticles] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let url =
      "https://mighty-oasis-08080.herokuapp.com/api/articles?limit=10&offset=0";
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setArticles(res.articles);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setArticles([]);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gray-200">
      <Header />

      {isLoading && (
        <div className="mx-auto my-24 loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-64 w-64"></div>
      )}
      <section className="home container mx-auto my-16">
        {articles?.map((article, i) => (
          <div
            key={i}
            className="py-12 md:w-1/2 flex flex-col items-start shadow-md p-4 px-8 rounded-sm"
          >
            <div className="flex items-center">
              <span className="mr-4 inline-block py-1 px-3 rounded bg-indigo-400 text-indigo-100 text-sm font-medium tracking-widest">
                CATEGORY
              </span>
              <span>{new Date(article.createdAt).toDateString().slice(3)}</span>
            </div>
            <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">
              {article.title}
            </h2>
            <p className="leading-relaxed mb-8">{article.description}</p>
            <p></p>
            <div className="flex justify-between items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-200 mt-auto w-full">
              <a
                href={`/${article.slug}`}
                className="text-indigo-500 inline-flex items-center"
              >
                Learn More
                <svg
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  fill="none"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
              <div>
                <span className="text-gray-600 mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-300">
                  {article.favorited ? (
                    <MdFavorite />
                  ) : (
                    <MdFavoriteBorder size={16} />
                  )}
                </span>
                <span className="text-gray-600 mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-300">
                  <svg
                    className="w-4 h-4 mr-1"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                  {article.favoritesCount}
                </span>
                <span className="text-gray-600 inline-flex items-center leading-none text-sm">
                  <svg
                    className="w-4 h-4 mr-1"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                  </svg>
                  6
                </span>
              </div>
              <div>
                {article?.tagList?.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-blue-400 rounded-md text-blue-200 inline-block p-1 mr-2"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <a href={`/${article.slug}`} className="inline-flex items-center">
              <img
                alt="blog"
                src={article?.author?.image}
                className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
              />
              <span className="flex-grow flex flex-col pl-4">
                <span className="title-font font-medium text-gray-900">
                  {article?.author?.username}
                </span>
                <span className="text-gray-500 text-sm">UI DEVELOPER</span>
              </span>
            </a>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Home;
