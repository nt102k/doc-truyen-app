import Router from "next/router"
import Head from "next/head"

export default function Chapter(){
    return (
        <>
            <Head>
                <title>Chương Truyện | Đọc Truyện App</title>
                <meta name="description" content="Chương truyện là đây" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <button onClick={() => Router.back()} className="font-bold text-sm px-4 py-2 bg-gray-800 hover:bg-gray-900 text-white rounded-sm shadow-sm">Go back</button>
                <h1 className="text-lg font-bold capitalize">Cuốn sách về những người hãy ho</h1>
            </main>
        </>
    )
}