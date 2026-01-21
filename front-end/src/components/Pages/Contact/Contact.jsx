import React from 'react'

const Contact = () => {
    return (
        <form className="py-[100px] max-w-6xl mx-auto px-2 flex flex-col gap-2">
            <h2 className="text-2xl font-bold text-center pb-3">Formulário de contato</h2>
            <input type="text"
                placeholder="Nome completo"
                className="border border-gray-300 py-3 px-1 rounded-md"
            />

            <input type="tel"
                placeholder="Telefone"
                className="border border-gray-300 py-3 px-1 rounded-md"
            />

            <input type="email"
                placeholder="E-mail"
                className="border border-gray-300 py-3 px-1 rounded-md"
            />

            <textarea placeholder="Informações, elógios, críticas"
                className="border border-gray-300 py-3 px-1 rounded-md px-2 h-[120px]"></textarea>

            <button className="bg-green-500 py-3 px-1 rounded-md">Enviar </button>
        </form>
    )
}

export default Contact
