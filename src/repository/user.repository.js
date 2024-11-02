const User = require("../models/user.model");
const Video = require("../models/video.model");

class UserRepository {
  async getUserByEmail(email) {
    return await User.findOne({ email: email });
  }

  async register(userData) {
    const { email, password } = userData;
    const user =  User({ email: email, password: password }).save();
    const video =  Video({ title: "my first relation" }).save();

    user.videos.push(video._id);
    return await user.save();
  }
  async login() {}
}

module.exports = new UserRepository();
