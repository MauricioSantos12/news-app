import React from 'react'
import { useSelector } from 'react-redux'
import './favorites.scss'

const Favorites = () => {
  const favoriteNews = useSelector((state) => state.favoriteNews.news)
  return (
    <section className='conteiner-fav-news-general'>
        {
            favoriteNews.map((newData, i) => {
                return(
                    <div className='conteiner-fav-news' key={newData._id}>
                        <span>{newData.topic}</span>
                        <div className='container-fav-news-title'><h4>{newData.title}</h4> </div>
                        <img src={newData.media} alt={newData.title} />
                    </div>
                )
            })
        }
    </section>
  )
}

export default Favorites