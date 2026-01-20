import mongoose from "mongoose";

const { Schema } = mongoose;

const publicacaoSchema = new Schema({
    tag: {
        type: String,
        required: [true, "Campo obrigatório"],
        minlength: [5, "Campo deve ter no mínimo 5 caracteres"],
        maxlength: [15, "Campo deve ter no máximo 15 caracteres"]
    },
    tituloPostagem: {
        type: String,
        required: [true, "Campo obrigatório!"],
        minlength: [5, "Campo deve ter no mínimo 5 caracteres"],
        maxlength: [25, "Campo deve ter no máximo 25 caracteres"]
    },
    contentPostagem: {
        type: String,
        required: [true, "Campo Obrigatório"],
        minlength: [5, "Campo deve ter no mínimo 5 caracteres"],
        maxlength: [200, "Campo deve ter no máximo 200 caracteres"] // ajuste opcional
    },
    readTime: {
        type: Number,
        required: [true, "Campo Obrigatório"]
    }
}, {
    timestamps: true
});

const Publicacoes = mongoose.model('Publicacoes', publicacaoSchema);

export default Publicacoes;