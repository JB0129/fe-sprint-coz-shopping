import React from 'react'
import './App.css';
import Main from './pages/Main'
import Product from './pages/Product'
import Bookmark from './pages/Bookmark'
import Header from './component/Header'
import Footer from './component/Footer'
import { data } from './data/data.js'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from 'axios';

function App() {

  const [isData, setData] = useState(null)
  const [isBookmark, setBookmark] = useState(data)

  const getData = () => {
    return axios.get('http://cozshopping.codestates-seb.link/api/v1/products')
      .then(res => {
        console.log(res.data)
        setData(res.data)
      })
      .catch(err => console.log(err.response.data))
  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className='body'>
          <Routes>
            <Route path='/' element={<Main isData={isData} isBookmark={isBookmark} />} />
            <Route path='/product' element={<Product isData={isData} />} />
            <Route path='/bookmark' element={<Bookmark isBookmark={isBookmark} />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;