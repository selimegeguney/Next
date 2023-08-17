import { getData } from "./head"

export default async function Home() {
  const data = await getData()

  console.log(data)
  return <h1>Data Fetching</h1>
}
