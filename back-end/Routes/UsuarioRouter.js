import express from 'express';
import { criarUsuario, buscarTodosUsuarios, atualizarUsuario, deletarUsuario } from "../Controllers/ControllerUsuario.js";

const router = express.Router()

router.post("/", criarUsuario)
router.get("/", buscarTodosUsuarios)
router.put("/:id", atualizarUsuario)
router.delete("/:id", deletarUsuario)

export default router