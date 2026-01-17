import React from 'react'

const ItemCategory = ({ icone, tag, time, content }) => {
    return (
        <div>
            <div className="border border-gray-700 rounded-md py-6 px-3 flex gap-2 items-center">
                <div className="bg-blue-400 rounded-sm px-2 py-1">
                    <i className={icone}></i>
                </div>
                <div>
                    <div className="flex items-center gap-4">
                        <p>{tag}</p>
                        <p className="flex gap-1">
                            <span class="text-[10px] block font-thin">{time}min</span>
                            <span class="text-[10px] block">Artigos</span>
                        </p>
                    </div>
                    <p className="text-sm text-gray-400">
                        {content}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ItemCategory
