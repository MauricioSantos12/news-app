import axios from 'axios';

export async function getNews(word) {
    let api_key = process.env.REACT_APP_API_KEY
    let url =  'https://api.newscatcherapi.com/v2/latest_headlines?'
    try {
       let response = await axios.get(
            url, {
          params: {
            topic: word,
            countries: 'US',
            page: 1
          },
          headers: {
             'Content-Type': 'application/json',
             'x-api-key': api_key
          }
       })
       return response;
    } catch (error) {
       return error;
    }
 }