"use client"
import { useRouter } from "next/navigation"
import UseSearchParams from "@/components/UseSearchParams"
export default function Home() {
  const router = useRouter()

  const useRouterFunctions = () => {
    // router.push("/userouter")
    // router.push("/?search=3")
    router.replace("/?search=3")
    // router.back()
    // router.forward()
    // router.prefetch("/about")
  }

  return (
    <div>
      <button onClick={useRouterFunctions}>Use Router</button>
      <UseSearchParams />
    </div>
  )
}
