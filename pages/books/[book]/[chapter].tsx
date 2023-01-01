import Router from "next/router"

export default function Chapter(){
    return (
        <>
            <p onClick={() => Router.back()} className="font-bold text-sm">Go back</p>
            <h1 className="text-lg font-bold">Cuốn sách về những người hãy ho</h1>
        </>
    )
}