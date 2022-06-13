const fetch = require('node-fetch')

module.exports = {
  getAiringToday,
  getOnTv,
  getPopular,
  getTopRated,
  getTvDetails,
  addToTvList,    
};

async function getAiringToday(req, res) {
  const tvshows = await fetch(`https://api.themoviedb.org/3/tv/airing_today?api_key=0debf7e322c372742f6079fe3d10685b&language=en-US&page=${req.query.page}`)
      .then((res) => {
        return res.json();
      })
      .then(data => data.results)
      
      res.json(tvshows)
}

async function getOnTv(req, res) {
  const tvshows = await fetch(`https://api.themoviedb.org/3/tv/on_the_air?api_key=0debf7e322c372742f6079fe3d10685b&language=en-US&page=${req.query.page}`)
      .then((res) => {
        return res.json();
      })
      .then(data => data.results)
      
      res.json(tvshows)
}

async function getPopular(req, res) {
  const tvshows = await fetch(`https://api.themoviedb.org/3/tv/popular?api_key=0debf7e322c372742f6079fe3d10685b&language=en-US&page=${req.query.page}`)
      .then((res) => {
        return res.json();
      })
      .then(data => data.results)

      res.json(tvshows)
}

async function getTopRated(req, res) {
  const tvshows = await fetch(`https://api.themoviedb.org/3/tv/top_rated?api_key=0debf7e322c372742f6079fe3d10685b&language=en-US&page=${req.query.page}`)
      .then((res) => {
        return res.json();
      })
      .then(data => data.results)

      res.json(tvshows)
}

async function getTvDetails(req, res) {
  const {id} = req.body;
  const tvshow = await fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=${process.env.API_KEY}&language=en-US`)
      .then((res) => {
        return res.json();
      })
  res.json(tvshow);      
}

async function addToTvList(req, res) {
  let tv = await Tv.findOne({apiId: req.body.apiId})
  if (tv) {
    let user = tv.watchList.includes(req.user_id)
    if (user) return
      tv.watchList.push(req.user._id);
      await tv.save();
      res.json(tv);

  } else {
      req.body.watchList = req.user._id;
      const newTvList = new Tv(req.body);
      await newTvList.save();
      res.json(newTvList);
  }
}