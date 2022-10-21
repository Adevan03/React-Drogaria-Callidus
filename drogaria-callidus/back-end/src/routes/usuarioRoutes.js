import express from "express";
import UsuarioController from "../controller/usuarioController.js";

const router = express();


router.get("/login", UsuarioController.logarUsuario);

export default router;