const express = require('express');
const ControllerVideo = require('../controllers/ControllerVideo');
const router = express.Router();

// CREATE
router.get("/Cadastrar", ControllerVideo.cadastrarVideo);
router.post("/Cadastrar", ControllerVideo.VideoCreate);

// READ
router.get("/", ControllerVideo.listarVideos);

// UPDATE
router.get("/update/:id_video", ControllerVideo.UpdateVideo);
router.post("/update", ControllerVideo.VideoUpdate);

// DELETE
router.post("/remover", ControllerVideo.removerVideo);

module.exports = router;