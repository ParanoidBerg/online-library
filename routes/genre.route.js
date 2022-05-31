const { Router } = require("express");
const { genreController } = require("../controllers/genre.controller");
const router = Router();

router.post("/admin/genres", genreController.postGenre);
router.get("/admin/genres", genreController.getGenre);
router.patch("/admin/genres/:id", genreController.updateGenre);
router.delete("/admin/genre/:id", genreController.deleteGenre);

module.exports = router;
