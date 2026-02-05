import mongoose from "mongoose";

export const dbConnection = async () => {
  try {
    const my_connect = await mongoose.connect(process.env.MONGO_URI);
    console.log("mongo db is connected", my_connect.connection.host);
  } catch (err) {
    console.log("Error connecting", err);
    process.exit(1);
    // status code 1 means fail and 0 means success
  }
};
