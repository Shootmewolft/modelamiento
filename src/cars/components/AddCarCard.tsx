import { Button, Card, CardContent } from "@/components/ui"
import { DialogCreateCar } from "./DialogCreateCar"

export function AddCarCard() {
	return (
		<DialogCreateCar>
			<Card className="h-full flex justify-center items-center text-6xl text-gray-500 bg-gray-100 hover:bg-gray-200 transition duration-300 cursor-pointer shadow-md overflow-hidden">
				<CardContent className="px-4 py-3">
					<button type="button" className="cursor-pointer">
						+
					</button>
				</CardContent>
			</Card>
		</DialogCreateCar>
	)
}
