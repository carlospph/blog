import React from 'react'

const Brand = () => {
    return (
        <div className="flex items-center gap-2 mb-4">
            <div className="bg-cyan-400 p-2 rounded-lg">
                <i className="fa-solid fa-desktop text-gray-900 text-xl"></i>
            </div>
            <h2 className="text-white text-2xl font-bold tracking-tight">
                Info<span className="text-cyan-400">Básico</span>
            </h2>
        </div>
    )
}

export default Brand
