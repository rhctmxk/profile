import Link from "next/link";

const Links = () => {
    return(
        <div className="flex flex-row my-10 w-full text-star space-x-10">
            <Link href={""} className="hover:underline">Email</Link>
            <Link href={""} className="hover:underline">Github</Link>
            <Link href={""} className="hover:underline">Blog</Link>
            <Link href={""} className="hover:underline">LinkedIn</Link>
        </div>
    )
}
export default Links;