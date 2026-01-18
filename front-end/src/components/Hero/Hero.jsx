import React from 'react'

const Hero = () => {
    return (
        <section className="flex flex-col items-center justify-center bg-black text-white text-center pt-[180px] pb-[50px] px-4">
            <p className="text-blue-300 font-medium tracking-widest uppercase text-sm mb-4 border border-blue-300/30 px-4 py-1 rounded-full bg-blue-300/10">
                Aprenda do zero 🚀
            </p>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 max-w-4xl leading-tight">
                Informática para <span className="text-blue-300">iniciantes</span>
            </h1>

            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
                Aprenda os fundamentos da informática de forma simples e prática.
                Do básico do computador à internet, <span className="text-white">sem complicação.</span>
            </p>

            {/* Ações (Botões) */}
            <div className="flex flex-col sm:flex-row gap-4 items-center">
                <button className="bg-blue-300 text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-400 transition-all transform hover:scale-105 shadow-lg shadow-blue-300/20">
                    Começar a Aprender
                </button>

                <a href="#artigos" className="text-white border border-white/20 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-colors">
                    Ver artigos
                </a>
            </div>
        </section>
    )
}

export default Hero