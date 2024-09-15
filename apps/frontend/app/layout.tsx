import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"
import { NotificationBar } from "@repo/src/Atoms"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
})
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
})

export const metadata: Metadata = {
  title: "Monolith",
  description: "A Monolith setup for applications",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <NotificationBar message="We are currently operated only at Bently area." />
        {children}
      </body>
    </html>
  )
}
