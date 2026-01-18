import mongoose from "mongoose";

const { Schema } = mongoose;

const postSchema = new Schema({
    tag: {
        type: String,
        required: [true, "Campo obrigatório"],
        minlength: [5, "Campo deve ter mais de 5 caracteres"],
        maxlength: [15, "Campo deve ter máximo de 15 caracteres"]
    },
    tituloPostagem: {
        type: String,
        required: [true, "Campo obrigatório!"],
        minlength: [5, "Campo deve ter mais de 5 caracteres"],
        maxlength: [15, "Campo deve ter máximo de 25 caracteres"]
    },

    contentPostagem: {
        type: String,
        required: [true, "Campo Obrigatório"],
        minlength: [5, "Campo deve ter máximo de 20 caracteres"],
    },

    readTime: {
        type: Number,
        required: [true, "Campo Obrigatório"]
    }
},
    {
        timestamps: true
    })

const Posts = mongoose.model('Posts', postSchema)


export default Posts;