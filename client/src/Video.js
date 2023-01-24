import ReactPlayer from "react-player";


const Video = ({title, url, rating}) => {
   
  return (
    <div className='card' >
        <ReactPlayer
			className='video'
	        width={380}
			height={300}
			url={url}
						/>
        <div className='card-body'>
            <h4>{title}</h4>
            <a href={url}
			    rel='noopener noreferrer'
				className='btn btn-primary'>
				Watch Now
			</a>
            <h5>{rating}</h5>
        </div>
    </div>
  )
}

export default Video