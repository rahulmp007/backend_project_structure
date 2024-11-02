const express = require("express");

const morgan = require("morgan");
const logger = require("../logger");
const bodyParser = require("body-parser");
const cors = require("cors");
const videoRoute = require("./routes/video.routes");
const userRoute = require("./routes/user.routes");
const errorHandler = require("./utils/error_handler");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

const morganFormat = ":method :url :status :response-time ms";
app.use(
  morgan(morganFormat, {
    stream: {
      write: (message) => {
        const logObject = {
          method: message.split(" ")[0],
          url: message.split(" ")[1],
          status: message.split(" ")[2],
          responseTime: message.split(" ")[3],
        };
        logger.info(JSON.stringify(logObject));
      },
    },
  })
);


app.use("/api/v1/video", videoRoute);
app.use("/api/v1/user", userRoute);

app.use(errorHandler);


module.exports = app;
