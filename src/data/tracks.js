import musicApi from './musicApi'

const tracksService = {}

tracksService.search = function (q) {
  const type = 'track'

  return musicApi.get('/search', {
    params: {
      q: q,
      type: type
    }
  })
    .then(res => res.data)
}

export default tracksService
