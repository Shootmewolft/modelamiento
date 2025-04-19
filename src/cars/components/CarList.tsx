import type { CarType } from "../models/car.model"
import { AddCarCard } from "./AddCarCard"
import { Car } from "./Car"

interface Props {
	cars: CarType[]
}

export function CarList({ cars }: Props) {
	return (
		<section className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-8">
			<AddCarCard />
			{cars.map((car) => (
				<Car key={car.id} {...car} />
			))}
		</section>
	)
}
