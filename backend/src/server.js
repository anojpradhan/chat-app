import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.route.js";
import messagesRoutes from "./routes/message.route.js";
const app = express();

dotenv.config();

const PORT = process.env.PORT;

// routes for authentication
app.use("/api/auth", authRoutes);
// routes for messages
app.use("/api/messages", messagesRoutes);

app.listen(PORT, () => {
  console.log("server running hai ta ");
});
