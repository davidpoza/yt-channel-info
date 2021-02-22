const helper = require('../helper')

class YoutubeVideoFetcher {
  constructor(id, continuation) {
    this._url = `https://youtube.com/watch?v=${id}/`
    this.continuation = continuation
  }

  static async getVideo(videoId) {
    const videoUrl = `https://youtube.com/watch?v=${videoId}?flow=grid&view=0&pbj=1`
    const videoPageResponse = await helper.makeVideoRequest(videoUrl)

    if (videoPageResponse.error) {
      return Promise.reject(videoPageResponse.message)
    }

    return await helper.parseVideoResponse(videoPageResponse, videoId)
  }
}

module.exports = YoutubeVideoFetcher
