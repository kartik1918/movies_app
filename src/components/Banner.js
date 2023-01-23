import "./Banner.css";
import React from "react";
import Shimmer from "./Shimmer.js";

const Banner = ({ trendingMovies }) => {
  return (
    <div>
      <h3>Trending Movies</h3>
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
                />
                <h3>
                  {trendingMovie.name
                    ? trendingMovie.name
                    : trendingMovie.title}
                </h3>
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
