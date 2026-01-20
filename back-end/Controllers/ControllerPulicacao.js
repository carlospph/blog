import ItemPost from '../Models/Publicacoes.js';

// Criar novo post
export const novoPost = async (req, res) => {
    try {
        const novoItemPost = await ItemPost.create(req.body);
        res.status(201).json({ mensagem: "Post criado com sucesso!", novoItemPost });
    } catch (error) {
        res.status(500).json({ mensagem: "Erro ao criar post", detalhe: error.message });
    }
};

// Buscar todos os posts
export const buscarTodosPost = async (req, res) => {
    try {
        const listandoPost = await ItemPost.find();
        if (listandoPost.length > 0) {
            res.status(200).json(listandoPost);
        } else {
            res.status(204).send(); // requisição ok, mas sem conteúdo
        }
    } catch (error) {
        res.status(500).json({ mensagem: "Erro na busca dos posts", detalhe: error.message });
    }
};

// Buscar post único
export const buscarPostUnico = async (req, res) => {
    try {
        const { id } = req.params;
        const listandoPostId = await ItemPost.findById(id);
        if (listandoPostId) {
            res.status(200).json(listandoPostId);
        } else {
            res.status(404).json({ mensagem: "Post não encontrado" });
        }
    } catch (error) {
        res.status(500).json({ mensagem: "Erro na busca do post individual", detalhe: error.message });
    }
};

// Atualizar post
export const atualizarPost = async (req, res) => {
    try {
        const { id } = req.params;
        const itemAtualizado = req.body;
        const atualizarPost = await ItemPost.findByIdAndUpdate(id, itemAtualizado, {
            new: true,
            runValidators: true
        });
        if (atualizarPost) {
            res.status(200).json({ mensagem: "Post atualizado com sucesso", atualizarPost });
        } else {
            res.status(404).json({ mensagem: "Post não encontrado" });
        }
    } catch (error) {
        res.status(500).json({ mensagem: "Erro ao atualizar post", detalhe: error.message });
    }
};

// Deletar post
export const deletarPost = async (req, res) => {
    try {
        const { id } = req.params;
        const postDeletado = await ItemPost.findByIdAndDelete(id);
        if (postDeletado) {
            res.status(200).json({ mensagem: "Post deletado com sucesso" });
        } else {
            res.status(404).json({ mensagem: "Post não encontrado" });
        }
    } catch (error) {
        res.status(500).json({ mensagem: "Erro ao deletar post", detalhe: error.message });
    }
};