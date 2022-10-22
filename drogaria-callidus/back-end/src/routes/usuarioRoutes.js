import express from "express";
import UsuarioController from "../controller/usuarioController.js";

const router = express();

router
    .get("/login", UsuarioController.logarUsuario)
    .post("/cadastrar", UsuarioController.criarUsuario)

export default router;