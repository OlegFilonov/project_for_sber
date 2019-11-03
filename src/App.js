import React from 'react';
import logo from './logo.svg';
import './App.css';
import SearchArea from "./components/searchArea/SearchArea";
import {newsData} from "./data";
import SearchBar from "./components/searchArea/searchBar/SearchBar";
import NewsArea from "./components/newsArea/NewsArea";

function App() {
   return (
    <div className='App'>
      <SearchArea/>
      <NewsArea/>
    </div>
  );
}

export default App;
