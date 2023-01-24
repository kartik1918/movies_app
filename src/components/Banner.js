import "./Banner.css";
import React from "react";
import Shimmer from "./Shimmer.js";

const Banner = ({ trendingMovies }) => {
  return (
    <div>
      <h3 className="banner-head">Trending Movies</h3>
      <div className="movie-list-container">
        {!trendingMovies ? (
          <Shimmer />
        ) : (
          trendingMovies?.map((trendingMovie, index) => {
            return (
              <div key={trendingMovie.id} className="movie-card">
                <img
                  src={`https://image.tmdb.org/t/p/w500${trendingMovie.backdrop_path}`}
                  alt={trendingMovie.name}
                  className="movie-image"
                />
                <h3>
                  {trendingMovie.name
                    ? trendingMovie.name
                    : trendingMovie.title}
                </h3>
                {/* <p className="movie-overview">{trendingMovie.overview}</p> */}
                <p>Popularity: {trendingMovie.popularity}</p>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Banner;
