import { Container } from '@mui/material'
import React from 'react'
import Newscard from '../Newscard/Newscard'
import "./NewsContent.css"

// using "mui Container" for responsiveness
function NewsContent({ newsArray, newsResults, setLoadMore, loadMore }) {
    return (
        <Container maxWidth="md">
            <div className="content">

                {/* playstore keyword */}
                <div className="downloadMessage">
                    <span className="downloadText">
                        For the best experience use inshorts app on your smartphone
                    </span>
                    <img
                        alt="app store"
                        height="80%"
                        src="https://assets.inshorts.com/website_assets/images/appstore.png"
                    />
                    <img
                        alt="play store"
                        height="80%"
                        src="https://assets.inshorts.com/website_assets/images/playstore.png"
                    />
                </div>


                {/* newscard - now we are going to map the whole comming array as "newsArray" to components to pass to Newscard*/}


                {
                    newsArray.map((item) => (

                        <Newscard
                            newItem={item}
                            key={item.title}
                        />

                    ))
                }


                {
                    // if more than then loadmore Button will disappear
                    loadMore <= newsResults && (
                        <>

                            <hr />
                            <button className='loadMore'
                                onClick={() => setLoadMore(loadMore + 20)}
                            >
                                LoadMore
                            </button>
                        </>
                    )
                }



            </div>
        </Container>
    )
}

export default NewsContent
