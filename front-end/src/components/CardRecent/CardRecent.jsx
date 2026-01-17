import React from 'react';

const CardRecent = ({
    image,
    category,
    date,
    title,
    description,
    readTime
}) => {

    const formattedDate = new Date(date + "T12:00:00").toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'short',
        year: 'numeric'
    });

    return (
        <div className="border border-gray-700 rounded-md overflow-hidden">
            <img
                src={image}
                alt={title}
                className="h-[60%] w-full object-cover"
            />
            <div className="px-4 py-3">
                <div className="flex justify-between mb-2">
                    <p className="flex gap-1 text-[12px]">{category}</p>
                    <p className="flex gap-1 text-[12px]">{formattedDate}</p>
                </div>
                <h3 className="font-bold">{title}</h3>
                <p className="text-[14px] text-gray-500 my-1">
                    {description}
                </p>
                <div className="text-[14px] text-gray-500 my-1">
                    <span>{readTime}</span>
                    <span> min de leitura</span>
                </div>
            </div>
        </div>
    );
};

export default CardRecent;