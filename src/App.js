import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "./App.css"
import Navbar from './components/Navbar'
import NewsContent from './components/NewsContent/NewsContent'
import Footer from "./components/footer/Footer"

function App() {


  const [category, setCategory] = useState("general")
  const [newsArray, setNewsArray] = useState([])
  const [newsResults, setNewsResults] = useState()
  const [loadMore, setLoadMore] = useState(20);


  // api request using axios
  /** 
   * 
   * THIS IS NOT GOING FOR DEPLOYING AS WE HAVE NOT TAKING THE BUSINESS SUBCRIPTION  */
  const newApi = async () => {
    try {

      // adding with pages 
      const news = await axios.get
        (`https://newsapi.org/v2/top-headlines?country=in&apiKey=${process.env.REACT_APP_API_KEY}&category=${category}&pageSize=${loadMore}`);

      setNewsArray(news.data.articles)
      setNewsResults(news.data.totalResults)

    } catch (err) {
      console.log(err);
    }
  }



  // it is done as backend and frontend is not on the same server : cost_error

  // const newApi = async () => {
  //   try {

  //     // now this proxy url to avoide cost error
  //     // but now using this it will not work if not deployed and also not always in local host as well
  //     const proxyUrl = "https://cors.anywhere.herokuapp.com/"



  //     // adding with pages 
  //     const news = await axios.get
  //       (`https://${proxyUrl}newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}&category=${category}&pageSize=${loadMore}`);

  //     setNewsArray(news.data.articles)
  //     setNewsResults(news.data.totalResults)

  //   } catch (err) {
  //     console.log(err);
  //   }
  // }



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
