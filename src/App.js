import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "./App.css"
import Navbar from './components/Navbar'
import NewsContent from './components/NewsContent/NewsContent'
import apiKey from './data/config';
import Footer from "./components/footer/Footer"

function App() {


  const [category, setCategory] = useState("general")
  const [newsArray, setNewsArray] = useState([])
  const [newsResults, setNewsResults] = useState()


  // api request using axios
  const newApi = async () => {
    try {

      const news = await axios.get
        (`https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}&category=${category}`);

      setNewsArray(news.data.articles)
      setNewsResults(news.data.totalResults)

    } catch (err) {
      console.log(err);
    }
  }

  // console.log(newsArray);

  useEffect(() => {
    newApi()
  }, [newsResults, category])



  return (
    <div>
      <Navbar setCategory={setCategory} />

      <NewsContent
        newsArray={newsArray}
        newsResults={newsResults}
      />

      <Footer />
    </div>
  )
}

export default App
