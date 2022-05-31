const { Router } = require("express");
const { userController } = require("../controllers/user.controller");
const router = Router();

router.post("/users", userController.postUser);
router.patch("/admin/users", userController.blockUser);
router.patch("/users/take/:id", userController.takeBook);
router.patch("/users/:id", userController.returnBook);

module.exports = router;
