import axios from 'axios'
import { useEffect, useState } from 'react'

function Home() {
    const [postagens, setPostagens] = useState([])
    const [erro, setErro] = useState(null)

    useEffect(() => {
        // Definimos a função dentro para evitar problemas de dependência
        const buscarPostagem = async () => {
            try {
                const respostaAPI = await axios.get('http://localhost:3000/publicacoes')
                // Verificação extra: garante que estamos lidando com um array
                if (Array.isArray(respostaAPI.data)) {
                    setPostagens(respostaAPI.data)
                }
            } catch (error) {
                console.error("Erro ao buscar dados:", error)
                setErro("Não foi possível carregar as postagens.")
            }
        }

        buscarPostagem()
    }, [])

    return (
        <div className="container pt-[100px]">
            <h1>Consumindo API com React</h1>

            {erro && <p style={{ color: 'red' }}>{erro}</p>}

            <ul className="max-w-6xl mx-auto grid grid-cols-3 gap-8 py-[50px]">
                {postagens.length > 0 ? (
                    postagens.map((post) => (
                        // Verifique se é post._id ou post.id conforme o seu banco
                        <li key={post._id || post.id} className="shadow-md border border-gray-300 rounded">
                            <strong>{post.tag}</strong>
                            <p>
                                {post.tituloPostagem}
                            </p>
                            <p>{post.contentPostagem}</p>
                            <p>
                                {post.readTime}
                            </p>

                        </li>
                    ))
                ) : (
                    !erro && <p>Carregando...</p>
                )}
            </ul>
        </div>
    )
}

export default Home