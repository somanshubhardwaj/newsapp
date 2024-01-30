import Image from "next/image";
async function fetchNews() {
  const res = await fetch(
    "https://newsapi.org/v2/top-headlines?country=us&apiKey=15618522b32b4694bafd42d58741a875"
  );
  const data = await res.json();
  return data;
}
export default async function Home() {
  const news = await fetchNews();
  return (
    <>
      <navbar className="bg-gray-800">
        
      </navbar>
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold">News App</h1>
        <p>
          News App is a web application that allows users to view the latest
          news from various sources.
        </p>
        <h2 className="text-xl font-bold mt-4">News</h2>
        <ul className="mt-2">
          {news.articles.map((article, index) => (
            <li key={index} className="my-4">
              <h3 className="text-lg font-bold">{article.title}</h3>
              <p>{article.description}</p>
              <img src={article.urlToImage} alt="article image" className="my-2" />
              <a href={article.url}>
                <button className="bg-blue-500 text-white px-4 py-2 rounded mt-2">
                  Read More
                </button>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
