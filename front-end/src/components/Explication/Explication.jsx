import CardExplication from '../CardExplication/CardExplication'

const Explication = () => {
    return (
        <div className="max-w-3xl mx-auto pb-[200px] flex flex-col gap-3 md:grid md:grid-cols-2 lg:grid lg:grid-cols-3">

            <CardExplication
                icone="fa-solid fa-book-open"
                title="Conteúdo simples"
                description="Explicações claras sem termos complicados"
            />

            <CardExplication
                icone="fa-solid fa-lightbulb"
                title="Direto ao ponto"
                description="Metodologia focada no que realmente importa para você."
            />

            <CardExplication
                icone="fa-solid fa-users"
                title="Aprendo com os melhores"
                description="Conteúdo para todos as idades e compartilhados"
            />
        </div>
    )
}

export default Explication
