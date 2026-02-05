import express from "express";
import { register } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/register", register);

router.get("/login", (req, res) => {
  res.send("login happening ");
});
router.get("/logout", (req, res) => {
  res.send("login happening ");
});

export default router;
