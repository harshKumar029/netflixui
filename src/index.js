import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Netflixfp from './component/1stpage/netflix-frontpage/netflixfp';
import Ontv from './component/1stpage/ontv/ontv';
import Show from './component/1stpage/showdown/show';
import Watchev from './component/1stpage/watchev/watchev';
import Kidsp from './component/1stpage/kidsp/kidsp';
import Footer from './component/footer/footer';
import Secpage from './component/2page/all component/2ndpage';
import MovieDetailsPage from './component/movie detail/moviedetail';
import Navbar from './component/navbar/navbar';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter  >
    <Navbar />
    {/* <Secpage /> */}
    <Routes>
      <Route path="/" element={<>
        <Netflixfp />
        <Ontv />
        <Show />
        <Watchev />
        <Kidsp />
      </>} />
      <Route path="/Action" element={
        <>
          <Secpage />
        </>
      } />
      <Route path="/movie/:id" element={<MovieDetailsPage />} />
    </Routes>
    <Footer />
  </BrowserRouter  >
);

reportWebVitals();
