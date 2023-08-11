"use client"

import Button from "../components/button"
import { useEffect } from "react"
export default function Home() {
  console.log("HomePage")
  useEffect(() => {
    console.log("useEffect")
  }, [])
  return (
    <main>
      HOME
      <Button />
    </main>
  )
}
