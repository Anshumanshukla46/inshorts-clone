import React from 'react'
import "./Newscard.css"

const Newscard = ({ newItem }) => {

    const fullDate = new Date(newItem.publishedAt)

    var date = fullDate.toString().split(" ")
    const hrs = parseInt(date[4].substring(0, 2))
    const time = hrs > 12 ? true : false

    return (
        <div className='newsCard'>
            <img src={newItem.urlToImage
                ? newItem.urlToImage
                : "https://media.istockphoto.com/id/1357365823/vector/default-image-icon-vector-missing-picture-page-for-website-design-or-mobile-app-no-photo.jpg?s=612x612&w=0&k=20&c=PM_optEhHBTZkuJQLlCjLz-v3zzxp-1mpNQZsdjrbns="}
                alt={newItem.title}
                className="newsImage"
            />


            <div className="newsText">

                <div>
                    <span className='title'>
                        {newItem.title}
                    </span>

                    <br /> {" "}

                    <span className='author'>
                        <a href={newItem.url} target="__blank">
                            <b>Short</b>{" "}
                        </a>
                        <span className="muted">
                            by {newItem.author ? newItem.author : "unknown"} {"/ "}
                            {
                                time ? `${hrs - 12} : ${date[4].substring(3, 5)} pm` : `${hrs} : ${date[4].substring(3, 5)} am`
                            }
                            on {date[2]} {date[1]} {date[3]}{", "}{date[0]}
                        </span>
                    </span>


                    <div className='lowerNewsText'>

                        <div className="description">
                            {newItem.description}
                        </div>
                        <span className="readmore">
                            read more at <a href={newItem.url} target="__blank">
                                <b>{newItem.source.name}</b>
                            </a>
                        </span>

                    </div>

                </div>
            </div>

        </div>




    )
}

export default Newscard
