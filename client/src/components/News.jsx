import './news.css';
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';

const newsgetter = async () => {
  try {
    const apiKey = "d636d7ce9a7e4051a4f9cb9892743e04";
    const url = `https://newsapi.org/v2/everything?q=human&sortBy=popularity&apiKey=d636d7ce9a7e4051a4f9cb9892743e04`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data.articles;

  } catch (error) {
    console.error('Error fetching news:', error);
    throw error;
  }
};

function parseNews(news) {
  return news.map((article) => ({
    title: article.title,
    description: article.description,
    urlToImage: article.urlToImage,
    url: article.url,
  }));
}

function News() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const result = await newsgetter();
        setNews(parseNews(result));
        console.log(result);
      } catch (error) {
        // Handle errors
        console.error('Error:', error);
      }
    };

    fetchNews();
  }, []); // Empty dependency array ensures this effect runs only once on mount

  // Filter out articles with the title "Removed"
  const filteredNews = news.filter((article) => article.title !== "[Removed]");
  return (
      <div className="news">
      {filteredNews.length > 0 && (
        <Swiper
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          {filteredNews.map((article) => (
            <SwiperSlide key={article.title}>
              <div className="swiper-slide-content">
                <a href={article.url} className="slide-link">
                  <div
                    className="slide-image"
                    style={{ backgroundImage: `url(${article.urlToImage})` }}
                  />
                  <div className="slide-details">
                    <h2 className="slide-title">{article.title}</h2>
                    <p className="slide-description">{article.description}</p>
                  </div>
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
}

export default News;
