const express = require("express");
const videoController = require("../controllers/video.controller");

const router = express.Router();

router
  .route("/")
  .get(videoController.getAllVideos)
  .post(videoController.createVideo)
  .delete(videoController.deleteAllVideos);
router
  .route("/:videoId")
  .get(videoController.getVideoById)
  .patch(videoController.updateVideo)
  .delete(videoController.deleteVideo);

module.exports = router;
