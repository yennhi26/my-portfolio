import Link from 'next/link'

export default function Header() {
    return (
        <div className='bg-red-800 w-1/4 h-full flex flex-col'>
            <Link href="/about">
                <a>About</a>
            </Link>
            <Link href="/my-skills">
                <a>My skills</a>
            </Link>
            <Link href="/work">
                <a>Work</a>
            </Link>
            <Link href="/contact">
                <a>Contact</a>
            </Link>
        </div>
    )
}
