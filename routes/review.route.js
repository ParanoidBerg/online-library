const { Router } = require("express");
const { reviewController } = require("../controllers/review.controller");
const router = Router();

router.post("/reviews", reviewController.postReview);

module.exports = router;
