import express from "express";
import dotenv from "dotenv";
import path from "path";
import authRoutes from "./routes/auth.route.js";
import messagesRoutes from "./routes/message.route.js";
import { dbConnection } from "./lib/db.js";
const app = express();

const _dirname = path.resolve();

dotenv.config();

const PORT = process.env.PORT;

// middlware to access json post
app.use(express.json());

// routes for authentication
app.use("/api/auth", authRoutes);
// routes for messages
app.use("/api/messages", messagesRoutes);

// make ready for deployment

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(_dirname, "../frontend/chat-app/dist")));
  app.get("*", (_, res) => {
    res.sendFile(path.join(_dirname, "../frontend/chat-app/dist/index.html"));
  });
}
app.listen(PORT, () => {
  console.log("server running hai ta ");
  dbConnection();
});
