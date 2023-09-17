import '../styles/Globals.scss';

export const metadata = {
  title: 'ISS (Internet Service Studio)',
  description: 'Designed by Ibn',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
