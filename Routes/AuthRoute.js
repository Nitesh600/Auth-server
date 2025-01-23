const { Signup , Login} = require("../Controllers/Auth");
const router = require("express").Router();
const userVerification = require("../Middlewares/AuthMiddleware");



router.post("/signup", Signup);
router.post('/login', Login);
router.post("/", userVerification, (req, res) => {
    res.json({ message: "You have access to this protected route." });
  });


module.exports = router;