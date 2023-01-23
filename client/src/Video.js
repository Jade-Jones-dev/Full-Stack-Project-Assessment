import React from 'react'

const Video = ({id, title, url, rating}) => {
  return (
    <div className='card'>
        <div className='card-body'>
            {title}
            {url}
            {rating}
        </div>
    </div>
  )
}

export default Video