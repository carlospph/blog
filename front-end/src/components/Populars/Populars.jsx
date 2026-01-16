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
                    <Thumbnail title="Web segura, dados protegidos" tag="Segurança" time="4min" img="https://images.pexels.com/photos/11391947/pexels-photo-11391947.jpeg" alt="Cadeado amarrado - simulando segurança" />

                    <Thumbnail title="Notícias sobre o google" tag="Internet" time="4min" img="https://images.pexels.com/photos/15092/pexels-photo.jpg" alt="Celular na mão com as funções do google" />
                </div>
            </div>
        </div>
    )
}

export default Populars
