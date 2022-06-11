const fetch = require('node-fetch')
const Movie = require('../../models/movie')

module.exports = {
  getNowPlaying,
  getPopular,
  getTopRated,
  getUpcoming,
  getSearch,
  getDetails,
  addToWatchList,  
};

async function getNowPlaying(req, res) {
  const movies = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.API_KEY}&language=en-US&page=1`)
      .then((res) => {
        return res.json();
      })
      .then(data => data.results)
      
      res.json(movies)
}

async function getPopular(req, res) {
  const movies = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`)
      .then((res) => {
        return res.json();
      })
      .then(data => data.results)
      
      res.json(movies)
}

async function getTopRated(req, res) {
  const movies = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.API_KEY}&language=en-US&page=1`)
      .then((res) => {
        return res.json();
      })
      .then(data => data.results)

      res.json(movies)
}

async function getUpcoming(req, res) {
  const movies = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.API_KEY}&language=en-US&page=1`)
      .then((res) => {
        return res.json();
      })
      .then(data => data.results)

      res.json(movies)
}

async function getSearch(req, res) {
  const search = await fetch(`https://api.themoviedb.org/3/search/multi?&query=${req.body.search}&api_key=${process.env.API_KEY}&language=en-US&page=1&include_adult=false`)
  .then((res) => {
    return res.json();
  })
  .then(data => data.results)

  res.json(search)
}

async function getDetails(req, res) {
  const {id} = req.body;
  const movie = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY}&language=en-US`)
      .then((res) => {
        return res.json();
      })
  res.json(movie);      
}

async function addToWatchList(req, res) {
  console.log(req.body)
  let movie = await Movie.findOne({apiId: req.body.apiId})
  if (movie) {
    let user = movie.watchList.includes(req.user_id)
    if (user) return
      movie.watchList.push(req.user._id);
      await movie.save();
      res.json(movie);

  } else {
      req.body.watchList = req.user._id;
      const newWatchList = new Movie(req.body);
      await newWatchList.save();
      res.json(newWatchList);
  }
}
