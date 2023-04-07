import { Router } from "express";
import { publicAccess, privateAccess } from "../middlewares/index.js";

const router = Router();

router.get("/profile", privateAccess, (req, res) => {
  const { user } = req.session;
  res.render("profile", { user });
});

router.get("/login", publicAccess, (req, res) => {
  res.render("login");
});

router.get("/signup", publicAccess, (req, res) => {
  res.render("signup");
}); 

router.get("/forgotPass", (req, res) => {
  res.render("forgotPass");
});

export default router;