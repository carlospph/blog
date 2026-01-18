import mongoose from 'mongoose';
import validator from 'validator';

const { Schema } = mongoose;

const usuarioSchema = new Schema({
    nome: {
        type: String,
        minlength: [6, "Mínimo 6 caracteres"],
        required: true
    },

    dataNascimento: {
        type: Date,
        required: true
    },

    email: {
        type: String,
        minlength: [6, "Mínimo 6 caracteres"],
        unique: true,
        required: [true, "E-mail é obrigatório"],
        validate: {
            validator: (valor) => validator.isEmail(valor),
            message: "O e-mail é invalida, use o formato (carlos@gmail.com)"
        }
    },

    senha: {
        type: String,
        minlength: [6, "Minimo 6 caracteres"],
        required: true
    }
})

const Usuarios = mongoose.model('Usuarios', usuarioSchema)

export default Usuarios;