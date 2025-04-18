import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { Footer, Header } from "@/components/shared"
import { Providers } from "@/context"

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
	description: "MVP que permite al usuario ingresar características de un auto imaginado y recibe como respuesta una predicción del consumo de gasolina basada en una regresión lineal entrenada con datos reales de autos Chevrolet",
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
					<main className="min-h-dvh">
						<Header />
						{children}
						<Footer className="" />
					</main>
				</Providers>
			</body>
		</html >
	)
}
