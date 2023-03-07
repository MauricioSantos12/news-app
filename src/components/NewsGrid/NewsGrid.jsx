import React, { useEffect, useState } from 'react'
import { getNews } from '../../actions/index'
import './NewsGrid.scss'
import { newsJsonData } from '../../newsJSON'
import { cloneDeep as _cloneDeep } from "lodash";
import { Star } from 'feather-icons-react'
const NewsGrid = () => {

  const [newsData, setNews] = useState([])
  const [firstNews, setFirstNews] = useState({})
  useEffect(()=> {
    const getNewsData = async () => {
      let result = await getNews('world');
      if(result && result.data && result.data.articles){
        setNews(result.data.articles.splice(1,4))
        setFirstNews(result.data.articles[0])
      }else{
        let _newsJsonData = _cloneDeep(newsJsonData)
        setNews(_newsJsonData.splice(2,4))
        setFirstNews(newsJsonData[0])
      }
      
    }
    setTimeout(() => {
      getNewsData()
    }, "1000");
    
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
    <section className='container-top-news'>
        <section className='container-principal-news'>
            <span>{firstNews.topic}</span>
            <h4>{firstNews.title}</h4>
            <img src={firstNews.media} alt={firstNews.title} />
            <p>{firstNews.summary}</p>
        </section>
        <section className='conteiner-grid-news'>
            {
                newsData.map(newData => {
                    return(
                        <div className='container-new-grid' key={newData._id}>
                            <span>{newData.topic}</span>
                            <div className='container-new-grid-title' onClick={() => favoriteNew(newData)}>
                              <h4>{newData.title}</h4>
                              <Star className={newData.favorite && newData.favorite == 1 ? 'icon-star-new-latest favorite' : 'icon-star-new-latest' } />
                            </div>
                            <img src={newData.media} alt={newData.title} />
                        </div>
                    )
                })
            }
        </section>
    </section>
  )
}

export default NewsGrid