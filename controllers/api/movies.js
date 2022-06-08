const fetch = require('node-fetch')

module.exports = {
  getNowPlaying,
  getPopular,
  getTopRated,
  getUpcoming,  
};

async function getNowPlaying(req, res) {
  const movies = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=0debf7e322c372742f6079fe3d10685b&language=en-US&page=1`)
      .then((res) => {
        return res.json();
      })
      .then(data => data.results)
      
      res.json(movies)
}

async function getPopular(req, res) {
  const movies = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=0debf7e322c372742f6079fe3d10685b&language=en-US&page=1`)
      .then((res) => {
        return res.json();
      })
      .then(data => data.results)
      
      res.json(movies)
}

async function getTopRated(req, res) {
  const movies = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=0debf7e322c372742f6079fe3d10685b&language=en-US&page=1`)
      .then((res) => {
        return res.json();
      })
      .then(data => data.results)

      res.json(movies)
}

async function getUpcoming(req, res) {
  const movies = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=0debf7e322c372742f6079fe3d10685b&language=en-US&page=1`)
      .then((res) => {
        return res.json();
      })
      .then(data => data.results)

      res.json(movies)
}

