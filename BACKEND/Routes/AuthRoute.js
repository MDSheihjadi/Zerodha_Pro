// const { Signup } = require("../Controllers/AuthController");
// const router = require("express").Router();

// router.post("/signup", Signup);

// module.exports = router;
//-----------------------------------------------
const { Signup, Login } = require("../Controllers/AuthController");
const {userVerification} = require("../Middlewares/AuthMiddleware");
const router = require("express").Router();

router.post("/signup", Signup); // this exposes POST /signup
router.post("/", userVerification); // this exposes GET /userVerification
router.post("/login", Login);   // this exposes POST /login

module.exports = router;
