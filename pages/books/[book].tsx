import Router from "next/router"
import Link from "next/link"
import Head from "next/head"

export default function Chapter(){
    return (
        <>
            <Head>
                <title>Trang Sách | Đọc Truyện App</title>
                <meta name="description" content="Đây là trang sách" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <button onClick={() => Router.back()} className="font-bold text-sm px-4 py-2 bg-gray-800 hover:bg-gray-900 text-white rounded-sm shadow-sm">Go back</button>
                <h1 className="text-lg font-bold capitalize">Cuốn sách về những người hãy ho</h1>
                <div className="flex flex-col gap-2">
                    <h2 className="text-md font-bold capitalize">Danh sách chương</h2>
                    <div className="flex-grow">
                        <div className="flex flex-col gap-2">
                            <Link href="/books/[book]/[chapter]" as="/books/con-sach-ve-nhung-nguoi-hay-ho/chuong-1" className='text-sm capitalize'>Chương 1: Người đầu tiên</Link>
                            <Link href="/books/[book]/[chapter]" as="/books/con-sach-ve-nhung-nguoi-hay-ho/chuong-2" className='text-sm capitalize'>Chương 2: Người thứ hai</Link>
                            <Link href="/books/[book]/[chapter]" as="/books/con-sach-ve-nhung-nguoi-hay-ho/chuong-3" className='text-sm capitalize'>Chương 3: Người trở lại</Link>
                            <Link href="/books/[book]/[chapter]" as="/books/con-sach-ve-nhung-nguoi-hay-ho/chuong-4" className='text-sm capitalize'>Chương 4: Người ra đi</Link>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}