import React from 'react'

const CardExplication = ({ title, icone, description }) => {
    return (
        <div className="text-white border border-gray-700 rounded-md px-5
        bg-gray-800 py-5
        ">
            <i class={`${icone} text-3xl text-blue-200`}></i>
            <h3 className="text-[16px] font-bold pb-1 pt-4">{title}</h3>
            <p className="text-[14px] text-gray-400">{description}</p>
        </div>
    )
}

export default CardExplication
