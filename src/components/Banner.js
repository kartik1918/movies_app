import "./Banner.css";
import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer.js";

const Banner = ({ trendingMovies, setPage, page }) => {
  const [isFavourite, setIsFavourite] = useState({
    status: false,
    id: "",
  });

  const handleIsFavourite = (movieId, favMovie) => {
    setIsFavourite((prevValue) => {
      return {
        ...prevValue,
        status: true,
        id: movieId,
      };
    });
  };

  /* Displaying all pages instead of one page like << 1 2 3 >> */

  // const addPages = () => {
  //   setPagesArr(prevPage => [...prevPage, page])
  // }

  /************************************************************/

  return (
    <div>
      <h3 className="banner-head">Trending Movies</h3>
      <div className="movie-list-container">
        {!trendingMovies ? (
          <Shimmer />
        ) : (
          trendingMovies.results?.map((trendingMovie, index) => {
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
                <p>Popularity: {Math.ceil(trendingMovie.popularity)}</p>
                {isFavourite.status && isFavourite.id === trendingMovie.id ? (
                  <button>Added to Favourite</button>
                ) : (
                  <button
                    onClick={() =>
                      handleIsFavourite(trendingMovie.id, trendingMovie)
                    }
                  >
                    Add to Favourite
                  </button>
                )}
              </div>
            );
          })
        )}
      </div>
      <div className="pagination">
        <button onClick={() => setPage(page => page-1)}>&laquo;</button>
        <a href="#">{trendingMovies.page}</a>
        <button onClick={() => setPage(page => page+1)}>&raquo;</button>
      </div>
    </div>
  );
};

export default Banner;
