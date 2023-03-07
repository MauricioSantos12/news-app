import React, { useEffect, useState } from 'react'
import { getNews } from '../../actions/index'
import './SliderNews.scss'
import { newsJsonData } from '../../newsJSON'
import { Star } from 'feather-icons-react';
import { cloneDeep as _cloneDeep } from "lodash";

const SliderNews = () => {

  const [newsData, setNews] = useState([])
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
  }

  return (
    <section className='container-general-slider'>
        <h2>Lo último</h2>
        <div className='continer-slider'>
            {
                newsData.map(newData => {
                    return(
                        <div className='container-new-latest' key={newData._id}>
                            <img src={newData.media} alt={newData.title} />
                            <div className='container-new-latest-title' onClick={() => favoriteNew(newData)}>
                              <h4>{newData.title}</h4>
                              <Star className={newData.favorite && newData.favorite == 1 ? 'icon-star-new-latest favorite' : 'icon-star-new-latest' } />
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