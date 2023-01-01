import Router from "next/router"
import Link from "next/link"

export default function Chapter(){
    return (
        <>
            <button onClick={() => Router.back()} className="font-bold text-sm px-4 py-2 bg-gray-800 hover:bg-gray-900 text-white rounded-sm shadow-sm">Go back</button>
            <h1 className="text-lg font-bold capitalize">Cuốn sách về những người hãy ho</h1>
            <div className="flex flex-col gap-2">
                <Link href="/books/[book]/[chapter]" as="/books/con-sach-ve-nhung-nguoi-hay-ho/chuong-1" className='font-bold text-sm capitalize'>Chương 1: Người đầu tiên</Link>
                <Link href="/books/[book]/[chapter]" as="/books/con-sach-ve-nhung-nguoi-hay-ho/chuong-2" className='font-bold text-sm capitalize'>Chương 2: Người thứ hai</Link>
                <Link href="/books/[book]/[chapter]" as="/books/con-sach-ve-nhung-nguoi-hay-ho/chuong-3" className='font-bold text-sm capitalize'>Chương 3: Người trở lại</Link>
                <Link href="/books/[book]/[chapter]" as="/books/con-sach-ve-nhung-nguoi-hay-ho/chuong-4" className='font-bold text-sm capitalize'>Chương 4: Người ra đi</Link>
            </div>
        </>
    )
}