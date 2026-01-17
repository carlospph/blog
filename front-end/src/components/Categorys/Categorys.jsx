import React from 'react'
import ItemCategory from '../ItemCategory/ItemCategory'

const Categorys = () => {
    return (
        <>
            <div className="text-white text-center pt-6 pb-12">
                <p className="text-[11px] text-green-200">Explore por tópico</p>
                <h3 className="text-3xl pb-2">Categorias</h3>
                <p className="text-[13px] text-gray-400 tracking-tight">Escolha um assunto e comece sua jornada de aprendizagem</p>
            </div>
            <div className="flex flex-col gap-3 max-w-7xl text-white mx-auto pb-12 md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 lg:gap-5">

                <div className="border border-gray-700 rounded-md py-6 px-3 flex gap-2 items-center">
                    <div className="bg-blue-400 rounded-sm px-2 py-1">
                        <i class="fa-solid fa-display"></i>
                    </div>
                    <div>
                        <div className="flex items-center gap-4">
                            <p>Fundamentos</p>
                            <p className="flex gap-1">
                                <span class="text-[10px] block font-thin">12 </span>
                                <span class="text-[10px] block">Artigos</span>
                            </p>
                        </div>
                        <p className="text-sm text-gray-400">Conceitos básicos sobre informática</p>
                    </div>
                </div>

                <ItemCategory time="5" tag="Básico" icone="fa-solid fa-bars" content="Informática para leigos" />

                <ItemCategory time="4" tag="Contas simples" icone="fa-solid fa-calculator" content="Aprender a trabalhar com planilhas e formulas" />

                <ItemCategory time="5" tag="Word e documentos" icone="fa-regular fa-file-word" content="Editar e formatar documentos digitais" />

                <ItemCategory time="3" tag="Configuração digital" icone="fa-solid fa-gears" content="Segurança de dados e gerenciamento de dados" />

                <ItemCategory time="3" tag="Internet" icone="fa-brands fa-internet-explorer" content="Saíba mais sobre o mundo da web e suas ferramentas" />
            </div>
        </>
    )
}

export default Categorys
