import "./Banner.css"
import React from 'react'

const Shimmer = () => {
    console.log("running shimmer");

  return (
    <div>
        {Array(10).fill("").map((item, index) => {
            return (
                <div className='shimmer-card'></div>
            )
        })}
    </div>
  )
}

export default Shimmer