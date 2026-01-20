import express from 'express';
import connectDB from '../Config/DataBase.js';
import usuariosRoutes from '../Routes/UsuarioRouter.js'
import publicacoesRoutes from '../Routes/PublicacaoRouter.js'

const app = express()
app.use(express.json())
connectDB();

app.use('/usuarios', usuariosRoutes)
app.use('/publicacoes', publicacoesRoutes)

app.listen(3000, () => {
    console.log('Servidor rodando http://localhost:3000')
})