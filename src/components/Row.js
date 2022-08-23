import React, { useEffect, useState } from 'react'
import axios from './axios';

import './css/Row.css';
import YouTube from "react-youtube";
import movieTrailer from 'movie-trailer';

const baseUrl = "https://image.tmdb.org/t/p/original/";

function Row( {title, fetchUrl, isLarge} ) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");

    // A snippet of code which runs based on a special condition
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            // console.log(request.data.results);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
        // if [] is empty, run once when row loads and don't load again.
        // if [fetchUrl], everytime Url items changes useEffect will run.
    }, [fetchUrl]);

    // console.table(movies);

    const opts = {
        height: "300",
        width: "100%",
        playerVars: {
            autoplay: 1
        },
    };

    const handleClick = (movie) => {
        if(trailerUrl)
            setTrailerUrl('');
        else
            movieTrailer(movie?.name || "")
            .then((url) => {
                const urlParams = new URLSearchParams(new URL(url).search);
                setTrailerUrl(urlParams.get('v'));
            })
            .catch((error) => console.log(error));
    }

  return (
    <div className='row'>
        <h2>{title}</h2>
        <div className='rowPosters'>
            {/* row posters */}
            {movies.map(movie => (
                <img onClick = {() => handleClick(movie)} key = {movie.id} className = 'rowPoster' src = {`${baseUrl}${movie.poster_path}`} alt = {movie.name}/>
            ))}
            {/* <img key = {movie.id} className = {`rowPoster ${isLarge && "rowPosterLarge"}`} src = {`${baseUrl}${isLarge ? movie.poster_path : movie.backdrop_path}`} alt = {movie.name}/> */}
            {/* <img key = {movie.id} className = 'rowPoster' src = {`${baseUrl}${movie.poster_path}`} alt = {movie.name}/> */}
        </div>
         
    </div>
  )
}

export default Row