import axios from "axios";

const movieBaseUrl="https://api.themoviedb.org/3"
const api_key='fd430c34ec42665a78bde443a107a0b8'

const movieByGenreBaseURL='https://api.themoviedb.org/3/discover/movie?api_key=fd430c34ec42665a78bde443a107a0b8';

const getTrendingVideos=axios.get(movieBaseUrl+
    "/trending/all/day?api_key="+api_key);
    const getMovieByGenreId=(id)=>
    axios.get(movieByGenreBaseURL+"&with_genres="+id)

export default{
    getTrendingVideos,
    getMovieByGenreId
}