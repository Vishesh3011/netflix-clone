import React from 'react';

import './App.css';
import Row from './components/Row';
import requests from './components/requests';
import Banner from './components/Banner'
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Banner/>
      <Row isLarge title = "Netflix Originals" fetchUrl = {requests.fetchNetflixOriginals}/>
      <Row title = "Trending Now" fetchUrl = {requests.fetchTrending}/>
      <Row title = "Top Rated" fetchUrl = {requests.fetchTopRated}/>
      <Row title = "Romance Movies" fetchUrl = {requests.fetchRomanceMovies}/>
      <Row title = "Documentaries" fetchUrl = {requests.fetchDocumentaries}/>
      <Row title = "Comedy Movies" fetchUrl = {requests.fetchComedyMovies}/>
      <Row title = "Horror Movies" fetchUrl = {requests.fetchHorrorMovies}/>
    </div>
  );
}

export default App;