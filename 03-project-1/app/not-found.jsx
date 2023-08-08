import React from "react"

const NotFound = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <h2>We couldn't find the page you are looking for?</h2>
      <a href="/" style={{ textDecoration: "underline" }}>
        Go Home
      </a>
    </div>
  )
}

export default NotFound
