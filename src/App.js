import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "./App.css"
import Navbar from './components/Navbar'
import NewsContent from './components/NewsContent/NewsContent'
import apiKey from './data/config';

function App() {


  const [category, setCategory] = useState("general")
  const [newsArray, setNewsArray] = useState([])
  const [newsResults, setNewsResults] = useState()


  // api request using axios
  const newApi = async () => {
    try {

      const news = await axios.get
        (`https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}&category=${category}`);

      console.log(news.data.articles);

    } catch (err) {
      console.log(err);
    }
  }



  useEffect(() => {
    newApi()
  }, [])



  return (
    <div>
      <Navbar setCategory={setCategory} />

      <NewsContent />
    </div>
  )
}

export default App
