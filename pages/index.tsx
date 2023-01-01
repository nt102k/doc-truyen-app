import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Trang Chủ | Đọc Sách App</title>
        <meta name="description" content="Trang chủ" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Link href="/books/[book]" as="/books/con-sach-ve-nhung-nguoi-hay-ho" className='font-bold text-sm capitalize'>Cuốn sách về những người hãy ho</Link>
      </main>
    </>
  )
}
