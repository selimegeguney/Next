"use client"

const Error = () => {
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
      <h2>An Error Occured!</h2>
      <a href="/" style={{ textDecoration: "underline" }}>
        Go Home
      </a>
    </div>
  )
}

export default Error
