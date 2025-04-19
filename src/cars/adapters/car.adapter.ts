import type { CarType, EndpointCar } from "../models/car.model"

export const carAdapter = (car: EndpointCar) => {
	const formattedCar: CarType = {
		id: car.id,
		name: car.nombre,
		engineDisplacement: car.cilindraje_cc,
		fuelType: car.combustible,
		traction: car.traccion,
		horsepower: car.potencia_hp,
		torque: car.torque_nm,
		weight: car.peso_total_kg,
		price: car.precio_cop,
		fuelConsumption: car.consumo_gl_km,
		image: car.imagen_vehiculo,
		chart: car.imagen_grafica,
	}
	return formattedCar
}
