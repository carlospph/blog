import React from 'react'
import Thumbnail from '../Thumbnail/Thumbnail'

const Populars = () => {
    return (
        <div className="max-w-7xl mx-auto text-white grid grid-cols-2 items-center gap-5 pb-8">

            <h2 className="col-span-2 text-2xl font-bold mb-4">Artigos populares</h2>
            <div>
                <img src="https://images.pexels.com/photos/17706648/pexels-photo-17706648.jpeg" alt="News populares" className="w-[100%] h-[300px] object-cover rounded" />
            </div>

            <div className="w-[100%]">
                <div className="flex flex-col gap-4">

                    <Thumbnail
                        title="O Futuro da Inteligência Artificial"
                        tag="Tecnologia"
                        time="6min"
                        img="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg"
                        alt="Representação visual de circuitos e conexões neurais"
                    />

                    <Thumbnail
                        title="Guia de Produtividade Remota"
                        tag="Carreira"
                        time="5min"
                        img="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg"
                        alt="Pessoa trabalhando em um laptop em um ambiente iluminado"
                    />

                    <Thumbnail
                        title="Novidades do Mundo Mobile"
                        tag="Gadgets"
                        time="3min"
                        img="https://cdn.pixabay.com/photo/2020/09/11/06/06/smartphone-5562156_1280.jpg"
                        alt="Vários smartphones modernos alinhados sobre uma mesa"
                    />
                </div>
            </div>
        </div>
    )
}

export default Populars
