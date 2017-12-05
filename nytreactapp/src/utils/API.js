import axios from 'axios';

const APIKEY = "78eafa1586604de49269afac88e9b185";
const URL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?"; 

export default {
  search: function(searchString, startDate, endDate) {
    return axios.get(URL + "api-key=" + APIKEY + "&q=" + searchString + "&begin_date=" + startDate + "&end_date=" + endDate)
                

  }
};

