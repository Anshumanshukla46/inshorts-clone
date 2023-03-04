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
  const [loadMore, setLoadMore] = useState(20);


  // api request using axios
  const newApi = async () => {
    try {

      // adding with pages 
      const news = await axios.get
        (`https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}&category=${category}&pageSize=${loadMore}`);

      setNewsArray(news.data.articles)
      setNewsResults(news.data.totalResults)

    } catch (err) {
      console.log(err);
    }
  }

  // console.log(newsArray);

  useEffect(() => {
    newApi()

    // added loadMore as dependency as when loadmore changed again the api call
  }, [newsResults, category, loadMore])



  return (
    <div>
      <Navbar setCategory={setCategory} />

      <NewsContent
        loadMore={loadMore}
        setLoadMore={setLoadMore}
        newsArray={newsArray}
        newsResults={newsResults}
      />

      <Footer />
    </div>
  )
}

export default App
