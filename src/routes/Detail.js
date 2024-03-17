import { useEffect, useState } from "react";
import { useParams } from "react-router";
import YouTube from "react-youtube";

function Detail() {
  const {id} = useParams();
  const [details, setDetails] = useState([]);
  const getMovie = async () => {
    const json = await ( 
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json.data.movie);
    setDetails(json.data.movie);
  };
  useEffect(() => {
    getMovie()
  }, []);
  
  return (
    <div>
      <h1>{details.title}</h1>
      <img src={details.medium_cover_image}></img>
      <h3>{details.year}</h3>
      <div>
        {details.genres?.map((genre, idx) => (
        <h3 key={idx}>{genre}</h3>
      ))}
      </div>
      <h3>imdb rating : {details.rating}/10</h3>
      <h3>summary : {details.description_full?details.description_full:"No Description"}</h3>
      <YouTube videoId={details.yt_trailer_code?details.yt_trailer_code:null}/>
    </div>
  )
  
  
}

export default Detail;