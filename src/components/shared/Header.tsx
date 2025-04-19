import { ToggleTheme } from "@/components/shared"
import { APP_ROUTES } from "@/consts"
import { ChevroletIcon } from "@/icons"
import Link from "next/link"

export function Header() {
	return (
		<header className="flex w-full sticky top-0 bg-background mx-auto justify-between items-center px-8 py-4 shadow-md border-b border-b-accent transition-all duration-300 z-50">
			<ChevroletIcon className="max-h-10" />
			<nav>
				<ul className="flex font-bold">
					<Link
						href={APP_ROUTES.HOME}
						className="py-1 px-4 hover:bg-gray-200 rounded-md tarnsition duration-300"
					>
						Vehículos
					</Link>
					<Link
						href={APP_ROUTES.HOME}
						className="py-1 px-4 hover:bg-gray-200 rounded-md tarnsition duration-300"
					>
						Comprar
					</Link>
					<Link
						href={APP_ROUTES.HOME}
						className="py-1 px-4 hover:bg-gray-200 rounded-md tarnsition duration-300"
					>
						Postventa
					</Link>
					<Link
						href={APP_ROUTES.HOME}
						className="py-1 px-4 hover:bg-gray-200 rounded-md tarnsition duration-300"
					>
						Onstar
					</Link>
				</ul>
			</nav>

			<ToggleTheme />
		</header>
	)
}
