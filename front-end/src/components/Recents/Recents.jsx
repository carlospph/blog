import CardRecent from "../CardRecent/CardRecent"

const Recents = () => {
    return (
        <>
            <div className="text-white text-center pt-2 pb-12 px-3 max-w-7xl mx-auto">
                <h3 className="text-3xl text-left">Notícias recentes</h3>
            </div>
            <div className="max-w-7xl mx-auto flex flex-col gap-3 px-3 text-white pb-12 md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 lg:gap-5">

                <CardRecent
                    image="https://images.unsplash.com/photo-1707761918029-1295034aa31e?q=80&w=1170&auto=format&fit=crop"
                    title="O que é Hardware e Software?"
                    category="Básico"
                    description="Entenda de vez a diferença entre a parte física do computador e os programas que o fazem funcionar."
                    readTime="5"
                    date="2026-01-20"
                />

                <CardRecent
                    image="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1170&auto=format&fit=crop"
                    title="Navegando na Web com Segurança"
                    category="Segurança"
                    description="Aprenda a identificar sites confiáveis e proteja seus dados pessoais enquanto navega na internet."
                    readTime="6"
                    date="2026-01-21"
                />

                <CardRecent
                    image="https://cdn.pixabay.com/photo/2017/08/13/05/08/technology-2636253_1280.jpg"
                    title="Dominando o Teclado e Atalhos"
                    category="Produtividade"
                    description="Ganhe agilidade no dia a dia conhecendo as principais teclas de atalho do Windows e do navegador."
                    readTime="4"
                    date="2026-01-22"
                />

                <CardRecent
                    image="https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1170&auto=format&fit=crop"
                    title="Como organizar seus arquivos"
                    category="Organização"
                    description="Dicas práticas para criar pastas e nomear documentos, facilitando a busca por informações no PC."
                    readTime="3"
                    date="2026-01-23"
                />

                <CardRecent
                    image="https://cdn.pixabay.com/photo/2020/05/18/16/17/social-media-5187243_1280.png"
                    title="Comunicação web"
                    category="Comunicação"
                    description="Aprenda a gerenciar suas redes sociais, enviar mensagens com anexos e organizar."
                    readTime="5"
                    date="2026-01-24"
                />

                <CardRecent
                    image="https://cdn.pixabay.com/photo/2024/03/26/11/57/network-8656639_1280.jpg"
                    title="Importância do Backup e Nuvem"
                    category="Segurança"
                    description="Descubra como salvar suas fotos e documentos importantes no Google Drive ou OneDrive para nunca perdê-los."
                    readTime="4"
                    date="2026-01-25"
                />

            </div>
        </>
    )
}

export default Recents


