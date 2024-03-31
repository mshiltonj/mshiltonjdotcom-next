import '@/app/(home)/globals.css'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>mshiltonj - Full Stack Web Development</title>
        <meta name="viewport" content="width=device-width" />
      </head>
      <body className=''>
        {children}
      </body>
    </html>
  )
}