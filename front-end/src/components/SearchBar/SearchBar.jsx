import React from 'react'

const SearchBar = () => {
    return (
        <div className="px-2 rounded-md bg-white">
            <input type="text" placeholder="Buscar notícias" className="py-2 min-w-[300px] outline-none" />
            <button className="cursor-pointer">
                <i class="fa-solid fa-magnifying-glass text-black"></i>
            </button>
        </div>
    )
}

export default SearchBar
