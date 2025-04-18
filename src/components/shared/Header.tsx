import { ToggleTheme } from "@/components/shared";
import { ChevroletIcon } from "@/icons";

export function Header() {
	return (
		<header className="flex items-center justify-between p-4 shadow-md">
			<nav>
				<ul>
					<li>asd</li>
				</ul>
			</nav>

			<ChevroletIcon className="w-full max-h-10"  />
			<div>asd</div>
			<ToggleTheme />
		</header>
	)
}
