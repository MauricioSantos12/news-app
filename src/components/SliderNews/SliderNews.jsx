import React, { useEffect, useState } from 'react'
import { getNews } from '../../actions/index'
import './SliderNews.scss'
import { newsJsonData } from '../../newsJSON'
import { Star } from 'feather-icons-react';
import { cloneDeep as _cloneDeep } from "lodash";
import { useSelector, useDispatch } from 'react-redux'
import { setFavoriteNews } from '../../redux/actions/news'
import { Link } from 'react-router-dom';

const SliderNews = () => {

  const [newsData, setNews] = useState([])
  const dispatch = useDispatch()
  const favoriteNews = useSelector((state) => state.favoriteNews.news)

  useEffect(()=> {
    const getNewsData = async () => {
      let result = await getNews('business');
      if(result && result.data && result.data.articles){
        setNews(result.data.articles)
      }else{
        setNews(newsJsonData)
      }
    }
    setTimeout(() => {
        getNewsData()
      }, "2000");
  }, [])

  const favoriteNew = (newData) => {
    let _newsData = _cloneDeep(newsData)
    let _favoriteNews = favoriteNews;
    let indexToRemove;
    let addItem = true
    _favoriteNews.map((news, index) => {
      if(news._id == newData._id){
        addItem = false
        indexToRemove = index;
      }
      
    })
    if(addItem){
      _favoriteNews = [...favoriteNews, newData]
    }else{
      _favoriteNews.splice(indexToRemove)
    }

    _newsData.map(_newData => {
      if(_newData._id == newData._id){
        if(_newData.favorite){
          _newData.favorite = !_newData.favorite
        }else{
          _newData.favorite = 1
        }
      }
    })
    setNews(_newsData)
    dispatch(setFavoriteNews(_favoriteNews))
  }

  return (
    <section className='container-general-slider'>
        <h2>Lo último</h2>
        <div className='continer-slider'>
            {
                newsData.map((newData, i) => {
                    return(
                        <div className='container-new-latest' key={newData._id}>
                            <img src={newData.media} alt={newData.title} />
                            <div className='container-new-latest-title' onClick={() => favoriteNew(newData)}>
                              <Link to={'news/' + newData._id} state={{ data: newData }}><h4>{newData.title}</h4></Link>
                              <Star className={favoriteNews[i] && favoriteNews[i]._id && newData._id && favoriteNews[i]._id == newData._id ? 'icon-star-new-latest favorite' : 'icon-star-new-latest' } />
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </section>
  )
}

export default SliderNews