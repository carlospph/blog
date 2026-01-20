import express from 'express';
import { novoPost, buscarTodosPost, buscarPostUnico, atualizarPost, deletarPost } from '../Controllers/ControllerPulicacao.js';

const router = express.Router();

router.post("/", novoPost)
router.get("/", buscarTodosPost)
router.get("/:id", buscarPostUnico)
router.put("/:id", atualizarPost)
router.delete("/:id", deletarPost)

export default router
