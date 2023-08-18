import React from "react"

export const getData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1")

  return res.json()
}

const Head = async () => {
  const data = await getData()
  console.log(data)
  return <div>Head</div>
}

export default Head
