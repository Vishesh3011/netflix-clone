import React, { useEffect, useState } from 'react'

import axios from './axios';
import requests from './requests';
import './css/Banner.css'

function Banner() {
    //stores random movie to be rendered
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData(){
          const request = await axios.get(requests.fetchTrending)
          setMovie(
            request.data.results[
            // simplifies to one string
            Math.floor(Math.random() * request.data.results.length - 1)
          ]);
          return request;
        }
        fetchData();
    }, []);

    console.log(movie);

    function truncate(str, n){
      return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }

  return (
    <div>
        <header className='banner' style={{
          backgroundSize: "cover",
          backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
          backgroundPosition: "center center"
        }}>
           <div className='bannerContents'>
              <h1 className='bannerTitle'>
                {movie?.title || movie?.name || movie?.original_name}
              </h1>
              <div className='bannerButtons'>
                <button className='bannerButton'>
                  Play
                </button>
                <button className='bannerButton'>
                  My List
                </button>
                <h1 className='bannerDescription'>{truncate(movie?.overview, 150)}</h1>
              </div>
           </div>
           <div className='bannerFadeBottom'/>
        </header>
    </div>
  )
}

export default Banner