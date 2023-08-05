import React from "react"
import Head from "next/head"

export const metadata = {
  title: "About Us",
  description: "This is a meta description. Happy coding and have a nice day",
}

const AboutUs = () => {
  return (
    <div>
      <Head>
        <meta property="og:title" content="AboutHead" key="title" />
      </Head>
    </div>
  )
}

export default AboutUs
