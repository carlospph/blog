import React, { useState } from 'react';

const FormularioNovoPost = () => {

    const [dados, setDados] = useState({
        inputTitulo: '',
        inputDescricao: '',
        inputTime: '',
        inputURL: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        // Validação
        if (dados.inputTitulo === "" || dados.inputDescricao === "" || dados.inputTime === "" || dados.inputURL === "") {
            alert("Por favor, preencha todos os campos obrigatórios!");
            return;
        }

        //Sucesso e post para o axios
        console.log(dados.inputTitulo, dados.inputDescricao, dados.inputTime, dados.inputURL);
        alert("Post publicado com sucesso!");
    }

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-md border border-slate-100">
            <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">Novo Post</h2>

            <form className="space-y-5" onSubmit={handleSubmit}>
                {/* Campo de Título */}
                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Título</label>
                    <input
                        type="text"
                        placeholder="Ex: Como aprender React"
                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                        value={dados.inputTitulo}
                        onChange={(e) => setDados({ ...dados, inputTitulo: e.target.value })}
                    />
                </div>

                {/* Campo de Descrição */}
                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Descrição</label>
                    <textarea
                        type="text"
                        placeholder="Uma breve descrição do post"
                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all resize-none"
                        value={dados.inputDescricao}
                        onChange={(e) => setDados({ ...dados, inputDescricao: e.target.value })}>
                    </textarea>
                </div>

                {/* Campo de Tempo de Leitura */}
                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Tempo (min)</label>
                    <input
                        type="number"
                        placeholder="5"
                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                        value={dados.inputTime}
                        onChange={(e) => setDados({ ...dados, inputTime: e.target.value })}
                    />
                </div>

                {/* Campo de Link da Imagem */}
                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">URL da Imagem</label>
                    <input
                        type="text"
                        placeholder="https://..."
                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                        value={dados.inputURL}
                        onChange={(e) => setDados({ ...dados, inputURL: e.target.value })}
                    />
                </div>

                {/* Botão Salvar */}
                <div className="pt-2">
                    <button className="w-full bg-indigo-500 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 shadow-sm cursor-pointer">
                        Publicar
                    </button>
                </div>
            </form >
        </div >
    );
};

export default FormularioNovoPost;