import { toast } from "sonner"
import { CarList } from "./components/CarList"
import { getCars } from "./services/car.service"

export async function Cars() {
	const cars = await getCars()
	if (cars instanceof Error) {
		toast.error(cars.message)

		return (
			<h2>
				Ocurrió un error para mostrar los vehículos:
				<strong>{cars.message}</strong>
			</h2>
		)
	}
	return <CarList cars={cars} />
}
