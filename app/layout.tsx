import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin", "vietnamese"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "FormaleAI - AI Gợi Ý Outfit Hoàn Hảo",
  description: "Ứng dụng gợi ý outfit thông minh với công nghệ AI tiên tiến. Tải APK miễn phí ngay!",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi" className={inter.variable}>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  )
}
