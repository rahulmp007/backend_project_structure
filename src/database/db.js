const mongoose = require("mongoose");

const connectDb = async () => {
  const connectionString = `${process.env.DB_URL}/${process.env.DB_NAME}`;
  try {
    let connectionInstance = await mongoose.connect(connectionString);
    console.log(
      `database connection successfull :  
      ${connectionInstance.connection.host} 
      ${connectionInstance.connection.port} 
      ${connectionInstance.connection.name}`
    );
  } catch (error) {
    console.log(`database connection failed : ${error}`);
    process.exit(1);
  }
};

module.exports = connectDb;
