const videoService = require("../services/video.service.js");

class VideoController {
  async getAllVideos(req, res, next) {
    try {
      const videos = await videoService.getAllVideos();
      res.status(200).json({ videos: videos });
    } catch (error) {
      next(error);
    }
  }
  async getVideoById(req, res, next) {
    try {
      const { videoId } = req.params;
      const video = await videoService.getVideoById(videoId);
      res.status(200).json({ video: video });
    } catch (error) {
      next(error);
    }
  }
  async createVideo(req, res, next) {
    try {
      const { title } = req.body;

      const video = await videoService.createVideo(title);
      console.log(video);
      res.status(201).json({ data: video });
    } catch (error) {
      next(error);
    }
  }
  async updateVideo(req, res, next) {
    const { title } = req.body;
    const { videoId } = req.params;
    console.log(title);
    console.log(videoId);

    try {
      const updated = await videoService.updateVideo(videoId, { title: title });
      console.log(updated);
      res.status(200).json({ message: "video updated" });
    } catch (error) {
      next(error);
    }
  }
  async deleteVideo(req, res, next) {
    try {
      const { videoId } = req.params;
      const video = await videoService.deleteVideo(videoId);
      res.status(200).json({ messge: `video with id ${videoId} deleted` });
    } catch (error) {
      next(error);
    }
  }
  async deleteAllVideos(req, res, next) {
    try {
      await videoService.deleteAllVideos();
      res.json({ message: "videos deleted" });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new VideoController();
