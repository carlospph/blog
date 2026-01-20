import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Teste = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:3000/publicacoes')
            .then(response => setData(response.data))
            .catch(error => console.error('Erro:', error));
    }, []);

    return (
        <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl pt-8 font-extrabold text-cyan-600 tracking-tight">
                <i className="fas fa-laptop-code text-cyan-500"></i> infoBasic
            </h1>
            <h2 className="text-3xl pb-5 font-bold text-cyan-500">
                Bem-vindo!
            </h2>
            <div className="grid lg:grid-cols-3 gap-3 pt-4 max-w-7xl mx-auto">
                {data.map(postagem => (
                    <div key={postagem._id} className="shadow-md border border-gray-200 rounded px-2 py-3">
                        <p>{postagem.tag}</p>
                        <p className="text-lg pt-2">{postagem.contentPostagem}</p>
                        <p className="text-[12px] pt-3">{postagem.readTime} <span>min de leitura</span></p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Teste;