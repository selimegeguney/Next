"use client"
import { useSearchParams } from "next/navigation"
// It forces the child component to be a client component so it should be used only if component state is too complicated so nonsense to give searchParams as props!
const UseSearchParams = () => {
  const searchParams = useSearchParams()
  const colorParam = searchParams.get("color")
  return <div>Color: {colorParam}</div>
}

export default UseSearchParams
