async function getData() {
    const results = await fetch("https://api.samplapis.com/beers/ale")
    if (!res.ok) {
        throw new Error("failed to fetch data from api")
    }
    return res.json()
}

export default async function Page() {

    const data = await getData()

    return (
        <main className="p-8" >
            <h1 className="text-emerald-400">
                The Beers </h1>
            {data.map(beer => {
                <div key={beer.id} >
                    <h2>{beer.name}</h2>
                </div>
            })}
        </main>
    )
}