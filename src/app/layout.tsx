import { Footer, Header } from "@/components/shared"
import { Providers } from "@/context"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { Button } from "@/components/ui"
import { DialogGraph } from "@/components/shared/Dialog"
import { GitGraphIcon } from "lucide-react"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Predicción de Consumo de Gasolina de Autos Chevrolet",
  description:
    "MVP que permite al usuario ingresar características de un auto imaginado y recibe como respuesta una predicción del consumo de gasolina basada en una regresión lineal entrenada con datos reales de autos Chevrolet",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <Header />
          <main className="min-h-dvh">{children}</main>
          <DialogGraph>
            <Button
              variant="secondary"
              className="w-fit fixed bottom-4 right-4"
            >
              <GitGraphIcon /> Ver gráfica de predicción
            </Button>
          </DialogGraph>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
