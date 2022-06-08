const fetch = require('node-fetch')

module.exports = {
  getAiringToday,
  getOnTv,
  getPopular,
  getTopRated,  
};

async function getAiringToday(req, res) {
  const tvshows = await fetch(`https://api.themoviedb.org/3/tv/airing_today?api_key=0debf7e322c372742f6079fe3d10685b&language=en-US&page=1`)
      .then((res) => {
        return res.json();
      })
      .then(data => data.results)
      
      res.json(tvshows)
}

async function getOnTv(req, res) {
  const tvshows = await fetch(`https://api.themoviedb.org/3/tv/on_the_air?api_key=0debf7e322c372742f6079fe3d10685b&language=en-US&page=1`)
      .then((res) => {
        return res.json();
      })
      .then(data => data.results)
      
      res.json(tvshows)
}

async function getPopular(req, res) {
  const tvshows = await fetch(`https://api.themoviedb.org/3/tv/popular?api_key=0debf7e322c372742f6079fe3d10685b&language=en-US&page=1`)
      .then((res) => {
        return res.json();
      })
      .then(data => data.results)

      res.json(tvshows)
}

async function getTopRated(req, res) {
  const tvshows = await fetch(`https://api.themoviedb.org/3/tv/top_rated?api_key=0debf7e322c372742f6079fe3d10685b&language=en-US&page=1`)
      .then((res) => {
        return res.json();
      })
      .then(data => data.results)

      res.json(tvshows)
}

