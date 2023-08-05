import { FaPlayCircle } from "react-icons/fa"
import Link from "next/link"

const Header = () => {
  return (
    <header>
      <div>
        <Link href="/">
          <FaPlayCircle /> NETFILMS
        </Link>
        <nav>
          <Link href="/">Movies</Link>
          <Link href="/">Series</Link>
          <Link href="/">Kids</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
