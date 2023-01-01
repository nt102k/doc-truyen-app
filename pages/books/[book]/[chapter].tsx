import Router from "next/router"

export default function Chapter(){
    return (
        <>
            <button onClick={() => Router.back()} className="font-bold text-sm px-4 py-2 bg-gray-600 hover:bg-gray-500 rounded-sm shadow-sm">Go back</button>
            <h1 className="text-lg font-bold">Cuốn sách về những người hãy ho</h1>
        </>
    )
}