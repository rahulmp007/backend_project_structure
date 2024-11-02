const userService = require("../services/user.service");

class UserController {
  async registerUser(req, res, next) {
    try {
      const { email, password } = req.body;
      const result = await userService.registerUser({ email, password });
      res.status(201).json({ message: "user registered" });
    } catch (error) {
      next(error);
    }
  }
  async authenticateUser(req, res) {
    const { email, password } = req.body;
    const token = await userService.login({ email, password });
    res.json({ message: "login successfull", token: token });
  }
}

module.exports = new UserController();
