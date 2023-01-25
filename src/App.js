import React, { useEffect, useState } from 'react'
import Banner from './components/Banner.js'
import Navbar from './components/Navbar.js'

const App = () => {
  const [moviesData, setMoviesData] = useState([])
  const [favourites, setFavourites] = useState([])
  const [currPage, setCurrPage] = useState(1)

  const fetchMovies = async () => {
    const response = await fetch(`
    https://api.themoviedb.org/3/trending/all/day?api_key=6a2290aac1acc1d3c63e4a0db41012a4&page=${currPage}`)
    const data = await response.json()

    console.log(data);
    setMoviesData(data)
  }

  const handleFavourite = () => {
    setFavourites(prevFav => [...prevFav, favMovie])
  }

  useEffect(() => {
    fetchMovies()
  }, [currPage])


  return (
    <div>
      <Navbar />
      <Banner trendingMovies={moviesData} setPage={setCurrPage} page={currPage} />
    </div>
  )
}

export default App