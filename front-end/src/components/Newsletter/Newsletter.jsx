import React, { useState } from 'react';

const Newsletter = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Lógica de envio aqui
        console.log("Enviando para:", email);
    };

    return (
        <section className="px-4 pb-4">
            <div className="max-w-7xl mx-auto py-10 px-6 bg-gray-900 mb-8 rounded-lg shadow-xl">
                <div className="max-w-3xl mx-auto text-center">
                    {/* Badge de Categoria */}
                    <span className="inline-block px-3 py-1 text-[12px] font-bold tracking-wider uppercase text-green-400 bg-gray-800 rounded-full mb-4">
                        Newsletter
                    </span>

                    <h5 className="text-2xl md:text-3xl font-bold text-white mb-3">
                        Receba dicas de informática no seu e-mail!
                    </h5>

                    <p className="text-[15px] text-gray-400 mb-8 leading-relaxed">
                        Cadastre-se para receber artigos exclusivos, tutoriais e novidades sobre
                        tecnologia de forma simples e direta no seu dia a dia.
                    </p>

                    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                        <div className="relative flex-grow">
                            <input
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Seu melhor e-mail"
                                className="w-full bg-gray-800 border border-gray-700 text-white py-3 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                                aria-label="Endereço de e-mail"
                            />
                        </div>

                        <button
                            type="submit"
                            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md transition-colors flex items-center justify-center gap-2 group"
                        >
                            Enviar
                            <i className="fa-solid fa-location-arrow group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"></i>
                        </button>
                    </form>

                    <p className="text-[11px] text-gray-500 mt-4">
                        Respeitamos sua privacidade. Cancele a inscrição a qualquer momento.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Newsletter;