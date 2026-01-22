export const Feature = (params: any) => {
    return (
        <div className="bg-white p-8 rounded-lg shadow">
            <h3 className="font-bold text-2xl">{params.blok.headline}</h3>
            <p className="mt-4 text-lg">{params.blok.content}</p>
        </div>
    )
}