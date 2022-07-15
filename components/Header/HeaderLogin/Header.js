import Link from 'next/link'

export default function Header() {
    return(
        <>
            <Link href="/">
                <h1 class="text-3xl font-bold text-center py-3 cursor-pointer">Just <span class="text-blue-700">CONTEST</span></h1>
            </Link>
        </>
    )
}