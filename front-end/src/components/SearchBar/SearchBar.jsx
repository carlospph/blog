import React from 'react'

const SearchBar = () => {
    return (
        <div className="px-2 rounded-md bg-white flex">
            <input type="text"
                placeholder="Buscar notícias"
                className="outline-none block w-full" />
            <button className="cursor-pointer">
                <i class="fa-solid fa-magnifying-glass text-black"></i>
            </button>
        </div>
    )
}

export default SearchBar
