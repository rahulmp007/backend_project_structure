const videoRepo = require("../repository/video.repository.js");
const Video = require("../models/video.model.js");
const videoRepository = require("../repository/video.repository.js");
class VideoService {
  async getAllVideos() {
    return await videoRepo.getAllVideos();
  }
  async getVideoById(videoId) {
    return await videoRepo.getVideoById(videoId);
  }
  async createVideo(title) {
    return await videoRepo.createVideo(title);
  }
  async updateVideo(id, data) {
    return await videoRepo.updateVideo(id, data);
  }
  async deleteVideo(videoId) {
    return await videoRepository.deleteVideo(videoId);
  }
  async deleteAllVideos() {
    return await videoRepository.deleteAllVideos();
  }
}

module.exports = new VideoService();
