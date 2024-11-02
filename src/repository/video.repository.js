const Video = require("../models/video.model.js");

class VideoRepository {
  constructor() {}

  async getAllVideos() {
    return await Video.find();
  }
  async getVideoById(videoId) {
    return await Video.findOne({ _id: videoId });
  }
  async createVideo(title) {
    const video = Video({ title: title});
 
    return await video.save();
  }
  async updateVideo(id, data) {
    return await Video.findOneAndUpdate({ _id: id }, data, { new: true });
  }

  async deleteVideo(videoId) {
    return await Video.findOneAndDelete({ _id: videoId });
  }
  async deleteAllVideos() {
  
    return await Video.deleteMany({});
  }
}

module.exports = new VideoRepository();
