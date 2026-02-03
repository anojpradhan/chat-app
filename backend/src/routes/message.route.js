import express from "express";

const router = express.Router();

router.get("/send", (req, res) => {
  res.send("Message Sent happening ");
});
router.get("/get", (req, res) => {
  res.send("Message Sent happening ");
});
// router.get("/login", (req, res) => {
//   res.send("login happening ");
// });
// router.get("/logout", (req, res) => {
//   res.send("login happening ");
// });

export default router;
