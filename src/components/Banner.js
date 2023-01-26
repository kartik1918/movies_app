import "./Banner.css";
import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer.js";

const Banner = ({ trendingMovies, setPage, page, handleFavourite }) => {
  const [isFavourite, setIsFavourite] = useState({
    status: false,
    id: "",
  });
  const [pagesArr, setPagesArr] = useState([page])

  const handleIsFavourite = (movieId, favMovie) => {
    setIsFavourite((prevValue) => {
      return {
        ...prevValue,
        status: true,
        id: movieId,
      };
    });
  };

  const addPages = () => {
    setPagesArr(prevPages => [...prevPages, page+1])
  }

  if (!trendingMovies) return <div>No Data Found</div>

  return (
    <div>
      <h3 className="banner-head">Trending Movies</h3>
      <div className="movie-list-container">
        {!trendingMovies.results ? (
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
                      {
                        handleIsFavourite(trendingMovie.id, trendingMovie)
                        handleFavourite(trendingMovie)
                      }
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
        <>{pagesArr?.map((page, index) => {
          return <a href="#" key={index}>{page}</a>
        })}</>
        <button onClick={() => {
          addPages()
          setPage(page => page+1)
        }}>&raquo;</button>
      </div>
    </div>
  );
};

export default Banner;
