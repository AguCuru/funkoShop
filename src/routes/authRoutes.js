import express from "express";

const router = express.Router();

router.get(`/login`, (req, res) => res.send(`Route for login view`));
router.post(`/login`, (req, res) => res.send(`Route for post login view`));
router.get(`/register`, (req, res) => res.send(`Route for register view`));

router.post(`/register`, (req, res) =>
  res.send(`Route for post register view`)
);

export default router;
