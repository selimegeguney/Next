export const metadata = {
  title: "Home",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head></head>
      <body>
        <header>Header</header>

        {children}
        <footer>Footer</footer>
      </body>
    </html>
  )
}
