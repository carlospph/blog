import express from 'express';
import connectDB from '../Config/DataBase.js';
import Usuarios from '../Models/Usuarios.js';


const app = express()
app.use(express.json())
connectDB();

//ADICIONANDO
app.post('/usuarios', async (req, res) => {
    try {
        const novoUsuario = await Usuarios.create(req.body)
        const novoUsuarioSemSenha = novoUsuario.toObject(); // para não mostrar a senha
        delete novoUsuarioSemSenha.senha // para não mostrar a senha 
        return res.status(201).json({ mensagem: "Cadastrado com sucesso!", novoUsuarioSemSenha })
    } catch (error) {
        console.log("Erro na tentativa de criação", error)
    }
})


//BUSCANDO TODOS OS USUÁRIOS 
app.get('/usuarios', async (req, res) => {
    try {
        const todosUsuarios = await Usuarios.find();
        if (todosUsuarios.length > 0) {
            return res.status(200).json(todosUsuarios)
        } else {
            return res.status(204).send()
        }
    } catch (error) {
        console.error(error)
        return res.status(500).json({
            mensagem: "Erro interno ao buscar usuários",
            detalhe: error.message
        })
    }
})



//EXCLUIR
app.delete('/usuarios/:id', async (req, res) => {
    try {
        const { id } = req.params
        const usuarioDeletado = await Usuarios.findByIdAndDelete(id)
        res.status(200).json("Deletado com sucesso")
    } catch (error) {
        res.status(401).json({ mensagem: "Erro na deleção dos dados" })
    }
})


//ATUALIZAR DADOS
app.put('/usuarios/:id', async (req, res) => {
    try {
        const { id } = req.params
        const novosDados = req.body
        const usuarioAtualizado = await Usuarios.findByIdAndUpdate(id, novosDados, {
            new: true,
            runValidators: true
        })
        res.status(201).json("Atualizado com sucesso")
    } catch (error) {
        res.status(401).json("Erro na tentativa de atualizar")
    }
})

app.listen(3000, () => {
    console.log('Servidor rodando http://localhost:3000')
})