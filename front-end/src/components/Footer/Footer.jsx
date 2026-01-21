import React from 'react';
import Brand from '../Brand/Brand';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-400 pt-6 pb-6 px-4">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

                <div className="col-span-1 md:col-span-1">
                    {/* aqui o logo  */}
                    <Brand />
                    <p className="text-sm leading-relaxed mb-6">
                        Nosso objetivo é tornar a informática acessível para todos, com conteúdo simples e prático para iniciantes.
                    </p>

                    <div className="flex gap-3">
                        <a href="#" className="w-10 h-10 flex items-center justify-center rounded-md border border-gray-700 hover:bg-gray-800 transition-colors">
                            <i className="fa-regular fa-envelope"></i>
                        </a>
                        <a href="#" className="w-10 h-10 flex items-center justify-center rounded-md border border-gray-700 hover:bg-gray-800 transition-colors">
                            <i className="fa-brands fa-x-twitter"></i>
                        </a>
                        <a href="#" className="w-10 h-10 flex items-center justify-center rounded-md border border-gray-700 hover:bg-gray-800 transition-colors">
                            <i className="fa-brands fa-youtube"></i>
                        </a>
                        <a href="#" className="w-10 h-10 flex items-center justify-center rounded-md border border-gray-700 hover:bg-gray-800 transition-colors">
                            <i className="fa-brands fa-github"></i>
                        </a>
                    </div>
                </div>

                <div className="hidden md:block"></div>

                <div>
                    <h3 className="text-white font-bold mb-6">Navegação</h3>
                    <ul className="space-y-4 text-sm">
                        <li><a href="#" className="hover:text-cyan-400 transition-colors">Início</a></li>
                        <li><a href="#" className="hover:text-cyan-400 transition-colors">Artigos</a></li>
                        <li><a href="#" className="hover:text-cyan-400 transition-colors">Categorias</a></li>
                        <li><a href="#" className="hover:text-cyan-400 transition-colors">Sobre</a></li>
                        <li><a href="#" className="hover:text-cyan-400 transition-colors">Contato</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-white font-bold mb-6">Categorias</h3>
                    <ul className="space-y-4 text-sm">
                        <li><a href="#" className="hover:text-cyan-400 transition-colors">Fundamentos</a></li>
                        <li><a href="#" className="hover:text-cyan-400 transition-colors">Internet</a></li>
                        <li><a href="#" className="hover:text-cyan-400 transition-colors">Segurança</a></li>
                        <li><a href="#" className="hover:text-cyan-400 transition-colors">Arquivos</a></li>
                        <li><a href="#" className="hover:text-cyan-400 transition-colors">Manutenção</a></li>
                    </ul>
                </div>

            </div>

            <div className="max-w-7xl mx-auto border-t border-gray-800 mt-12 pt-8 text-center text-xs">
                <p>&copy; {new Date().getFullYear()} InfoBásico. Carlos Nascimento.</p>
            </div>
        </footer>
    );
};

export default Footer;