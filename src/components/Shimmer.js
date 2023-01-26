import "./Banner.css"
import React from 'react'

const Shimmer = () => {

  return (
    <div className="movie-list-container">
        {Array(10).fill("").map((item, index) => {
            return (
                <div className='shimmer-card' key={index}></div>
            )
        })}
    </div>
  )
}

export default Shimmer