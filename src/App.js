import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Header from './components/Header';
import Search from './pages/Search';
import MovieDetail from './pages/MovieDetailPage';
import PageNotFound from './pages/PageNotFound';
import MovieList from './pages/MovieList';
import Footer from './components/Footer';
import React, { useEffect, useState } from "react";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const [show, setShow] = useState([]);
  const [darkMode,setdarkMode] = useState()
  const getData = async () => {
    try {
      await fetch("https://api.themoviedb.org/3/discover/movie?api_key=67805d30a12125f29162ea1a8357dfb9")
        .then(res => res.json())
        .then(json => setShow(json.results))
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    // getData()
  }, [])

  return (
    <div className="App">
      {
        show.map((data) => {
          return <>
            <img src={`https://image.tmdb.org/t/p/w500${data?.poster_path}`} />
          </>
        })
      }
      <BrowserRouter>
        <Header />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<MovieList api_path="movie/now_playing" title="Home" />} />
          <Route path="/movies/:id" element={<MovieDetail />} />
          <Route path="/movies/upcoming" element={<MovieList api_path="movie/upcoming"  title="Upcoming"  />} />
          <Route path="/movies/popular" element={<MovieList api_path="movie/popular"  title="Popular" />} />
          <Route path="/movies/top" element={<MovieList api_path="movie/top_rated"  title="Top Rated" />} />
          <Route path="search" element={<Search api_path="search/movie"  title="Search" />} />
          <Route path="*" element={<PageNotFound  title="Page Not Found" />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
