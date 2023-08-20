"use client"
import React from "react"
import { usePathname } from "next/navigation"
const UsePathname = () => {
  const pathName = usePathname()
  return <div>path: {pathName}</div>
}

export default UsePathname
