import Hero from "./Hero"


export const metadata = {
    title: "um... whatever",
    description: "it izzzz what it izzz"
}

export default function Page() {
    return (
        <main className="p-8">
            <h1 className="font-bold text-2xl" >whatev</h1>
            <Hero />
            <p>Routes in nextjs are too easy</p>
        </main>
    )
}