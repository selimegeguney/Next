import Link from "next/link"

export default function Home() {
  return (
    <div>
      <Link href="/about">About</Link>
      <br />
      <Link href="/docs/post-1">Post 1</Link>
      <br />
      <Link href="/docs/post-1/post-2">Post 2</Link>
      <br />
      <Link
        className="test"
        href={{ pathname: "/about", query: { name: "Next.js", surname: "ff" } }}
        replace={false} //default is false, if true it doesnt send the page before to the history.
        prefetch={true} //default is true, it provides fetching the page before clicking
      >
        About with object
      </Link>
    </div>
  )
}
