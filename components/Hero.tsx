export const Hero = (params: any) => {
    return (
        <section className="container mx-auto px-4 w-full pt-24 pb-16">
            <h1 className="text-center text-4xl md:text-6xl font-bold">{params.blok.headline}</h1>
            <p className="text-center mt-8">{params.blok.content}</p>
        </section>
    )
}