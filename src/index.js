const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });
const app = require("./app");
const connectDb = require("./database/db");

const PORT = process.env.PORT;

connectDb()
  .then((success) => {
    app.listen(PORT, () => console.log(`server running on port ${PORT}`));
  })
  .catch((error) => {
    console.log(`${error}`);
  });
