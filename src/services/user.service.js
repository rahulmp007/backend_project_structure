const userRepo = require("../repository/user.repository");
const jwt = require("jsonwebtoken");

class UserService {
  async registerUser(userData) {
    const { email } = userData;
    const user = await userRepo.getUserByEmail(email);
    if (user) {
      throw Error("User already registered");
    }

    return await userRepo.register(userData);
  }

  async login(userData) {
    const { email, password } = userData;
    const user = await userRepo.getUserByEmail(email);
    console.log(`USER => ${user}`);

    if (!user) {
      throw new Error("Invalid email or password");
    }
    const isPasswordValid = await user.comparePassword(password);

    if (!isPasswordValid) {
      throw new Error("Invalid email or passwrod");
    }

    const token = jwt.sign({ id: user._id }, "MIICXQIBAAKBgQD9KfOjR7...", {
      expiresIn: "1hr",
    });
    return token;
  }
}

module.exports = new UserService();
