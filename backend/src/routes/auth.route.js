import express from "express";

const router = express.Router();

router.get("/register", (req, res) => {
  res.send("Regsiter happening ");
});
router.get("/login", (req, res) => {
  res.send("login happening ");
});
router.get("/logout", (req, res) => {
  res.send("login happening ");
});

export default router;
