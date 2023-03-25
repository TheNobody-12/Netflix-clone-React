const API_KEY = "5981ab00cf2f525e7f4d56f9d60255e9";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-Us`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&Swith_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

// request in made as below format
//https://api.themoviedb.org/4/trending/all/week?api_key=5981ab00cf2f525e7f4d56f9d60255e9&language=en-US

export default requests;
