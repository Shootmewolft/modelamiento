import { ThemeProvider } from "@/context"
import type { ReactNode } from "react"

interface Props {
	children: ReactNode
}

export function Providers({ children }: Props) {
	return (
		<ThemeProvider
			attribute="class"
			defaultTheme="light"
			enableSystem
			disableTransitionOnChange
		>
			{children}
		</ThemeProvider>
	)
}
