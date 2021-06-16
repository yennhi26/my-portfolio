import Link from 'next/link'

export default function Work() {
    return (
        <div>
            <div>My work page</div>
            <Link href="/">
                <a>Home</a>
            </Link>
        </div>
    )
}